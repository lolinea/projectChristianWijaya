const products = {
    kw1 : {
        name1 : "Keep:Wonder Collection",
        name2 : "Robe mi-longue - SS25 Black",
        description : "Available September 2025",
        image : "../../Assets/KeepWonder/L O P.png"
    },
    kw2 : {
        name1 : "Keep:Wonder Collection",
        name2 : "Macrocannage Ensemble Jupe",
        description : "Available September 2025",
        image : "../../Assets/KeepWonder/O P.png"
    },
    kw3 : {
        name1 : "Keep:Wonder Collection",
        name2 : "Pleated Beige Coat for Her",
        description : "Available September 2025",
        image : "../../Assets/KeepWonder/M YSL.png"
    },
    kw4 : {
        name1 : "Keep:Wonder Collection",
        name2 : "Macrocannage Ensemble Pantalon",
        description : "Available September 2025",
        image : "../../Assets/KeepWonder/L P.png"
    },
    kw5 : {
        name1 : "Keep:Wonder Collection",
        name2 : "Robe mi-longue - SS25 Brown",
        description : "Available September 2025",
        image : "../../Assets/KeepWonder/O O P.png"
    },
    w1 : {
        name1 : "Wackey Collection",
        name2 : "Combine Dress",
        description : "Out of Stock",
        image : "../../Assets/Wackey/W 1.png"
    },
    w2 : {
        name1 : "Wackey Collection",
        name2 : "Miley Set",
        description : "Pre-order Only : Available June 2025",
        image : "../../Assets/Wackey/O W 1.png"
    },
    w3 : {
        name1 : "Wackey Collection",
        name2 : "Pico Shirt",
        description : "Pre-order Only : Available June 2025",
        image : "../../Assets/Wackey/W 2.png"
    },
    w4 : {
        name1 : "Wackey Collection",
        name2 : "Sutton Jacket Brown",
        description : "Out of Stock",
        image : "../../Assets/Wackey/O W 2.png"
    },
    w5 : {
        name1 : "Wackey Collection",
        name2 : "Brighton Soho Overall Gray",
        description : "Out of Stock",
        image : "../../Assets/Wackey/W 3.png"
    },
    wt1 : {
        name1 : "W-Tees Series",
        name2 : "WT-Ballet Shoes",
        description : "Ready Stock",
        image : "../../Assets/W-Tees/WT-Shoes F.png",
        hover: "../../Assets/W-Tees/WT-Shoes B.png"
    },
    wt2 : {
        name1 : "W-Tees Series",
        name2 : "Wonder T-Shirt",
        description : "Ready Stock",
        image : "../../Assets/W-Tees/AW W.png",
        hover: "../../Assets/W-Tees/AW WB.png"
    },
    wt3 : {
        name1 : "W-Tees Series",
        name2 : "WT-Shhh.. Tote",
        description : "Ready Stock : 5 Pieces Left",
        image : "../../Assets/W-Tees/WT-Shh Tote F.png",
        hover: "../../Assets/W-Tees/WT-Shh Tote B.png"
    },
    wt4 : {
        name1 : "W-Tees Series",
        name2 : "Angel Plays Club T-Black",
        description : "Out of Stock",
        image : "../../Assets/W-Tees/APC G F.png",
        hover: "../../Assets/W-Tees/APC G B.png"
    },
    wt5 : {
        name1 : "W-Tees Series",
        name2 : "Keep-Sleeveless",
        description : "Ready Stock : 1 Piece Left",
        image : "../../Assets/W-Tees/KS ST B.png",
        hover: "../../Assets/W-Tees/KS ST W.png"
    }
};


const moreImage = {
    kw1 : {
        "kw2" : "../../Assets/KeepWonder/O P.png",
        "kw3" : "../../Assets/KeepWonder/M YSL.png",
        "kw4" : "../../Assets/KeepWonder/L P.png"
    }, 
    kw2 : {
        "kw3" : "../../Assets/KeepWonder/M YSL.png",
        "kw4" : "../../Assets/KeepWonder/L P.png", 
        "kw5" : "../../Assets/KeepWonder/O O P.png"
    }, 
    kw3 : {
        "kw4" : "../../Assets/KeepWonder/L P.png", 
        "kw5" : "../../Assets/KeepWonder/O O P.png", 
        "kw1" : "../../Assets/KeepWonder/L O P.png"
    }, 
    kw4 : {
        "kw5" : "../../Assets/KeepWonder/O O P.png", 
        "kw1" : "../../Assets/KeepWonder/L O P.png",
        "kw2" : "../../Assets/KeepWonder/O P.png"
    }, 
    kw5 : {
        "kw1" : "../../Assets/KeepWonder/L O P.png",
        "kw2" : "../../Assets/KeepWonder/O P.png",
        "kw3" : "../../Assets/KeepWonder/M YSL.png"
    }, 
    w1 : {
        "w2" : "../../Assets/Wackey/O W 1.png",
        "w3" : "../../Assets/Wackey/W 2.png",
        "w4" : "../../Assets/Wackey/O W 2.png"
    }, 
    w2 : {
        "w3" : "../../Assets/Wackey/W 2.png",
        "w4" : "../../Assets/Wackey/O W 2.png",
        "w5" : "../../Assets/Wackey/W 3.png"
    }, 
    w3 : {
        "w4" : "../../Assets/Wackey/O W 2.png",
        "w5" : "../../Assets/Wackey/W 3.png",
        "w1" : "../../Assets/Wackey/W 1.png"
    }, 
    w4 : {
        "w5" : "../../Assets/Wackey/W 3.png",
        "w1" : "../../Assets/Wackey/W 1.png",
        "w2" : "../../Assets/Wackey/O W 1.png"
    }, 
    w5 : {
        "w1" : "../../Assets/Wackey/W 1.png",
        "w2" : "../../Assets/Wackey/O W 1.png",
        "w3" : "../../Assets/Wackey/W 2.png"
    }, 
    wt1 : {
        "wt2" : "../../Assets/W-Tees/AW W.png",
        "wt3" : "../../Assets/W-Tees/WT-Shh Tote F.png",
        "wt4" : "../../Assets/W-Tees/APC G F.png"
    }, 
    wt2 : {
        "wt3" : "../../Assets/W-Tees/WT-Shh Tote F.png",
        "wt4" : "../../Assets/W-Tees/APC G F.png",
        "wt5" : "../../Assets/W-Tees/KS ST B.png"
    },
    wt3 : {
        "wt4" : "../../Assets/W-Tees/APC G F.png",
        "wt5" : "../../Assets/W-Tees/KS ST B.png",
        "wt1" : "../../Assets/W-Tees/WT-Shoes F.png"
    },
    wt4 : {
        "wt5" : "../../Assets/W-Tees/KS ST B.png",
        "wt1" : "../../Assets/W-Tees/WT-Shoes F.png",
        "wt2" : "../../Assets/W-Tees/AW W.png"
    },
    wt5 : {
        "wt1" : "../../Assets/W-Tees/WT-Shoes F.png",
        "wt2" : "../../Assets/W-Tees/AW W.png",
        "wt3" : "../../Assets/W-Tees/WT-Shh Tote F.png"
    }
}