const currentList = [
    'GATE TO HEAVEN',
    'TOUT S’EST BIEN PASSÉ',
    'HERSELF',
    "DUNE",
    "DÉLICIEUX",
    'BENEDETTA',
    'RESPECT',
    'TITANE',
    'GIVE ME LIBERTY',
    'UNE VIE DÉMENTE',
    'PAW PATROL: DE FILM',
    'WOLFWALKERS']

const wrapWithTag = (content, tagname) => {
    return`<${tagname}>${content.toLowerCase()}</${tagname}>`;
}

document.write('<ul>')
currentList.reverse().forEach(film => document.write(wrapWithTag(film, 'li')));
document.write('</ul>')
