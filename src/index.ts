export const gqlBuilder = (array: Array<string>): string => {

    let result = array.reduce((acc, cur) => {
        const levels = cur.split(".");

        levels.reduce((object: any, currentKey: string) => {
            let newObject = object[currentKey] || {};
            object[currentKey] = newObject;
            return newObject;
        }, acc);

        return acc;
    }, {});

    return JSON.stringify(result, null, "  ").replace(/\: \{\}|\:|\"|\:|\,/g, "");
}