LogDataFile = {"logs":[
  //NEW LOG ENTRY
//NCR Details
    {NcrNo : "2024-001",
    IPA : "wip",
//Product Details
    SupplierName : "Wood Co",
    ProductNum : 142756384952,
    SalesOrderNum : 1234,
    QuantRec : 30,
    QuantDef : 22,
//Item Details
    DescriptionItem : "Long planks of wood, 2x22 length and are rectangle shaped",
    DescriptionDefect : "Wood was rotted badly and was way too flimsy to use, some were chipped a lot and had heavy damage",
//final section
    ItemMarkedNC : "qi-yes",
    QualRepName : "Shane Milton",
    Dated : "2024-01-24",
    Status : "Closed",
    link : "formEdit.html"},

  //NEW LOG ENTRY
//NCR Details
    {NcrNo : "2024-002",
    IPA : "supplier-rec-insp",
//Product Details
    SupplierName : "Super Suppliers Inc",
    ProductNum : 123485934952,
    SalesOrderNum : 1352,
    QuantRec : 50,
    QuantDef : 13,
//Item Details
    DescriptionItem : "Plastic water gun, small for children",
    DescriptionDefect : "The water guns trigger was jammed and unable to shoot out water, as well as leaking water out of the trigger causing loss of water",
//final section
    ItemMarkedNC : "qi-yes",
    QualRepName : "Zach Milton",
    Dated : "2024-03-18",
    Status : "Closed",
    link : "formEdit.html"},



    //NEW LOG ENTRY
    //NCR Details
    {NcrNo : "2024-003",
        IPA : "wip",
//Product Details
        SupplierName : "Canada Forging Inc",
        ProductNum : 294739475637,
        SalesOrderNum : 1364,
        QuantRec : 15,
        QuantDef : 9,
//Item Details
        DescriptionItem : "Metal hinges",
        DescriptionDefect : "The hinges were poorly welded causing them to be bend out of shape and unable to fit in required area, some welds were too think and get in the way",
//final section
        ItemMarkedNC : "qi-yes",
        QualRepName : "Zach Milton",
        Dated : "2024-04-01",
        Status : "Open"},


          //NEW LOG ENTRY
    //NCR Details
    {NcrNo : "2024-004",
        IPA : "wip",
//Product Details
        SupplierName : "The Dennison Industries",
        ProductNum : null,
        SalesOrderNum : null,
        QuantRec : 30,
        QuantDef : 5,
//Item Details
        DescriptionItem : "Blow up balloons",
        DescriptionDefect : "The balloons already had holes in them making them unable to be blown up",
//final section
        ItemMarkedNC : "qi-yes",
        QualRepName : "Connor Foy",
        Dated : "2024-04-09",
        Status : "Open"},


          //NCR Details
    {NcrNo : "2024-005",
        IPA : "supplier-rec-insp",
//Product Details
        SupplierName : "K-Line Manufacturing",
        ProductNum : 185940394753,
        SalesOrderNum : 1377,
        QuantRec : null,
        QuantDef : null,
//Item Details
        DescriptionItem : "Standard metal round door handles",
        DescriptionDefect : null,
//final section
        ItemMarkedNC : null,
        QualRepName : "Connor Foy",
        Dated : "2024-04-09",
        Status : "Open"},

        
         //NCR Details
    {NcrNo : "2023-001",
        IPA : "supplier-rec-insp",
//Product Details
        SupplierName : "K-Line Manufacturing",
        ProductNum : 185945628364,
        SalesOrderNum : 1379,
        QuantRec : 70,
        QuantDef : 8,
//Item Details
        DescriptionItem : "standard black pens",
        DescriptionDefect : "The ink leaked or leaks out out when trying to use",
//final section
        ItemMarkedNC : "qi-yes",
        QualRepName : "Shane Milton",
        Dated : "2023-02-03",
        Status : "Closed"},


              //NCR Details
    {NcrNo : "2023-002",
        IPA : "supplier-rec-insp",
//Product Details
        SupplierName : "Doofenshmirtz Evil Inc",
        ProductNum : 355965000364,
        SalesOrderNum : 1380,
        QuantRec : 15,
        QuantDef : 15,
//Item Details
        DescriptionItem : "Transportinator, long gun shaped with cone shaped orange barrel",
        DescriptionDefect : "Backfires whenever you try to use it",
//final section
        ItemMarkedNC : "qi-yes",
        QualRepName : "Shane Milton",
        Dated : "2023-05-16",
        Status : "Closed"},

        {NcrNo : "2023-003",
            IPA : "Supplier or Rec-Insp",
    //Product Details
            SupplierName : "Doofenshmirtz Evil Inc",
            ProductNum : 355323440364,
            SalesOrderNum : 1388,
            QuantRec : 20,
            QuantDef : 20,
    //Item Details
            DescriptionItem : "Shrinkinator resembles a megaphone",
            DescriptionDefect : "poorly accurate and cannot tell where you are shooting it",
    //final section
            ItemMarkedNC : "qi-yes",
            QualRepName : "Zach Milton",
            Dated : "2023-06-29",
            Status : "Closed"},


            {NcrNo : "2023-004",
                IPA : "supplier-rec-insp",
        //Product Details
                SupplierName : "Doofenshmirtz Evil Inc",
                ProductNum : 856373440364,
                SalesOrderNum : 1393,
                QuantRec : 25,
                QuantDef : 25,
        //Item Details
                DescriptionItem : "Animate-Inator, purple ray gun look",
                DescriptionDefect : "Cannot change back after getting animated from it",
        //final section
                ItemMarkedNC : "qi-yes",
                QualRepName : "Zach Milton",
                Dated : "2023-08-05",
                Status : "Closed"}
]}
x = JSON.stringify(LogDataFile);
localStorage.setItem('LoggedData', x);






/*'{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';*/