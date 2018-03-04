pipeline {
  agent {
    docker {
      image 'node:6-alpine'
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