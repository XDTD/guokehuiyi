#! /usr/bin/env groovy
gergich_msg = ''

pipeline {
  agent { label 'docker' }

  options {
    ansiColor("xterm")
    timeout(time: 20, unit: 'MINUTES')
  }

  stages {
    stage('Setup') {
      steps {
        script {
          sh 'docker-compose down -v'
          sh 'docker-compose build'
          sh 'docker-compose up -d test'
          sh 'docker-compose run --rm test yarn'
        }
      }
    }

    stage('Lint') {
      steps {
        script {
          sh '''#!/usr/bin/env bash
          set -o pipefail
          docker-compose run --rm test yarn lint \
            | docker-compose run --rm gergich capture eslint -
          '''
        }
      }
    }

    stage('Test') {
      steps {
        sh 'docker-compose run --rm test yarn test'
      }
      post {
        always {
          sh 'docker cp $(docker-compose ps -q test):/usr/src/app/coverage ./coverage'
          archiveArtifacts 'coverage/**'
        }
        success {
          script {
            if (env.GERRIT_EVENT_TYPE == "change-merged") {
              // publish html
              publishHTML target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'coverage',
                reportFiles: 'index.html',
                reportName: 'Coverage Report'
              ]
            }
          }
        }
      }
    }
  }

  post {
    always {
      sh 'docker-compose run --rm gergich status'
      sh 'docker-compose run --rm gergich publish'
      sh 'docker-compose kill'
      sh 'docker-compose down -v'
    }
    cleanup {
      sh 'if [ -d "coverage" ]; then rm -rf "coverage"; fi'
    }
  }
}
