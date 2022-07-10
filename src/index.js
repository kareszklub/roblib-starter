import { Robot, sleep } from "@kareszklub/roblib-client";

async function main() {
    const robot = await Robot.connect("ws://127.0.0.1:1111/ws");

    // have fun
    await robot.move(25, 25);

    await sleep(1000);

    await robot.stop();

    robot.disconnect();
}
main();
