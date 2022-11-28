import { useEffect, useState } from "react"

const useVerified = email => {
    const [isVerified, setIsVerified] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://just-buy-server.vercel.app/users/seller/isverified?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsVerified(data.isVerified)
                })
        }
    }, [email])
    return [isVerified]
}

export default useVerified;