pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from Git...'
                checkout scm
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
                curl -X POST -H 'Content-type: application/json' \
                --data '{"text":"Jenkins job *Darkroom-pipeline* build #${BUILD_NUMBER} succeeded!"}' \
                https://hooks.slack.com/services/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
            '''
        }
        failure {
            echo 'Pipeline failed!'
            sh '''
                curl -X POST -H 'Content-type: application/json' \
                --data '{"text":" Jenkins job *Darkroom-pipeline* build #${BUILD_NUMBER} failed!"}' \
                https://hooks.slack.com/services/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
            '''
        }
    }
}
