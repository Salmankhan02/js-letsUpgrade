let ask = (question,yes,no) => confirm(question)? yes() :no();

// ask("do you agree",function(){alert("you agreed")},function(){alert("you canceled")})
ask("do you agree",yes=>alert("you agreed"),no=>alert("you canceled"))