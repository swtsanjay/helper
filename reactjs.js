function DetectAllRequestIsComplete({ handleStep }) {
	let [totalRequest, setTotalRequest] = useState(0)
	let [totalResponse, setTotalResponse] = useState(0)
	useEffect(() => {
		var oldXHR = window.XMLHttpRequest;
		let tReq = 0;
		let tRes = 0;
		function newXHR() {
			var realXHR = new oldXHR();
			realXHR.addEventListener("readystatechange", function () {
				if (realXHR.readyState === 1){
					tReq = tReq + 1;
					setTotalRequest(tReq);
				}
				if (realXHR.readyState === 4 && realXHR.status === 200) {
					tRes = tRes + 1;
					setTotalResponse(tRes)
				}
			}, false);
			return realXHR;
		}
		window.XMLHttpRequest = newXHR;
	}, [])


	useEffect(() => {
		if(totalRequest!==0 && totalRequest <= totalResponse){
			// when all request is complete
		}
	}, [(totalResponse), (totalRequest)])
	
}
