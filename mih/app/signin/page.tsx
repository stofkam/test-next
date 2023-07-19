import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";

export default async function Signin() {
    return (
        <div className="stck">
            <GoogleButton />
            <div>or</div>
            <SignInForm />
        </div>
    )
}