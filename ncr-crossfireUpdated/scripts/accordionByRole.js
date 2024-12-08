console.log(currentRole)

if (currentRole = "QI") {
    document.getElementById('QIview').open = true;
    document.getElementById('Engview').open = false;
    document.getElementById('Purchview').open = false;
}

if (currentRole = "EN") {
    document.getElementById('QIview').open = false;
    document.getElementById('Engview').open = true;
    document.getElementById('Purchview').open = false;
}

if (currentRole = "PA") {
    document.getElementById('QIview').open = false;
    document.getElementById('Engview').open = false;
    document.getElementById('Purchview').open = true;
}

if (currentRole = "AD") {
    document.getElementById('QIview').open = true;
    document.getElementById('Engview').open = true;
    document.getElementById('Purchview').open = true;
}
