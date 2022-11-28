import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://just-buy-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false)
                })
        }
    }, [email, isAdminLoading])

    return [isAdmin, isAdminLoading]
}

export default useAdmin;