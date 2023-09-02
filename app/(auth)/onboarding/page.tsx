import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page(){
    const user = await currentUser();

    const userInfo = {};
    
    const userData = {
        id: user?.id,
        ObjectId:userInfo?.id,
        username: userInfo?.username || userInfo?.username,
        name: userInfo?.name || user?.firstname || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    }
    return(
        <main className="flex flex-col justify-start px-10 py-20 mx-auto max-w-3xl">
            <h1 className="head-text text-left">Onbaording</h1>
            <p className="text-light-2 mt-3 text-base-regular">Complete your profile now to use threads</p>

            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile
                    user={userData}
                    btnTitle="Continue"
                />
            </section>
        </main>
    )
}

export default Page;