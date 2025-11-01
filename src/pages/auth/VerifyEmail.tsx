import AuthLayout from "../../layout/AuthLayout.tsx";
import ImageWithSkeleton from "@/components/ui/ImageWIthSkeleton.tsx";
import VerifyEmail from "/auth/verifyEmail.svg";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import { useState} from "react";
import {useNavigate} from "react-router-dom";

export default function VerifyEmailPage() {

    const [otp, setOtp] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async () => navigate("/create-new-password");

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === "Backspace" && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        const newOtp = otp.split("");
        newOtp[index] = value;
        setOtp(newOtp.join(""));

        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const resendOtp = () => {}
    return (
        <AuthLayout>
            <AuthLayout.Left className={"w-full h-full flex items-center"} >
                <div className={"w-[350px] h-[400px] md:w-[450px] md:h-[550px] mx-auto text-white text-center mt-4 md:mt-8"}>
                    <div className={"w-[80%] flex justify-center mx-auto"}>
                        <ImageWithSkeleton src={VerifyEmail}/>
                    </div>
                    <h1 className={"text-4xl md:text-6xl font-bold my-3"}>Verify Your Email</h1>
                    <p className={"text-sm tracking-tight space-y-2"}>A password reset Code has been sent to [your email]. Check your inbox and follow the instructions to Verify Your Account. Didn’t get the email? Check spam or resend below.</p>
                </div>
            </AuthLayout.Left>
            <AuthLayout.Right className={"w-full items-center flex h-full"} >
                <div className={"w-[300px] h-[200px] md:w-[450px] md:h-[550px] mx-auto"}>
                    <Card className="w-full max-w-sm shadow-md">
                        <CardHeader>
                            <CardTitle className={"text-center"}>
                                <h1 className={"text-2xl"}>Enter the Verification Code For Verify Your Email</h1>
                            </CardTitle>
                            {/*<CardDescription>*/}
                            {/*    */}
                            {/*</CardDescription>*/}
                        </CardHeader>
                        <CardContent className="gap-2 grid">
                            <div>
                                <div className="flex justify-between space-x-2 px-2">
                                    {[...Array(6)].map((_, index) => (
                                        <input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            maxLength={1}
                                            value={otp[index] || ""}
                                            onChange={(e) => handleChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            className="w-12 h-12 border border-gray-400 rounded-md text-center text-xl font-semibold placeholder:text-transparent bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    ))}
                                </div>
                                <div className="flex items-center mt-4 gap-2 space-x-2 px-2 text-black">
                                    If you didn't receive a code.
                                    <span onClick={() => resendOtp()} className={"text-blue-800 font-bold text-xl underline"}>
                                        Resend
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button onClick={() => handleSubmit()} type="submit" className="w-full rounded-full py-5 bg-linear-to-l from-[#0170DA] to-[#002282] cursor-pointer">
                                Submit
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </AuthLayout.Right>
        </AuthLayout>
    )
}