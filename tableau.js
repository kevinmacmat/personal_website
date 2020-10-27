
// function initViz() {
//	var containerDiv = document.getElementById("tableau-viz"),
//	url = "https://public.tableau.com/views/SummarySeattlePDTerryStops/SUMMARY?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
//
//	var viz = new tableau.Viz(containerDiv, url);
//}


<!-- EDUCATION SECTION WRAPPER -->
    <div class = "education-wrapper">
      <div class = "education1">
        <h1>EDUCATION</h1>
      </div>

      <div class = "education2">
        <h3>FLATIRON SCHOOL</h3>
      </div>
      <div class = "education2-text">
       <p>
          Data Science</br>Projects:
        </p>
      </div>

      <div class = "education3">
        <h3>ST JOHNS UNIVERSITY</h3>
      </div>
      <div class = "education3-text">
        <p>
          M.S. Education</br>GPA: 3.75
        </p>
      </div>

      <div class = "education4">
        <h3>UC SAN DIEGO</h3>
      </div>
      <div class = "education4-text">
        <p>B.A. Literatures In English</br>GPA: 3.41 (Honors with Highest Distinction)</p>
      </div>
    </div> <!-- EDUCATION SECTION WRAPPER END -->



/* EDUCATION SECTION */
.education-wrapper {
  display: flex;
}

#grad-hat {
  display:flex;
  height: 200px;
  float: left;
}

.education1 {
  display: flex;
  /*background-color: rgba(21, 233, 144, 0.31);*/
  padding: 20px;
  width: 100%;
}

.education2 {
  display: flex;
  background-color: rgba(0, 163, 255, 0.51);
  padding: 20px;
  width: 100%;
}

.education2-text {
  display: flex;
  background-color: rgba(0, 163, 255, 0.11);
  padding: 20px;
  width: 100%;
}

.education3 {
  display: flex;
  background-color: rgba(162, 99, 71, 0.5);
  padding: 20px;
  width: 100%;
}

.education3-text {
  display: flex;
  background-color: rgba(162, 99, 71, 0.11);
  padding: 20px;
  width: 100%;
}

.education4 {
  display: flex;
  background-color: rgba(60, 100, 68, .5);
  padding: 20px;
  width: 100%;
}

.education4-text {
  display: flex;
  background-color: rgba(60, 100, 68, .1);
  padding: 20px;
  width: 100%;
}