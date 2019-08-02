pipeline {
  agent {
    docker {
      image 'gradle:latest'
    }

  }
  stages {
    stage('generate credential') {
	sh 'cd pivotal_tracker'
    }
  }
}
