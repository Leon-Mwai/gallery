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
