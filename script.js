function setAlarm() {
	const alarmTime = document.getElementById("time").value;
	const now = new Date();
	const alarm = new Date(alarmTime);

	if (alarm < now) {
		alert("Invalid time");
		return;
	}

	const timeToAlarm = alarm - now;
	setTimeout(() => {
		alert("Alarm!");
		document.getElementById("alarmMessage").innerHTML = "Time's up!";
	}, timeToAlarm);
}

function clearAlarm() {
	document.getElementById("time").value = "";
	document.getElementById("alarmMessage").innerHTML = "";
}
