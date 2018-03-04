pipeline {
  agent {
    docker {
      image 'node:8'
    }
    
  }
  stages {
    stage('Test') {
      agent {
        node {
          label 'Node'
        }
        
      }
      steps {
        sh 'npm run test'
      }
    }
  }
}