import { Robot, sleep } from "@kareszklub/roblib-client-node";

async function main() {
    const robot = await Robot.connect("roland:1110");

    // have fun
    await robot.drive(25, 25);

    await sleep(1000);

    await robot.drive(0, 0);

    robot.disconnect();
}
main();
