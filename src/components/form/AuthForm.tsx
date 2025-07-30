'use client'
import { useAuth } from "@/context/AuthContext";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { phoneValidate } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { User } from "@/types/user.type";

function AuthForm() {
    const {login} = useAuth()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError } = useForm<phoneValidate>({
        resolver: zodResolver(phoneValidate)
    })
    const onSumbit = async (data : phoneValidate) => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
            const result = await response.json();
            if (result) {
                const res = result.results[0]
                const userData: User = {
                    name: {
                        first:  res.name.first,
                        last: res.name.last
                    },
                    email: res.email,
                    phone: data.phone,
                    picture: {
                        large: res.picture.large,
                    }
                }
                login(userData)
                router.push("/dashboard")
            } else {
                setError("phone", {
                    type: "manual",
                    message: "error for get user"
                })
            }
        } catch (error) {
            setError("phone", {
                type: "manual",
                message: "Network failed"
            })
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <form className="mt-5 w-full" onSubmit={handleSubmit(onSumbit)} >
                <Input
                    {...register('phone')}
                    label="phone number"
                    placeholder="09138048416"
                    error={errors.phone?.message}
                    maxLength={11}
                    className=" pl-14 p-3 w-full rounded-md mt-1"
                />
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="mt-3 w-full"
                    variant="primary"
                >
                    {isLoading ? "loading" : "login"}
                </Button>
            </form>
        </> 
    );
}

export default AuthForm;