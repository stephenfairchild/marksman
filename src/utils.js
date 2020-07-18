const fs = require("fs").promises;
const path = require("path");

const getFileNames = async function (dir) {
    let files = await fs.readdir(dir);

    files = await Promise.all(
        files.map(async file => {
            const filePath = path.join(dir, file);
            const stats = await fs.stat(filePath);
            if (stats.isDirectory()) {
                return getFileNames(filePath);
            } else if (stats.isFile()) {
                const content = await fs.readFile(
                    filePath,
                    "utf-8",
                    (err, data) => {
                        if (err) {
                            console.error(err);
                            return;
                        }

                        return data;
                    }
                );

                return {
                    name: filePath,
                    content: content
                };
            }
        })
    );

    return files;
};

exports.getFileNames = getFileNames;
