pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from Git...'
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/master']],
                          userRemoteConfigs: [[url: 'https://github.com/Leon-Mwai/gallery']]])
            }
        }

        stage('Deploy/Update Site') {
            steps {
                echo 'Simulating deploy/update site...'
                
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
            sh '''
                curl -X POST -H "Content-type: application/json" \
                --data '{"text":"Jenkins job *Darkroom-pipeline* build #'"${BUILD_NUMBER}"' succeeded! 🔗 <'"${BUILD_URL}"'|View Job>"}' \
                https://hooks.slack.com/services/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
            '''
        }
        failure {
            echo 'Pipeline failed!'
            sh '''
                curl -X POST -H "Content-type: application/json" \
                --data '{"text":"Jenkins job *Darkroom-pipeline* build #'"${BUILD_NUMBER}"' FAILED! 🔗 <'"${BUILD_URL}"'|View Job>"}' \
                https://hooks.slack.com/services/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
            '''
        }
    }
}

