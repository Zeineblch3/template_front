# npm i express
permet de créer facilement un serveur HTTP et de définir des routes.

# npm i nodemon --save-dev

# npm i -D nodemon
surveiller les fichiers React et le serveur. À chaque modification, il reconstruit React puis redémarre Express.
    "start-dev": "nodemon --watch server.cjs --watch src --watch index.html --ext js,jsx,css,html,cjs --exec \"npm run build && node server.cjs\""

# docker build -t signup .
Construire une image docker nommée signup à partir du Dockerfile

# docker run --name signup-app -p 4000:4000 signup
Créer et démarrer un conteneur à partir d'une image, relier le port 4000 de l'ordinateur au port 4000 du conteneur.

# docker rm signup-app -f
Pour arréter et supprimer le conteneur.

# docker exec -it signup-app bash
exec : exécute une commande dans un conteneur déjà démarré.
-it : permet de saisir des commandes interactivement.
-t : ouvre un terminal.
bash : ouvre le terminal Bash à l'intérieur du conteneur.

# dockerignore 
node_modules
dockerfile
package-lock.json
dist
.git
.env

On refait le build de l'image, la création du conteneur et son éxecution.
### Note : Dockerfile n’existe plus ,node_modules et package-lock.json... ne sont pas copiés mais générés par RUN npm install

# dockerfile : CMD ["npm","run","start-dev"]
utiliser Nodemon pour surveiller les fichiers et relancer le serveur après les modifications.

### Note : Actuellement, le script surveille bien src, mais Docker a copié ces fichiers dans l'image lors du build. Les modifications sur ton ordinateur ne changent donc pas leur copie dans le conteneur.

# Connecter ton projet au conteneur 
Arreter et Supprimer le conteneur et relancer avec un volume

# "start-dev": "nodemon --legacy-watch server.cjs --watch src --watch index.html --ext js,jsx,css,html,cjs --exec \"npm run build && node server.cjs\""
L'option --legacy-watch (ou -L) force Nodemon à vérifier périodiquement les fichiers.

# docker run --name signup-app --volume "C:\Users\Lenovo\Desktop\tp_react - Copie\template_front:/app:ro" --volume /app/node_modules --volume /app/dist -d -p 4000:4000 signup
-v "chemin:/app" partage le projet avec le conteneur en autorisant les modifications.
-v /app/node_modules préserve les dépendances installées dans le conteneur.
-v /app/dist préserve les fichiers compilés dans le conteneur.
On sépare les volumes pour appliquer des règles différentes : protéger les sources avec (:ro), garder les dépendances dans node_modules et permettre à Vite d'écrire les fichiers compilés dans dist.

# docker logs -f signup-app
Vérifie les logs : les modifications sont bien changés dans le conteneur.

# docker-compose.yml
pour éviter de retaper toute la commande docker run, on définit les volumes, les ports et le démarrage de Nodemon dans un seul fichier.

# .env
PORT=4000 : port utilisé par le serveur Node.js.
NODE_ENV=development : indique que l'application fonctionne en mode développement.
DB_HOST=12345 : valeur de démonstration pour l'hôte de la base de données.

# Connecter ton projet au conteneur 
Arreter et Supprimer le conteneur et relancer avec un volume

# docker run --name signup-app --volume "C:\Users\Lenovo\Desktop\tp_react - Copie\template_front:/app:ro" --volume /app/node_modules --volume /app/dist --env-file ./.env -d -p 4000:4000 signup
On relance le conteneur en lui passant le fichier contenant les variables d'environnement.

# docker exec -it signup-app bash
Consulter les variables d’environnement du container.

# env_file: - ./.env
On ajoute env_file dans le service signup-app pour transmettre les variables du fichier .env au conteneur. 

# docker-compose up -d
On supprime le conteneur et applique les changements de docker-compose.yml, notamment env_file: ./.env, et démarre le conteneur.
- -d : lance en arrière-plan.
- --build : ajoute cette option si tu as modifié le Dockerfile ou si tu dois reconstruire l'image.

cette commande affichera :
✔ Network... Created
✔ Container signup-app Started 

# docker-compose.dev.yml et docker-compose.prod.yml :
Configurer deux environnements Docker distincts pour la même application React + Node.js :
- Development : Nodemon surveille les modifications et reconstruit React.
- Production : l'application démarre normalement, sans Nodemon.

# docker compose -f docker-compose.dev.yml up -d
Pour lancer le container dans l’environnement de développement.
root@dc2e8998d75e:/app# printenv
NODE_ENV=development

# docker compose -f docker-compose.dev.yml down  
Container signup-app  Removed  
Network template_front_default Removed 

# docker compose -f docker-compose.prod.yml up -d
NODE_ENV=production
root@9ff34e3cb944:/app# printenv

# docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
Arrêter le conteneur existant
Lancer le conteneur en production avec les deux fichiers docker-compose.yml et docker-compose.prod.yml
✔ Image signup                   Built
✔ Network template_front_default Created
✔ Container signup-app           Started  

# dockerignore : docker-compose*
