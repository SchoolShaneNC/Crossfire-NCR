function SubmitBoolQI(){
    let validationPass=true

    //QI   
    var dangerProdNum = document.getElementById("danger-prod-num")                    .style.visibility
    var dangerSalesOrdNum = document.getElementById("danger-sales-ord-num")           .style.visibility
    var dangerQtyReceive = document.getElementById("danger-qty-receive")              .style.visibility
    var dangerQtyDefective = document.getElementById("danger-qty-defective")          .style.visibility
    var dangerItemDescription = document.getElementById("danger-item-description")    .style.visibility
    var dangerDefectDescription = document.getElementById("danger-defect-description").style.visibility

    const validations = [
        dangerProdNum,
        dangerSalesOrdNum,
        dangerQtyReceive,
        dangerQtyDefective,
        dangerItemDescription,
        dangerDefectDescription,
    ]

    let result = validations.filter((isVisible) => isVisible == "visible")

    if(result.length > 0){
        validationPass = false
    }
    
    return validationPass
}

function SubmitBoolEN(){
    let validationPass=true
    
    //EN
    var dangerDisposition = document.getElementById("danger-eng-disposition").style.visibility
    var dangerOrgRevName = document.getElementById("danger-org-rev-name")    .style.visibility
    var dangerOrgRevDate = document.getElementById("danger-org-rev-date")    .style.visibility
    var dangerOrgRevNum = document.getElementById("danger-org-rev-num")      .style.visibility
    var dangerUpdRevDate = document.getElementById("danger-upd-rev-date")    .style.visibility
    var dangerUpdRevNum = document.getElementById("danger-upd-rev-num")      .style.visibility

    const validations = [
        dangerDisposition,
        dangerOrgRevName,
        dangerOrgRevDate,
        dangerOrgRevNum,
        dangerUpdRevDate,
        dangerUpdRevNum,
    ]

    let result = validations.filter((isVisible) => isVisible == "visible")

    if(result.length > 0){
        validationPass = false
    }

    return validationPass
}

function SubmitBoolPA(){
    let validationPass=true
    
    //PA
    var dangerCarNum = document.getElementById("danger-car-num").style.visibility
    var dangerCarType = document.getElementById("danger-car-type")       .style.visibility
    var dangerCarDate = document.getElementById("danger-car-date")       .style.visibility
    var dangerOpName = document.getElementById("danger-op-name")         .style.visibility
    var dangerOpDate = document.getElementById("danger-op-date")         .style.visibility
    var dangerinpsName = document.getElementById("danger-inspector-name").style.visibility
    var dangerinspDate = document.getElementById("danger-inspect-date")  .style.visibility
    var dangerQualName = document.getElementById("danger-quality-name")  .style.visibility
    var dangerQualDate = document.getElementById("danger-quality-date")  .style.visibility

    const validations = [
        dangerCarNum,
        dangerCarType,
        dangerCarDate,
        dangerOpName,
        dangerOpDate,
        dangerinpsName,
        dangerinspDate,
        dangerQualName,
        dangerQualDate
    ]

    let result = validations.filter((isVisible) => isVisible == "visible")

    if(result.length > 0){
        validationPass = false
    }

    return validationPass
}