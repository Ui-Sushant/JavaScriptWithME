// there are many api like github api random user api 
// there is one json formater website in which we can add data fro the api and we can format and beutyfy it 
// we can convert it to tree then we can know there is object then there is info as objecte and result as array
//array has only one elemet so we have to accesit by 0 index then we need further drilling to access the name and other things 
// it may take even days to read and understand the apis but the way is this you should understand and practise this way

//API REQUEST
// befeore fectch XMLHTTPS was used 

//The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

const requestUrl = ''
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)