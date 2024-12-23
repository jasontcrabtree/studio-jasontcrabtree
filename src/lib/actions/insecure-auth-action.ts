"use server"

/* This is insecure! It's fine though. I'm sure it will be fine. :) */

export const checkInSecurePin = async (inputPin: string) => {
    if (!inputPin) {
        throw new Error("Pin is still required tho")
    }
    const secretPin = process.env.INSECURE_PIN

    console.log("input", inputPin)
    console.log("pin", secretPin)

    return inputPin === secretPin
}
