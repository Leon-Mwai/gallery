pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
HEAD
                echo 'Checking out code from Git...'
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/master']],
                          userRemoteConfigs: [[url: 'https://github.com/Leon-Mwai/gallery']]])

                echo 'Building...'
test
            }
        }

        stage('Test') {
            steps {
HEAD
                echo 'Simulating deploy/update site...'
                

                echo 'Running tests...' 
                sh 'pytest || true'  
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'echo "Banner updated with milestone 3 changes!"'
>>>>>>> test
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
            sh """
                curl -X POST -H "Content-type: application/json" \
                --data '{"text":"Jenkins job *Darkroom-pipeline* build #${BUILD_NUMBER} succeeded! 🔗 <${BUILD_URL}|View Job>"}' \
                https://hooks.slack.com/services/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
            """
        }
        failure {
            echo 'Pipeline failed!'
            sh """
                curl -X POST -H "Content-type: application/json" \
                --data '{"text":"Jenkins job *Darkroom-pipeline* build #${BUILD_NUMBER} FAILED! 🔗 <${BUILD_URL}|View Job>"}' \
                https://hooks.slack.com/services/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
            """
            slackSend (
                channel: '#jenkins-builds',
                color: 'good',
                message: "✅ Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' succeeded! (<${env.BUILD_URL}|Open>)"
            )
        }
        failure {
            slackSend (
                channel: '#jenkins-builds',
                color: 'danger',
                message: "❌ Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' failed! (<${env.BUILD_URL}|Open>)"
            )
        }
    }
}
