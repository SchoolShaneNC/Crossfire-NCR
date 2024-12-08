console.log(currentRole);

switch (currentRole) {
    case "QI":
        document.getElementById('QIview').open = true;
        document.getElementById('Engview').open = false;
        document.getElementById('Purchview').open = false;
        break;
    case "EN":
        document.getElementById('QIview').open = false;
        document.getElementById('Engview').open = true;
        document.getElementById('Purchview').open = false;
        break;
    case "PA":
        document.getElementById('QIview').open = false;
        document.getElementById('Engview').open = false;
        document.getElementById('Purchview').open = true;
        break;
    case "AD":
        document.getElementById('QIview').open = true;
        document.getElementById('Engview').open = true;
        document.getElementById('Purchview').open = true;
        break;
    default:
        console.error("Invalid role: " + currentRole);
}