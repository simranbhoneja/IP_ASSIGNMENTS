var form = document.getElementById("cpa-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let fname = document.getElementById("name").value;
  let email = document.getElementById("email_id").value;
  let mobile_number = document.getElementById("mobile_number").value;
  let quantity = document.getElementById("quantity").value;
  let address = document.getElementById("address").value;
  let size = document.getElementById("size").value;
  let color = document.getElementById("color").value;
  let tagline = document.getElementById("tagline").value;
  let today = new Date();
  let date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  if (fname === "") {
    alert("Enter name");
    return;
  }

  if (!/^[a-zA-Z]*$/g.test(fname)) {
    alert("Name must have alphabets only");

    return;
  }
  if (email === "") {
    alert("Enter email");
    return;
  }
  if (mobile_number === "") {
    alert("Enter number");
    return;
  }
  var phoneno = /^\d{10}$/;
  if (!mobile_number.match(phoneno)) {
    alert("Phone number must have 10 digits only");
    return;
  }

  receipt =
    `Thankyou! \nYour order has been placed successfully! \nHere's your receipt\nTagline: ${tagline} \nName:  ${fname} \nPhoneNumber: ${mobile_number} \nEmail Id: ${email} \nAddress: ${address}  \nSize: ${size} \nColor: ${color} \nQuantity: ${quantity} \nAmount: ₹ 700 \nDate of recipt: ${date}`;
  alert(receipt);
}
);
