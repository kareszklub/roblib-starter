import { init, move } from "@kris030/roblib";

await init("<robot ip>"); // change to ip of the robot

// have fun
move({ left: 25, right: 25 });
