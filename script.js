const API_URL = "https://script.google.com/macros/s/AKfycbzGjacXoI0tuLRKyTBzpOPtgLelrwo3Mb2mwN7ltSkmiv0lwphtgQoMKuAF1RkQ5xFRtg/exec";

// ---------- TAB SWITCH ----------

function showTab(tab, button){

    document.querySelectorAll(".tab-content").forEach(tab=>{
        tab.classList.remove("active");
    });

    document.querySelectorAll(".tab-btn").forEach(btn=>{
        btn.classList.remove("active");
    });

    document.getElementById(tab).classList.add("active");
    button.classList.add("active");

}

// ---------- CURRENT DATE ----------

function today(){

    return new Date().toLocaleDateString("en-GB");

}

function timeNow(){

    return new Date().toLocaleTimeString();

}

// ---------- SAVE EXPENSE ----------

document.getElementById("expenseForm").addEventListener("submit",async function(e){

    e.preventDefault();

    const data={

        type:"expense",

        date:today(),

        time:timeNow(),

        category:document.getElementById("category").value,

        amount:document.getElementById("amount").value,

        payment:document.getElementById("payment").value,

        description:document.getElementById("description").value

    };

    const response=await fetch(API_URL,{

        method:"POST",

        body:JSON.stringify(data)

    });

    const result=await response.json();

    if(result.success){

        alert("Expense Saved Successfully ✅");

        this.reset();

    }

});

// ---------- SAVE EVENT ----------

document.getElementById("eventForm").addEventListener("submit",async function(e){

    e.preventDefault();

    const data={

        type:"event",

        date:today(),

        time:timeNow(),

        title:document.getElementById("eventTitle").value,

        note:document.getElementById("eventNote").value

    };

    const response=await fetch(API_URL,{

        method:"POST",

        body:JSON.stringify(data)

    });

    const result=await response.json();

    if(result.success){

        alert("Event Saved Successfully ✅");

        this.reset();

    }

});