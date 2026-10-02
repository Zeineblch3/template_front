import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

function Signup() {
  return (
    <div>
      <Input label="Email" placeholder="entrez votre email" type="email" name="email"/>
      <Button type text="signup"/>
    </div>
  )
}

export default Signup
