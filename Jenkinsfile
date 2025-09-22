pipeline {
    agent any

    environment {
        SLACK_WEBHOOK = 'https://hooks.slack.com/services/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'
    }

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
            sh """
            curl -X POST -H 'Content-type: application/json' \
            --data '{"text":"Jenkins job *${JOB_NAME}* build #${BUILD_NUMBER} succeeded! Link: ${BUILD_URL}"}' \
            ${SLACK_WEBHOOK}
            """
        }

        failure {
            echo 'Pipeline failed!'
            sh """
            curl -X POST -H 'Content-type: application/json' \
            --data '{"text":"Jenkins job *${JOB_NAME}* build #${BUILD_NUMBER} failed! Link: ${BUILD_URL}"}' \
            ${SLACK_WEBHOOK}
            """
        }
    }
}
