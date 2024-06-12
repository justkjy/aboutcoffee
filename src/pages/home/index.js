import CoffeeList from "../../components/CoffeeList";
import Header from "../../components/Header";
import Profile from "../../components/Profile";

export default function Home() {
    return (
        <div>
            <Header />
            <Profile />
            <CoffeeList />
        </div>
    );
}