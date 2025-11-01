import AuthLayout from "../../layout/AuthLayout.tsx";
import ImageWithSkeleton from "@/components/ui/ImageWIthSkeleton.tsx";
import forgotPassword from "/auth/forgotpassword.svg";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import { useNavigate} from "react-router-dom";
import {Key} from "lucide-react";

export default function ResetPasswordPage() {
    const navigate = useNavigate();

    const handleSubmit = async () => navigate("/sign-in");

    return (
        <AuthLayout>
            <AuthLayout.Left className={"w-full h-full flex items-center"} >
                <div className={"w-[350px] h-[400px] md:w-[450px] md:h-[550px] mx-auto text-white text-center mt-4 md:mt-8"}>
                    <div className={"w-[80%] flex justify-center mx-auto"}>
                        <ImageWithSkeleton src={forgotPassword}/>
                    </div>
                    <h1 className={"text-4xl md:text-6xl font-bold my-3"}>Forgot Password</h1>
                    <p className={"text-sm tracking-tight space-y-2"}>Enter your registered email address, and we’ll send you a secure link to reset your password and regain access to your Lunq account.</p>
                </div>
            </AuthLayout.Left>
            <AuthLayout.Right className={"w-full items-center flex h-full"} >
                <div className={"w-[300px] h-[200px] md:w-[450px] md:h-[550px] mx-auto"}>
                    <Card className="w-full max-w-sm shadow-md">
                        <CardHeader>
                            <CardTitle className={"text-center"}>
                                <div className={"p-2 rounded-full bg-[#ECFDF3] w-[50px] h-[50px] mx-auto flex justify-center items-center shadow-md"}>
                                    <div className={"rounded-full bg-[#D1FADF] mx-auto w-[35px] h-[35px] p-1 flex justify-center items-center"}>
                                        <Key color={"#039855"} />
                                    </div>
                                </div>
                            </CardTitle>
                            <CardDescription>
                                <div className={"w-full h-full text-center"}>
                                    <h1 className={"text-xl font-semibold text-gray-900"}>Password reset</h1>
                                    <p className={"text-sm mt-2"}>Your password has been successfully reset. You can now log in to your account securely. Click the button below to continue. Welcome back!</p>
                                </div>
                            </CardDescription>
                            {/*<CardAction>*/}
                            {/*    <Button variant="link">Sign Up</Button>*/}
                            {/*</CardAction>*/}
                        </CardHeader>
                        <CardFooter className="flex-col gap-2">
                            <Button onClick={() => handleSubmit()} type="submit" className="w-full rounded-full py-5 bg-linear-to-l from-[#0170DA] to-[#002282] cursor-pointer">
                                Continue
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </AuthLayout.Right>
        </AuthLayout>
    )
}