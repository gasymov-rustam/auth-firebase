import { useRequireAuth } from "../hooks/useRequireAuth"


export default function Dashboard() {
    const {loading, user, signOut} = useRequireAuth()

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (!user) {
        return <></>
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>{user.email}</h2>
            <button onClick={() => signOut()}>Exit!</button>
        </div>
    )
}
