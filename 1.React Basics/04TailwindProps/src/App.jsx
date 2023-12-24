import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center sm:flex-row sm:mx-auto">
        <Card
          cardName="Pratik Bhujbal"
          btnText="View Pratik"
          imgSrc="https://cdn4.sharechat.com/img_851848_365362ae_1682882849265_sc.jpg?tenant=sc&referrer=tag-service&f=265_sc.jpg"
        />
        <Card
          cardName="Rahul Chavan"
          btnText="View Rahul"
          imgSrc="https://myquotesclub.com/wp-content/uploads/2019/07/Stylish-Boy-WhatsApp-Profile-Pics.jpg"
        />
        <Card
          cardName="Sayali Takalkar"
          btnText="View Sayali"
          imgSrc="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />
      </div>
    </>
  );
}

export default App;
