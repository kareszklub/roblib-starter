import { Robot, sleep } from "@kareszklub/roblib-client";

Robot.connect("ws://127.0.0.1:8080/ws").then(async robot => {
    // have fun
    await robot.move(25, 25);

    await sleep(1000);

    await robot.stop();

    robot.disconnect();
});
