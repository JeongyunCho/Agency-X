const memberInfo = document.querySelector('#aboutUs').querySelectorAll('p');

function setMemberInfo(data){
    memberInfo[0].textContent = `Hello! My name is ${data.membername[0]} - ${data.memberrole[0]} of the Site`;
    memberInfo[1].textContent = data.memberwords[0];
    memberInfo[2].textContent = `Hello! My name is ${data.membername[1]} - ${data.memberrole[1]} of the Site`;
    memberInfo[3].textContent = data.memberwords[1];
}


setMemberInfo(memberData);