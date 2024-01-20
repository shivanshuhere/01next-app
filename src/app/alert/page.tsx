"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { log } from "console";
import { useState } from "react";

function page() {
    const [theme, setTheme] = useState(false);
    const handleToggle = () => {
        setTheme((prev) => !prev);
        console.log("switch toggle", theme);
    };
    const [life, setLife] = useState(true);

    const handleCancle = () => {
        alert("Don't be a pussy, i am not gonna take your lowlife 😈");
    };

    const hadleDelete = () => {
        alert("Welcome to hell, nigga 🎃");
    };

    return (
        <div
            className={`${
                theme ? "bg-black" : "bg-white"
            } h-screen flex flex-col justify-center items-center`}
        >
            <Switch
                className="absolute top-6 right-8"
                onClick={() => handleToggle()}
            />
            <h1
                className={` text-4xl font-sans  mb-4 
            ${theme ? "text-white" : "text-black"}
            `}
            >
                Wanna know something ?
            </h1>

            <AlertDialog>
                <AlertDialogTrigger
                    className={`${
                        theme ? "bg-white text-black" : "bg-black text-white"
                    }  rounded-sm px-4 py-1 uppercase `}
                >
                    Click me 🙋
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you sure about your life?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your life and remove your data from this
                            universe.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={handleCancle}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={hadleDelete}>
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default page;
