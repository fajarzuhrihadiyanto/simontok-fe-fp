import {LeftSidebar} from "../components/LeftSidebar";
import {Content} from "../components/Dashboard/Content";
import {RightSidebar} from "../components/RightSidebar";
import {Container} from "../components/Dashboard/Container";

export default function Dashboard() {
    return (
        <>
            <LeftSidebar />
            <Content>
                <h1 className="text-lg font-bold">Dashboard</h1>
                <Container>
                    <p></p>
                </Container>
            </Content>
            <RightSidebar />
        </>
    )
}
