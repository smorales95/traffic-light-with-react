import React, { useState } from "react";
import "/workspace/traffic-light-with-react/src/styles/index.scss";

export function Semaforo() {
	let [luzr, setLuz1] = useState("Apagado");
	let [luzn, setLuz2] = useState("Apagado");
	let [luzv, setLuz3] = useState("Apagado");

	function cambior() {
		let rojo = document.getElementById("red");
		let nara = document.getElementById("ora");
		let verde = document.getElementById("green");

		if (luzr == "Apagado" && luzn == "Apagado" && luzv == "Apagado") {
			setLuz1("Ensendido");
			rojo.style.boxShadow = "0px 0px 50px 20px white";
		} else if (
			luzr == "Apagado" ||
			luzn == "Ensendido" ||
			luzv == "Ensendido"
		) {
			setLuz1("Ensendido");
			setLuz2("Apagado");
			setLuz3("Apagado");
			rojo.style.boxShadow = "0px 0px 50px 20px white";
			verde.style = "none";
			nara.style = "none";
		} else {
			setLuz1("Apagado");
			setLuz2("Apagado");
			setLuz3("Apagado");
			rojo.style = "none";
		}
	}

	function cambion() {
		let rojo = document.getElementById("red");
		let nara = document.getElementById("ora");
		let verde = document.getElementById("green");

		if (luzr == "Apagado" && luzn == "Apagado" && luzv == "Apagado") {
			setLuz2("Ensendido");

			nara.style.boxShadow = "0px 0px 50px 20px white";
		} else if (
			luzr == "Ensendido" ||
			luzn == "Apagado" ||
			luzv == "Ensendido"
		) {
			setLuz1("Apagado");
			setLuz2("Ensendido");
			setLuz3("Apagado");
			nara.style.boxShadow = "0px 0px 50px 20px white";
			verde.style = "none";
			rojo.style = "none";
		} else {
			setLuz1("Apagado");
			setLuz2("Apagado");
			setLuz3("Apagado");
			nara.style.boxShadow = "none";
		}
	}

	function cambiov() {
		let rojo = document.getElementById("red");
		let nara = document.getElementById("ora");
		let verde = document.getElementById("green");

		if (luzr == "Apagado" && luzn == "Apagado" && luzv == "Apagado") {
			setLuz3("Ensendido");

			verde.style.boxShadow = "0px 0px 50px 20px white";
		} else if (
			luzr == "Ensendido" ||
			luzn == "Ensendido" ||
			luzv == "Apagado"
		) {
			setLuz1("Apagado");
			setLuz2("Apagado");
			setLuz3("Ensendido");

			verde.style.boxShadow = "0px 0px 50px 20px white";
			nara.style = "none";
			rojo.style = "none";
		} else {
			setLuz1("Apagado");
			setLuz2("Apagado");
			setLuz3("Apagado");
			verde.style.boxShadow = "none";
		}
	}

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-2">
					<div className="palo" />

					<div className="marco">
						<div></div>
						<div id="red" className="rojo" onClick={cambior}></div>
						<div
							id="ora"
							className="naranja"
							onClick={cambion}></div>
						<div
							id="green"
							className="verde"
							onClick={cambiov}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
