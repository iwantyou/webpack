pipeline {
  agent {
    node {
      label 'node'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''npm install
npm run build'''
      }
    }

    stage('test') {
      steps {
        sh 'ls -a '
      }
    }

  }
  environment {
    name = 'duzb'
  }
}