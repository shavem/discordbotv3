/*
  GET HITLIST FIELDS

  This is a function that returns an array of objects for the fields of a hitlist for a hitlist request embed.

*/

function getHitlistFields(container) {
    const hitlistFields = [];
    if (container.vars.targets.length === 0) {
        hitlistFields.push({
            name: "No targets",
            value: "We are currently at peace.",
            inline: true
        })
        return hitlistFields;
    }

    let num = 1;
    for (let i = 0; i < container.vars.targets.length; i++) {
        let target = container.vars.targets[i];
        let double = false;
        for (let j = 0; j < hitlistFields.length; j++) {
            if (container.vars.targets[i - 1].name !== target.name) {
                num = 1;
            }
            if (hitlistFields[j].name === target.name) {
                num++;
                hitlistFields[j].value += `\n${num} - ${target.message}`;
                double = true;
                break;
            }
        }
        if (!double) {
            hitlistFields.push({
                name: target.name,
                value: `1 - ${target.message}`,
                inline: true
            })
        }
    }
    return hitlistFields;
}

module.exports = {getHitlistFields};