import { glob } from "glob";
import Mocha from "mocha";

const mocha = new Mocha({
    reporter: "allure-mocha",
    reporterOptions: {
        resultsDir: "allure-results",
    },
});

glob.sync("test/scenarios/**/*.spec.js").forEach((file) => mocha.addFile(file));

await mocha.loadFilesAsync();
mocha.run((failures) => process.exit(failures));
