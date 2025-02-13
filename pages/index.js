import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const createLove = () => {
            const love = document.createElement("div");
            love.className = "love-animation";
            love.style.left = Math.random() * 100 + "vw";
            love.style.animationDuration = Math.random() * 2 + 3 + "s";
            document.body.appendChild(love);

            setTimeout(() => {
                love.remove();
            }, 5000);
        };

        setInterval(createLove, 500);
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "white" }}>Happy Valentine's Day!</h1>
        </div>
    );
};

export default Home;
