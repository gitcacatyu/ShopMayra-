function getUsers(){return JSON.parse(localStorage.getItem('users')||'{}');}
function registerUser(u,p){let users=getUsers(); if(users[u])return false; users[u]={password:p,projects:{},texts:{},drawings:{}}; localStorage.setItem('users',JSON.stringify(users)); return true;}
function loginUser(u,p){let users=getUsers(); if(users[u]&&users[u].password===p){localStorage.setItem('currentUser',u); return true;} return false;}
function getCurrentUser(){return localStorage.getItem('currentUser');}
function requireLogin(){if(!getCurrentUser()){alert('Faça login!');location.href='login.html';}}
function logout(){localStorage.removeItem('currentUser');location.href='index.html';}
function saveUserText(u,title,content){let users=getUsers(); users[u].texts[title]=content; localStorage.setItem('users',JSON.stringify(users));}
function loadUserTexts(u){let users=getUsers(); return users[u]?.texts||{};}
function downloadFile(name,content){const a=document.createElement('a'); a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(content); a.download=name; a.click();}
function saveUserProject(u,name,code){let users=getUsers(); users[u].projects[name]={name:name,code:code}; localStorage.setItem('users',JSON.stringify(users));}
function loadUserProjects(u){let users=getUsers(); return Object.values(users[u]?.projects||{});}
function saveUserDraw(u,data){let users=getUsers(); users[u].drawings[Date.now()]=data; localStorage.setItem('users',JSON.stringify(users));}
function loadUserDraws(u){let users=getUsers(); return users[u]?.drawings||{};}
