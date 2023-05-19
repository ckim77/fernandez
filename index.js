function newImage(src, left, bottom) {
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
}

function newItem(src, left, bottom) {
    let item = document.createElement('img');
    item.src = src;
    item.style.position = 'fixed';
    item.style.left = left;
    item.style.bottom = bottom;
    document.body.append(item);

    item.addEventListener('dblclick', function() {
        item.remove();
    });
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

/*

let sword = document.createElement('img');
sword.src = 'assets/sword.png';
sword.style.position = 'fixed';
sword.style.left = '500px';
sword.style.bottom = '405px';
document.body.append(sword);

sword.addEventListener('click', function() {
    sword.remove();
});

*/


/*
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
*/