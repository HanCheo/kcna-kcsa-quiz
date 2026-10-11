window.QUIZ_BANKS=window.QUIZ_BANKS||{};window.QUIZ_BANKS.local=[
  {
    "id": "local-001",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container Runtimes",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes deployment, how does containerd differ from the Docker Engine?",
      "ko": "Kubernetes 배포 환경에서 containerd는 Docker Engine과 어떻게 다른가요?"
    },
    "choices": {
      "en": [
        "containerd is a container runtime that Docker Engine includes, providing both a container runtime and additional features, such as image building.",
        "Docker Engine is a container runtime designed for high scalability and availability, whereas containerd is limited to single-node deployments.",
        "containerd is a management tool that provides a user-friendly interface for managing containers, while Docker Engine is command-line based.",
        "Docker Engine is a container runtime while containerd includes both a container runtime and additional features like image building."
      ],
      "ko": [
        "containerd는 Docker Engine에 포함된 container runtime이며, Docker Engine은 container runtime과 함께 image building 같은 추가 기능을 제공한다.",
        "Docker Engine은 높은 확장성과 가용성을 위해 설계된 container runtime인 반면, containerd는 단일 노드 배포로 제한된다.",
        "containerd는 컨테이너 관리를 위한 사용자 친화적 인터페이스를 제공하는 관리 도구이고, Docker Engine은 command-line 기반이다.",
        "Docker Engine은 container runtime이고, containerd는 container runtime과 image building 같은 추가 기능을 모두 포함한다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "containerd is a lower-level container runtime responsible for tasks such as pulling images and managing container execution. Docker Engine includes containerd and adds higher-level capabilities such as image building, developer tooling, and a broader container management interface.",
      "ko": "containerd는 이미지를 pull하고 컨테이너를 실행하는 하위 수준의 CRI 호환 runtime이며, Docker Engine은 containerd를 내장하고 그 위에 image building, 개발자 도구 등 상위 기능을 추가한 것입니다. 3번 보기는 이 관계를 거꾸로 설명한 것으로, 추가 기능을 가진 쪽은 containerd가 아니라 Docker Engine입니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
  },
  {
    "id": "local-002",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "CI/CD",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does \"continuous\" mean in the context of CI/CD?",
      "ko": "CI/CD 맥락에서 \"continuous\"는 무엇을 의미하나요?"
    },
    "choices": {
      "en": [
        "Frequent releases, Manual processes, Repeatable, Fast processing",
        "Periodic releases, Manual processes, Repeatable, Automated Processing",
        "Frequent releases, Automated processes, Repeatable, Fast processing",
        "Periodic releases, Automated processes, Repeatable, Automated processing"
      ],
      "ko": [
        "잦은 릴리스, 수동 프로세스, 반복 가능, 빠른 처리",
        "주기적 릴리스, 수동 프로세스, 반복 가능, 자동화된 처리",
        "잦은 릴리스, 자동화된 프로세스, 반복 가능, 빠른 처리",
        "주기적 릴리스, 자동화된 프로세스, 반복 가능, 자동화된 처리"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "\"Continuous\" in CI/CD implies that integration and delivery happen frequently through automated, repeatable, fast pipelines rather than on a fixed schedule. Options with \"manual processes\" or \"periodic releases\" contradict the automation and frequency that define continuous practices.",
      "ko": "CI/CD에서 \"continuous\"는 통합과 배포가 정해진 일정이 아니라 자동화되고 반복 가능하며 빠른 파이프라인을 통해 자주 이루어진다는 뜻입니다. \"수동 프로세스\"나 \"주기적 릴리스\"가 포함된 보기는 continuous 실천의 핵심인 자동화와 빈도에 어긋납니다."
    },
    "ref": "https://glossary.cncf.io/continuous-integration/"
  },
  {
    "id": "local-003",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container Runtimes",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following container runtime is planned to be deprecated in Kubernetes 1.20 and higher?",
      "ko": "다음 중 Kubernetes 1.20 이상에서 deprecated될 예정이었던 container runtime은 무엇인가요?"
    },
    "choices": {
      "en": [
        "cri-o",
        "docker",
        "podman",
        "containerd"
      ],
      "ko": [
        "cri-o",
        "docker",
        "podman",
        "containerd"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes 1.20 deprecated dockershim, the built-in shim that let the kubelet use Docker Engine as a runtime, and it was removed in 1.24; containerd and CRI-O remain fully supported CRI runtimes. podman is not a Kubernetes runtime at all, so it is a distractor rather than a deprecated option.",
      "ko": "Kubernetes 1.20에서 kubelet이 Docker Engine을 runtime으로 사용하게 해주던 내장 shim인 dockershim이 deprecated되었고 1.24에서 제거되었습니다. containerd와 CRI-O는 계속 완전히 지원되는 CRI runtime이며, podman은 Kubernetes runtime이 아니므로 오답 유도용 보기입니다."
    },
    "ref": "https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"
  },
  {
    "id": "local-004",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node Components",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the name of the Kubernetes agent that runs on each worker nodes?",
      "ko": "각 worker node에서 실행되는 Kubernetes agent의 이름은 무엇인가요?"
    },
    "choices": {
      "en": [
        "kubelet",
        "systemd",
        "kube-proxy",
        "pod"
      ],
      "ko": [
        "kubelet",
        "systemd",
        "kube-proxy",
        "pod"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The kubelet is the node agent that registers the node with the API server and ensures the containers described in PodSpecs are running and healthy. kube-proxy also runs on every node but handles Service networking rules, not pod lifecycle, so it is not the primary node agent.",
      "ko": "kubelet은 node를 API server에 등록하고 PodSpec에 정의된 컨테이너가 실행 중이며 정상 상태인지 보장하는 node agent입니다. kube-proxy도 모든 node에서 실행되지만 pod 생명주기가 아닌 Service 네트워킹 규칙을 담당하므로 핵심 node agent는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"
  },
  {
    "id": "local-005",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service Networking",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What function does kube-proxy provide to a cluster?",
      "ko": "kube-proxy는 클러스터에 어떤 기능을 제공하나요?"
    },
    "choices": {
      "en": [
        "Implementing the Ingress resource type for application traffic.",
        "Forwarding data to the correct endpoints for Services.",
        "Managing data egress from the cluster nodes to the network.",
        "Managing access to the Kubernetes API."
      ],
      "ko": [
        "애플리케이션 트래픽을 위한 Ingress 리소스 타입을 구현한다.",
        "Service의 올바른 endpoint로 데이터를 전달한다.",
        "클러스터 node에서 네트워크로 나가는 데이터 egress를 관리한다.",
        "Kubernetes API에 대한 접근을 관리한다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "kube-proxy maintains iptables/IPVS/nftables rules on each node so that traffic sent to a Service's virtual IP is forwarded to one of the Service's backend endpoints. Ingress is implemented by a separate Ingress controller, not by kube-proxy.",
      "ko": "kube-proxy는 각 node에서 iptables/IPVS/nftables 규칙을 유지하여 Service의 가상 IP로 보낸 트래픽이 해당 Service의 backend endpoint 중 하나로 전달되도록 합니다. Ingress는 kube-proxy가 아니라 별도의 Ingress controller가 구현합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/networking/virtual-ips/"
  },
  {
    "id": "local-006",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "When deploying an application using Helm, which flag deletes the installation on failure?",
      "ko": "Helm으로 애플리케이션을 배포할 때, 설치가 실패하면 해당 설치를 삭제하는 flag는 무엇입니까?"
    },
    "choices": {
      "en": [
        "--force",
        "--verify",
        "--wait",
        "--atomic"
      ],
      "ko": [
        "--force",
        "--verify",
        "--wait",
        "--atomic"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The --atomic flag automatically rolls back and removes the Helm release when the installation fails. It also enables waiting for the deployment resources to become ready before considering the installation successful.",
      "ko": "--atomic flag는 설치가 실패하면 release를 삭제(롤백)하며, --wait를 암묵적으로 활성화하여 리소스가 ready 상태가 되어야 설치 성공으로 간주합니다. --wait만 사용하면 ready 상태를 기다리기만 할 뿐 실패한 release는 그대로 남습니다."
    },
    "ref": "https://helm.sh/docs/helm/helm_install/"
  },
  {
    "id": "local-007",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespaces",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What are the initial namespaces that Kubernetes starts with?",
      "ko": "Kubernetes가 시작 시 기본적으로 갖는 초기 namespace는 무엇입니까?"
    },
    "choices": {
      "en": [
        "default, kube-system, kube-public, kube-node-lease",
        "default, system, kube-public",
        "kube-default, kube-system, kube-main, kube-node-lease",
        "kube-default, system, kube-main, kube-primary"
      ],
      "ko": [
        "default, kube-system, kube-public, kube-node-lease",
        "default, system, kube-public",
        "kube-default, kube-system, kube-main, kube-node-lease",
        "kube-default, system, kube-main, kube-primary"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A new cluster starts with four namespaces: default, kube-system, kube-public, and kube-node-lease (which holds node heartbeat Lease objects). Names such as kube-default, kube-main, or system do not exist.",
      "ko": "새 클러스터는 default, kube-system, kube-public, kube-node-lease(노드 heartbeat용 Lease 객체 저장)의 네 가지 namespace로 시작합니다. kube-default, kube-main, system 같은 이름은 존재하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-008",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Kustomize vs Helm",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In Kubernetes application delivery, what is the main role of Kustomize compared to Helm?",
      "ko": "Kubernetes 애플리케이션 배포에서 Helm과 비교했을 때 Kustomize의 주요 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Kustomize overlays configurations directly without templates, while Helm relies on templates to manage reusable charts.",
        "Kustomize handles external application dependencies automatically, whereas Helm requires manual dependency tracking.",
        "Kustomize is designed for installing new applications only, while Helm is intended for managing ongoing application upgrades.",
        "Kustomize is mainly used for creating Helm charts themselves, whereas Helm is used for deploying those charts into clusters."
      ],
      "ko": [
        "Kustomize는 template 없이 설정을 직접 overlay하는 반면, Helm은 template을 사용해 재사용 가능한 chart를 관리한다.",
        "Kustomize는 외부 애플리케이션 의존성을 자동으로 처리하는 반면, Helm은 수동으로 의존성을 추적해야 한다.",
        "Kustomize는 새 애플리케이션 설치 전용으로 설계되었고, Helm은 지속적인 애플리케이션 업그레이드 관리를 위한 것이다.",
        "Kustomize는 주로 Helm chart 자체를 만드는 데 사용되고, Helm은 그 chart를 클러스터에 배포하는 데 사용된다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kustomize customizes standard Kubernetes YAML through bases, overlays, and patches without introducing a separate templating language. Helm packages applications as reusable charts and generates manifests from templates and supplied values.",
      "ko": "Kustomize는 templating 언어 없이 base, overlay, patch를 통해 일반 Kubernetes YAML을 커스터마이징하는 반면, Helm은 template과 values로 렌더링되는 재사용 가능한 chart로 애플리케이션을 패키징합니다. chart 의존성을 관리하는 것은 Kustomize가 아니라 Helm이므로 의존성 관련 보기는 반대입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/"
  },
  {
    "id": "local-009",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service Mesh",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following is a primary use case of Istio in a Kubernetes cluster?",
      "ko": "다음 중 Kubernetes 클러스터에서 Istio의 주요 사용 사례는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Provide service mesh capabilities such as traffic management, observability, and security between services.",
        "To provide secure built-in database management features for application workloads.",
        "To manage and control the versions of container runtimes used on nodes between services.",
        "To provision and manage persistent storage volumes for stateful applications."
      ],
      "ko": [
        "서비스 간 traffic management, observability, security 같은 service mesh 기능을 제공한다.",
        "애플리케이션 워크로드를 위한 안전한 내장 데이터베이스 관리 기능을 제공한다.",
        "노드에서 사용되는 container runtime의 버전을 관리하고 제어한다.",
        "stateful 애플리케이션을 위한 persistent storage volume을 프로비저닝하고 관리한다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Istio is primarily used to implement a service mesh in Kubernetes, enabling advanced traffic management, observability, and security features for service-to-service communication without requiring changes to application code.",
      "ko": "Istio는 애플리케이션 코드 변경 없이 서비스 간 통신에 traffic management, observability, mTLS 기반 security를 추가하는 service mesh입니다. 데이터베이스, container runtime, storage를 관리하지 않습니다."
    },
    "ref": "https://istio.io/latest/docs/overview/what-is-istio/"
  },
  {
    "id": "local-010",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Supply Chain Security",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does SBOM stand for?",
      "ko": "SBOM은 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Software Bill of Materials",
        "Software Bill Operations Management",
        "System Bill of Materials",
        "Security Baseline for Open Source Management"
      ],
      "ko": [
        "Software Bill of Materials",
        "Software Bill Operations Management",
        "System Bill of Materials",
        "Security Baseline for Open Source Management"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "SBOM stands for Software Bill of Materials, which is a formal inventory of the components, libraries, and dependencies included in a software artifact, used to improve transparency, security, and supply chain risk management.",
      "ko": "SBOM은 Software Bill of Materials의 약자로, 소프트웨어 아티팩트에 포함된 컴포넌트, 라이브러리, 의존성의 공식 목록이며 공급망 보안에 활용됩니다. 'System Bill of Materials'는 그럴듯하지만 잘못된 풀이입니다."
    },
    "ref": "https://www.cisa.gov/sbom"
  },
  {
    "id": "local-011",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Autoscaling",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which set of resources can receive automatic updates from the HorizontalPodAutoscaler?",
      "ko": "HorizontalPodAutoscaler로부터 자동 업데이트(스케일링)를 받을 수 있는 리소스 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "DaemonSet, Deployment",
        "Pod, StatefulSet",
        "DaemonSet, StatefulSet",
        "Deployment, StatefulSet"
      ],
      "ko": [
        "DaemonSet, Deployment",
        "Pod, StatefulSet",
        "DaemonSet, StatefulSet",
        "Deployment, StatefulSet"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The HorizontalPodAutoscaler is designed to automatically adjust the number of replicas for workload controllers that support scaling, such as Deployments and StatefulSets, based on observed metrics like CPU or memory utilization.",
      "ko": "HorizontalPodAutoscaler는 CPU·메모리 등 관측된 메트릭을 기반으로 scale 서브리소스를 제공하는 워크로드 리소스(Deployment, StatefulSet, ReplicaSet 등)의 replica 수를 조정합니다. DaemonSet은 노드당 하나의 Pod를 실행하고 단독 Pod는 replica 개념이 없으므로 HPA 대상이 될 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "local-012",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "CronJob",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A CronJob is scheduled to run by a user every one hour. What happens in the cluster when it's time for this CronJob to run?",
      "ko": "사용자가 CronJob을 1시간마다 실행되도록 스케줄했습니다. 이 CronJob의 실행 시각이 되면 클러스터에서 어떤 일이 일어납니까?"
    },
    "choices": {
      "en": [
        "Kubelet watches API Server for CronJob objects. When it's time for a Job to run, it runs the Pod directly.",
        "Kube-scheduler watches API Server for CronJob objects, and this is why it's called kubescheduler.",
        "CronJob controller component creates a Pod and waits until it finishes to run.",
        "CronJob controller component creates a Job. Then the Job controller creates a Pod and waits until it finishes to run."
      ],
      "ko": [
        "Kubelet이 API Server에서 CronJob 객체를 watch하다가, Job 실행 시각이 되면 Pod를 직접 실행한다.",
        "Kube-scheduler가 API Server에서 CronJob 객체를 watch하며, 그래서 이름이 kube-scheduler이다.",
        "CronJob controller 컴포넌트가 Pod를 생성하고 실행이 끝날 때까지 기다린다.",
        "CronJob controller 컴포넌트가 Job을 생성하고, 이어서 Job controller가 Pod를 생성하여 실행이 끝날 때까지 기다린다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "When the schedule fires, the CronJob controller (in kube-controller-manager) creates a Job object, and the Job controller then creates the Pod(s) and tracks them to completion. The CronJob controller never creates Pods directly, and kube-scheduler only assigns Pods to nodes; it does not watch CronJobs.",
      "ko": "스케줄 시각이 되면 kube-controller-manager 내의 CronJob controller가 Job 객체를 생성하고, Job controller가 Pod를 생성하여 완료될 때까지 추적합니다. CronJob controller는 Pod를 직접 만들지 않으며, kube-scheduler는 Pod를 노드에 배치할 뿐 CronJob을 watch하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
  },
  {
    "id": "local-013",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Services Networking",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the goal of load balancing?",
      "ko": "로드 밸런싱의 목표는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Automatically measure request performance across instances of an application.",
        "Automatically distribute requests across different versions of an application.",
        "Automatically distribute instances of an application across the cluster.",
        "Automatically distribute requests across instances of an application."
      ],
      "ko": [
        "애플리케이션 인스턴스 간 요청 성능을 자동으로 측정한다.",
        "애플리케이션의 서로 다른 버전 간에 요청을 자동으로 분산한다.",
        "애플리케이션 인스턴스를 클러스터 전체에 자동으로 분산 배치한다.",
        "애플리케이션 인스턴스 간에 요청을 자동으로 분산한다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Load balancing distributes incoming requests across the healthy instances (Pods) of an application so no single instance is overloaded, which is what a Kubernetes Service does. Spreading instances across nodes is scheduling, not load balancing, and routing between versions is traffic splitting/canary.",
      "ko": "로드 밸런싱은 들어오는 요청을 애플리케이션의 정상 인스턴스(Pod)들에 분산시켜 특정 인스턴스에 부하가 집중되지 않도록 하는 것으로, Kubernetes Service가 수행하는 역할입니다. 인스턴스를 노드에 분산 배치하는 것은 스케줄링이고, 버전 간 요청 분배는 트래픽 분할/카나리에 해당합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-014",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cluster Administration",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following options is true about considerations for large Kubernetes clusters?",
      "ko": "대규모 Kubernetes 클러스터에 대한 고려 사항으로 옳은 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Kubernetes supports up to 1000 nodes and recommends no more than 1000 containers per node.",
        "Kubernetes supports up to 5000 nodes and recommends no more than 500 pods per node.",
        "Kubernetes supports up to 5000 nodes and recommends no more than 110 pods per node.",
        "Kubernetes supports up to 50 nodes and recommends no more than 1000 containers per node."
      ],
      "ko": [
        "Kubernetes는 최대 1000개 노드를 지원하며 노드당 1000개 이하의 컨테이너를 권장한다.",
        "Kubernetes는 최대 5000개 노드를 지원하며 노드당 500개 이하의 Pod를 권장한다.",
        "Kubernetes는 최대 5000개 노드를 지원하며 노드당 110개 이하의 Pod를 권장한다.",
        "Kubernetes는 최대 50개 노드를 지원하며 노드당 1000개 이하의 컨테이너를 권장한다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The official large-cluster guidance states no more than 5,000 nodes, no more than 110 Pods per node, no more than 150,000 total Pods, and no more than 300,000 total containers. The 500-pods-per-node figure is not a documented limit, though kubelet's maxPods can be raised beyond 110.",
      "ko": "공식 대규모 클러스터 가이드는 노드 5,000개 이하, 노드당 Pod 110개 이하, 전체 Pod 150,000개 이하, 전체 컨테이너 300,000개 이하를 제시합니다. 노드당 500개 Pod는 문서화된 기준이 아니며, kubelet의 maxPods를 110 이상으로 늘릴 수는 있어도 권장값은 110입니다."
    },
    "ref": "https://kubernetes.io/docs/setup/best-practices/cluster-large/"
  },
  {
    "id": "local-015",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Orchestration Concepts",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following characteristics is associated with container orchestration?",
      "ko": "다음 중 컨테이너 오케스트레이션과 관련된 특성은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Application message distribution",
        "Dynamic scheduling",
        "Deploying application JAR files",
        "Virtual Machine distribution"
      ],
      "ko": [
        "애플리케이션 메시지 분배",
        "동적 스케줄링",
        "애플리케이션 JAR 파일 배포",
        "가상 머신 분배"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Container orchestration automates the placement, scaling, and lifecycle of containers, and dynamic scheduling of containers onto available nodes is a core characteristic. Deploying JAR files or distributing VMs are build/infrastructure concerns outside the orchestrator's scope.",
      "ko": "컨테이너 오케스트레이션은 컨테이너의 배치, 스케일링, 생명주기를 자동화하며, 가용 노드에 컨테이너를 동적으로 스케줄링하는 것이 핵심 특성입니다. JAR 파일 배포나 가상 머신 분배는 빌드/인프라 영역으로 오케스트레이터의 범위가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/"
  },
  {
    "id": "local-016",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service DNS",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes cluster, how does DNS resolution work for services?",
      "ko": "Kubernetes 클러스터에서 Service에 대한 DNS 해석(resolution)은 어떻게 동작합니까?"
    },
    "choices": {
      "en": [
        "DNS resolution for services uses the IP addresses of the Pods directly.",
        "DNS resolution for services is handled by an external DNS provider that manages all service names .",
        "Kubernetes creates service names that resolve to stable cluster IPs.",
        "Service names in Kubernetes are resolved using environment variables set in each Pod."
      ],
      "ko": [
        "Service의 DNS 해석은 Pod의 IP 주소를 직접 사용합니다.",
        "Service의 DNS 해석은 모든 Service 이름을 관리하는 외부 DNS 제공자가 처리합니다.",
        "Kubernetes는 안정적인 cluster IP로 해석되는 Service 이름을 생성합니다.",
        "Kubernetes의 Service 이름은 각 Pod에 설정된 환경 변수를 통해 해석됩니다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Kubernetes DNS assigns each Service a stable DNS name that resolves to its cluster IP, allowing Pods to reliably communicate with the Service without depending on individual Pod IP addresses.",
      "ko": "클러스터 DNS(CoreDNS)는 모든 Service에 안정적인 DNS 이름(예: my-svc.my-namespace.svc.cluster.local)을 부여하고 이를 ClusterIP로 해석하므로, 클라이언트는 수시로 바뀌는 개별 Pod IP에 의존하지 않습니다. 환경 변수도 Pod에 주입되지만 이는 DNS 해석 방식이 아니며, Pod 시작 이전에 생성된 Service만 포함됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"
  },
  {
    "id": "local-017",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container Runtime",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "The Container Runtime Interface (CRI) defines the protocol for the communication between:",
      "ko": "Container Runtime Interface(CRI)는 다음 중 어느 구성 요소 간의 통신 프로토콜을 정의합니까?"
    },
    "choices": {
      "en": [
        "The kubelet and the container runtime.",
        "The container runtime and etcd.",
        "The kube-apiserver and the kubelet.",
        "The container runtime and the image registry."
      ],
      "ko": [
        "kubelet과 container runtime",
        "container runtime과 etcd",
        "kube-apiserver와 kubelet",
        "container runtime과 image registry"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The CRI is a gRPC-based plugin interface that lets the kubelet talk to any compatible container runtime (containerd, CRI-O) without recompilation. The kubelet communicates with the kube-apiserver over the Kubernetes REST API, not CRI.",
      "ko": "CRI는 kubelet이 재컴파일 없이 호환되는 모든 container runtime(containerd, CRI-O 등)과 통신할 수 있게 하는 gRPC 기반 플러그인 인터페이스입니다. kubelet과 kube-apiserver 간 통신은 CRI가 아니라 Kubernetes REST API로 이루어집니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/cri/"
  },
  {
    "id": "local-018",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Debugging",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command inspects environment variables inside a running Pod?",
      "ko": "실행 중인 Pod 내부의 환경 변수를 확인하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get <pod> --show-env",
        "kubectl get pods -o yaml",
        "kubectl logs -- env",
        "kubectl exec <pod> -- env"
      ],
      "ko": [
        "kubectl get <pod> --show-env",
        "kubectl get pods -o yaml",
        "kubectl logs -- env",
        "kubectl exec <pod> -- env"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "kubectl exec runs a command inside a container in the running Pod. Executing env displays the environment variables available within that container.",
      "ko": "kubectl exec는 실행 중인 Pod의 컨테이너 안에서 명령을 실행하므로 `kubectl exec <pod> -- env`는 런타임에 주입된 변수(예: Service 링크)를 포함한 실제 환경 변수를 출력합니다. `kubectl get pods -o yaml`은 spec에 선언된 env 항목만 보여줄 뿐 실제 적용된 전체 환경을 보여주지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-application/get-shell-running-container/"
  },
  {
    "id": "local-019",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod Lifecycle",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of these is a valid container restart policy?",
      "ko": "다음 중 유효한 container restart policy는 무엇입니까?"
    },
    "choices": {
      "en": [
        "On login",
        "On update",
        "On start",
        "On failure"
      ],
      "ko": [
        "On login",
        "On update",
        "On start",
        "On failure"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The valid restartPolicy values are Always (default), OnFailure and Never; OnFailure restarts a container only when it exits with a non-zero status. The other options are not Kubernetes restart policies.",
      "ko": "유효한 restartPolicy 값은 Always(기본값), OnFailure, Never이며, OnFailure는 컨테이너가 0이 아닌 상태 코드로 종료될 때만 재시작합니다. 나머지 보기는 Kubernetes restart policy가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy"
  },
  {
    "id": "local-020",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service Ports",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Can a Kubernetes Service expose multiple ports?",
      "ko": "Kubernetes Service는 여러 개의 port를 노출할 수 있습니까?"
    },
    "choices": {
      "en": [
        "No, you can only expose one port per each Service.",
        "Yes, but you must specify an unambiguous name for each port.",
        "Yes, the only requirement is to use different port numbers.",
        "No, because the only port you can expose is port number 443."
      ],
      "ko": [
        "아니요, Service당 하나의 port만 노출할 수 있습니다.",
        "예, 단 각 port에 중복되지 않는 고유한 이름을 지정해야 합니다.",
        "예, 유일한 요구 사항은 서로 다른 port 번호를 사용하는 것입니다.",
        "아니요, 노출할 수 있는 port는 443번뿐입니다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Service can expose multiple ports, but when more than one port is defined every port must have a unique name so the entries are unambiguous. Using different port numbers alone is not sufficient because the API rejects multi-port Services with unnamed ports.",
      "ko": "Service는 여러 port를 노출할 수 있지만, port가 둘 이상 정의되면 각 항목이 명확히 구분되도록 모든 port에 고유한 이름을 지정해야 합니다. 이름 없이 port 번호만 다르게 지정하면 API가 multi-port Service를 거부하므로 번호만 다르게 하는 것으로는 충분하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#multi-port-services"
  },
  {
    "id": "local-021",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespaces",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following sentences is true about namespaces in Kubernetes?",
      "ko": "Kubernetes의 namespace에 대한 설명으로 옳은 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "You can create a namespace within another namespace in Kubernetes.",
        "You can create two resources of the same kind and name in a namespace.",
        "The default namespace exists when a new cluster is created.",
        "All the objects in the cluster are namespaced by default."
      ],
      "ko": [
        "Kubernetes에서는 namespace 안에 또 다른 namespace를 생성할 수 있다.",
        "하나의 namespace 안에 같은 kind와 같은 이름을 가진 리소스를 두 개 생성할 수 있다.",
        "새 클러스터가 생성되면 default namespace가 기본적으로 존재한다.",
        "클러스터의 모든 객체는 기본적으로 namespace에 속한다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Every new cluster starts with the default namespace (along with kube-system, kube-public and kube-node-lease). Namespaces cannot be nested, names must be unique per kind within a namespace, and cluster-scoped objects such as Nodes and PersistentVolumes are not namespaced.",
      "ko": "새 클러스터에는 default namespace가 (kube-system, kube-public, kube-node-lease와 함께) 기본으로 생성됩니다. namespace는 중첩할 수 없고, 한 namespace 안에서 같은 kind의 이름은 고유해야 하며, Node나 PersistentVolume 같은 cluster-scoped 객체는 namespace에 속하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-022",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Autoscaling",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which tools enable Kubernetes HorizontalPodAutoscalers to use custom, applicationgenerated metrics to trigger scaling events?",
      "ko": "Kubernetes HorizontalPodAutoscaler가 애플리케이션에서 생성한 커스텀 메트릭을 기반으로 스케일링을 수행하도록 해주는 도구는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Prometheus and the prometheus-adapter.",
        "Graylog and graylog-autoscaler metrics.",
        "Graylog and the kubernetes-adapter.",
        "Grafana and Prometheus."
      ],
      "ko": [
        "Prometheus와 prometheus-adapter",
        "Graylog와 graylog-autoscaler metrics",
        "Graylog와 kubernetes-adapter",
        "Grafana와 Prometheus"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The HPA reads custom metrics through the custom.metrics.k8s.io API, which prometheus-adapter implements by exposing metrics scraped by Prometheus. Grafana is only a visualization tool and does not serve the metrics API.",
      "ko": "HPA는 custom.metrics.k8s.io API를 통해 커스텀 메트릭을 읽으며, prometheus-adapter가 Prometheus가 수집한 메트릭을 이 API로 노출합니다. Grafana는 시각화 도구일 뿐 metrics API를 제공하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "local-023",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node maintenance",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following commands could a cluster administrator use to prevent Pod scheduling in a node temporarily, for maintenance purposes?",
      "ko": "클러스터 관리자가 유지보수를 위해 특정 node에 Pod가 스케줄링되지 않도록 일시적으로 막을 때 사용할 수 있는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl cordon",
        "kubectl annotate",
        "kubectl label",
        "kubectl taint"
      ],
      "ko": [
        "kubectl cordon",
        "kubectl annotate",
        "kubectl label",
        "kubectl taint"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The kubectl cordon command marks a node as unschedulable, temporarily preventing new Pods from being scheduled on it while allowing existing Pods to continue running during maintenance.",
      "ko": "kubectl cordon은 node를 unschedulable로 표시하여 새 Pod가 배치되지 않게 하며 기존 Pod는 계속 실행됩니다. kubectl uncordon으로 되돌릴 수 있습니다. NoSchedule taint로도 스케줄링을 막을 수 있지만, cordon이 유지보수 목적의 전용 명령입니다(보통 kubectl drain과 함께 사용)."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cordon/"
  },
  {
    "id": "local-024",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "kubectl",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of these commands is used to retrieve the documentation and field definitions for a Kubernetes resource?",
      "ko": "Kubernetes 리소스의 문서와 필드 정의를 조회할 때 사용하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl explain",
        "kubectl api-resources",
        "kubectl get --help",
        "kubectl show"
      ],
      "ko": [
        "kubectl explain",
        "kubectl api-resources",
        "kubectl get --help",
        "kubectl show"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl explain prints the documentation and field schema of a resource (e.g. kubectl explain pod.spec.containers). kubectl api-resources only lists available resource types, and kubectl show does not exist.",
      "ko": "kubectl explain은 리소스의 문서와 필드 스키마를 출력합니다(예: kubectl explain pod.spec.containers). kubectl api-resources는 사용 가능한 리소스 종류만 나열하며, kubectl show는 존재하지 않는 명령입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_explain/"
  },
  {
    "id": "local-025",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "SRE roles",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In a cloud native environment, who is usually responsible for maintaining the workloads running across the different platforms?",
      "ko": "클라우드 네이티브 환경에서 여러 플랫폼에 걸쳐 실행되는 워크로드를 유지·관리하는 책임은 일반적으로 누구에게 있습니까?"
    },
    "choices": {
      "en": [
        "The cloud provider.",
        "The Site Reliability Engineering (SRE) team.",
        "The team of developers.",
        "The Support Engineering team (SE)."
      ],
      "ko": [
        "클라우드 제공자",
        "Site Reliability Engineering (SRE) 팀",
        "개발자 팀",
        "Support Engineering (SE) 팀"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "In cloud native environments, the Site Reliability Engineering (SRE) team is typically responsible for maintaining and ensuring the reliability of workloads across different platforms.",
      "ko": "SRE 팀은 SLO, 자동화, 장애 대응을 통해 여러 플랫폼에서 실행되는 워크로드의 운영과 신뢰성을 책임집니다. 개발자는 애플리케이션을 만들고, 클라우드 제공자는 공동 책임 모델에 따라 기반 인프라만 담당합니다."
    },
    "ref": "https://sre.google/sre-book/introduction/"
  },
  {
    "id": "local-026",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "RBAC",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement is correct about Role and ClusterRole objects in Kubernetes?",
      "ko": "Kubernetes의 Role과 ClusterRole 객체에 대한 설명으로 올바른 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Roles can only set permissions for resources within a particular namespace.",
        "ClusterRoles and Roles can remove permissions from resources within a namespace.",
        "ClusterRoles can only set permissions for resources that are not assigned to a namespace.",
        "Roles can set permissions for both namespaced and non-namespaced objects."
      ],
      "ko": [
        "Role은 특정 namespace 내의 리소스에 대해서만 권한을 설정할 수 있다.",
        "ClusterRole과 Role은 namespace 내 리소스에서 권한을 제거할 수 있다.",
        "ClusterRole은 namespace에 속하지 않는 리소스에 대해서만 권한을 설정할 수 있다.",
        "Role은 namespaced 객체와 non-namespaced 객체 모두에 대해 권한을 설정할 수 있다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Role defines permissions that apply only within a specific namespace, limiting its scope to resources in that namespace.",
      "ko": "Role은 namespace 범위의 객체로, 자신이 속한 namespace 내의 리소스에 대해서만 권한을 부여할 수 있습니다. ClusterRole은 클러스터 범위 리소스에만 한정되지 않고 모든 namespace의 namespaced 리소스에 대한 접근도 부여할 수 있으며, RBAC는 순수하게 추가(additive) 방식이므로 어떤 객체도 권한을 제거할 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-027",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod lifecycle",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What happens with a regular pod running in Kubernetes when a node fails?",
      "ko": "Kubernetes에서 실행 중인 일반적인 Pod는 node에 장애가 발생하면 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "A new pod with the same UID is scheduled to another node after a while.",
        "A new, near-identical pod but with different UID is scheduled to another node.",
        "By default, a pod can only be scheduled to the same node when the node fails.",
        "A new pod is scheduled on a different node only if it is configured explicitly."
      ],
      "ko": [
        "잠시 후 동일한 UID를 가진 새 Pod가 다른 node에 스케줄링된다.",
        "UID는 다르지만 거의 동일한 새 Pod가 다른 node에 스케줄링된다.",
        "기본적으로 node 장애 시 Pod는 동일한 node에만 스케줄링될 수 있다.",
        "명시적으로 구성된 경우에만 새 Pod가 다른 node에 스케줄링된다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "When a node fails, Kubernetes schedules a new pod with a different UID (a new instance) on another available node to replace the failed pod.",
      "ko": "Pod(UID로 식별됨)는 생애 동안 단 한 번만 스케줄링되며 다른 node로 옮겨지지 않습니다. node 장애 시 해당 Pod는 삭제되고, 이를 관리하는 컨트롤러(예: Deployment, ReplicaSet)가 다른 UID를 가진 거의 동일한 새 Pod를 다른 node에 생성합니다. 동일한 UID는 절대 재사용되지 않으므로 첫 번째 선택지는 틀렸습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"
  },
  {
    "id": "local-028",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Containerization standards",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the main purpose of the Open Container Initiative (OCI)?",
      "ko": "Open Container Initiative(OCI)의 주요 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Accelerating the adoption of containers and Kubernetes in the industry.",
        "Creating open industry standards around container formats and runtimes.",
        "Creating industry standards around container formats and runtimes for private purposes.",
        "Improving the security of standards around container formats and runtimes"
      ],
      "ko": [
        "업계에서 컨테이너와 Kubernetes의 도입을 가속화하는 것",
        "컨테이너 포맷과 런타임에 관한 개방형 산업 표준을 만드는 것",
        "사적인 용도를 위해 컨테이너 포맷과 런타임에 관한 산업 표준을 만드는 것",
        "컨테이너 포맷과 런타임 표준의 보안을 향상시키는 것"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The Open Container Initiative (OCI) focuses on creating open industry standards for container formats and runtimes to ensure interoperability and consistency across implementations.",
      "ko": "OCI는 Linux Foundation 산하 프로젝트로, 상호 운용성을 보장하기 위해 컨테이너 포맷과 런타임에 대한 개방형 산업 표준(image-spec, runtime-spec, distribution-spec)을 만드는 것이 목적입니다. Kubernetes 도입 가속화는 OCI가 아니라 CNCF의 사명입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/"
  },
  {
    "id": "local-029",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Troubleshooting",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A Kubernetes Pod is returning a CrashLoopBackOff status. What is the most likely reason for this behavior?",
      "ko": "Kubernetes Pod가 CrashLoopBackOff 상태를 반환하고 있습니다. 이러한 동작의 가장 가능성 높은 원인은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The container's image is missing or cannot be pulled.",
        "There are insufficient resources allocated for the Pod.",
        "The Pod is unable to communicate with the Kubernetes API server.",
        "The application inside the container crashed after starting."
      ],
      "ko": [
        "컨테이너 이미지가 없거나 pull할 수 없다.",
        "Pod에 할당된 리소스가 부족하다.",
        "Pod가 Kubernetes API server와 통신할 수 없다.",
        "컨테이너 내부의 애플리케이션이 시작된 후 crash했다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "CrashLoopBackOff occurs when a container starts successfully but then terminates due to the application crashing or exiting unexpectedly, causing Kubernetes to repeatedly restart the container with increasing backoff delays.",
      "ko": "CrashLoopBackOff는 컨테이너가 시작된 후 반복적으로 종료되거나 crash하여 kubelet이 지수적으로 증가하는 backoff 지연을 두고 재시작하고 있음을 의미합니다. 이미지가 없거나 pull할 수 없는 경우에는 ImagePullBackOff/ErrImagePull이 표시되고, 리소스 부족은 보통 Pod를 Pending 상태로 남겨둡니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/"
  },
  {
    "id": "local-030",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workloads",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Imagine there is a requirement to run a database backup every day. Which Kubernetes resource could be used to achieve that?",
      "ko": "매일 데이터베이스 백업을 실행해야 하는 요구 사항이 있다고 가정합시다. 이를 달성하기 위해 사용할 수 있는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Kube-scheduler",
        "CronJob",
        "Task",
        "Job"
      ],
      "ko": [
        "Kube-scheduler",
        "CronJob",
        "Task",
        "Job"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A CronJob creates Jobs on a repeating schedule defined in Cron format, making it the right resource for a daily backup. A plain Job runs a task only once to completion, and Task is not a Kubernetes resource kind.",
      "ko": "CronJob은 Cron 형식으로 정의된 반복 일정에 따라 Job을 생성하므로 매일 백업을 수행하기에 적합한 리소스입니다. 일반 Job은 작업을 한 번만 완료까지 실행하며, Task는 Kubernetes 리소스 종류가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
  },
  {
    "id": "local-031",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Semantic Versioning",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Imagine you're releasing open-source software for the first time. Which of the following is a valid semantic version?",
      "ko": "오픈소스 소프트웨어를 처음 릴리스한다고 가정해 봅시다. 다음 중 유효한 semantic version은 무엇입니까?"
    },
    "choices": {
      "en": [
        "1.0",
        "2021-10-11",
        "0.1.0-rc",
        "v1beta1"
      ],
      "ko": [
        "1.0",
        "2021-10-11",
        "0.1.0-rc",
        "v1beta1"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Semantic Versioning requires MAJOR.MINOR.PATCH with an optional pre-release suffix, so 0.1.0-rc is valid. \"1.0\" is tempting but is missing the PATCH component, and \"v1beta1\" is a Kubernetes API version string, not SemVer.",
      "ko": "Semantic Versioning은 MAJOR.MINOR.PATCH 형식에 선택적으로 pre-release 접미사를 붙이므로 0.1.0-rc는 유효합니다. \"1.0\"은 PATCH 부분이 없어 유효하지 않고, \"v1beta1\"은 Kubernetes API 버전 표기이지 SemVer가 아닙니다."
    },
    "ref": "https://semver.org/"
  },
  {
    "id": "local-032",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Troubleshooting Logs",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "If kubectl is failing to retrieve information from the cluster, where can you find pod logs to troubleshoot?",
      "ko": "kubectl로 클러스터에서 정보를 가져오지 못하는 상황이라면, 트러블슈팅을 위해 Pod 로그를 어디에서 찾을 수 있습니까?"
    },
    "choices": {
      "en": [
        "/var/log/pods/",
        "~/.kube/config",
        "/var/log/k8s/",
        "/etc/kubernetes/"
      ],
      "ko": [
        "/var/log/pods/",
        "~/.kube/config",
        "/var/log/k8s/",
        "/etc/kubernetes/"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Pod logs on the node are typically stored under /var/log/pods/, which can be accessed to troubleshoot issues when kubectl cannot retrieve logs directly from the cluster.",
      "ko": "kubelet은 각 노드의 /var/log/pods/ 아래에 컨테이너 로그를 기록하므로(/var/log/containers/에는 심볼릭 링크가 있음), kubectl logs를 사용할 수 없을 때 노드에서 직접 읽을 수 있습니다. ~/.kube/config는 클라이언트 kubeconfig이고 /etc/kubernetes/에는 control plane 매니페스트와 인증서가 있을 뿐 Pod 로그는 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/logging/"
  },
  {
    "id": "local-033",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Ephemeral Storage",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is ephemeral storage?",
      "ko": "ephemeral storage란 무엇입니까?"
    },
    "choices": {
      "en": [
        "Storage space that need not persist across restarts.",
        "Storage that may grow dynamically.",
        "Storage used by multiple consumers (e.g. multiple Pods).",
        "Storage that is always provisioned locally"
      ],
      "ko": [
        "재시작 후에도 유지될 필요가 없는 스토리지 공간.",
        "동적으로 늘어날 수 있는 스토리지.",
        "여러 소비자(예: 여러 Pod)가 함께 사용하는 스토리지.",
        "항상 로컬에 프로비저닝되는 스토리지."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Ephemeral storage (e.g. emptyDir, container writable layers) lives with the Pod and is discarded when the Pod is deleted or restarted, so it does not need to persist. \"Always provisioned locally\" is tempting, but ephemeral volumes can also be backed by CSI drivers and locality is not the defining property.",
      "ko": "ephemeral storage(예: emptyDir, 컨테이너 쓰기 레이어)는 Pod와 수명을 같이하며 Pod가 삭제되거나 재시작되면 사라지므로 지속될 필요가 없습니다. \"항상 로컬에 프로비저닝\"은 그럴듯하지만, ephemeral volume은 CSI 드라이버로도 제공될 수 있어 로컬 여부가 핵심 특성은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/"
  },
  {
    "id": "local-034",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Services",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a Service?",
      "ko": "Service란 무엇입니까?"
    },
    "choices": {
      "en": [
        "A static network mapping from a Pod to a port.",
        "A way to expose an application running on a set of Pods.",
        "The network configuration for a group of Pods.",
        "An NGINX load balancer that gets deployed for an application."
      ],
      "ko": [
        "Pod에서 포트로의 정적 네트워크 매핑.",
        "여러 Pod에서 실행 중인 애플리케이션을 노출하는 방법.",
        "Pod 그룹에 대한 네트워크 구성.",
        "애플리케이션을 위해 배포되는 NGINX 로드 밸런서."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Service is an abstraction that exposes an application running on a set of Pods behind a stable IP/DNS name, selecting Pods by label. It is not tied to a single Pod or to any specific load balancer implementation such as NGINX (that would be an Ingress controller).",
      "ko": "Service는 label로 선택한 여러 Pod에서 실행되는 애플리케이션을 안정적인 IP/DNS 이름으로 노출하는 추상화입니다. 단일 Pod에 묶이지 않으며 NGINX 같은 특정 로드 밸런서 구현체(그것은 Ingress controller에 해당)도 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-035",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Annotations",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In Kubernetes, what is the primary purpose of using annotations?",
      "ko": "Kubernetes에서 annotation을 사용하는 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To specify the deployment strategy for applications.",
        "To control the access permissions for users and service accounts.",
        "To provide a way to attach metadata to objects.",
        "To define the specifications for resource limits and requests."
      ],
      "ko": [
        "애플리케이션의 배포 전략을 지정하기 위해.",
        "사용자와 service account의 접근 권한을 제어하기 위해.",
        "오브젝트에 메타데이터를 첨부하는 방법을 제공하기 위해.",
        "리소스 limit과 request 사양을 정의하기 위해."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Annotations are used to attach arbitrary, non-identifying metadata to Kubernetes objects, allowing tools and users to store additional information that is not used for selection or scheduling.",
      "ko": "Annotation은 도구나 라이브러리가 활용할 수 있도록 오브젝트에 임의의 비식별 메타데이터를 첨부하며, label과 달리 선택이나 스케줄링에 사용되지 않습니다. 배포 전략과 리소스 request/limit은 annotation이 아니라 오브젝트 spec에 정의됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"
  },
  {
    "id": "local-036",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes API · 정책 정정 · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Under the current Kubernetes deprecation policy, what happens to a deprecated GA API version within the same major version of Kubernetes?",
      "ko": "현재 Kubernetes deprecation policy에 따르면 같은 Kubernetes major version 내에서 deprecated된 GA API version은 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "It must remain available within that Kubernetes major version",
        "It may be removed after 9 months",
        "It may be removed after 12 months",
        "It may be removed in the next patch release"
      ],
      "ko": [
        "해당 Kubernetes major version 동안 계속 제공되어야 합니다",
        "9개월 후 제거될 수 있습니다",
        "12개월 후 제거될 수 있습니다",
        "다음 patch release에서 제거될 수 있습니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Rule 1 says API elements cannot be removed within an API group version. Rule 4a separately says GA API versions may be deprecated but must not be removed within a Kubernetes major version. Therefore a deprecated GA version remains available for that Kubernetes major version; this is not a 9-month or 12-month timer and not a next-patch removal rule. Do not confuse an API group/version with the Kubernetes project major version.",
      "ko": "Rule 1은 API group version 안에서 API element를 제거할 수 없다고 규정합니다. 별도로 Rule 4a는 GA API version을 deprecate할 수는 있지만 Kubernetes major version 안에서는 제거해서는 안 된다고 규정합니다. 따라서 deprecated된 GA version은 해당 Kubernetes major version 동안 제공되어야 하며, 9개월 또는 12개월 timer나 다음 patch에서 제거하는 규칙이 아닙니다. API group/version과 Kubernetes project major version을 혼동하지 마십시오."
    },
    "ref": "https://kubernetes.io/docs/reference/deprecation-policy/"
  },
  {
    "id": "local-037",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes Distributions",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the name of the lightweight Kubernetes distribution built for IoT and edge computing?",
      "ko": "IoT와 edge computing을 위해 만들어진 경량 Kubernetes 배포판의 이름은 무엇입니까?"
    },
    "choices": {
      "en": [
        "OpenShift",
        "k3s",
        "RKE",
        "k1s"
      ],
      "ko": [
        "OpenShift",
        "k3s",
        "RKE",
        "k1s"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "k3s (Rancher/SUSE, a CNCF sandbox project) is a single-binary, lightweight certified Kubernetes distribution designed for edge, IoT and resource-constrained environments. OpenShift is Red Hat's enterprise platform, RKE is Rancher's full distribution, k1s does not exist.",
      "ko": "k3s(Rancher/SUSE, CNCF sandbox)는 단일 바이너리로 동작하는 경량 인증 Kubernetes 배포판으로 edge·IoT·저사양 환경을 겨냥합니다. OpenShift는 Red Hat 엔터프라이즈 플랫폼, RKE는 Rancher의 일반 배포판이며 k1s는 존재하지 않습니다."
    },
    "ref": "https://k3s.io/"
  },
  {
    "id": "local-038",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Autoscaling",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Kubernetes ___ allows you to automatically manage the number of nodes in your cluster to meet demand.",
      "ko": "Kubernetes ___ 는 수요에 맞춰 클러스터의 노드 수를 자동으로 조절해 줍니다."
    },
    "choices": {
      "en": [
        "Node Autoscaler",
        "Cluster Autoscaler",
        "Horizontal Pod Autoscaler",
        "Vertical Pod Autoscaler"
      ],
      "ko": [
        "Node Autoscaler",
        "Cluster Autoscaler",
        "Horizontal Pod Autoscaler",
        "Vertical Pod Autoscaler"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Cluster Autoscaler adds nodes when Pods are Pending for lack of resources and removes underutilized nodes. HPA scales the number of Pod replicas, VPA adjusts Pod resource requests/limits; 'Node Autoscaler' is not a Kubernetes component.",
      "ko": "Cluster Autoscaler는 리소스 부족으로 Pending인 Pod가 있으면 노드를 추가하고, 사용률이 낮은 노드는 제거합니다. HPA는 Pod replica 수, VPA는 Pod의 request/limit을 조절하며 'Node Autoscaler'라는 컴포넌트는 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling/"
  },
  {
    "id": "local-039",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Security / Policy",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following statements is correct concerning Open Policy Agent (OPA)?",
      "ko": "Open Policy Agent(OPA)에 관한 설명으로 올바른 것은?"
    },
    "choices": {
      "en": [
        "The policies must be written in Python language.",
        "Kubernetes can use it to validate requests and apply policies.",
        "Policies can only be tested when published.",
        "It cannot be used outside Kubernetes."
      ],
      "ko": [
        "정책은 반드시 Python 언어로 작성해야 한다.",
        "Kubernetes가 요청을 검증하고 정책을 적용하는 데 사용할 수 있다.",
        "정책은 배포된 뒤에만 테스트할 수 있다.",
        "Kubernetes 밖에서는 사용할 수 없다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "OPA (CNCF graduated) is a general-purpose policy engine; in Kubernetes it runs as an admission webhook (e.g. OPA Gatekeeper) to validate or mutate API requests. Policies are written in Rego, can be unit-tested locally with `opa test`, and OPA is also used for microservices, Terraform, CI pipelines, etc.",
      "ko": "OPA(CNCF graduated)는 범용 정책 엔진으로, Kubernetes에서는 admission webhook(OPA Gatekeeper 등)으로 동작해 API 요청을 검증·변경합니다. 정책 언어는 Rego이고 `opa test`로 로컬에서 테스트할 수 있으며, microservice·Terraform·CI 등 Kubernetes 외부에서도 널리 쓰입니다."
    },
    "ref": "https://www.openpolicyagent.org/docs/latest/kubernetes-introduction/"
  },
  {
    "id": "local-040",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "GitOps / IaC",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In a cloud native world, what does the IaC abbreviation stands for?",
      "ko": "cloud native 환경에서 IaC는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Infrastructure and Code",
        "Infrastructure as Code",
        "Infrastructure above Code",
        "Infrastructure across Code"
      ],
      "ko": [
        "Infrastructure and Code",
        "Infrastructure as Code",
        "Infrastructure above Code",
        "Infrastructure across Code"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Infrastructure as Code means describing infrastructure declaratively in version-controlled files (Terraform, Pulumi, Kubernetes manifests) and applying them automatically, which is the foundation of GitOps.",
      "ko": "Infrastructure as Code는 인프라를 버전 관리되는 파일(Terraform, Pulumi, Kubernetes manifest 등)로 선언적으로 기술하고 자동으로 적용하는 방식으로, GitOps의 기반이 됩니다."
    },
    "ref": "https://glossary.cncf.io/infrastructure-as-code/"
  },
  {
    "id": "local-041",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Serverless",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In which framework do the developers no longer have to deal with capacity, deployments, scaling and fault tolerance, and OS?",
      "ko": "개발자가 용량, 배포, 스케일링, 장애 허용(fault tolerance), OS를 더 이상 신경 쓰지 않아도 되는 프레임워크는?"
    },
    "choices": {
      "en": [
        "Docker Swam",
        "Kubernetes",
        "Mesos",
        "Serverless"
      ],
      "ko": [
        "Docker Swarm",
        "Kubernetes",
        "Mesos",
        "Serverless"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "In the serverless model (FaaS such as AWS Lambda, or Knative on Kubernetes) the platform provisions capacity, scales to zero/up on demand, handles failures and OS patching; developers only supply code. Kubernetes, Swarm and Mesos still expose nodes, scaling and deployment to the operator.",
      "ko": "Serverless 모델(AWS Lambda 같은 FaaS, Kubernetes 위의 Knative 등)에서는 플랫폼이 용량 확보, 0까지 포함한 자동 스케일링, 장애 처리, OS 패치를 담당하고 개발자는 코드만 제공합니다. Kubernetes·Swarm·Mesos는 여전히 노드·스케일링·배포를 운영자가 다뤄야 합니다."
    },
    "ref": "https://glossary.cncf.io/serverless/"
  },
  {
    "id": "local-042",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workloads / StatefulSet",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following workload require a headless service while deploying into the namespace?",
      "ko": "다음 중 namespace에 배포할 때 headless Service가 필요한 워크로드는?"
    },
    "choices": {
      "en": [
        "StatefulSet",
        "CronJob",
        "Deployment",
        "DaemonSet"
      ],
      "ko": [
        "StatefulSet",
        "CronJob",
        "Deployment",
        "DaemonSet"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A StatefulSet's `serviceName` must reference a headless Service (clusterIP: None) so each Pod gets a stable DNS name like `web-0.nginx.default.svc.cluster.local`. Deployments and DaemonSets use ordinary Services optionally; CronJobs usually need none.",
      "ko": "StatefulSet은 `serviceName`에 headless Service(clusterIP: None)를 지정해야 하며, 이를 통해 각 Pod가 `web-0.nginx.default.svc.cluster.local` 같은 고정 DNS 이름을 갖습니다. Deployment·DaemonSet은 일반 Service를 선택적으로 쓰고 CronJob은 보통 Service가 필요 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-network-id"
  },
  {
    "id": "local-043",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is Helm?",
      "ko": "Helm은 무엇입니까?"
    },
    "choices": {
      "en": [
        "An open source dashboard for Kubernetes.",
        "A package manager for Kubernetes applications.",
        "A custom scheduler for Kubernetes.",
        "An end to end testing project for Kubernetes applications."
      ],
      "ko": [
        "Kubernetes용 오픈소스 대시보드",
        "Kubernetes 애플리케이션용 패키지 매니저",
        "Kubernetes용 커스텀 스케줄러",
        "Kubernetes 애플리케이션용 end-to-end 테스트 프로젝트"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Helm (CNCF graduated) packages Kubernetes manifests into versioned charts with templated values, and installs/upgrades/rolls back them as releases. The dashboard is a separate project; Helm does not schedule or test workloads.",
      "ko": "Helm(CNCF graduated)은 Kubernetes manifest를 템플릿화된 values와 함께 버전 관리되는 chart로 패키징하고, release 단위로 install/upgrade/rollback합니다. 대시보드는 별도 프로젝트이며 Helm은 스케줄링이나 테스트를 하지 않습니다."
    },
    "ref": "https://helm.sh/docs/"
  },
  {
    "id": "local-044",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Observability: Logs",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which is the correct kubectl command to display logs in real time?",
      "ko": "로그를 실시간으로 표시하는 올바른 kubectl 명령은?"
    },
    "choices": {
      "en": [
        "kubectl logs -p test-container-1",
        "kubectl logs -c test-container-1",
        "kubectl logs -l test-container-1",
        "kubectl logs -f test-container-1"
      ],
      "ko": [
        "kubectl logs -p test-container-1",
        "kubectl logs -c test-container-1",
        "kubectl logs -l test-container-1",
        "kubectl logs -f test-container-1"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "`-f/--follow` streams logs as they are written. `-p/--previous` shows the previous (crashed) container's logs, `-c` selects a container inside a multi-container Pod, `-l` selects Pods by label selector.",
      "ko": "`-f/--follow`는 기록되는 로그를 실시간으로 스트리밍합니다. `-p/--previous`는 이전(crash한) 컨테이너의 로그, `-c`는 multi-container Pod에서 컨테이너 지정, `-l`은 label selector로 Pod 선택입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/"
  },
  {
    "id": "local-045",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Init Containers",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How to load and generate data required before the Pod startup?",
      "ko": "Pod가 시작되기 전에 필요한 데이터를 로드·생성하려면 어떻게 해야 합니까?"
    },
    "choices": {
      "en": [
        "Use an init container with shared file storage.",
        "Use a PVC volume.",
        "Use a sidecar container with shared volume.",
        "Use another pod with a PVC."
      ],
      "ko": [
        "공유 파일 스토리지와 함께 init container를 사용한다.",
        "PVC volume을 사용한다.",
        "공유 volume과 함께 sidecar container를 사용한다.",
        "PVC를 가진 다른 Pod를 사용한다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The intended pattern is a regular init container that generates files in a shared volume and completes before the application containers start. This means application startup, not a time before the Pod object exists. A PVC provides storage but does not itself run initialization code. Native Kubernetes sidecars are restartable init containers: they start before the application containers and continue running alongside them. For setup work that should finish and exit, a regular init container is the standard fit; it is incorrect to say that sidecars can never start first.",
      "ko": "의도한 구성은 일반 init container가 공유 볼륨에 파일을 생성하고 앱 컨테이너가 시작되기 전에 완료되는 방식입니다. 여기서 시작 전은 Pod 오브젝트가 존재하기 전이 아니라 앱 컨테이너 시작 전을 뜻합니다. PVC는 저장소를 제공할 뿐 초기화 코드를 실행하지 않습니다. Kubernetes 네이티브 사이드카는 재시작 가능한 init container로서 앱 컨테이너보다 먼저 시작한 뒤 함께 계속 실행됩니다. 준비 작업을 마치고 종료해야 한다면 일반 init container가 적합하며, 사이드카가 먼저 시작할 수 없다고 설명하는 것은 잘못입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"
  },
  {
    "id": "local-046",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "GitOps",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the core functionality of GitOps tools like Argo CD and Flux?",
      "ko": "Argo CD, Flux 같은 GitOps 도구의 핵심 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "They track production changes made by a human in a Git repository and generate a human-readable audit trail.",
        "They replace human operations with an agent that tracks Git commands.",
        "They automatically create pull requests when dependencies are outdated.",
        "They continuously compare the desired state in Git with the actual production state and notify or act upon differences."
      ],
      "ko": [
        "사람이 프로덕션에 가한 변경을 Git 저장소에 기록하고 사람이 읽을 수 있는 감사 로그를 생성한다.",
        "Git 명령을 추적하는 agent로 사람의 운영 작업을 대체한다.",
        "의존성이 오래되면 자동으로 pull request를 만든다.",
        "Git의 desired state와 실제 프로덕션 상태를 지속적으로 비교하여 차이를 알리거나 조정한다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "GitOps = Git is the single source of truth for desired state; a controller (Argo CD, Flux) continuously reconciles the live cluster toward it and reports/corrects drift. Changes flow from Git to the cluster, not the reverse (A). Dependency PRs are Dependabot/Renovate territory.",
      "ko": "GitOps는 Git을 desired state의 single source of truth로 두고, 컨트롤러(Argo CD, Flux)가 클러스터 실제 상태를 지속적으로 Git과 비교해 drift를 알리거나 자동 조정(reconcile)합니다. 변경은 Git→클러스터 방향이지 그 반대(A)가 아니며, 의존성 PR 생성은 Dependabot/Renovate의 역할입니다."
    },
    "ref": "https://opengitops.dev/"
  },
  {
    "id": "local-047",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workloads / DaemonSet",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource workload ensures that all (or some) nodes run a copy of a Pod?",
      "ko": "모든(또는 일부) 노드에서 Pod 복사본이 하나씩 실행되도록 보장하는 Kubernetes 워크로드 리소스는?"
    },
    "choices": {
      "en": [
        "ReplicaSet",
        "StatefulSet",
        "DaemonSet",
        "Deployment"
      ],
      "ko": [
        "ReplicaSet",
        "StatefulSet",
        "DaemonSet",
        "Deployment"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A DaemonSet schedules exactly one Pod per (selected) node and adds Pods as nodes join; typical for log agents, node monitoring, CNI/CSI plugins. ReplicaSet/Deployment maintain a replica count regardless of node placement; StatefulSet gives stable identities.",
      "ko": "DaemonSet은 (선택된) 노드마다 Pod를 정확히 하나씩 배치하고 노드가 추가되면 Pod도 추가합니다. 로그 agent, 노드 모니터링, CNI/CSI 플러그인에 전형적으로 사용됩니다. ReplicaSet/Deployment는 노드 배치와 무관하게 replica 수를 유지하고, StatefulSet은 고정 identity를 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"
  },
  {
    "id": "local-048",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API Extension / CRD",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "We can extend the Kubernetes API with Kubernetes API Aggregation Layer and CRDs. What is CRD?",
      "ko": "Kubernetes API는 API Aggregation Layer와 CRD로 확장할 수 있습니다. CRD는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Custom Resource Definition",
        "Custom Restricted Definition",
        "Customized RUST Definition",
        "Custom RUST Definition"
      ],
      "ko": [
        "Custom Resource Definition",
        "Custom Restricted Definition",
        "Customized RUST Definition",
        "Custom RUST Definition"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A CustomResourceDefinition registers a new resource kind in the API server without writing an API server; combined with a controller it forms the Operator pattern. The aggregation layer instead plugs in a separate extension API server (e.g. metrics-server).",
      "ko": "CustomResourceDefinition은 별도 API server 없이 API server에 새로운 resource kind를 등록합니다. 컨트롤러와 결합하면 Operator 패턴이 됩니다. Aggregation layer는 별도의 extension API server(예: metrics-server)를 연결하는 방식입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"
  },
  {
    "id": "local-049",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Community and Governance",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "The Kubernetes project work is carried primarily by SIGs. What does SIG stand for?",
      "ko": "Kubernetes 프로젝트 작업은 주로 SIG에서 이루어집니다. SIG는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Special Interest Group",
        "Software Installation Guide",
        "Support and Information Group",
        "Strategy Implementation Group"
      ],
      "ko": [
        "Special Interest Group",
        "Software Installation Guide",
        "Support and Information Group",
        "Strategy Implementation Group"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes is organized into Special Interest Groups (sig-network, sig-node, sig-auth, …) that own code and design areas; smaller cross-cutting efforts are Working Groups and User Groups, all governed by the Steering Committee.",
      "ko": "Kubernetes는 코드·설계 영역을 소유하는 Special Interest Group(sig-network, sig-node, sig-auth 등)으로 조직되어 있습니다. 횡단적·한시적 작업은 Working Group, 사용자 모임은 User Group이며 전체는 Steering Committee가 관장합니다."
    },
    "ref": "https://github.com/kubernetes/community/blob/master/governance.md"
  },
  {
    "id": "local-050",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Security / 4C",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the order of 4C's in Cloud Native Security, starting with the layer that a user has the most control over?",
      "ko": "Cloud Native Security의 4C를 사용자가 가장 많이 제어할 수 있는 계층부터 나열한 순서는?"
    },
    "choices": {
      "en": [
        "Cloud -> Container -> Cluster -> Code",
        "Container -> Cluster -> Code -> Cloud",
        "Cluster -> Container -> Code -> Cloud",
        "Code -> Container -> Cluster -> Cloud"
      ],
      "ko": [
        "Cloud -> Container -> Cluster -> Code",
        "Container -> Cluster -> Code -> Cloud",
        "Cluster -> Container -> Code -> Cloud",
        "Code -> Container -> Cluster -> Cloud"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The 4Cs are nested layers: Code (innermost, fully yours) → Container → Cluster → Cloud/datacenter (outermost, trusted base). Each layer relies on the security of the layer outside it, so you have the most direct control over Code and the least over Cloud.",
      "ko": "4C는 중첩된 계층입니다: Code(가장 안쪽, 전적으로 사용자 통제) → Container → Cluster → Cloud/datacenter(가장 바깥, 신뢰 기반). 각 계층은 바깥 계층의 보안에 의존하므로 Code를 가장 직접 제어하고 Cloud는 가장 적게 제어합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-051",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Container Runtimes / Sandboxing",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which group of container runtimes provides additional sandboxed isolation and elevated security?",
      "ko": "다음 중 추가적인 sandbox 격리와 강화된 보안을 제공하는 container runtime 그룹은?"
    },
    "choices": {
      "en": [
        "rune, cgroups",
        "docker, containerd",
        "runsc, kata",
        "crun, cri-o"
      ],
      "ko": [
        "rune, cgroups",
        "docker, containerd",
        "runsc, kata",
        "crun, cri-o"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "runsc is gVisor's runtime (user-space kernel intercepting syscalls) and Kata Containers run each Pod in a lightweight VM; both are selected via a RuntimeClass. runc/crun are standard OCI runtimes sharing the host kernel, containerd/CRI-O/docker are higher-level runtimes, cgroups is a kernel feature.",
      "ko": "runsc는 gVisor의 runtime(user-space 커널이 syscall을 가로챔), Kata Containers는 Pod마다 경량 VM을 띄우며 둘 다 RuntimeClass로 선택합니다. runc/crun은 호스트 커널을 공유하는 표준 OCI runtime, containerd/CRI-O/docker는 상위 수준 runtime, cgroups는 커널 기능입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/runtime-class/"
  },
  {
    "id": "local-052",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Service Mesh",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the common standard for Service Meshes?",
      "ko": "Service Mesh의 공통 표준은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Service Mesh Specification (SMS)",
        "Service Mesh Technology (SMT)",
        "Service Mesh Interface (SMI)",
        "Service Mesh Function (SMF)"
      ],
      "ko": [
        "Service Mesh Specification (SMS)",
        "Service Mesh Technology (SMT)",
        "Service Mesh Interface (SMI)",
        "Service Mesh Function (SMF)"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Service Mesh Interface (SMI) was created as a standard Kubernetes service-mesh interface, covering common capabilities such as traffic splitting, access control, and metrics. CNCF announced its archival on October 3, 2023, after maintainers consolidated work toward the Gateway API GAMMA initiative. SMI is the historical specification represented by these choices; this practice item does not establish that it is an expected answer on a current real certification exam.",
      "ko": "Service Mesh Interface(SMI)는 트래픽 분할, 접근 제어, 메트릭 같은 공통 기능을 다루는 Kubernetes 서비스 메시 표준 인터페이스로 만들어졌습니다. 유지관리자들이 Gateway API의 GAMMA 이니셔티브로 작업을 모으면서 CNCF는 2023년 10월 3일 프로젝트 아카이브를 발표했습니다. 이 보기에서 가리키는 역사적 사양은 SMI이지만, 이 연습 문항이 현재 실제 자격시험의 기대 정답이라는 근거는 아닙니다."
    },
    "ref": "https://smi-spec.io/"
  },
  {
    "id": "local-053",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Networking / Ingress",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement about Ingress is correct?",
      "ko": "Ingress에 관한 설명으로 올바른 것은?"
    },
    "choices": {
      "en": [
        "Ingress provides a simple way to track network endpoints within a cluster.",
        "Ingress is a Service type like NodePort and ClusterIP.",
        "Ingress is a construct that allows you to specify how a Pod is allowed to communicate.",
        "Ingress exposes routes from outside the cluster to services in the cluster."
      ],
      "ko": [
        "Ingress는 클러스터 내 네트워크 endpoint를 추적하는 간단한 방법을 제공한다.",
        "Ingress는 NodePort, ClusterIP와 같은 Service type이다.",
        "Ingress는 Pod가 어떻게 통신할 수 있는지를 지정하는 구성 요소다.",
        "Ingress는 클러스터 외부에서 클러스터 내 Service로의 경로를 노출한다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Ingress is an L7 (HTTP/HTTPS) routing object that maps external hosts/paths to Services, implemented by an Ingress controller (NGINX, Traefik…). It is not a Service type (B); endpoint tracking is EndpointSlice (A); Pod communication rules are NetworkPolicy (C).",
      "ko": "Ingress는 외부 host/path를 Service로 매핑하는 L7(HTTP/HTTPS) 라우팅 오브젝트이며 Ingress controller(NGINX, Traefik 등)가 구현합니다. Service type이 아니고(B), endpoint 추적은 EndpointSlice(A), Pod 통신 규칙은 NetworkPolicy(C)입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "local-054",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Networking / Service Discovery",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What best describes cloud native service discovery?",
      "ko": "cloud native service discovery를 가장 잘 설명한 것은?"
    },
    "choices": {
      "en": [
        "It's a mechanism for applications and microservices to locate each other on a network.",
        "It's a procedure for discovering a MAC address, associated with a given IP address.",
        "It's used for automatically assigning IP addresses to devices connected to the network.",
        "It's a protocol that turns human-readable domain names into IP addresses on the Internet."
      ],
      "ko": [
        "애플리케이션과 microservice가 네트워크상에서 서로를 찾는 메커니즘이다.",
        "주어진 IP 주소에 대응하는 MAC 주소를 알아내는 절차다.",
        "네트워크에 연결된 장치에 IP 주소를 자동 할당하는 데 사용된다.",
        "사람이 읽을 수 있는 도메인 이름을 인터넷상의 IP 주소로 바꾸는 프로토콜이다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Service discovery lets dynamic workloads find each other without hard-coded addresses; in Kubernetes it is provided by Services plus cluster DNS (CoreDNS) and environment variables. B describes ARP, C DHCP, D public DNS.",
      "ko": "Service discovery는 동적으로 바뀌는 워크로드가 주소를 하드코딩하지 않고 서로를 찾게 해 줍니다. Kubernetes에서는 Service와 cluster DNS(CoreDNS), 환경 변수가 이를 제공합니다. B는 ARP, C는 DHCP, D는 일반 인터넷 DNS 설명입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#discovering-services"
  },
  {
    "id": "local-055",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Container Runtimes / OCI",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What native runtime is Open Container Initiative (OCI) compliant?",
      "ko": "다음 중 Open Container Initiative(OCI) 호환 native runtime은 무엇입니까?"
    },
    "choices": {
      "en": [
        "runC",
        "runV",
        "kata-containers",
        "gvisor"
      ],
      "ko": [
        "runC",
        "runV",
        "kata-containers",
        "gvisor"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "runc is the reference implementation of the OCI runtime-spec, donated by Docker; containerd and CRI-O invoke it to create containers natively on the host kernel. Kata (VM-based) and gVisor/runsc (user-space kernel) are sandboxed runtimes, runV is a deprecated hypervisor runtime that merged into Kata.",
      "ko": "runc는 Docker가 기증한 OCI runtime-spec의 reference 구현으로, containerd와 CRI-O가 호스트 커널 위에 컨테이너를 만들 때 호출합니다. Kata(VM 기반)와 gVisor/runsc(user-space 커널)는 sandbox runtime이고, runV는 Kata로 합쳐진 옛 hypervisor runtime입니다."
    },
    "ref": "https://github.com/opencontainers/runc"
  },
  {
    "id": "local-056",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workloads / Deployment",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which API object is the recommended way to run a scalable, stateless application on your cluster?",
      "ko": "클러스터에서 확장 가능한 stateless 애플리케이션을 실행할 때 권장되는 API 오브젝트는?"
    },
    "choices": {
      "en": [
        "ReplicaSet",
        "Deployment",
        "DaemonSet",
        "Pod"
      ],
      "ko": [
        "ReplicaSet",
        "Deployment",
        "DaemonSet",
        "Pod"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Deployment manages ReplicaSets and adds declarative rolling updates and rollbacks, which is why the docs recommend it over using ReplicaSets or bare Pods directly. DaemonSet is one-Pod-per-node, StatefulSet is for stateful apps.",
      "ko": "Deployment는 ReplicaSet을 관리하면서 선언적 rolling update와 rollback을 제공하므로, 공식 문서는 ReplicaSet이나 Pod를 직접 쓰는 대신 Deployment를 권장합니다. DaemonSet은 노드당 1 Pod, StatefulSet은 stateful 앱용입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
  },
  {
    "id": "local-057",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Architecture / kubelet",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the purpose of the kubelet component within a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 kubelet 컴포넌트의 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A dashboard for Kubernetes Clusters that allows management and troubleshooting of applications.",
        "A network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.",
        "A component that watches for newly created Pods with no assigned node, and selects a node for them to run on.",
        "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod."
      ],
      "ko": [
        "애플리케이션 관리·트러블슈팅을 위한 Kubernetes 클러스터 대시보드.",
        "각 노드에서 실행되며 Kubernetes Service 개념의 일부를 구현하는 네트워크 proxy.",
        "노드가 배정되지 않은 새 Pod를 감지하여 실행할 노드를 선택하는 컴포넌트.",
        "각 노드에서 실행되는 agent로, Pod 안의 컨테이너가 실행 중인지 보장한다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "kubelet is the node agent: it watches PodSpecs assigned to its node, drives the container runtime via CRI, runs probes and reports status. B is kube-proxy, C is kube-scheduler, A is the Dashboard add-on.",
      "ko": "kubelet은 노드 agent입니다. 자기 노드에 배정된 PodSpec을 watch하고 CRI를 통해 container runtime을 구동하며 probe 실행과 상태 보고를 합니다. B는 kube-proxy, C는 kube-scheduler, A는 Dashboard add-on 설명입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/#kubelet"
  },
  {
    "id": "local-058",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Security / Authorization",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the default value for authorization-mode in Kubernetes API server?",
      "ko": "Kubernetes API server의 authorization-mode 기본값은 무엇입니까?"
    },
    "choices": {
      "en": [
        "--authorization-mode=RBAC",
        "--authorization-mode=AlwaysAllow",
        "--authorization-mode=AlwaysDeny",
        "--authorization-mode=ABAC"
      ],
      "ko": [
        "--authorization-mode=RBAC",
        "--authorization-mode=AlwaysAllow",
        "--authorization-mode=AlwaysDeny",
        "--authorization-mode=ABAC"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "If the flag is omitted, kube-apiserver defaults to AlwaysAllow, which authorizes every authenticated request. Installers such as kubeadm explicitly set `Node,RBAC`, so real clusters use RBAC, but the component default is AlwaysAllow.",
      "ko": "플래그를 생략하면 kube-apiserver는 AlwaysAllow를 사용하여 인증된 모든 요청을 허용합니다. kubeadm 같은 설치 도구는 명시적으로 `Node,RBAC`를 설정하므로 실제 클러스터는 RBAC를 쓰지만, 컴포넌트 자체 기본값은 AlwaysAllow입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "local-059",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Autoscaling / Cost",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Let's assume that an organization needs to process large amounts of data in bursts, on a cloud-based Kubernetes cluster. For instance: each Monday morning, they need to run a batch of 1000 compute jobs of 1 hour each, and these jobs must be completed by Monday night. What's going to be the most cost-effective method?",
      "ko": "어떤 조직이 클라우드 기반 Kubernetes 클러스터에서 대량의 데이터를 burst 형태로 처리해야 합니다. 예를 들어 매주 월요일 아침 1시간짜리 compute job 1000개를 실행하고 월요일 밤까지 완료해야 합니다. 가장 비용 효율적인 방법은?"
    },
    "choices": {
      "en": [
        "Run a group of nodes with the exact required size to complete the batch on time, and use a combination of taints, tolerations, and nodeSelectors to reserve these nodes to the batch jobs.",
        "Leverage the Kubernetes Cluster Autoscaler to automatically start and stop nodes as they're needed.",
        "Commit to a specific level of spending to get discounted prices (with e.g. \"reserved instances\" or similar mechanisms).",
        "Use PriorityClasses so that the weekly batch job gets priority over other workloads running on the cluster, and can be completed on time."
      ],
      "ko": [
        "배치를 제때 끝낼 수 있는 정확한 크기의 노드 그룹을 운영하고 taint/toleration/nodeSelector로 그 노드들을 배치 작업 전용으로 예약한다.",
        "Kubernetes Cluster Autoscaler를 활용하여 필요할 때 노드를 자동으로 시작·중지한다.",
        "일정 지출을 약정하여 할인 가격(reserved instance 등)을 받는다.",
        "PriorityClass를 사용하여 주간 배치 작업이 다른 워크로드보다 우선권을 갖고 제때 완료되도록 한다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The load is bursty (one day a week), so paying only while the jobs run is cheapest: Cluster Autoscaler adds nodes when Pods are Pending and removes them when idle. Dedicated nodes (A) and reserved instances (C) pay for idle capacity the other six days; PriorityClasses (D) affect ordering, not cost.",
      "ko": "부하가 주 1회 burst이므로 job이 도는 동안만 비용을 내는 것이 가장 쌉니다. Cluster Autoscaler는 Pending Pod가 생기면 노드를 추가하고 유휴 시 제거합니다. 전용 노드(A)와 reserved instance(C)는 나머지 6일의 유휴 용량 비용을 내야 하고, PriorityClass(D)는 순서만 바꾸지 비용과 무관합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling/"
  },
  {
    "id": "local-060",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Networking / Service",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a Kubernetes service with no cluster IP address called?",
      "ko": "cluster IP 주소가 없는 Kubernetes Service를 무엇이라 부릅니까?"
    },
    "choices": {
      "en": [
        "Headless Service",
        "Nodeless Service",
        "IPLess Service",
        "Specless Service"
      ],
      "ko": [
        "Headless Service",
        "Nodeless Service",
        "IPLess Service",
        "Specless Service"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Setting `spec.clusterIP: None` creates a headless Service: no virtual IP and no kube-proxy load balancing; DNS returns the individual Pod IPs (A records), which StatefulSets use for per-Pod stable names.",
      "ko": "`spec.clusterIP: None`으로 만들면 headless Service가 됩니다. 가상 IP와 kube-proxy 로드밸런싱이 없고 DNS가 개별 Pod IP(A record)를 돌려주며, StatefulSet이 Pod별 고정 이름에 사용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services"
  },
  {
    "id": "local-061",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "CI/CD",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "CI/CD stands for:",
      "ko": "CI/CD는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Continuous Information / Continuous Development",
        "Continuous Integration / Continuous Development",
        "Cloud Integration / Cloud Development",
        "Continuous Integration / Continuous Deployment"
      ],
      "ko": [
        "Continuous Information / Continuous Development",
        "Continuous Integration / Continuous Development",
        "Cloud Integration / Cloud Development",
        "Continuous Integration / Continuous Deployment"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "CI = Continuous Integration (merge and test frequently); CD = Continuous Delivery (always releasable) or Continuous Deployment (every passing change goes to production automatically). 'Continuous Development' is not a standard term.",
      "ko": "CI는 Continuous Integration(자주 merge·테스트), CD는 Continuous Delivery(항상 배포 가능 상태) 또는 Continuous Deployment(통과한 변경을 자동으로 프로덕션 배포)입니다. 'Continuous Development'는 표준 용어가 아닙니다."
    },
    "ref": "https://glossary.cncf.io/continuous-delivery/"
  },
  {
    "id": "local-062",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Security / Secrets",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What default level of protection is applied to the data in Secrets in the Kubernetes API?",
      "ko": "Kubernetes API의 Secret 데이터에 기본적으로 적용되는 보호 수준은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The values use AES Symmetric Encryption",
        "The values are stored in plain text",
        "The values are encoded with SHA256 hashes",
        "The values are base64 encoded"
      ],
      "ko": [
        "값이 AES 대칭 암호화된다.",
        "값이 평문으로 저장된다.",
        "값이 SHA256 해시로 인코딩된다.",
        "값이 base64로 인코딩된다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Secret `data` values are base64-encoded, which is encoding, not encryption — anyone with API read access or etcd access can decode them. Encryption at rest requires configuring an EncryptionConfiguration on kube-apiserver; RBAC restricts who can read Secrets.",
      "ko": "Secret의 `data` 값은 base64 인코딩일 뿐 암호화가 아니므로 API 읽기 권한이나 etcd 접근이 있으면 누구나 디코딩할 수 있습니다. 저장 시 암호화는 kube-apiserver에 EncryptionConfiguration을 설정해야 하고, 읽기 권한은 RBAC로 제한합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-063",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod Lifecycle",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "If a Pod was waiting for container images to download on the scheduled node, what state would it be in?",
      "ko": "스케줄된 노드에서 Pod가 컨테이너 이미지 다운로드를 기다리는 중이라면 Pod는 어떤 상태입니까?"
    },
    "choices": {
      "en": [
        "Failed",
        "Succeeded",
        "Unknown",
        "Pending"
      ],
      "ko": [
        "Failed",
        "Succeeded",
        "Unknown",
        "Pending"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A Pod stays in phase Pending from acceptance by the API server until all its containers have started; this covers both waiting for a node (unscheduled) and, after scheduling, pulling images. Failed/Succeeded are terminal phases, Unknown means the node stopped reporting.",
      "ko": "Pod는 API server에 수락된 뒤 모든 컨테이너가 시작될 때까지 Pending phase에 머뭅니다. 노드 미배정 상태뿐 아니라 스케줄 후 이미지 pull 중인 시간도 포함됩니다. Failed/Succeeded는 종료 phase이고 Unknown은 노드가 상태를 보고하지 못할 때입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase"
  },
  {
    "id": "local-075",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Service mesh architecture · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which pair represents the core components of a typical service mesh?",
      "ko": "일반적인 서비스 메시의 핵심 구성 요소 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Service proxies and a control plane that configures them",
        "Distributed tracing collectors and persistent log storage",
        "Circuit-breaking behavior and Kubernetes Pod scheduling",
        "A data plane and a separate runtime plane"
      ],
      "ko": [
        "서비스 프록시와 이를 구성하는 컨트롤 플레인",
        "분산 추적 수집기와 영구 로그 저장소",
        "서킷 브레이킹 동작과 Kubernetes Pod 스케줄링",
        "데이터 플레인과 별도의 런타임 플레인"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A typical mesh has service proxies in its data plane and a control plane that supplies configuration and policy. Tracing and log stores are observability integrations; Pod scheduling belongs to Kubernetes rather than the mesh; a separate runtime plane is not the standard architectural counterpart of the data plane.",
      "ko": "일반적인 서비스 메시는 데이터 플레인의 서비스 프록시와 설정·정책을 배포하는 컨트롤 플레인으로 구성됩니다. 추적 수집기와 로그 저장소는 관측 도구이고, Pod 스케줄링은 메시가 아니라 Kubernetes의 역할입니다. 별도의 런타임 플레인은 데이터 플레인에 대응하는 표준적인 구성 요소가 아닙니다."
    },
    "ref": "https://istio.io/latest/docs/ops/deployment/architecture/"
  },
  {
    "id": "local-077",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes objects · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed group contains the common top-level identity fields of a Kubernetes resource manifest?",
      "ko": "다음 중 Kubernetes 리소스 매니페스트의 공통 최상위 식별 필드를 나열한 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "apiVersion, kind, metadata",
        "kind, namespace, data",
        "apiVersion, metadata, namespace",
        "kind, metadata, data"
      ],
      "ko": [
        "apiVersion, kind, metadata",
        "kind, namespace, data",
        "apiVersion, metadata, namespace",
        "kind, metadata, data"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "apiVersion selects the API version, kind selects the resource type, and metadata contains identity information such as the name. Namespace normally belongs under metadata, and data is resource-specific. These are common resource-manifest identity fields, not a claim that every API payload or list wrapper has an identical required schema; spec also depends on the resource type.",
      "ko": "apiVersion은 API 버전을, kind는 리소스 종류를 지정하며 metadata는 이름 같은 식별 정보를 담습니다. namespace는 보통 metadata 아래에 있고 data는 리소스 종류에 따라 사용됩니다. 이 문항은 일반적인 리소스 매니페스트의 식별 필드를 비교하며, 모든 API 요청 본문이나 목록 래퍼가 같은 필수 스키마를 갖는다는 뜻은 아닙니다. spec도 리소스 종류에 따라 달라집니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/"
  },
  {
    "id": "local-081",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Network policies · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes feature must the network plugin support to control permitted traffic flows for workloads?",
      "ko": "워크로드에 허용되는 트래픽 흐름을 제어하려면 네트워크 플러그인이 어떤 Kubernetes 기능을 지원해야 합니까?"
    },
    "choices": {
      "en": [
        "Border Gateway Protocol (BGP)",
        "IP address management (IPAM)",
        "Pod Security Policy",
        "Network Policies"
      ],
      "ko": [
        "Border Gateway Protocol (BGP)",
        "IP 주소 관리(IPAM)",
        "Pod Security Policy",
        "Network Policies"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "NetworkPolicy specifies permitted ingress and egress for selected Pods, and enforcement requires a network plugin that supports it. BGP advertises routes and IPAM manages address allocation; neither supplies Kubernetes NetworkPolicy rules. The former PodSecurityPolicy mechanism governed Pod admission rather than network traffic. Creating a NetworkPolicy without an implementing network controller does not enforce it.",
      "ko": "NetworkPolicy는 선택된 Pod에 허용되는 인바운드·아웃바운드 트래픽을 지정하며, 실제 적용에는 이를 지원하는 네트워크 플러그인이 필요합니다. BGP는 경로를 광고하고 IPAM은 주소 할당을 관리하며 Kubernetes NetworkPolicy 규칙을 제공하는 기능이 아닙니다. 구형 PodSecurityPolicy는 네트워크 트래픽이 아니라 Pod 입장 허용을 다뤘습니다. NetworkPolicy를 구현하는 네트워크 컨트롤러 없이 리소스만 생성해도 정책이 적용되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-082",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service DNS · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why do Kubernetes workloads normally use a Service DNS name instead of a Pod IP for discovery?",
      "ko": "Kubernetes 워크로드가 서비스 검색에 Pod IP 대신 Service DNS 이름을 일반적으로 사용하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The Service name remains a stable discovery address while backend Pod IPs can change",
        "A Service DNS name automatically encrypts every application protocol",
        "A Service DNS name routes traffic to virtual machines outside every cluster",
        "Pod IPs are never assigned until a Service is created"
      ],
      "ko": [
        "백엔드 Pod IP는 바뀔 수 있지만 Service 이름은 안정적인 서비스 검색 주소로 유지된다",
        "Service DNS 이름이 모든 애플리케이션 프로토콜을 자동으로 암호화한다",
        "Service DNS 이름이 모든 클러스터 외부 가상 머신으로 트래픽을 전달한다",
        "Service가 생성되기 전에는 Pod IP가 절대 할당되지 않는다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "While the Service exists, its DNS name gives clients a stable discovery name despite changing backends. A normal ClusterIP Service resolves to its cluster IP, a headless Service can return backend Pod IPs, and ExternalName supplies a DNS alias. A stable name does not mean every Service has a stable virtual IP. DNS naming itself does not encrypt application traffic.",
      "ko": "Service가 존재하는 동안 DNS 이름은 백엔드가 바뀌어도 클라이언트에 안정적인 검색 이름을 제공합니다. 일반 ClusterIP Service는 cluster IP로 해석되고 headless Service는 백엔드 Pod IP를 반환할 수 있으며 ExternalName은 DNS 별칭을 제공합니다. 이름이 안정적이라는 것이 모든 Service에 고정 가상 IP가 있다는 뜻은 아닙니다. DNS 이름 기능 자체가 애플리케이션 트래픽을 암호화하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"
  },
  {
    "id": "local-083",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Labels and selectors · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes mechanism is the core grouping primitive for identifying a set of objects?",
      "ko": "객체 집합을 식별할 때 사용하는 Kubernetes의 핵심 그룹화 메커니즘은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Custom Resources",
        "Labels",
        "Label Selector",
        "Pod"
      ],
      "ko": [
        "커스텀 리소스(Custom Resources)",
        "레이블(Labels)",
        "레이블 셀렉터(Label Selector)",
        "Pod"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A label selector identifies a set of objects by evaluating their labels, and Kubernetes documents it as the core grouping primitive. Labels are the attached key/value attributes; the selector expresses which attributes a group must match. Custom resources are API resources and a Pod runs containers; neither is the generic object-selection mechanism.",
      "ko": "레이블 셀렉터는 객체의 레이블을 평가하여 객체 집합을 식별하며, Kubernetes 문서는 이를 핵심 그룹화 수단으로 설명합니다. 레이블은 객체에 붙는 키·값 속성이고 셀렉터는 그룹에 속하기 위한 일치 조건을 표현합니다. 커스텀 리소스는 API 리소스이고 Pod는 컨테이너를 실행하는 단위이지, 일반적인 객체 선택 메커니즘이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"
  },
  {
    "id": "local-086",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes API · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which control-plane component exposes the Kubernetes API for creating and managing objects?",
      "ko": "객체를 생성하고 관리하는 Kubernetes API를 제공하는 제어 플레인 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-apiserver",
        "etcd",
        "kube-controller-manager",
        "kube-proxy"
      ],
      "ko": [
        "kube-apiserver",
        "etcd",
        "kube-controller-manager",
        "kube-proxy"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kube-apiserver exposes the HTTP API for Kubernetes resource access. etcd stores cluster API data, kube-controller-manager runs reconciliation controllers, and kube-proxy implements Service networking.",
      "ko": "kube-apiserver는 Kubernetes 리소스에 접근하는 HTTP API를 제공합니다. etcd는 클러스터 API 데이터를 저장하고 kube-controller-manager는 조정 컨트롤러를 실행하며 kube-proxy는 Service 네트워킹을 구현합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/kubernetes-api/"
  },
  {
    "id": "local-089",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service discovery · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which pair are Kubernetes' documented primary Service-discovery mechanisms?",
      "ko": "Kubernetes 문서에서 설명하는 주요 Service 검색 메커니즘 두 가지는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Environment variables and DNS",
        "API calls and LDAP",
        "Labels and RADIUS",
        "Selectors and DHCP"
      ],
      "ko": [
        "환경 변수와 DNS",
        "API 호출과 LDAP",
        "레이블과 RADIUS",
        "셀렉터와 DHCP"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes documents Service discovery through environment variables and DNS. Service-related variables are populated when a Pod is created after the Service exists and are not automatically refreshed for later Services. Cluster DNS provides name-based discovery. LDAP, RADIUS, and DHCP are not the documented Service-discovery pair.",
      "ko": "Kubernetes는 환경 변수와 DNS를 통한 Service 검색을 설명합니다. Service 관련 환경 변수는 해당 Service가 존재할 때 생성된 Pod에 채워지며, 이후 생성된 Service를 반영하도록 자동 갱신되지 않습니다. 클러스터 DNS는 이름 기반 검색을 제공합니다. LDAP, RADIUS, DHCP는 문서에서 설명하는 Service 검색 방식의 조합이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#discovering-services"
  },
  {
    "id": "local-090",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Metrics and observability · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Prometheus metric type is intended for one current measurement, such as the temperature of a device or the number of concurrent requests?",
      "ko": "장치의 온도나 동시 요청 수처럼 하나의 현재 측정값을 나타내도록 설계된 Prometheus 메트릭 유형은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Gauge",
        "Counter",
        "Histogram",
        "Summary"
      ],
      "ko": [
        "Gauge",
        "Counter",
        "Histogram",
        "Summary"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Gauge represents one current numerical measurement that may rise or fall, such as temperature or concurrent requests. A Counter accumulates a total and normally only increases, apart from resets. Histograms and Summaries describe distributions of observations rather than one current scalar measurement.",
      "ko": "Gauge는 온도나 동시 요청 수처럼 오르내릴 수 있는 하나의 현재 수치 측정값을 나타냅니다. Counter는 누적 합계를 기록하며 초기화되는 경우를 제외하면 증가만 합니다. Histogram과 Summary는 하나의 현재 스칼라 측정값이 아니라 관측값의 분포를 설명합니다."
    },
    "ref": "https://prometheus.io/docs/concepts/metric_types/#gauge"
  },
  {
    "id": "local-091",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container health probes · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component performs the configured liveness, readiness, and startup probes for containers?",
      "ko": "컨테이너에 설정된 liveness, readiness, startup probe를 수행하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubelet",
        "kube-apiserver",
        "kube-scheduler",
        "kube-controller-manager"
      ],
      "ko": [
        "kubelet",
        "kube-apiserver",
        "kube-scheduler",
        "kube-controller-manager"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The kubelet executes configured container probes. A startup probe gates liveness and readiness until it succeeds. Readiness contributes to Pod readiness and usual Service backend eligibility, not packet filtering; Service options can alter backend treatment. Liveness failure can trigger a restart. Slow initialization alone does not make a startup probe mandatory.",
      "ko": "kubelet이 설정된 컨테이너 probe를 수행합니다. startup probe가 성공하기 전에는 liveness·readiness probe를 실행하지 않습니다. readiness는 Pod 준비 상태와 일반적인 Service 백엔드 사용 여부에 영향을 주지만 패킷 필터링은 아니며 Service 옵션에 따라 백엔드 처리도 달라집니다. liveness 실패는 재시작을 유도할 수 있습니다. 초기화가 느리다는 것만으로 startup probe가 필수가 되지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/"
  },
  {
    "id": "local-094",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "CNCF terminology · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which is the full name abbreviated as CNCF?",
      "ko": "CNCF의 정식 명칭은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Cloud Native Community Foundation",
        "Cloud Native Computing Foundation",
        "Cloud Neutral Computing Foundation",
        "Cloud Neutral Community Foundation"
      ],
      "ko": [
        "Cloud Native Community Foundation",
        "Cloud Native Computing Foundation",
        "Cloud Neutral Computing Foundation",
        "Cloud Neutral Community Foundation"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The official name is Cloud Native Computing Foundation. Native and Computing are both part of the name; Community and Neutral are substitutions, not the official expansion.",
      "ko": "정식 명칭은 Cloud Native Computing Foundation입니다. Native와 Computing이 모두 명칭에 포함되며, Community나 Neutral로 바꾼 표현은 정식 명칭이 아닙니다."
    },
    "ref": "https://www.cncf.io/about/who-we-are/"
  },
  {
    "id": "local-096",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes API · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed interface is the central interaction point for Kubernetes users, cluster components, and external clients?",
      "ko": "Kubernetes 사용자, 클러스터 구성 요소, 외부 클라이언트가 상호작용하는 중심 인터페이스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl",
        "AWS Management Console",
        "Kubernetes API",
        "Google Cloud SDK"
      ],
      "ko": [
        "kubectl",
        "AWS Management Console",
        "Kubernetes API",
        "Google Cloud SDK"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The API server exposes the Kubernetes API, the shared HTTP interface used to query and change resource state. kubectl and other management tools are clients, not that central interface. This describes control-plane interaction, not a claim that all Pod-to-Pod application packets pass through the API server.",
      "ko": "API 서버는 리소스 상태를 조회하고 변경하는 공통 HTTP 인터페이스인 Kubernetes API를 제공합니다. kubectl과 다른 관리 도구는 클라이언트이지 중심 인터페이스 자체가 아닙니다. 이는 제어 플레인 상호작용을 뜻하며 모든 Pod 간 애플리케이션 패킷이 API 서버를 통과한다는 의미는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/kubernetes-api/"
  },
  {
    "id": "local-097",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "CRI implementations and adapters · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed component is not a CRI container runtime or a CRI runtime adapter?",
      "ko": "보기 중 CRI 컨테이너 런타임이나 CRI 런타임 어댑터가 아닌 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "CRI-O",
        "dockershim",
        "systemd",
        "containerd"
      ],
      "ko": [
        "CRI-O",
        "dockershim",
        "systemd",
        "containerd"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "systemd manages Linux systems and services; it is not a CRI implementation. CRI-O and containerd provide CRI runtime support, while dockershim was the built-in Docker Engine adapter and was removed in Kubernetes 1.24. This comparison concerns component roles, not a claim that historical dockershim is supported by current kubelets. A systemd cgroup driver also does not turn systemd itself into a CRI runtime.",
      "ko": "systemd는 Linux 시스템과 서비스를 관리하며 CRI 구현체가 아닙니다. CRI-O와 containerd는 CRI 런타임을 지원하고, dockershim은 Docker Engine용 내장 어댑터였으나 Kubernetes 1.24에서 제거됐습니다. 이 비교는 구성 요소의 역할을 묻는 것이며 구형 dockershim이 현재 kubelet에서 지원된다는 뜻은 아닙니다. systemd cgroup 드라이버를 사용한다고 systemd 자체가 CRI 런타임이 되는 것도 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
  },
  {
    "id": "local-098",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Cluster networking · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which statement describes the standard Kubernetes Pod network model, before intentional network segmentation is applied?",
      "ko": "의도적인 네트워크 분리를 적용하기 전의 표준 Kubernetes Pod 네트워크 모델을 설명하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Pods can communicate directly with other Pods across nodes using Pod IPs, without Pod-to-Pod NAT",
        "Each destination Pod must first be exposed through a Service before another Pod can reach it",
        "A Pod IP is visible only within that Pod and cannot be addressed by other Pods",
        "Service objects initiate connections to other Service objects from their virtual Service IPs"
      ],
      "ko": [
        "Pod는 Pod IP를 사용해 다른 노드의 Pod와 Pod 간 NAT 없이 직접 통신할 수 있음",
        "다른 Pod가 접근하려면 모든 대상 Pod를 먼저 Service로 노출해야 함",
        "Pod IP는 해당 Pod 내부에서만 보이며 다른 Pod가 주소로 사용할 수 없음",
        "Service 오브젝트가 자신의 가상 Service IP에서 다른 Service 오브젝트로 연결을 시작함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The standard model gives each Pod a cluster-wide IP and direct cross-node Pod connectivity without Pod-to-Pod NAT. A Service is not required for direct Pod-IP communication. Service IPs are stable virtual destinations that route to backend Pods, not source addresses of independently running Service objects. NetworkPolicy or other intentional segmentation can restrict traffic; this is a model requirement, not a promise that every connection is always allowed.",
      "ko": "표준 모델은 각 Pod에 클러스터 전체에서 사용하는 IP와 Pod 간 NAT 없는 노드 간 직접 연결을 제공합니다. Pod IP로 직접 통신할 때 Service는 필수가 아닙니다. Service IP는 백엔드 Pod로 라우팅하는 안정적인 가상 목적지이며, 독립적으로 실행되는 Service 오브젝트의 출발지 주소가 아닙니다. NetworkPolicy 등 의도적인 네트워크 분리는 트래픽을 제한할 수 있으므로, 모든 연결이 항상 허용된다는 뜻은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/#the-kubernetes-network-model"
  },
  {
    "id": "local-099",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Rollout monitoring · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which kubectl rollout subcommand monitors rollout progress for a Deployment, DaemonSet, or StatefulSet?",
      "ko": "Deployment, DaemonSet, StatefulSet의 롤아웃 진행 상황을 확인하는 kubectl rollout 하위 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl rollout watch",
        "kubectl rollout progress",
        "kubectl rollout state",
        "kubectl rollout status"
      ],
      "ko": [
        "kubectl rollout watch",
        "kubectl rollout progress",
        "kubectl rollout state",
        "kubectl rollout status"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The status subcommand reports rollout progress and, by default, watches the latest rollout until completion. Supply the resource type and name, for example kubectl rollout status deployment/web. The listed watch, progress, and state forms are not built-in rollout subcommands. The command tokens remain unchanged in either language.",
      "ko": "status 하위 명령은 롤아웃 진행 상황을 보여 주며 기본적으로 최신 롤아웃이 완료될 때까지 관찰합니다. kubectl rollout status deployment/web처럼 리소스 종류와 이름을 지정해야 합니다. 보기의 watch, progress, state는 내장 rollout 하위 명령이 아닙니다. 명령 토큰은 번역하지 않고 그대로 사용합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/"
  },
  {
    "id": "local-104",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod definition · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which description correctly defines a Kubernetes Pod?",
      "ko": "Kubernetes Pod를 올바르게 정의한 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A group of one or more co-located containers in Kubernetes",
        "A networked application in Kubernetes",
        "A storage volume in Kubernetes",
        "A single container in Kubernetes"
      ],
      "ko": [
        "Kubernetes에서 함께 배치되는 하나 이상의 컨테이너 그룹",
        "Kubernetes의 네트워크 애플리케이션",
        "Kubernetes의 스토리지 볼륨",
        "Kubernetes의 단일 컨테이너"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Pod is the smallest deployable unit: one or more co-located and co-scheduled containers with shared context such as networking and storage. It may hold one container, but its definition is not restricted to a single container. A volume or a networked application does not define this grouping unit.",
      "ko": "Pod는 네트워크와 스토리지 같은 환경을 공유하며 함께 배치·스케줄링되는 하나 이상의 컨테이너를 묶는 가장 작은 배포 단위입니다. 컨테이너 하나를 담을 수 있지만 단일 컨테이너로만 정의되지는 않습니다. 볼륨이나 네트워크 애플리케이션은 이 그룹 단위의 정의가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/"
  },
  {
    "id": "local-110",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespaces and labels · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement correctly distinguishes Kubernetes namespaces from labels?",
      "ko": "Kubernetes 네임스페이스와 label의 차이를 올바르게 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A namespace scopes and organizes namespaced resources, while labels are key/value metadata used for selection and queries",
        "A namespace is a packet firewall, while labels encrypt Pod traffic",
        "A label creates a separate API server, while a namespace selects container images",
        "Namespaces and labels are interchangeable names for the same mechanism"
      ],
      "ko": [
        "네임스페이스는 네임스페이스 범위 리소스를 구성하고 label은 선택·조회에 사용하는 키·값 메타데이터이다",
        "네임스페이스는 패킷 방화벽이고 label은 Pod 트래픽을 암호화한다",
        "label은 별도 API 서버를 생성하고 네임스페이스는 컨테이너 이미지를 선택한다",
        "네임스페이스와 label은 같은 메커니즘을 가리키는 서로 바꿔 쓸 수 있는 이름이다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Namespaces provide API name scope and logical organization; labels provide identifying metadata for selectors and queries. An existing object's metadata.namespace cannot be changed, while labels are generally editable subject to constraints; recreating in another namespace creates another object. Namespace objects can themselves be created/deleted dynamically. Neither mechanism alone is a network firewall or complete security boundary.",
      "ko": "네임스페이스는 API 이름 범위와 논리적 구성을 제공하고 label은 selector·조회에 쓰는 식별용 메타데이터입니다. 기존 객체의 metadata.namespace는 바꿀 수 없지만 label은 제약 안에서 일반적으로 수정할 수 있습니다. 다른 네임스페이스에 재생성하면 다른 객체가 됩니다. Namespace 객체 자체는 실행 중에도 생성·삭제할 수 있습니다. 어느 기능도 단독으로 네트워크 방화벽이나 완전한 보안 경계가 되지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-112",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "CNCF community roles · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which responsibility best reflects the CNCF Ambassador program's main mission?",
      "ko": "CNCF Ambassador 프로그램의 주된 사명을 가장 잘 나타내는 책임은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Supporting communities, organizing events, and advocating for cloud-native adoption and CNCF projects",
        "Managing foundation operations, budgets, sponsorships, and agreements",
        "Developing Kubernetes features by writing code, planning releases, and coordinating development",
        "Directing project governance by guiding development, reviewing code, and approving changes"
      ],
      "ko": [
        "커뮤니티를 지원하고 행사를 조직하며 클라우드 네이티브 도입과 CNCF 프로젝트를 알리는 것",
        "재단의 운영·예산·후원·계약을 관리하는 것",
        "코드 작성·릴리스 계획·개발 조정을 통해 Kubernetes 기능을 개발하는 것",
        "개발 방향 제시·코드 검토·변경 승인을 통해 프로젝트 거버넌스를 이끄는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "CNCF describes Ambassadors as extending its community mission through leadership and mentorship. Community support, events, and advocacy fit that role. Foundation business operations, Kubernetes feature development, and project governance are different responsibilities. An Ambassador may separately be a contributor or maintainer, but the program role does not itself grant project release or code-approval authority.",
      "ko": "CNCF는 Ambassador를 리더십과 멘토링으로 커뮤니티 사명을 확장하는 역할로 설명합니다. 커뮤니티 지원·행사·홍보가 그 역할에 부합합니다. 재단 사업 운영, Kubernetes 기능 개발, 프로젝트 거버넌스는 다른 책임입니다. Ambassador가 별도로 기여자나 유지관리자일 수는 있지만, 프로그램 역할 자체가 프로젝트 릴리스나 코드 승인 권한을 부여하는 것은 아닙니다."
    },
    "ref": "https://www.cncf.io/people/ambassadors/"
  },
  {
    "id": "local-114",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "ServiceAccount assignment · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How does a Pod select a ServiceAccount and receive its token by default?",
      "ko": "Pod는 ServiceAccount를 어떻게 지정하며 기본적으로 token을 어떻게 전달받습니까?"
    },
    "choices": {
      "en": [
        "Set `spec.serviceAccountName`; with automount enabled, Kubernetes projects that account's token into the Pod",
        "Bake an RBAC token into the container image; RBAC then selects the account automatically",
        "Set a nodeSelector; kube-scheduler injects a token for the matching node",
        "Set a namespace label; the API server grants every Pod the same permission"
      ],
      "ko": [
        "`spec.serviceAccountName`을 설정합니다. 자동 마운트가 활성화돼 있으면 해당 계정의 token이 projected volume으로 Pod에 제공됩니다",
        "컨테이너 이미지에 RBAC token을 넣으면 RBAC가 계정을 자동 선택합니다",
        "nodeSelector를 설정하면 kube-scheduler가 일치하는 노드의 token을 주입합니다",
        "네임스페이스 label을 설정하면 API 서버가 모든 Pod에 같은 권한을 부여합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "`spec.serviceAccountName` chooses the Pod's ServiceAccount. With automatic mounting enabled, Kubernetes provides a projected token for that account; RBAC bindings separately determine its permissions. This is the default Pod-assignment workflow. A valid bearer token embedded in an image may still authenticate, but baking credentials into images is insecure and is not the default assignment mechanism.",
      "ko": "`spec.serviceAccountName`으로 Pod의 ServiceAccount를 지정합니다. 자동 마운트가 활성화돼 있으면 해당 계정의 token이 projected volume으로 제공되며 권한은 RBAC binding으로 별도 결정합니다. 이 문항은 기본 Pod 계정 지정 절차를 다룹니다. 유효한 bearer token을 이미지에 넣어도 인증할 수는 있지만 인증 정보를 이미지에 포함하는 방식은 안전하지 않으며 기본 계정 지정 절차가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/service-accounts/"
  },
  {
    "id": "local-115",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Controller reconciliation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component maintains applications' desired state by reconciling resources such as Deployments and ReplicaSets?",
      "ko": "Deployment와 ReplicaSet 같은 리소스를 조정해 애플리케이션의 원하는 상태를 유지하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Controller Manager",
        "Kubernetes API Server",
        "kubelet",
        "etcd"
      ],
      "ko": [
        "Controller Manager",
        "Kubernetes API 서버",
        "kubelet",
        "etcd"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kube-controller-manager runs the built-in Deployment and ReplicaSet controllers, which observe resources and act to reconcile actual state with desired state. The API server exposes and processes the API, kubelet runs the assigned Pods' containers on a node, and etcd persists API data. Desired state is expressed in specifications; it is not a desired value written into the status field.",
      "ko": "kube-controller-manager는 Deployment와 ReplicaSet의 내장 컨트롤러를 실행하며 리소스를 관찰하고 실제 상태를 원하는 상태로 수렴시키는 작업을 수행합니다. API 서버는 API를 제공·처리하고 kubelet은 노드에 배정된 Pod의 컨테이너를 실행하며 etcd는 API 데이터를 저장합니다. 원하는 상태는 명세에 표현하는 것이지 status 필드에 원하는 값을 쓰는 뜻이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/controller/"
  },
  {
    "id": "local-116",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment strategies · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which rollout strategy does a Kubernetes Deployment use by default?",
      "ko": "Kubernetes Deployment가 기본적으로 사용하는 롤아웃 전략은 무엇입니까?"
    },
    "choices": {
      "en": [
        "RollingUpdate",
        "Recreate",
        "Blue/Green using separate Deployments",
        "Canary using a separate traffic split"
      ],
      "ko": [
        "RollingUpdate",
        "Recreate",
        "별도 Deployment를 사용하는 Blue/Green",
        "별도 트래픽 split을 사용하는 Canary"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Deployment defaults to RollingUpdate, which incrementally replaces old Pods with new ones. Recreate is an alternative Deployment strategy; Blue/Green and Canary are rollout patterns that require additional resources or traffic handling rather than being this default strategy.",
      "ko": "Deployment의 기본 전략은 RollingUpdate이며, 기존 Pod를 새 Pod로 점진적으로 교체합니다. Recreate는 다른 Deployment 전략입니다. Blue/Green과 Canary는 추가 리소스나 트래픽 분배가 필요한 배포 방식이며 Deployment의 기본 전략이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy"
  },
  {
    "id": "local-117",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "NetworkPolicy isolation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which behavior does Kubernetes NetworkPolicy define for selected Pods?",
      "ko": "Kubernetes NetworkPolicy는 선택한 Pod에 대해 어떤 동작을 정의합니까?"
    },
    "choices": {
      "en": [
        "Allowed ingress and egress traffic, with isolation determined separately for each direction",
        "Automatic encryption and obfuscation of all network traffic",
        "Blocking every loopback connection and all traffic from the Pod's own node",
        "Automatic recording of network security events"
      ],
      "ko": [
        "인그레스·이그레스 허용 트래픽과 방향별로 결정되는 격리 상태",
        "모든 네트워크 트래픽의 자동 암호화와 난독화",
        "모든 루프백 연결과 Pod가 실행되는 노드의 모든 트래픽 차단",
        "네트워크 보안 이벤트의 자동 기록"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "NetworkPolicy selects Pods and declares allowed ingress and egress flows. A direction becomes isolated when an applicable policy covers it; enforcement requires a supporting network plugin. NetworkPolicy itself does not encrypt traffic or log security events. Under the standard API model, a Pod cannot block access to itself, and traffic to or from its own node is allowed.",
      "ko": "NetworkPolicy는 Pod를 선택하고 허용되는 인그레스·이그레스 흐름을 선언합니다. 적용되는 정책이 특정 방향을 다루면 해당 방향이 격리되며, 실제 적용에는 이를 지원하는 네트워크 플러그인이 필요합니다. NetworkPolicy 자체는 트래픽을 암호화하거나 보안 이벤트를 기록하지 않습니다. 표준 API 모델에서는 Pod 자신에 대한 접근을 차단할 수 없고, 그 Pod가 실행되는 노드와의 트래픽은 허용됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-118",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "etcd performance · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which resource pair is especially important to etcd performance because requests must be replicated between members and written to durable storage?",
      "ko": "요청을 멤버 사이에 복제하고 영구 저장소에 기록해야 하는 etcd의 성능에서 특히 중요한 리소스 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Network throughput and disk I/O",
        "CPU and disk capacity",
        "CPU and RAM",
        "Network throughput and CPU"
      ],
      "ko": [
        "네트워크 처리량과 디스크 I/O",
        "CPU와 디스크 용량",
        "CPU와 RAM",
        "네트워크 처리량과 CPU"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "etcd consensus commits require member communication and durable disk writes. Network I/O latency and disk I/O latency set a physical lower bound on commit latency; adequate network bandwidth and fast storage also aid throughput and recovery. CPU, memory, and storage capacity still matter, and these two resources alone do not guarantee performance for every workload.",
      "ko": "etcd의 합의 커밋에는 멤버 간 통신과 디스크에 대한 영구 기록이 필요합니다. 네트워크 I/O 지연과 디스크 I/O 지연은 커밋 지연의 물리적 하한을 결정하며, 충분한 네트워크 대역폭과 빠른 저장소는 처리량과 복구에도 도움이 됩니다. CPU, 메모리, 저장 용량도 중요하므로 이 두 리소스만으로 모든 워크로드의 성능을 보장한다는 뜻은 아닙니다."
    },
    "ref": "https://etcd.io/docs/v3.6/op-guide/performance/"
  },
  {
    "id": "local-120",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Orchestration responsibilities · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which group describes the core runtime responsibilities of a container orchestration system?",
      "ko": "컨테이너 오케스트레이션 시스템의 핵심 런타임 책임을 나타내는 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Scheduling containers, scaling replicas, and managing container health",
        "Building container images, scaling replicas, and managing container health",
        "Debugging application code and managing container health",
        "Storing container images, scaling replicas, and managing container health"
      ],
      "ko": [
        "컨테이너 스케줄링, 복제본 확장·축소, 컨테이너 상태 점검과 복구",
        "컨테이너 이미지 빌드, 복제본 확장·축소, 컨테이너 상태 점검과 복구",
        "애플리케이션 코드 디버깅과 컨테이너 상태 점검·복구",
        "컨테이너 이미지 저장, 복제본 확장·축소, 컨테이너 상태 점검과 복구"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Container orchestration coordinates workload placement, scaling, and health management, including restarting or replacing failed containers. Image creation belongs to build tooling and image storage to registries. Kubernetes can expose logs and debugging facilities, but application-code debugging is not the core orchestration task that replaces scheduling in this list.",
      "ko": "컨테이너 오케스트레이션은 워크로드 배치, 확장·축소, 실패한 컨테이너의 재시작·교체 등 상태 관리를 조정합니다. 이미지 생성은 빌드 도구, 이미지 저장은 레지스트리의 역할입니다. Kubernetes가 로그와 디버깅 기능을 제공할 수는 있지만, 애플리케이션 코드 디버깅이 이 조합에서 스케줄링을 대신하는 핵심 오케스트레이션 작업은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/"
  },
  {
    "id": "local-121",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Hybrid cloud · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which description fits a hybrid-cloud architecture without adding unsupported restrictions?",
      "ko": "근거 없는 제한을 추가하지 않고 하이브리드 클라우드 아키텍처를 설명하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Integrating distinct public and private cloud infrastructures, which can include an on-premises private cloud",
        "Combining public and private cloud resources only when every data center belongs to the same provider",
        "Combining only public-cloud services while excluding data centers in different availability zones",
        "Combining public and private cloud resources while prohibiting serverless functions"
      ],
      "ko": [
        "서로 구별되는 퍼블릭·프라이빗 클라우드 인프라를 연결하며 온프레미스 프라이빗 클라우드도 포함할 수 있음",
        "모든 데이터센터가 같은 제공자에 속할 때만 퍼블릭·프라이빗 클라우드 리소스를 결합함",
        "서로 다른 가용 영역의 데이터센터를 제외하면서 퍼블릭 클라우드 서비스만 결합함",
        "서버리스 함수를 금지하면서 퍼블릭·프라이빗 클라우드 리소스를 결합함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "NIST describes hybrid cloud as distinct cloud infrastructures that remain separate entities but are connected by technology enabling data and application portability. Public/private integration with an on-premises private cloud is one valid case. Hybrid cloud does not require a single provider, exclude other availability zones, or prohibit serverless functions; those are unsupported restrictions in the distractors.",
      "ko": "NIST는 서로 구별되는 클라우드 인프라가 별도 구성으로 유지되면서 데이터와 애플리케이션 이동을 가능하게 하는 기술로 연결된 구성을 하이브리드 클라우드로 설명합니다. 온프레미스 프라이빗 클라우드를 포함한 퍼블릭·프라이빗 통합은 그 사례입니다. 단일 제공자만 사용하거나 다른 가용 영역을 제외하거나 서버리스 함수를 금지해야 한다는 요구는 없으므로 오답 보기의 제한은 근거가 없습니다."
    },
    "ref": "https://csrc.nist.gov/glossary/term/hybrid_cloud"
  },
  {
    "id": "local-122",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service endpoints · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "In Kubernetes Service routing, what do endpoint records describe?",
      "ko": "Kubernetes Service 라우팅에서 엔드포인트 기록은 무엇을 나타냅니까?"
    },
    "choices": {
      "en": [
        "Kubernetes records containing the IP addresses of Service backends, commonly matching Pods",
        "The Kubernetes cluster's API-server endpoint",
        "The name of a special Pod in the kube-system namespace",
        "A public IP address that is necessarily reachable from the Internet"
      ],
      "ko": [
        "Service 백엔드(일반적으로 선택된 Pod)의 IP 주소를 포함하는 Kubernetes 기록",
        "Kubernetes 클러스터의 API 서버 엔드포인트",
        "kube-system 네임스페이스의 특별한 Pod 이름",
        "반드시 인터넷에서 접근할 수 있는 공인 IP 주소"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Service endpoint objects record backend addresses rather than an API-server URL, a special system Pod name, or guaranteed public reachability. The older Endpoints API grouped backend addresses; current EndpointSlice objects efficiently track backend IPs, ports, and conditions. The Endpoints API is deprecated since Kubernetes v1.33; new integrations should use EndpointSlice.",
      "ko": "Service 엔드포인트 오브젝트는 API 서버 URL, 특별한 시스템 Pod 이름, 인터넷 접근이 보장된 공인 주소가 아니라 백엔드 주소를 기록합니다. 기존 Endpoints API는 백엔드 주소를 묶었고, 현재 EndpointSlice 오브젝트는 백엔드 IP·포트·상태를 효율적으로 추적합니다. Endpoints API는 Kubernetes v1.33부터 사용 중단 예정 상태이므로 새 연동에는 EndpointSlice를 사용해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/"
  },
  {
    "id": "local-123",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Cloud-native agility · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which organizational benefit explains the value of cloud-native architecture beyond its technology choices or novelty?",
      "ko": "기술 구성이나 새로움 자체를 넘어 클라우드 네이티브 아키텍처의 가치를 설명하는 조직적 이점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Reducing delivery barriers so teams can innovate more rapidly",
        "Using a stack of containers, microservices, and pipelines",
        "Being described as a modern approach to application deployment and pipelines",
        "Being described as bleeding-edge technology and services"
      ],
      "ko": [
        "제공·배포 과정의 장벽을 줄여 팀이 더 빠르게 혁신하도록 돕는 것",
        "컨테이너·마이크로서비스·파이프라인으로 구성된 스택을 사용하는 것",
        "애플리케이션 배포와 파이프라인에 현대적인 접근 방식이라고 불리는 것",
        "최신 첨단 기술과 서비스라고 불리는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Cloud-native practices and robust automation enable frequent, predictable changes with less toil, helping teams innovate faster. Containers, microservices, and pipelines describe technologies; modern or bleeding-edge labels do not themselves explain organizational value. This benefit reduces delivery barriers rather than removing every technical, financial, or organizational constraint.",
      "ko": "클라우드 네이티브 방식과 견고한 자동화는 반복 운영 작업을 줄이면서 변경을 자주, 예측 가능하게 적용하도록 하여 팀의 빠른 혁신을 돕습니다. 컨테이너·마이크로서비스·파이프라인은 기술 구성을 설명하며, 현대적이거나 최신이라는 표현 자체는 조직적 가치를 설명하지 않습니다. 이 이점은 제공·배포의 장벽을 줄인다는 뜻이지 모든 기술·비용·조직 제약을 없앤다는 뜻은 아닙니다."
    },
    "ref": "https://glossary.cncf.io/cloud-native-tech/"
  },
  {
    "id": "local-124",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Restricted capabilities · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Under the Kubernetes Restricted Pod Security Standard, which capability may a Linux container add back after dropping ALL?",
      "ko": "Kubernetes Restricted Pod Security Standard에서 Linux 컨테이너가 ALL을 제거한 뒤 다시 추가할 수 있는 capability는 무엇입니까?"
    },
    "choices": {
      "en": [
        "NET_BIND_SERVICE",
        "CHOWN",
        "SYS_CHROOT",
        "SETUID"
      ],
      "ko": [
        "NET_BIND_SERVICE",
        "CHOWN",
        "SYS_CHROOT",
        "SETUID"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Restricted requires Linux containers to drop ALL capabilities and permits only NET_BIND_SERVICE as an add-back. CHOWN, SYS_CHROOT, and SETUID appear in the less restrictive Baseline allowlist but are not allowed add-backs under Restricted. The capability control is OS-specific and is not applied to Windows Pods in the same way.",
      "ko": "Restricted는 Linux 컨테이너가 모든 capability를 제거하도록 요구하고 NET_BIND_SERVICE만 다시 추가하도록 허용합니다. CHOWN, SYS_CHROOT, SETUID는 덜 엄격한 Baseline 허용 목록에는 있지만 Restricted에서 다시 추가할 수는 없습니다. capability 제어는 운영체제별 규칙이므로 Windows Pod에는 같은 방식으로 적용되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted"
  },
  {
    "id": "local-125",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Deployment scaling commands · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement correctly describes kubectl methods for changing a Deployment's desired replica count?",
      "ko": "Deployment의 목표 복제본 수를 변경하는 kubectl 방법을 올바르게 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Both kubectl scale deployment/web --replicas=5 and editing spec.replicas with kubectl edit deployment/web are supported",
        "Only kubectl edit deployment/web can change the replica count",
        "Only kubectl scale-up deployment/web --replicas=5 can change the replica count",
        "Only kubectl scale deployment/web --replicas=5 can change the replica count"
      ],
      "ko": [
        "kubectl scale deployment/web --replicas=5와 kubectl edit deployment/web로 spec.replicas를 편집하는 방법을 모두 지원함",
        "kubectl edit deployment/web만 복제본 수를 변경할 수 있음",
        "kubectl scale-up deployment/web --replicas=5만 복제본 수를 변경할 수 있음",
        "kubectl scale deployment/web --replicas=5만 복제본 수를 변경할 수 있음"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl scale updates the desired replica count, and kubectl edit can update the Deployment's spec.replicas field. Neither method is exclusive. kubectl scale-up is not a standard kubectl subcommand; the command is scale. Editing a live object is an imperative operation, not the declarative apply workflow.",
      "ko": "kubectl scale은 목표 복제본 수를 갱신하고, kubectl edit으로 Deployment의 spec.replicas 필드를 수정할 수도 있습니다. 어느 한 방법만 가능한 것은 아닙니다. kubectl scale-up은 표준 kubectl 하위 명령이 아니며 올바른 명령은 scale입니다. 실행 중인 오브젝트를 직접 편집하는 것은 명령형 작업이지 선언형 apply 흐름이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_scale/"
  },
  {
    "id": "local-127",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Vertical versus horizontal scaling · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What changes when an application deployment is scaled vertically to meet demand?",
      "ko": "수요에 맞춰 애플리케이션 배포를 수직 확장·축소할 때 무엇이 바뀝니까?"
    },
    "choices": {
      "en": [
        "The resources allocated to each application instance, such as CPU or memory",
        "The number of different applications deployed",
        "The number of node instances in the cluster",
        "The number of instances of the same application"
      ],
      "ko": [
        "CPU·메모리처럼 애플리케이션 인스턴스마다 할당되는 리소스",
        "배포한 서로 다른 애플리케이션의 수",
        "클러스터의 노드 인스턴스 수",
        "같은 애플리케이션의 인스턴스 수"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Vertical scaling changes per-instance resource allocations, for example CPU or memory. Horizontal application scaling changes the number of replicas, while node scaling changes cluster capacity. Adding unrelated applications is neither of these. Kubernetes VPA adjusts Pod resource allocations; applying a change may resize a Pod in place or recreate it depending on the update mode and cluster support.",
      "ko": "수직 확장·축소는 CPU·메모리처럼 인스턴스당 리소스 할당을 변경합니다. 애플리케이션의 수평 확장·축소는 복제본 수를, 노드 확장·축소는 클러스터 용량을 변경합니다. 무관한 애플리케이션을 추가하는 것은 둘 중 어느 것도 아닙니다. Kubernetes VPA는 Pod 리소스 할당을 조정하며, 변경 적용 시에는 갱신 모드와 클러스터 지원에 따라 제자리 크기 변경 또는 Pod 재생성이 일어날 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/autoscaling/vertical-pod-autoscale/"
  },
  {
    "id": "local-128",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Dockerfile build instructions · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a Dockerfile?",
      "ko": "Dockerfile이란 무엇입니까?"
    },
    "choices": {
      "en": [
        "A Bash script for automatically building a Docker image",
        "A configuration file choosing the registry to which an image is pushed",
        "A text file of build instructions used to assemble a container image",
        "An image layer produced by a running container and stored on its host"
      ],
      "ko": [
        "Docker 이미지를 자동으로 빌드하는 Bash 스크립트",
        "이미지를 푸시할 레지스트리를 선택하는 설정 파일",
        "컨테이너 이미지를 구성하는 빌드 지침을 담은 텍스트 파일",
        "실행 중인 컨테이너가 생성하여 호스트에 저장한 이미지 레이어"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A Dockerfile is a text document of image-build instructions such as FROM, COPY, and RUN. It is not a Bash script, a registry-push destination configuration, or an already-created image layer. RUN may invoke a shell command, but Dockerfile syntax as a whole is not Bash syntax.",
      "ko": "Dockerfile은 FROM, COPY, RUN 같은 이미지 빌드 지침을 담은 텍스트 문서입니다. Bash 스크립트나 레지스트리 푸시 대상 설정 파일, 이미 생성된 이미지 레이어가 아닙니다. RUN이 셸 명령을 실행할 수는 있지만 Dockerfile 전체 문법이 Bash 문법인 것은 아닙니다."
    },
    "ref": "https://docs.docker.com/reference/dockerfile/"
  },
  {
    "id": "local-137",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "CloudEvents interoperability · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What problem does the CloudEvents specification address?",
      "ko": "CloudEvents specification은 어떤 문제를 해결합니까?"
    },
    "choices": {
      "en": [
        "Describing event data in a common format so it can interoperate across services, platforms, and systems",
        "Executing event handlers on a schedule as a workflow engine",
        "Defining one mandatory transport protocol for every event broker",
        "Declaring Kubernetes deployment settings for event-consuming applications"
      ],
      "ko": [
        "서비스, 플랫폼, 시스템 사이에서 상호운용할 수 있도록 이벤트 data를 공통 형식으로 설명하는 것",
        "workflow engine으로 이벤트 handler를 schedule하여 실행하는 것",
        "모든 이벤트 broker에 하나의 mandatory transport protocol을 정의하는 것",
        "이벤트-consuming 애플리케이션의 Kubernetes deployment setting을 선언하는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "CloudEvents is a specification for describing event data in a common way, simplifying declaration and delivery across services, platforms, and systems. It standardizes event data rather than acting as a workflow engine, imposing one broker transport, or replacing deployment manifest.",
      "ko": "CloudEvents는 서비스, 플랫폼, 시스템 전반에서 이벤트를 선언하고 전달하기 쉽도록 이벤트 data를 공통 방식으로 설명하는 specification입니다. workflow engine으로 동작하거나 하나의 broker transport를 강제하거나 deployment 매니페스트를 대체하지 않고 이벤트 data를 표준화합니다."
    },
    "ref": "https://cloudevents.io/"
  },
  {
    "id": "local-139",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Argo Workflows parallel jobs · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which tool is designed to orchestrate parallel jobs and workflows on Kubernetes?",
      "ko": "Kubernetes에서 parallel job과 workflow를 orchestrate하도록 설계된 tool은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Argo Workflows",
        "Flux",
        "kube-proxy",
        "containerd"
      ],
      "ko": [
        "Argo Workflows",
        "Flux",
        "kube-proxy",
        "containerd"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Argo Workflows is a Kubernetes-native workflow engine for orchestrating jobs, including parallel steps. Flux is primarily a GitOps reconciler, while kube-proxy and containerd serve node networking and container-runtime roles.",
      "ko": "Argo Workflows는 parallel step을 포함한 job을 orchestrate하는 Kubernetes-native workflow engine입니다. Flux는 주로 GitOps reconciler이며 kube-proxy와 containerd는 각각 노드 networking과 컨테이너-런타임 역할을 합니다."
    },
    "ref": "https://argo-workflows.readthedocs.io/en/latest/workflow-concepts/"
  },
  {
    "id": "local-140",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Service mesh capabilities · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which set of capabilities is commonly provided by a service mesh?",
      "ko": "서비스 메시가 일반적으로 제공하는 기능의 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Service-to-service security such as mTLS and policy, traffic management, and observability",
        "Container image building, registry storage, and node kernel upgrades",
        "Cluster object persistence, API authentication, and etcd compaction only",
        "Source-code compilation, database schema migration, and DNS registration only"
      ],
      "ko": [
        "mTLS와 정책을 통한 서비스 간 보안, 트래픽 관리, 관측성",
        "컨테이너 이미지 빌드, registry 저장소, 노드 커널 업그레이드",
        "클러스터 객체 저장, API 인증, etcd compaction만",
        "소스 코드 컴파일, 데이터베이스 스키마 마이그레이션, DNS 등록만"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A service mesh adds application-aware service-to-service capabilities through its infrastructure layer, including mTLS and policy controls, traffic management, and telemetry/observability. It does not replace image builders or the Kubernetes API datastore.",
      "ko": "서비스 메시는 인프라 계층을 통해 mTLS와 정책 제어, 트래픽 관리, telemetry·관측성 같은 애플리케이션 수준의 서비스 간 기능을 추가합니다. 이미지 빌드 도구나 Kubernetes API 데이터 저장소를 대체하지 않습니다."
    },
    "ref": "https://istio.io/latest/about/service-mesh/"
  },
  {
    "id": "local-141",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Historical ecosystem: Apache Mesos · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Before its retirement, what was the primary role of Apache Mesos?",
      "ko": "프로젝트 은퇴 전 Apache Mesos의 주된 역할은 무엇이었습니까?"
    },
    "choices": {
      "en": [
        "A cluster resource manager allocating compute resources to application frameworks",
        "A Kubernetes node runtime executing containers through the CRI",
        "A cloud infrastructure service provisioning virtual machines and virtual networks",
        "A container-image builder converting Dockerfile instructions into runnable images"
      ],
      "ko": [
        "애플리케이션 프레임워크에 컴퓨팅 자원을 배분하는 클러스터 자원 관리자",
        "CRI를 통해 컨테이너를 실행하는 Kubernetes 노드 런타임",
        "가상 머신과 가상 네트워크를 제공하는 클라우드 인프라 서비스",
        "Dockerfile 지침을 실행 가능한 이미지로 변환하는 컨테이너 이미지 빌드 도구"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Mesos managed resource isolation and allocation across distributed application frameworks, which could run workloads including containers. It was not primarily a Kubernetes CRI runtime, an IaaS provisioning service or an image builder. Apache retired Mesos in August 2025 and completed the Attic move in October 2025. This is historical ecosystem background, not a currently maintained-platform recommendation or a verified real-exam question.",
      "ko": "Mesos는 분산 애플리케이션 프레임워크 사이의 자원 격리·배분을 관리했고 해당 프레임워크가 컨테이너 등 워크로드를 실행할 수 있었습니다. 주된 역할이 Kubernetes CRI 런타임, IaaS 제공 서비스, 이미지 빌드 도구는 아니었습니다. Apache는 2025년 8월 Mesos를 은퇴시켰고 10월 Attic 이전을 완료했습니다. 과거 생태계 배경 지식 문항이지 현재 유지보수되는 플랫폼의 추천이나 실제 시험 출제가 확인된 문항은 아닙니다."
    },
    "ref": "https://attic.apache.org/projects/mesos.html"
  },
  {
    "id": "local-142",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API maturity levels · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a beta Kubernetes API version generally indicate?",
      "ko": "Kubernetes의 beta API 버전은 일반적으로 무엇을 의미합니까?"
    },
    "choices": {
      "en": [
        "A beta maturity level that is tested but can still change incompatibly before becoming stable",
        "An API that is always enabled by default and can never be deprecated",
        "A permanently experimental API that every cluster disables",
        "An API available only to the kubelet and not to API clients"
      ],
      "ko": [
        "테스트되었지만 안정 버전이 되기 전에 호환성을 깨뜨리는 변경이 있을 수 있는 베타 성숙도 수준",
        "항상 기본적으로 활성화되고 절대 지원 중단되지 않는 API",
        "모든 클러스터에서 비활성화되는 영구적인 실험용 API",
        "kubelet에만 제공되고 API 클라이언트에는 제공되지 않는 API"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A beta API is a maturity level that has been tested but can still change in incompatible ways; beta and stable versions are not necessarily long-term compatible contracts. Current Kubernetes API-versioning guidance says built-in beta APIs are disabled by default, with a historical exception for beta APIs introduced before v1.22, so operators may explicitly enable them as needed.",
      "ko": "beta API는 테스트된 성숙도 수준이지만 호환성을 깨뜨리는 변경이 있을 수 있습니다. beta 버전과 안정 버전이 반드시 장기적인 호환 계약을 공유하는 것은 아닙니다. 현재 Kubernetes API 버전 지침에 따르면 내장 beta API는 기본적으로 비활성화되어 있으며 v1.22 이전에 도입된 beta API에는 역사적 예외가 있습니다. 필요한 경우 운영자가 명시적으로 활성화할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/using-api/"
  },
  {
    "id": "local-145",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API version naming · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which group of API version names follows Kubernetes version naming syntax?",
      "ko": "Kubernetes API 버전 이름의 명명 형식에 맞는 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "v1alpha1, v2beta3, v2",
        "alpha1v1, beta3v3, v2",
        "alpha1, beta3, v2",
        "v1alpha1, v2beta3, 2.0"
      ],
      "ko": [
        "v1alpha1, v2beta3, v2",
        "alpha1v1, beta3v3, v2",
        "alpha1, beta3, v2",
        "v1alpha1, v2beta3, 2.0"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes version names use forms such as v1alpha1 for alpha, v2beta3 for beta, and v2 for stable. Prefixing alpha/beta before the major version, omitting v<major>, or using 2.0 does not follow this convention. A valid name does not prove that a particular API group currently serves that version; availability must be checked separately.",
      "ko": "Kubernetes 버전 이름은 알파의 v1alpha1, 베타의 v2beta3, 안정 버전의 v2 같은 형식을 사용합니다. alpha·beta를 메이저 버전보다 앞에 놓거나 v<major>를 생략하거나 2.0을 쓰면 이 규칙에 맞지 않습니다. 이름의 형식이 올바르다고 해서 특정 API 그룹이 현재 그 버전을 제공한다는 뜻은 아니며, 제공 여부는 따로 확인해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/using-api/"
  },
  {
    "id": "local-146",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Container logs · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command retrieves logs from the previous terminated ruby container in Pod web-1?",
      "ko": "Pod web-1에 있는 ruby 컨테이너의 이전 종료된 인스턴스에서 로그를 가져오는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl logs -p -c ruby web-1",
        "kubectl logs -c ruby web-1",
        "kubectl logs -p ruby web-1",
        "kubectl logs -p -c web-1 ruby"
      ],
      "ko": [
        "kubectl logs -p -c ruby web-1",
        "kubectl logs -c ruby web-1",
        "kubectl logs -p ruby web-1",
        "kubectl logs -p -c web-1 ruby"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The -p (--previous) flag requests the previous terminated container instance, -c ruby selects the container, and web-1 names the Pod. Omitting -p requests the current instance. The remaining alternatives fail to specify this Pod/container pairing correctly; exchanging the -c value and Pod name targets the wrong objects.",
      "ko": "-p(--previous)는 이전에 종료된 컨테이너 인스턴스를 요청하고, -c ruby는 컨테이너를 선택하며, web-1은 Pod 이름입니다. -p를 생략하면 현재 인스턴스의 로그를 요청합니다. 나머지 명령은 이 Pod·컨테이너 조합을 올바르게 지정하지 않으며, -c 값과 Pod 이름을 바꾸면 다른 대상을 지정하게 됩니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/"
  },
  {
    "id": "local-153",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "High availability topologies · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which host layout matches the documented kubeadm high-availability topology with external etcd?",
      "ko": "외부 etcd를 사용하는 문서화된 kubeadm 고가용성 토폴로지에 맞는 호스트 배치는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Six hosts: three control-plane hosts and three separate etcd hosts",
        "Four hosts: two control-plane hosts and two etcd hosts",
        "Four hosts: one control-plane host and three etcd hosts",
        "Three hosts: control-plane components and etcd share each host"
      ],
      "ko": [
        "6개 호스트: 제어 플레인 3개와 별도 etcd 3개",
        "4개 호스트: 제어 플레인 2개와 etcd 2개",
        "4개 호스트: 제어 플레인 1개와 etcd 3개",
        "3개 호스트: 각 호스트에 제어 플레인 구성 요소와 etcd를 함께 배치"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The documented external-etcd HA topology uses at least three control-plane hosts and three separate etcd hosts, totaling six. Two etcd members lose quorum if one fails, and a single control-plane host is not redundant. Co-locating etcd with control-plane components describes stacked etcd rather than external etcd. This count is for the documented separate-host topology, not every possible custom HA architecture.",
      "ko": "문서의 외부 etcd 고가용성 토폴로지는 제어 플레인 호스트 최소 3개와 별도 etcd 호스트 최소 3개로 총 6개를 사용합니다. etcd 멤버가 2개이면 하나가 실패할 때 정족수를 잃고, 제어 플레인 호스트가 하나뿐이면 중복성이 없습니다. 제어 플레인과 etcd를 같은 호스트에 두는 것은 외부 etcd가 아니라 stacked etcd 구성입니다. 이 수는 문서화된 별도 호스트 토폴로지의 기준이지 모든 사용자 정의 고가용성 아키텍처의 보편적 요구는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/"
  },
  {
    "id": "local-154",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Scheduling · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component assigns a newly created unscheduled Pod to a suitable node?",
      "ko": "새로 생성되어 아직 노드가 지정되지 않은 Pod를 적합한 노드에 배치하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "etcd",
        "kube-controller-manager",
        "kube-proxy",
        "kube-scheduler"
      ],
      "ko": [
        "etcd",
        "kube-controller-manager",
        "kube-proxy",
        "kube-scheduler"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The kube-scheduler watches Pods without node assignments and selects a feasible node using resources, constraints, and scheduling policies. Controller-manager runs reconciliation controllers, kube-proxy implements Service networking, and etcd stores cluster API data.",
      "ko": "kube-scheduler는 노드가 지정되지 않은 Pod를 감시하고 리소스, 제약 조건, 스케줄링 정책에 따라 실행 가능한 노드를 선택합니다. controller-manager는 조정 컨트롤러를 실행하고 kube-proxy는 Service 네트워크를 구현하며 etcd는 클러스터 API 데이터를 저장합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
  },
  {
    "id": "local-156",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "etcd · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What role does etcd play in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 etcd는 어떤 역할을 합니까?"
    },
    "choices": {
      "en": [
        "Persist Kubernetes API resource state in a consistent distributed key-value store",
        "Schedule every Pod onto a node",
        "Run container processes on each node",
        "Expose application metrics to HPA"
      ],
      "ko": [
        "일관된 분산 키-값 저장소에 Kubernetes API 리소스 상태를 지속적으로 저장한다",
        "모든 Pod를 노드에 스케줄링한다",
        "각 노드에서 컨테이너 프로세스를 실행한다",
        "HPA에 애플리케이션 메트릭을 제공한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "etcd is Kubernetes' consistent persistent store for control-plane API resource state, including desired and observed state. It is not the store for all application volume data. The scheduler selects placement, the container runtime executes containers under kubelet coordination, and metrics components provide autoscaling signals.",
      "ko": "etcd는 원하는 상태와 관측된 상태를 포함하는 제어 영역 API 리소스 상태의 일관된 영구 저장소입니다. 모든 애플리케이션 볼륨 데이터를 저장하는 곳은 아닙니다. 스케줄러는 배치를 선택하고 컨테이너 런타임은 kubelet의 조정 아래 컨테이너를 실행하며 메트릭 구성 요소는 자동 확장 신호를 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/#etcd"
  },
  {
    "id": "local-159",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment and StatefulSet · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What do Deployments and StatefulSets have in common?",
      "ko": "Deployment와 StatefulSet의 공통점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Both manage Pods based on a declared container template",
        "Both support the OnDelete update strategy",
        "Both provide ordered, graceful deployment and scaling",
        "Both preserve a stable individual identity for every Pod"
      ],
      "ko": [
        "둘 다 선언된 컨테이너 템플릿을 기반으로 Pod를 관리한다",
        "둘 다 OnDelete 업데이트 전략을 지원한다",
        "둘 다 순서 있는 정상 배포와 확장·축소를 제공한다",
        "둘 다 각 Pod의 고정된 개별 식별자를 유지한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Both manage Pods from a declared template. OnDelete, stable per-Pod identities, and StatefulSet-style ordered lifecycle management are not shared Deployment guarantees. The shared-template property describes desired configuration; live Pods from different rollout revisions need not have identical specs.",
      "ko": "둘 다 선언된 템플릿으로 Pod를 관리합니다. OnDelete, Pod별 고정 식별자, StatefulSet 방식의 순서 있는 생명주기 관리는 Deployment와 공유하는 보장이 아닙니다. 공통 템플릿은 원하는 구성을 뜻하며 서로 다른 롤아웃 리비전의 실제 Pod 사양이 항상 같다는 뜻은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"
  },
  {
    "id": "local-175",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "kubectl describe · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which kubectl subcommand collects information about an existing resource in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에 존재하는 리소스의 정보를 확인하는 kubectl 하위 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl describe",
        "kubectl list",
        "kubectl expose",
        "kubectl explain"
      ],
      "ko": [
        "kubectl describe",
        "kubectl list",
        "kubectl expose",
        "kubectl explain"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Describe retrieves an existing object's details and commonly includes associated events. Explain documents API fields rather than the live object's state; expose creates a Service. List is not a built-in kubectl subcommand. Supply the resource type and, when appropriate, its name after describe.",
      "ko": "describe는 기존 오브젝트의 상세 정보와 일반적으로 관련 이벤트를 보여 줍니다. explain은 실제 오브젝트 상태가 아니라 API 필드를 설명하고 expose는 Service를 생성합니다. list는 kubectl의 내장 하위 명령이 아닙니다. describe 뒤에 리소스 종류와 필요에 따라 이름을 지정합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_describe/"
  },
  {
    "id": "local-180",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod Disruption Budgets · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What can a PodDisruptionBudget limit during node maintenance?",
      "ko": "노드 유지보수 중 PodDisruptionBudget은 무엇을 제한할 수 있습니까?"
    },
    "choices": {
      "en": [
        "Eviction API requests that would violate the configured Pod availability budget",
        "Unexpected node failures",
        "Direct Pod deletions bypassing the Eviction API",
        "Pod replacements by Deployment rollout"
      ],
      "ko": [
        "설정된 Pod 가용성 budget을 위반하는 Eviction API 요청",
        "예상하지 못한 노드 장애",
        "Eviction API를 우회하는 직접 Pod 삭제",
        "Deployment rollout에 따른 Pod 교체"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A PodDisruptionBudget can limit voluntary disruptions by restricting Eviction API requests that would exceed the configured Pod availability budget. It does not prevent direct Pod deletion, Deployment rollouts, or involuntary node failures.",
      "ko": "PodDisruptionBudget은 설정된 Pod 가용성 budget을 초과하는 Eviction API 요청을 제한하여 voluntary disruption을 제어할 수 있습니다. 직접 Pod 삭제, Deployment rollout 또는 involuntary node failure를 막지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"
  },
  {
    "id": "local-181",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "PV reclaim policy · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which PersistentVolume reclaim policy preserves storage for administrator action after claim deletion?",
      "ko": "연결된 PVC를 삭제한 뒤 관리자가 수동으로 회수하도록 스토리지를 남기는 PersistentVolume의 회수 정책은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Retain",
        "Delete",
        "Recycle",
        "claimRef"
      ],
      "ko": [
        "Retain",
        "Delete",
        "Recycle",
        "claimRef"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Retain allows manual reclamation: after the PVC is deleted, the PV and storage remain released for administrator action rather than automatic reuse. The reclaim policy belongs to the PV, not a PVC field. claimRef records the volume/claim binding, Delete removes supported backing storage, and Recycle is a deprecated scrubbing policy.",
      "ko": "Retain은 수동 회수를 허용합니다. PVC를 삭제하면 PV와 스토리지는 자동으로 재사용되는 대신 관리자의 조치를 기다리는 해제 상태로 남습니다. 회수 정책은 PVC의 필드가 아니라 PV에 속합니다. claimRef는 볼륨과 클레임의 연결을 나타내고, Delete는 지원되는 기반 스토리지를 제거하며 Recycle은 폐기된 데이터 정리 정책입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
  },
  {
    "id": "local-183",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Falco · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does Falco primarily monitor for runtime security?",
      "ko": "Falco는 런타임 보안을 위해 주로 무엇을 감시합니까?"
    },
    "choices": {
      "en": [
        "Runtime system calls and events evaluated against security rules",
        "Known vulnerabilities discovered by container-image scanning",
        "API requests accepted or rejected by admission webhooks",
        "CPU and memory metrics collected for autoscaling"
      ],
      "ko": [
        "보안 규칙으로 평가하는 런타임 시스템 호출과 이벤트",
        "컨테이너 이미지 스캔으로 발견하는 알려진 취약점",
        "Admission webhook이 허용하거나 거부하는 API 요청",
        "자동 확장을 위해 수집하는 CPU·메모리 메트릭"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Falco observes runtime system calls and related events and applies rules to detect suspicious activity. Image scanning, admission validation, and resource-metric collection are separate functions.",
      "ko": "Falco는 실행 중인 시스템 호출과 관련 이벤트를 관찰하고 규칙을 적용하여 의심스러운 활동을 탐지합니다. 이미지 스캔, 어드미션 검증, 리소스 메트릭 수집은 서로 다른 기능입니다."
    },
    "ref": "https://falco.org/docs/"
  },
  {
    "id": "local-185",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Cloud cost optimization · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why can cost optimization be complex in cloud-native environments?",
      "ko": "cloud-native 환경에서 비용 최적화가 복잡할 수 있는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Distributed services, variable pricing, scaling, instance choices, and network egress interact",
        "All providers use one fixed price for every resource",
        "Only container image size affects total cost",
        "Kubernetes removes the need for cost allocation"
      ],
      "ko": [
        "분산 서비스, variable pricing, scaling, instance choice, 네트워크 egress가 상호작용하기 때문",
        "모든 provider가 모든 리소스에 하나의 fixed price를 사용하기 때문",
        "컨테이너 이미지 size만 total cost에 영향을 주기 때문",
        "Kubernetes가 cost allocation 필요를 제거하기 때문"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Cloud-native costs span many services and providers with different pricing, scaling behavior, instance types, and egress charges. Cost optimization therefore needs visibility and allocation rather than one universal rule.",
      "ko": "cloud-native 비용은 서로 다른 pricing, scaling behavior, instance type, egress charge를 가진 여러 서비스와 provider에 걸칩니다. 따라서 하나의 universal 규칙이 아니라 visibility와 allocation이 필요합니다."
    },
    "ref": "https://www.finops.org/framework/"
  },
  {
    "id": "local-186",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes hierarchy · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which order correctly represents Kubernetes workload placement?",
      "ko": "Kubernetes 워크로드가 배치되는 구조를 올바르게 나타낸 순서는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Containers → Pods → Cluster → Nodes",
        "Nodes → Cluster → Containers → Pods",
        "Cluster → Nodes → Pods → Containers",
        "Pods → Cluster → Containers → Nodes"
      ],
      "ko": [
        "컨테이너 → Pod → 클러스터 → 노드",
        "노드 → 클러스터 → 컨테이너 → Pod",
        "클러스터 → 노드 → Pod → 컨테이너",
        "Pod → 클러스터 → 컨테이너 → 노드"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A cluster contains nodes; each scheduled Pod runs on one node and groups one or more co-located containers. The order is Cluster → Nodes → Pods → Containers. This is workload placement, not a claim that a Node is the API ownerReference of every Pod.",
      "ko": "클러스터는 노드로 구성됩니다. 스케줄링된 각 Pod는 한 노드에서 실행되며 함께 배치된 하나 이상의 컨테이너를 묶습니다. 따라서 순서는 클러스터 → 노드 → Pod → 컨테이너입니다. 이는 워크로드 배치 구조이며 모든 Pod의 API ownerReference가 Node라는 뜻은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/components/"
  },
  {
    "id": "local-189",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Metrics · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which observability data stream is most useful for plotting resource consumption and forecasting resource exhaustion?",
      "ko": "리소스 사용량을 그래프로 나타내고 고갈을 예측하는 데 가장 유용한 관측성 데이터 흐름은 무엇입니까?"
    },
    "choices": {
      "en": [
        "stdout",
        "Traces",
        "Logs",
        "Metrics"
      ],
      "ko": [
        "stdout",
        "트레이스",
        "로그",
        "메트릭"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Metrics provide numeric time-series observations of usage and capacity, supporting trend analysis and exhaustion forecasts. Logs record discrete events, traces describe request paths, and stdout is an output stream that may carry logs. Metrics support forecasting but do not guarantee an accurate future prediction.",
      "ko": "메트릭은 사용량과 용량을 숫자 시계열로 제공하므로 추세 분석과 고갈 예측에 적합합니다. 로그는 개별 이벤트를 기록하고 트레이스는 요청 경로를 설명하며 stdout은 로그 등을 전달할 수 있는 출력 스트림입니다. 메트릭은 예측을 지원하지만 미래를 정확히 보장하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/monitoring/"
  },
  {
    "id": "local-193",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Ephemeral containers · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is an ephemeral container in Kubernetes?",
      "ko": "Kubernetes의 ephemeral 컨테이너는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A specialized container defined by running as root for security applications",
        "A specialized container that runs temporarily in an existing Pod",
        "A specialized container that extends and enhances the main application container",
        "A specialized container that runs before application containers"
      ],
      "ko": [
        "보안 애플리케이션을 위해 root로 실행하는 것으로 정의되는 특수 컨테이너",
        "기존 Pod에서 임시로 실행되는 특수 컨테이너",
        "주 애플리케이션 컨테이너를 확장·보완하는 특수 컨테이너",
        "애플리케이션 컨테이너보다 먼저 실행되는 특수 컨테이너"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "An ephemeral container runs temporarily in an existing Pod, commonly for interactive troubleshooting. Root execution is not its defining property. Enhancing the main container describes a sidecar role, while initialization before application startup describes init-container behavior. An ephemeral container does not replace the regular application container.",
      "ko": "ephemeral 컨테이너는 기존 Pod에서 임시로 실행되며 주로 대화형 문제 해결에 사용됩니다. root 실행 여부가 정의 조건은 아닙니다. 주 컨테이너를 보완하는 것은 사이드카 역할이고 애플리케이션 시작 전 초기화는 init 컨테이너 동작입니다. ephemeral 컨테이너는 일반 애플리케이션 컨테이너를 대체하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/"
  },
  {
    "id": "local-194",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Cloud-native design · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which statement best describes a cloud-native application?",
      "ko": "클라우드 네이티브 애플리케이션을 가장 잘 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A monolithic application that has been containerized and moved to the cloud",
        "An application designed for scalability and to take advantage of cloud services",
        "An application designed to run every function in a separate container",
        "Any application that runs at a cloud provider and uses its services"
      ],
      "ko": [
        "컨테이너화되어 클라우드로 옮겨진 모놀리식 애플리케이션",
        "확장성을 갖추고 클라우드 서비스를 활용하도록 설계된 애플리케이션",
        "모든 기능을 별도의 컨테이너에서 실행하도록 설계된 애플리케이션",
        "클라우드 제공자에서 실행되고 그 서비스를 사용하는 모든 애플리케이션"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Cloud-native design intentionally uses cloud capabilities to build scalable, resilient and manageable systems. Merely containerizing or relocating an application, or merely using a provider service, is insufficient. Every function need not have a separate container, and a monolith is not automatically excluded. The listed design-oriented description is the best fit, not an exhaustive definition or a public-cloud-only requirement.",
      "ko": "클라우드 네이티브 설계는 클라우드 기능을 의도적으로 활용해 확장 가능하고 복원력 있으며 관리 가능한 시스템을 만듭니다. 단순한 컨테이너화, 실행 위치 변경, 제공자 서비스 사용만으로는 충분하지 않습니다. 모든 기능이 별도 컨테이너를 가져야 하는 것도 아니며 모놀리식 구조가 자동으로 제외되는 것도 아닙니다. 보기 중 설계 중심 설명이 가장 적합하지만 완전한 정의나 퍼블릭 클라우드 전용 조건은 아닙니다."
    },
    "ref": "https://github.com/cncf/toc/blob/main/DEFINITION.md"
  },
  {
    "id": "local-197",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node eviction · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the commonly documented default eviction wait when a node's Ready condition is Unknown or False?",
      "ko": "노드의 Ready 조건이 Unknown 또는 False일 때 일반적으로 문서화된 기본 축출 대기 시간은 얼마입니까?"
    },
    "choices": {
      "en": [
        "Thirty seconds",
        "Thirty minutes",
        "One minute",
        "Five minutes"
      ],
      "ko": [
        "30초",
        "30분",
        "1분",
        "5분"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Five minutes is the conventional default period. For ordinary Pods, the modern taint-based path represents this with default 300-second NoExecute tolerations for not-ready and unreachable taints. It is not a universal exact eviction deadline: DaemonSet tolerations, custom tolerations, rate limits and disabled controllers can change actual behavior. Do not confuse this with the first missed-heartbeat instant or attribute every modern eviction to the node controller.",
      "ko": "일반적인 기본 기간은 5분입니다. 현대의 taint 기반 경로에서는 일반 Pod의 not-ready·unreachable taint에 대한 기본 300초 NoExecute toleration으로 표현됩니다. 이것은 모든 Pod에 적용되는 정확한 축출 마감 시각이 아닙니다. DaemonSet의 toleration, 사용자 설정, 속도 제한, 컨트롤러 비활성화 등에 따라 실제 동작은 달라질 수 있습니다. 첫 heartbeat 누락 시점과 혼동하거나 모든 현대적 축출을 노드 컨트롤러에 귀속해서는 안 됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/nodes/"
  },
  {
    "id": "local-198",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Vertical Pod Autoscaler · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component adjusts Pod resource requests and limits rather than replica count?",
      "ko": "replica 수가 아니라 Pod의 리소스 requests와 limits를 조정하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Vertical Pod Autoscaler",
        "HorizontalPodAutoscaler",
        "Cluster Autoscaler",
        "KEDA only"
      ],
      "ko": [
        "Vertical Pod Autoscaler",
        "HorizontalPodAutoscaler",
        "Cluster Autoscaler",
        "KEDA만 사용"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "VPA adjusts resource requests and limits for Pods, while HPA changes replica count and Cluster Autoscaler changes node count.",
      "ko": "VPA는 Pod의 리소스 requests와 limits를 조정하고 HPA는 replica 수, Cluster Autoscaler는 노드 수를 조정합니다."
    },
    "ref": "https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler"
  },
  {
    "id": "local-202",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Deployment image update · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which command updates a Deployment's container image without recreating the Deployment resource?",
      "ko": "Deployment 리소스를 다시 생성하지 않고 컨테이너 이미지를 변경하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl edit deployment my-app my-container=my-app:v2",
        "kubectl replace deployment/my-app my-container=my-app:v2",
        "kubectl set image deployment/my-app my-container=my-app:v2",
        "kubectl set image deployment/my-app rollout restart"
      ],
      "ko": [
        "kubectl edit deployment my-app my-container=my-app:v2",
        "kubectl replace deployment/my-app my-container=my-app:v2",
        "kubectl set image deployment/my-app my-container=my-app:v2",
        "kubectl set image deployment/my-app rollout restart"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "kubectl set image accepts a resource and container=image assignments and updates the Deployment's Pod template. This preserves the Deployment object while triggering a rollout that can replace its Pods; it does not update every running Pod in place. The listed edit/replace commands do not use their required syntax, and rollout restart is not a valid image assignment.",
      "ko": "kubectl set image는 리소스와 container=image 지정값을 받아 Deployment의 Pod 템플릿을 변경합니다. Deployment 객체를 유지하면서 Pod를 교체할 수 있는 롤아웃을 시작하며 모든 실행 중인 Pod의 이미지를 제자리에서 변경한다는 뜻은 아닙니다. 제시된 edit·replace 명령은 필요한 문법에 맞지 않고 rollout restart는 유효한 이미지 지정값이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_set/kubectl_set_image/"
  },
  {
    "id": "local-204",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Pod Security Standards · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which order lists the Pod Security Standards from most permissive to most restrictive?",
      "ko": "Pod Security Standards를 가장 허용적인 수준부터 가장 제한적인 수준까지 나열한 순서는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Privileged, Restricted, Baseline",
        "Baseline, Restricted, Privileged",
        "Baseline, Privileged, Restricted",
        "Privileged, Baseline, Restricted"
      ],
      "ko": [
        "Privileged, Restricted, Baseline",
        "Baseline, Restricted, Privileged",
        "Baseline, Privileged, Restricted",
        "Privileged, Baseline, Restricted"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Privileged imposes no Pod Security Standard restrictions. Baseline blocks known privilege escalations while permitting common workloads; Restricted applies the strongest of the three standard policies. These policy definitions do not mean every namespace automatically enforces Restricted or that a level alone guarantees security.",
      "ko": "Privileged는 Pod Security Standard 제한을 적용하지 않습니다. Baseline은 일반적인 워크로드를 허용하면서 알려진 권한 상승을 차단하고 Restricted는 세 수준 중 가장 강한 표준 정책을 적용합니다. 이 정의가 모든 네임스페이스에 Restricted가 자동 적용된다거나 특정 수준만으로 보안이 보장된다는 뜻은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "local-205",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Gateway API · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Gateway API resources separate infrastructure and application routing roles?",
      "ko": "어떤 Gateway API 리소스가 인프라와 애플리케이션의 라우팅 역할을 분리합니까?"
    },
    "choices": {
      "en": [
        "GatewayClass, Gateway, and HTTPRoute",
        "Pod, Node, and Container",
        "Role, RoleBinding, and Secret",
        "PV, PVC, and StorageClass"
      ],
      "ko": [
        "GatewayClass, Gateway, HTTPRoute",
        "Pod, Node, Container",
        "Role, RoleBinding, Secret",
        "PV, PVC, StorageClass"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "GatewayClass, Gateway and HTTPRoute separate implementation selection, gateway infrastructure and application routing configuration. A compatible controller/data plane supplies actual traffic behavior; feature support follows the selected implementation and conformance profile. This role-separated model is not a guarantee that every implementation supports every routing feature.",
      "ko": "GatewayClass·Gateway·HTTPRoute는 구현 선택, gateway 인프라, 애플리케이션 라우팅 설정을 구분합니다. 호환 컨트롤러·데이터 플레인이 실제 트래픽 동작을 제공하며 지원 기능은 선택한 구현과 conformance profile에 따릅니다. 역할 분리 모델이 모든 구현의 모든 라우팅 기능 지원을 보장하지는 않습니다."
    },
    "ref": "https://gateway-api.sigs.k8s.io/docs/concepts/api-overview/"
  },
  {
    "id": "local-208",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "ServiceAccount RBAC · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How should an application receive its own Kubernetes API identity and permissions?",
      "ko": "애플리케이션이 자체 Kubernetes API 식별자와 권한을 받게 하려면 어떻게 해야 합니까?"
    },
    "choices": {
      "en": [
        "Create a dedicated ServiceAccount, bind appropriate RBAC, and assign it to the Pod",
        "Use the default account without bindings for every workload",
        "Put an API token in the image",
        "Use a Service type as the identity"
      ],
      "ko": [
        "전용 ServiceAccount를 만들고 적절한 RBAC를 바인딩한 뒤 Pod에 assign",
        "모든 워크로드에 바인딩 없는 기본 account 사용",
        "이미지에 API token 저장",
        "Service type을 식별자로 사용"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Grant the dedicated ServiceAccount only needed RBAC permissions through RoleBinding or ClusterRoleBinding and set the Pod's spec.serviceAccountName. API calls also require suitable authentication credentials; creating a ServiceAccount alone does not grant cluster-admin.",
      "ko": "전용 ServiceAccount에 필요한 최소 RBAC 권한을 RoleBinding·ClusterRoleBinding으로 부여하고 Pod의 spec.serviceAccountName을 설정합니다. API 호출에는 적절한 인증 자격 증명도 필요하며 ServiceAccount 생성만으로 cluster-admin 권한이 부여되지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"
  },
  {
    "id": "local-209",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Scheduler filtering and scoring · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What are kube-scheduler's two essential operations during normal scheduling?",
      "ko": "일반적인 스케줄링에서 kube-scheduler의 핵심적인 두 작업은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Pod eviction or starting",
        "Filtering and scoring nodes",
        "Resource monitoring and reporting",
        "Starting and terminating containers"
      ],
      "ko": [
        "Pod 축출 또는 시작",
        "노드 필터링과 점수 계산",
        "리소스 감시와 보고",
        "컨테이너 시작과 종료"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The normal node-selection model filters out infeasible nodes and scores feasible candidates to select a suitable placement. This is not an exhaustive scheduler workflow: binding, queueing and possible preemption are separate parts, and scoring can be unnecessary with only one feasible node. The kubelet and runtime, not kube-scheduler, start and terminate containers.",
      "ko": "일반적인 노드 선택 모델은 배치할 수 없는 노드를 필터링하고 가능한 후보의 점수를 계산하여 적절한 위치를 선택합니다. 이는 전체 스케줄러 워크플로 목록이 아닙니다. 바인딩·대기열 관리·필요시 선점 등의 과정도 있고 가능한 노드가 하나뿐이면 점수 계산이 불필요할 수 있습니다. 컨테이너 시작과 종료는 kube-scheduler가 아니라 kubelet과 런타임의 역할입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"
  },
  {
    "id": "local-211",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "IngressClass · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What role does ingressClassName play in an Ingress resource?",
      "ko": "Ingress 리소스에서 ingressClassName 필드의 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Indicate which Ingress controller should implement the Ingress rules",
        "Specify the backend Service receiving external requests",
        "Define whether the controller processes HTTP or HTTPS",
        "Determine routing-rule priority across multiple Ingress objects"
      ],
      "ko": [
        "Ingress 규칙을 구현할 Ingress 컨트롤러를 나타낸다",
        "외부 요청을 받을 백엔드 Service를 지정한다",
        "컨트롤러가 HTTP 또는 HTTPS 중 어떤 프로토콜을 처리할지 정의한다",
        "여러 Ingress 객체의 라우팅 규칙 우선순위를 결정한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "ingressClassName references an IngressClass, whose spec.controller identifies the controller implementation responsible for that class. The name is not directly a running controller Pod's name. Backends, TLS configuration and implementation-specific route precedence are separate concerns; this field does not itself set them.",
      "ko": "ingressClassName은 IngressClass를 참조하며 해당 클래스의 spec.controller가 담당 컨트롤러 구현을 식별합니다. 실행 중인 컨트롤러 Pod의 이름을 직접 지정하는 필드는 아닙니다. 백엔드, TLS 설정, 구현별 라우트 우선순위는 별개이며 이 필드 자체가 설정하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "local-212",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm uninstall · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Helm command removes the release mysql-1234 from the cluster?",
      "ko": "클러스터에서 mysql-1234 Helm 릴리스를 제거하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "helm reject mysql-1234",
        "helm erase mysql-1234",
        "helm uninstall mysql-1234",
        "helm remove mysql-1234"
      ],
      "ko": [
        "helm reject mysql-1234",
        "helm erase mysql-1234",
        "helm uninstall mysql-1234",
        "helm remove mysql-1234"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "helm uninstall accepts a release name and removes its managed resources and, by default, release history. Reject, erase and remove are not the listed built-in uninstall subcommands in the current CLI. Uninstalling a release does not delete the whole cluster or guarantee removal of separately managed CRDs and retained storage.",
      "ko": "helm uninstall은 릴리스 이름을 받아 관리 대상 리소스와 기본적으로 릴리스 이력을 제거합니다. 현재 CLI에서 reject, erase, remove는 제시된 내장 제거 하위 명령이 아닙니다. 릴리스 제거가 전체 클러스터 삭제나 별도로 관리하는 CRD·보존 스토리지의 제거를 보장하지는 않습니다."
    },
    "ref": "https://helm.sh/docs/helm/helm_uninstall/"
  },
  {
    "id": "local-213",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Open-source collaboration · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What supports collaboration and sustainability in open-source cloud-native projects?",
      "ko": "open-소스 cloud-native 프로젝트의 collaboration과 sustainability를 무엇이 지원합니까?"
    },
    "choices": {
      "en": [
        "Community events, working groups, contributor engagement, and stewardship",
        "A single closed vendor controlling every decision",
        "Only private source code",
        "No governance or contributor process"
      ],
      "ko": [
        "community 이벤트, working group, 기여자 engagement, stewardship",
        "하나의 closed vendor가 모든 decision을 통제",
        "프라이빗 소스 code만",
        "거버넌스와 기여자 프로세스 없음"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Open-source projects depend on community participation, events, working groups, contributor processes, and responsible stewardship for sustainable collaboration.",
      "ko": "open-소스 프로젝트는 지속 가능한 collaboration을 위해 community 참여, 이벤트, working group, 기여자 프로세스, 책임 있는 stewardship에 의존합니다."
    },
    "ref": "https://www.cncf.io/about/who-we-are/"
  },
  {
    "id": "local-215",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workload and static Pods · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which statement distinguishes workload-managed Pods from static Pods?",
      "ko": "워크로드-관리되는 Pod와 static Pod를 구분하는 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deployments create/manage Pods through controllers, while static Pods are managed directly by kubelet from local manifests",
        "A Deployment creates static Pods from a local manifest on every node",
        "The API server stores static Pods as Services before kubelet runs them",
        "A DaemonSet and a static Pod are identical controller-managed objects"
      ],
      "ko": [
        "Deployment는 controller로 Pod를 관리하고 static Pod는 kubelet이 로컬 매니페스트로 직접 관리",
        "Deployment가 모든 노드의 로컬 매니페스트에서 static Pod를 생성",
        "API server가 static Pod를 Service로 저장한 뒤 kubelet이 실행",
        "DaemonSet과 static Pod가 동일한 controller-관리되는 객체"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Workload controllers such as Deployments create and replace Pods, while kubelet manages static Pods defined in its local manifest path. Pods themselves are otherwise largely immutable.",
      "ko": "Deployment 같은 워크로드 controller는 Pod를 생성하고 교체하며 kubelet은 로컬 매니페스트로 정의된 static Pod를 관리합니다. Pod 자체는 대체로 immutable합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/"
  },
  {
    "id": "local-221",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "cert-manager resource integration · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How does cert-manager use Kubernetes resources to provide TLS certificates for an application?",
      "ko": "cert-manager는 애플리케이션에 TLS 인증서를 제공하기 위해 Kubernetes 리소스와 어떻게 통합됩니까?"
    },
    "choices": {
      "en": [
        "Inject TLS certificates directly into Pods when workloads are deployed",
        "Manage Certificate resources and Secrets usable by Ingress objects for TLS",
        "Update kube-proxy configuration to encrypt traffic between Services",
        "Replace default Kubernetes API certificates with certificates from external authorities"
      ],
      "ko": [
        "워크로드가 배포될 때 TLS 인증서를 Pod에 직접 주입한다",
        "Ingress가 TLS에 사용할 수 있는 Certificate 리소스와 Secret을 관리한다",
        "Service 간 트래픽을 암호화하도록 kube-proxy 설정을 갱신한다",
        "기본 Kubernetes API 인증서를 외부 인증 기관의 인증서로 교체한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The normal cert-manager workflow manages Certificate resources, issues or renews certificates through an Issuer or ClusterIssuer, and stores the key/certificate in a TLS Secret referenced by an Ingress or workload. Core cert-manager does not directly inject application certificates into deployed Pods, configure kube-proxy encryption, or automatically replace API-server serving certificates. Optional CSI integrations are separate from this Certificate/Secret workflow.",
      "ko": "일반적인 cert-manager 흐름은 Certificate 리소스를 관리하고 Issuer·ClusterIssuer를 통해 인증서를 발급·갱신한 뒤 Ingress나 워크로드가 참조하는 TLS Secret에 키와 인증서를 저장합니다. cert-manager 핵심 기능이 배포된 Pod에 애플리케이션 인증서를 직접 주입하거나 kube-proxy 암호화를 설정하거나 API 서버의 serving 인증서를 자동 교체하는 것은 아닙니다. 선택적인 CSI 통합은 이 Certificate·Secret 흐름과 구분됩니다."
    },
    "ref": "https://cert-manager.io/docs/usage/ingress/"
  },
  {
    "id": "local-222",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "RoleBinding function · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is a RoleBinding's primary function in Kubernetes?",
      "ko": "Kubernetes에서 RoleBinding의 주된 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Create a new Role defining a set of permissions",
        "Enforce namespace network rules by binding policies to Pods",
        "Grant a Role's permissions to a user, group or ServiceAccount within a namespace",
        "Grant a user or group permissions across all cluster resources"
      ],
      "ko": [
        "권한 집합을 정의하는 새 Role을 생성한다",
        "정책을 Pod에 연결하여 네임스페이스 네트워크 규칙을 적용한다",
        "네임스페이스 범위에서 Role 권한을 사용자·그룹·ServiceAccount에게 부여한다",
        "사용자·그룹에게 클러스터 전체 리소스의 권한을 부여한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A RoleBinding connects subjects to permissions in its own namespace. It may reference a Role in that namespace or a ClusterRole, without extending the grant to the whole cluster. ServiceAccount subjects may belong to another namespace. Role objects define rules, NetworkPolicies govern supported Pod traffic, and ClusterRoleBindings provide cluster-wide RBAC grants.",
      "ko": "RoleBinding은 자신의 네임스페이스 범위에서 주체에게 권한을 연결합니다. 같은 네임스페이스의 Role이나 ClusterRole을 참조할 수 있지만 부여 범위가 클러스터 전체로 확장되지는 않습니다. ServiceAccount 주체는 다른 네임스페이스에 속할 수도 있습니다. Role은 규칙을 정의하고 NetworkPolicy는 지원되는 Pod 트래픽을 제어하며 ClusterRoleBinding은 클러스터 범위의 RBAC 권한을 부여합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-224",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm upgrade · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does helm upgrade do?",
      "ko": "helm upgrade는 무엇을 합니까?"
    },
    "choices": {
      "en": [
        "Applies new chart configuration to an existing release while preserving release history",
        "Rolls back an existing release to its previous revision",
        "Lists the revisions of an existing release",
        "Renders templates without changing a release"
      ],
      "ko": [
        "릴리스 history를 보존하면서 기존 릴리스에 새 chart 구성을 적용",
        "기존 릴리스를 이전 리비전으로 rollback",
        "기존 릴리스의 리비전을 나열",
        "릴리스를 변경하지 않고 템플릿을 render"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "helm upgrade applies a new chart version or values to an existing release and records a new revision. Values may be overridden with -f or --set; retention of older revisions is subject to the configured history limit.",
      "ko": "helm upgrade는 기존 릴리스에 새 chart 버전이나 값을 적용하고 새 리비전을 기록합니다. -f 또는 --set으로 값을 재정의할 수 있으며 보존하는 과거 리비전 수는 history 설정의 영향을 받습니다."
    },
    "ref": "https://helm.sh/docs/helm/helm_upgrade/"
  },
  {
    "id": "local-225",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Containers and VM resource architecture · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How do containers and virtual machines differ in their typical operating-system architecture?",
      "ko": "컨테이너와 가상 머신은 일반적인 운영체제 구조에서 어떻게 다릅니까?"
    },
    "choices": {
      "en": [
        "Containerization consumes more memory than virtualization by default",
        "Containers share the host kernel; each VM runs its own guest operating system",
        "Containerization uses hypervisors for resource management, while virtualization does not",
        "Containers allocate resources per container, while VMs do not isolate resources"
      ],
      "ko": [
        "컨테이너화는 기본적으로 가상화보다 메모리를 더 소비한다",
        "컨테이너는 호스트 커널을 공유하고 각 VM은 자체 게스트 운영체제를 실행한다",
        "컨테이너화는 자원 관리에 hypervisor를 사용하지만 가상화는 사용하지 않는다",
        "컨테이너는 컨테이너별 자원을 할당하지만 VM은 자원을 격리하지 않는다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The classic comparison is OS-level containers sharing their host kernel versus hardware VMs running guest operating systems. Container user-space libraries may differ from the host; sharing a kernel is not sharing every OS file. Both mechanisms can isolate and allocate resources, and memory use depends on the workload. VM-based or sandboxed container runtimes can combine these layers, so this is not a universal statement about every container runtime.",
      "ko": "전형적인 비교는 호스트 커널을 공유하는 OS 수준 컨테이너와 게스트 운영체제를 실행하는 하드웨어 VM입니다. 컨테이너의 사용자 공간 라이브러리는 호스트와 다를 수 있어 커널 공유가 모든 OS 파일 공유를 뜻하지는 않습니다. 둘 다 자원을 격리·할당할 수 있으며 메모리 사용량은 워크로드에 따라 달라집니다. VM 기반·sandbox 컨테이너 런타임은 두 계층을 결합할 수 있으므로 모든 컨테이너 런타임에 대한 보편적 단정은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/"
  },
  {
    "id": "local-226",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "ApplicationSet · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does an Argo CD ApplicationSet generate?",
      "ko": "Argo CD ApplicationSet은 무엇을 생성합니까?"
    },
    "choices": {
      "en": [
        "Applications across clusters or environments from a generator such as Git",
        "Container runtime processes",
        "PersistentVolume objects only",
        "Ingress controllers"
      ],
      "ko": [
        "Git 같은 generator로 클러스터 또는 환경 전반의 Application",
        "컨테이너 런타임 프로세스",
        "PersistentVolume만",
        "Ingress controller"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "ApplicationSet uses generators and a template to create/manage Argo CD Application resources. Targeting registered clusters requires suitable cluster-generator/destination configuration; automatic deployment also requires automated sync on the generated Applications. Application generation and workload deployment are different operations.",
      "ko": "ApplicationSet은 generator와 템플릿으로 Argo CD Application 리소스를 생성·관리합니다. 등록된 클러스터를 대상으로 하려면 적절한 cluster generator·destination 설정이 필요하며 실제 자동 배포에는 생성되는 Application의 자동 sync 정책도 필요합니다. Application 생성과 워크로드 배포는 같은 동작이 아닙니다."
    },
    "ref": "https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/"
  },
  {
    "id": "local-227",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "CSI interface concept · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement best explains the Container Storage Interface in Kubernetes?",
      "ko": "Kubernetes의 Container Storage Interface 개념을 가장 잘 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A standard API specification allowing Kubernetes and other orchestrators to use storage systems through plugins",
        "A networking interface managing container communication across nodes",
        "A Kubernetes-only API supplying built-in storage drivers for persistent volumes",
        "An internal Kubernetes framework automatically provisioning local storage without external plugins"
      ],
      "ko": [
        "Kubernetes와 다른 orchestrator가 플러그인으로 스토리지 시스템을 사용하게 하는 표준 API 명세",
        "노드 간 컨테이너 통신을 관리하는 네트워킹 인터페이스",
        "영구 볼륨을 위한 내장 스토리지 driver를 제공하는 Kubernetes 전용 API",
        "외부 플러그인 없이 로컬 스토리지를 자동 프로비저닝하는 Kubernetes 내부 프레임워크"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "CSI standardizes the interface between orchestrators and independently developed storage plugins; it is not Kubernetes-only, a network interface or a built-in storage provisioner. Kubernetes commonly uses CSI drivers with StorageClass/PVC/PV, while supporting drivers can also provide inline CSI ephemeral volumes without PV/PVC. Driver capabilities determine supported storage operations.",
      "ko": "CSI는 orchestrator와 독립적으로 개발된 스토리지 플러그인 사이의 인터페이스를 표준화합니다. Kubernetes 전용·네트워크 인터페이스·내장 스토리지 프로비저너가 아닙니다. Kubernetes에서는 보통 StorageClass·PVC·PV와 CSI driver를 사용하며 지원하는 driver는 PV·PVC 없는 인라인 CSI ephemeral volume도 제공할 수 있습니다. 지원되는 스토리지 동작은 driver 기능에 따릅니다."
    },
    "ref": "https://kubernetes-csi.github.io/docs/"
  },
  {
    "id": "local-228",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "ErrImagePull meaning · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A Pod shows ErrImagePull. Which failure most directly explains that status?",
      "ko": "Pod에 ErrImagePull이 표시됩니다. 이 상태를 가장 직접적으로 설명하는 실패는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The kubelet is not running properly on the node",
        "The kube-scheduler cannot find a node for the Pod",
        "The container image cannot be downloaded",
        "The container image needs hostNetwork"
      ],
      "ko": [
        "노드에서 kubelet이 제대로 실행되고 있지 않다",
        "kube-scheduler가 Pod를 실행할 노드를 찾지 못한다",
        "컨테이너 이미지를 다운로드할 수 없다",
        "컨테이너 이미지에 hostNetwork가 필요하다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "ErrImagePull reports a failed image pull. Causes can include a missing image/tag, registry credentials, DNS or connectivity; Pod events help distinguish them. The status alone does not establish a stopped kubelet, an unscheduled Pod, or a hostNetwork requirement. ImagePullBackOff describes backing off repeated image-pull attempts, not successful application execution.",
      "ko": "ErrImagePull은 이미지 pull 실패를 나타냅니다. 없는 이미지·tag, registry 인증 정보, DNS·연결 문제 등이 원인일 수 있고 Pod 이벤트로 구분해야 합니다. 이 상태만으로 kubelet 중단·미스케줄링·hostNetwork 필요성을 판단할 수는 없습니다. ImagePullBackOff는 이미지 pull 재시도 대기를 나타내며 애플리케이션 실행 성공을 뜻하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-229",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "ConfigMap consumption · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How can a ConfigMap provide non-confidential configuration to a Pod?",
      "ko": "ConfigMap은 non-confidential 구성을 Pod에 어떻게 제공합니까?"
    },
    "choices": {
      "en": [
        "As environment variables, files, or command arguments",
        "As a Secret for confidential credentials",
        "As a Downward API field containing Pod metadata",
        "As a PersistentVolume mounted for application data"
      ],
      "ko": [
        "환경 variable, 파일, 명령 argument로",
        "confidential credential을 위한 Secret으로",
        "Pod metadata를 담은 Downward API 필드로",
        "애플리케이션 data를 위한 PersistentVolume으로"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "ConfigMap stores non-confidential settings exposed as files or environment variables and usable in arguments through mechanisms such as environment expansion. It can also hold a scheduler configuration file, but does not itself enforce scheduling rules. Being a ConfigMap does not provide encryption or confidentiality.",
      "ko": "ConfigMap은 비기밀 설정 데이터를 담아 파일·환경 변수로 제공하고 환경 변수 치환 등을 통해 명령 인자에도 사용할 수 있습니다. 스케줄러의 설정 파일을 담을 수도 있지만 ConfigMap 자체가 스케줄링 규칙을 적용하는 것은 아닙니다. ConfigMap이라는 이유만으로 데이터 암호화나 기밀성이 제공되지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/configmap/"
  },
  {
    "id": "local-230",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "In-Pod DNS diagnostic command · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "DNS problems are suspected inside a Pod. Which listed command approach most directly tests name resolution there?",
      "ko": "Pod 내부의 DNS 문제가 의심됩니다. 해당 위치에서 이름 해석을 가장 직접적으로 검사하는 명령 방식은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Use kubectl delete pod to recreate the Pod and retest after restarting",
        "Use kubectl get endpoints to check Service backend addresses",
        "Use kubectl logs to review DNS-related application errors",
        "Use kubectl exec -- nslookup to test name resolution inside the Pod"
      ],
      "ko": [
        "kubectl delete pod로 Pod를 재생성하고 재시작 후 다시 검사한다",
        "kubectl get endpoints로 Service 백엔드 주소를 확인한다",
        "kubectl logs로 DNS 관련 애플리케이션 오류를 살핀다",
        "kubectl exec -- nslookup으로 Pod 내부의 이름 해석을 검사한다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Exec runs a DNS query in the target container's network/DNS context. The listed command families are abbreviated: a real example is kubectl exec POD -- nslookup NAME, with a running container and that utility available. Logs and endpoints give indirect evidence; deletion is not a direct DNS test and does not recreate a bare Pod by itself. An exec error caused by a missing utility is not proof of a DNS failure.",
      "ko": "exec는 대상 컨테이너의 네트워크·DNS 환경에서 DNS 질의를 실행합니다. 제시된 명령 방식은 축약형이며 실제 예는 kubectl exec POD -- nslookup NAME입니다. 실행 중인 컨테이너에 해당 도구가 있어야 합니다. 로그와 endpoint는 간접 근거이고 삭제는 직접적인 DNS 검사가 아니며 bare Pod를 자체적으로 재생성하지도 않습니다. 도구가 없어 생긴 exec 오류는 DNS 실패의 증거가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/"
  },
  {
    "id": "local-231",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "NetworkPolicy additive behavior · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What happens when multiple NetworkPolicies select the same Pod?",
      "ko": "여러 NetworkPolicy가 같은 Pod를 선택하면 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "restricted",
        "additive",
        "conflicting",
        "hierarchical"
      ],
      "ko": [
        "restricted — 제한적",
        "additive — 합집합으로 누적",
        "conflicting — 충돌",
        "hierarchical — 계층적"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "NetworkPolicy allow rules are additive: for a selected Pod and a given direction, matching policies contribute the union of permitted traffic. Policies do not override by priority or creation order. Isolation is direction-specific, not an automatic block of both directions whenever any policy selects a Pod. A connection must satisfy applicable source-egress and destination-ingress rules, and enforcement needs a supporting plugin.",
      "ko": "NetworkPolicy 허용 규칙은 누적됩니다. 선택된 Pod의 특정 방향에 대해 일치하는 정책이 허용한 트래픽의 합집합이 적용됩니다. 우선순위나 생성 순서로 덮어쓰지 않습니다. 격리는 방향별로 적용되며 어떤 정책이 Pod를 선택했다는 이유만으로 양방향이 자동 차단되지는 않습니다. 연결에는 적용되는 출발지 egress·목적지 ingress 규칙을 모두 만족해야 하고 지원 플러그인이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-232",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod placement inspection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which command lists Pods with node placement for cluster-wide inspection?",
      "ko": "클러스터 전체에서 Pod의 노드 배치를 확인하려면 어떤 명령을 사용합니까?"
    },
    "choices": {
      "en": [
        "kubectl get pods -o wide --all-namespaces",
        "kubectl get nodes --containers",
        "kubectl describe service --node",
        "kubectl logs --placement"
      ],
      "ko": [
        "kubectl get pods -o wide --all-namespaces",
        "kubectl get nodes --containers",
        "kubectl describe service --node",
        "kubectl logs --placement"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "-o wide displays the NODE column and --all-namespaces lists across namespaces. Add --field-selector=spec.nodeName=worker-1 to target one node. kubectl describe node also shows non-terminated Pods per node, so placement inspection is not exclusive to wide output. Inspection itself does not relocate workloads.",
      "ko": "-o wide는 NODE 열을 보여 주고 --all-namespaces는 모든 네임스페이스를 조회합니다. --field-selector=spec.nodeName=worker-1을 추가하여 특정 노드로 좁힐 수 있습니다. kubectl describe node도 노드별 종료되지 않은 Pod를 보여 주므로 배치 확인은 wide 출력만의 기능이 아닙니다. 조회 명령 자체가 워크로드를 옮기지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/cheatsheet/"
  },
  {
    "id": "local-233",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Kubernetes Community Days · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "For CNCF-supported community events, what does KCD stand for?",
      "ko": "CNCF가 지원하는 커뮤니티 행사에서 KCD는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Kubernetes Cloud Developers",
        "Kubernetes Cloud Days",
        "Kubernetes Community Days",
        "Kubernetes Community Developers"
      ],
      "ko": [
        "Kubernetes Cloud Developers",
        "Kubernetes Cloud Days",
        "Kubernetes Community Days",
        "Kubernetes Community Developers"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "KCD means Kubernetes Community Days: regional, community-organized events supported by CNCF for education, collaboration and networking in cloud-native and open-source communities. The Cloud/Developers expansions are not this event name.",
      "ko": "KCD는 Kubernetes Community Days입니다. CNCF가 지원하는 지역별 커뮤니티 주도 행사로 클라우드 네이티브·오픈소스 커뮤니티의 교육, 협업, 네트워킹을 돕습니다. Cloud·Developers가 들어간 나머지 명칭은 이 행사명의 확장이 아닙니다."
    },
    "ref": "https://www.cncf.io/kcds/"
  },
  {
    "id": "local-486",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Selectorless Service endpoints · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Service configuration needs separately supplied backend endpoint mappings rather than Kubernetes automatically deriving them from matching Pods?",
      "ko": "다음 중 Kubernetes가 일치하는 Pod에서 백엔드 엔드포인트를 자동 생성하지 않아, 엔드포인트 매핑을 별도로 제공해야 하는 Service 구성은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A ClusterIP Service without a selector",
        "A LoadBalancer Service with a matching Pod selector",
        "A NodePort Service with a matching Pod selector",
        "A ClusterIP Service with a matching Pod selector"
      ],
      "ko": [
        "selector가 없는 ClusterIP Service",
        "일치하는 Pod selector를 지정한 LoadBalancer Service",
        "일치하는 Pod selector를 지정한 NodePort Service",
        "일치하는 Pod selector를 지정한 ClusterIP Service"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "For a selectorless ClusterIP Service, Kubernetes cannot discover matching Pods or automatically create its EndpointSlices. An operator or another controller must supply the backend mappings. The other listed Services have Pod selectors, so the endpoint controller can derive their backends. Current Kubernetes uses EndpointSlice; the older Endpoints API is deprecated. ExternalName is a separate DNS-alias case, not the selectorless ClusterIP configuration in this question.",
      "ko": "selector가 없는 ClusterIP Service에서는 Kubernetes가 일치하는 Pod를 찾거나 EndpointSlice를 자동 생성할 수 없습니다. 운영자 또는 별도 컨트롤러가 백엔드 매핑을 제공해야 합니다. 나머지 보기에는 Pod selector가 있으므로 엔드포인트 컨트롤러가 백엔드를 찾을 수 있습니다. 현재 Kubernetes는 EndpointSlice를 사용하며, 이전 Endpoints API는 deprecated 상태입니다. ExternalName은 별도의 DNS 별칭 방식이며, 이 문항의 selector 없는 ClusterIP 구성과 다릅니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#services-without-selectors"
  },
  {
    "id": "local-488",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Linkerd service mesh · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "An operator wants transparent service-to-service traffic control, access policy, and telemetry without modifying application code. Which listed project is the lightweight service mesh for this job?",
      "ko": "운영자가 애플리케이션 코드를 수정하지 않고 서비스 간 트래픽 제어, 접근 정책, 텔레메트리를 적용하려고 합니다. 이 목적에 맞는 경량 서비스 메시 프로젝트는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Linkerd",
        "NetworkPolicy",
        "kube-proxy",
        "NGINX"
      ],
      "ko": [
        "Linkerd",
        "NetworkPolicy",
        "kube-proxy",
        "NGINX"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Linkerd is a Kubernetes service mesh whose transparent lightweight proxies provide observability, reliability, and security without application-code changes. NetworkPolicy describes network access rules; kube-proxy implements Service forwarding; a generic NGINX reverse proxy is not, by itself, the transparent service mesh described here.",
      "ko": "Linkerd는 경량 투명 프록시로 애플리케이션 코드 변경 없이 관측성, 신뢰성, 보안을 제공하는 Kubernetes 서비스 메시입니다. NetworkPolicy는 네트워크 접근 규칙을 정의하고 kube-proxy는 Service 전달을 구현합니다. 일반적인 NGINX 리버스 프록시만으로는 이 문항에서 요구하는 투명 서비스 메시가 구성되지 않습니다."
    },
    "ref": "https://linkerd.io/docs/overview/"
  },
  {
    "id": "local-493",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Incident management roles · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which role usually owns the design, rehearsal, and operation of a service's incident-management process?",
      "ko": "서비스의 인시던트 관리 절차를 설계하고 훈련하며 운영하는 일을 일반적으로 맡는 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Site Reliability Engineers",
        "Project Managers",
        "Application Developers",
        "Quality Engineers"
      ],
      "ko": [
        "사이트 신뢰성 엔지니어(SRE)",
        "프로젝트 관리자",
        "애플리케이션 개발자",
        "품질 엔지니어"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "SRE work commonly includes emergency response, on-call preparation, and rehearsing operational incident procedures. Project managers coordinate project delivery, developers implement application changes, and quality engineers focus on testing; all may participate in an incident, but SRE is the usual reliability-focused role among these choices. Actual ownership depends on the organization rather than being an exclusive authority of every SRE team.",
      "ko": "SRE 업무에는 일반적으로 긴급 대응, 온콜 준비, 운영 인시던트 절차 훈련이 포함됩니다. 프로젝트 관리자는 프로젝트 수행을 조정하고, 개발자는 애플리케이션 변경을 구현하며, 품질 엔지니어는 테스트에 집중합니다. 모두 인시던트에 참여할 수 있지만, 보기 중 신뢰성 운영을 중심으로 이 절차를 맡는 일반적인 역할은 SRE입니다. 실제 담당 팀은 조직에 따라 달라지며 SRE만 수행할 수 있다는 뜻은 아닙니다."
    },
    "ref": "https://sre.google/sre-book/managing-incidents/"
  },
  {
    "id": "local-495",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "kubectl field documentation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "You need the schema documentation for a Deployment's spec.replicas field, rather than the current replica value of a particular Deployment. Which command performs that lookup?",
      "ko": "특정 Deployment의 현재 복제본 수가 아니라 spec.replicas 필드의 스키마 문서를 확인하려고 합니다. 어떤 명령을 사용해야 합니까?"
    },
    "choices": {
      "en": [
        "kubectl explain deployment.spec.replicas",
        "kubectl get deployment.spec.replicas",
        "kubectl describe deployment.spec.replicas",
        "kubectl explain deployment --spec.replicas"
      ],
      "ko": [
        "kubectl explain deployment.spec.replicas",
        "kubectl get deployment.spec.replicas",
        "kubectl describe deployment.spec.replicas",
        "kubectl explain deployment --spec.replicas"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl explain accepts TYPE.FIELDNAME[.FIELDNAME] and retrieves field documentation from the server's OpenAPI schema. deployment.spec.replicas identifies the nested replicas field. get and describe inspect live resource instances rather than using this schema-field path; --spec.replicas is not an explain flag.",
      "ko": "kubectl explain은 TYPE.FIELDNAME[.FIELDNAME] 형식을 받아 서버의 OpenAPI 스키마에서 필드 문서를 조회합니다. deployment.spec.replicas는 중첩된 replicas 필드를 지정합니다. get과 describe는 이 스키마 필드 경로가 아니라 실제 리소스 인스턴스를 조회하며, --spec.replicas는 explain의 옵션이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_explain/"
  },
  {
    "id": "local-500",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Executing commands in a Pod · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Using the Kubernetes API, which command starts a new command inside a container of an existing running Pod?",
      "ko": "Kubernetes API를 통해 이미 실행 중인 Pod의 컨테이너 안에서 새 명령을 실행하려면 어떤 명령을 사용해야 합니까?"
    },
    "choices": {
      "en": [
        "kubectl exec POD -- COMMAND",
        "docker exec CONTAINER COMMAND",
        "kubectl run POD -- COMMAND",
        "kubectl attach -i POD"
      ],
      "ko": [
        "kubectl exec POD -- COMMAND",
        "docker exec CONTAINER COMMAND",
        "kubectl run POD -- COMMAND",
        "kubectl attach -i POD"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl exec invokes a command in an existing Pod container, with -- separating kubectl arguments from the container command. docker exec targets a Docker Engine container, not a Pod through the Kubernetes API. kubectl run creates a Pod; attach connects to an existing container process's streams rather than starting a new command.",
      "ko": "kubectl exec는 기존 Pod 컨테이너에서 명령을 실행하며, --는 kubectl 인수와 컨테이너 명령을 구분합니다. docker exec는 Kubernetes API의 Pod가 아니라 Docker Engine 컨테이너를 대상으로 합니다. kubectl run은 Pod를 생성하고, attach는 새 명령을 시작하는 대신 기존 컨테이너 프로세스의 입출력 스트림에 연결합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/"
  },
  {
    "id": "local-501",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Creating a headless Service · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which field setting creates a headless Kubernetes Service without allocating a virtual cluster IP?",
      "ko": "가상 클러스터 IP를 할당하지 않는 헤드리스 Kubernetes Service를 만들려면 어떤 필드를 설정해야 합니까?"
    },
    "choices": {
      "en": [
        "spec.clusterIP: None",
        "spec.ClusterIP: headless",
        "spec.ClusterIP: 0.0.0.0",
        "spec.ClusterIP: localhost"
      ],
      "ko": [
        "spec.clusterIP: None",
        "spec.ClusterIP: headless",
        "spec.ClusterIP: 0.0.0.0",
        "spec.ClusterIP: localhost"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "For a Service of type ClusterIP, explicitly set spec.clusterIP to the string None. Leaving the field unset allows normal cluster-IP allocation. Field names are case-sensitive: clusterIP is correct, whereas ClusterIP is not. headless, 0.0.0.0, and localhost are not the special headless value.",
      "ko": "ClusterIP 유형의 Service에서 spec.clusterIP를 문자열 None으로 명시적으로 설정합니다. 필드를 생략하면 일반 클러스터 IP가 할당됩니다. 필드 이름은 대소문자를 구분하므로 clusterIP가 올바르며 ClusterIP는 올바르지 않습니다. headless, 0.0.0.0, localhost는 헤드리스용 특수 값이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services"
  },
  {
    "id": "local-507",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Smallest deployable unit · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes object is the smallest deployable computing unit for one or more containers?",
      "ko": "하나 이상의 컨테이너를 실행하기 위한 Kubernetes의 가장 작은 배포 가능한 컴퓨팅 단위는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Pod",
        "StatefulSet",
        "Deployment",
        "Container"
      ],
      "ko": [
        "Pod",
        "StatefulSet",
        "Deployment",
        "Container"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Pod is Kubernetes' smallest deployable unit and groups one or more co-located containers. Deployment and StatefulSet are higher-level workload resources that manage Pods. A container is executed by the runtime inside a Pod; it is not the independently scheduled Kubernetes deployment unit.",
      "ko": "Pod는 Kubernetes의 가장 작은 배포 단위이며 함께 배치되는 하나 이상의 컨테이너를 묶습니다. Deployment와 StatefulSet은 Pod를 관리하는 상위 워크로드 리소스입니다. 컨테이너는 Pod 안에서 런타임이 실행하는 구성 요소이며, Kubernetes가 독립적으로 스케줄링하는 배포 단위는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/"
  },
  {
    "id": "local-511",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container-runtime identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which container runtime's official project description specifically emphasizes simplicity, robustness, and portability?",
      "ko": "공식 프로젝트 소개에서 단순성·견고함·이식성을 강조하는 컨테이너 런타임은 무엇입니까?"
    },
    "choices": {
      "en": [
        "containerd",
        "cri-o",
        "lxd",
        "kata-runtime"
      ],
      "ko": [
        "containerd",
        "cri-o",
        "lxd",
        "kata-runtime"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "containerd's official site uses those three qualities to describe its industry-standard container runtime. It manages the host's container lifecycle, including image transfer/storage and execution. This question identifies the documented project description; it does not claim that the other runtimes lack simplicity, robustness, or portability.",
      "ko": "containerd 공식 사이트는 산업 표준 컨테이너 런타임을 소개하면서 이 세 가지 특성을 명시합니다. containerd는 이미지 전송·저장과 실행 등을 포함한 호스트의 컨테이너 수명주기를 관리합니다. 이 문항은 문서에 있는 프로젝트 소개의 대상을 찾는 것이며, 다른 런타임에 단순성·견고함·이식성이 없다고 주장하는 것은 아닙니다."
    },
    "ref": "https://containerd.io/"
  },
  {
    "id": "local-514",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Serverless computing model · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which description best captures the serverless computing model?",
      "ko": "서버리스 컴퓨팅 모델을 가장 잘 설명하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Providing backend services on demand, with server provisioning managed by the platform",
        "Providing services for AI and ML operating systems",
        "Providing services for quantum-computing operating systems",
        "Providing services for cloud-computing operating systems"
      ],
      "ko": [
        "플랫폼이 서버 준비를 관리하면서 필요에 따라 백엔드 서비스를 제공함",
        "AI·ML 운영체제를 위한 서비스를 제공함",
        "양자 컴퓨팅 운영체제를 위한 서비스를 제공함",
        "클라우드 컴퓨팅 운영체제를 위한 서비스를 제공함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Serverless abstracts server provisioning and capacity management away from application developers and provides execution or backend services on demand. It is an operating and consumption model, not a definition based on a special AI/ML, quantum, or cloud operating system. Servers still exist, and developers remain responsible for application code and configuration.",
      "ko": "서버리스는 서버 준비와 용량 관리를 애플리케이션 개발자로부터 분리하고 필요에 따라 실행 또는 백엔드 서비스를 제공합니다. 특정 AI·ML, 양자, 클라우드 운영체제로 정의되는 것이 아니라 운영·사용 모델을 나타냅니다. 서버가 실제로 없어지는 것은 아니며 개발자는 여전히 애플리케이션 코드와 설정에 책임을 집니다."
    },
    "ref": "https://glossary.cncf.io/serverless/"
  },
  {
    "id": "local-516",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Open container standards · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which initiative develops open industry specifications for container formats and runtimes?",
      "ko": "컨테이너 포맷과 런타임의 개방형 산업 사양을 개발하는 이니셔티브는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Open Container Initiative (OCI)",
        "Linux Foundation Certification Group (LFCG)",
        "Container Network Interface (CNI)",
        "Container Runtime Interface (CRI)"
      ],
      "ko": [
        "Open Container Initiative(OCI)",
        "Linux Foundation Certification Group(LFCG)",
        "Container Network Interface(CNI)",
        "Container Runtime Interface(CRI)"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "OCI develops the runtime, image, and distribution specifications for interoperable containers. It was formed under the Linux Foundation; it should not be described as a CNCF subproject. CNI concerns container networking and CRI concerns kubelet/runtime integration, while the certification-group alternative is not the initiative responsible for these specifications.",
      "ko": "OCI는 컨테이너 상호 운용성을 위한 런타임·이미지·배포 사양을 개발합니다. Linux Foundation 아래에서 설립되었으므로 CNCF 하위 프로젝트라고 설명해서는 안 됩니다. CNI는 컨테이너 네트워킹, CRI는 kubelet·런타임 연동을 다루며 자격인증 그룹을 가리키는 보기는 이 사양들의 개발 주체가 아닙니다."
    },
    "ref": "https://opencontainers.org/about/overview/"
  },
  {
    "id": "local-519",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service abstraction · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes abstraction groups application backends, usually Pods, and defines how clients can access them over the network?",
      "ko": "일반적으로 Pod인 애플리케이션 백엔드를 논리적으로 묶고 클라이언트가 네트워크로 접근하는 방법을 정의하는 Kubernetes 추상화는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Service",
        "Selector",
        "Controller",
        "Job"
      ],
      "ko": [
        "Service",
        "Selector",
        "Controller",
        "Job"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Service exposes a logical set of backend endpoints and decouples clients from changing Pod addresses. A label selector commonly identifies matching Pods, but selectorless Services also exist. A selector is a matching rule, a controller reconciles state, and a Job manages finite tasks; none is the Service network-access abstraction.",
      "ko": "Service는 논리적 백엔드 엔드포인트 집합을 노출하여 클라이언트가 변하는 Pod 주소에 직접 의존하지 않도록 합니다. 보통 레이블 셀렉터로 Pod를 찾지만 셀렉터 없는 Service도 존재합니다. Selector는 일치 규칙, Controller는 상태 조정 구성 요소, Job은 유한 작업을 관리하는 리소스이며 Service의 네트워크 접근 추상화와는 다릅니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-522",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Pod persistent-storage reference · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "When using storage backed by a PersistentVolume, which resource does a Pod reference in its volume definition?",
      "ko": "PersistentVolume으로 제공되는 저장소를 사용할 때 Pod의 볼륨 정의가 참조하는 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "PersistentVolumeClaim",
        "StorageVolume",
        "PersistentVolume",
        "StorageClass"
      ],
      "ko": [
        "PersistentVolumeClaim",
        "StorageVolume",
        "PersistentVolume",
        "StorageClass"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The Pod references a PersistentVolumeClaim using persistentVolumeClaim.claimName in its volumes definition. The claim is bound to a PersistentVolume, while a StorageClass describes provisioning policy. StorageVolume is not a standard core resource for this purpose. This is the PV-backed storage path; ephemeral volume types do not all require a PVC.",
      "ko": "Pod는 volumes 정의의 persistentVolumeClaim.claimName으로 PersistentVolumeClaim을 참조합니다. 클레임은 PersistentVolume에 바인딩되고 StorageClass는 프로비저닝 정책을 설명합니다. StorageVolume은 이 용도의 표준 코어 리소스가 아닙니다. 이는 PV 기반 저장소를 사용하는 경로이며, 모든 임시 볼륨 유형에 PVC가 필요한 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes"
  },
  {
    "id": "local-523",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cluster backing-store identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which key-value store is used as the backing store for Kubernetes cluster API data?",
      "ko": "Kubernetes 클러스터의 API 데이터를 보존하는 백엔드 키-값 저장소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "etcd",
        "ZooKeeper",
        "ControlPlaneStore",
        "Redis"
      ],
      "ko": [
        "etcd",
        "ZooKeeper",
        "ControlPlaneStore",
        "Redis"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "etcd is Kubernetes' consistent, highly available key-value backing store for cluster API data. ZooKeeper and Redis are other data systems, not the standard Kubernetes API backing store, and ControlPlaneStore is not its component name. This concerns cluster object/state data, not all application files, volume contents, or logs.",
      "ko": "etcd는 Kubernetes 클러스터 API 데이터를 보존하는 일관성과 고가용성을 갖춘 키-값 저장소입니다. ZooKeeper와 Redis는 다른 데이터 시스템이며 표준 Kubernetes API 백엔드 저장소가 아니고, ControlPlaneStore는 해당 구성 요소의 이름이 아닙니다. 여기서 말하는 데이터는 클러스터 오브젝트와 상태이며 모든 애플리케이션 파일·볼륨 내용·로그를 뜻하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/#etcd"
  },
  {
    "id": "local-524",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Default shared Pod namespace · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed Linux namespace is shared by default by containers in the same Kubernetes Pod?",
      "ko": "같은 Kubernetes Pod의 컨테이너들이 기본적으로 공유하는 Linux 네임스페이스는 보기 중 무엇입니까?"
    },
    "choices": {
      "en": [
        "Network",
        "Host Network",
        "Process ID",
        "Process Name"
      ],
      "ko": [
        "네트워크",
        "호스트 네트워크",
        "프로세스 ID",
        "프로세스 이름"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Containers in a Pod share its network namespace, including IP addresses and port space. Sharing the node's host network is a separate hostNetwork setting. Process-namespace sharing is an optional shareProcessNamespace setting, not the default. Process Name is not a separate Linux namespace type.",
      "ko": "Pod 안의 컨테이너는 IP 주소와 포트 공간을 포함한 네트워크 네임스페이스를 공유합니다. 노드의 호스트 네트워크를 공유하는 것은 별도 hostNetwork 설정입니다. 프로세스 네임스페이스 공유는 선택적인 shareProcessNamespace 설정이며 기본값이 아닙니다. 프로세스 이름은 별도의 Linux 네임스페이스 유형이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking"
  },
  {
    "id": "local-471",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Control-plane component identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed component belongs to the Kubernetes control plane?",
      "ko": "보기 중 Kubernetes 제어 플레인에 속하는 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "cloud-controller-manager",
        "CoreDNS",
        "kube-proxy",
        "kubelet"
      ],
      "ko": [
        "cloud-controller-manager",
        "CoreDNS",
        "kube-proxy",
        "kubelet"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "cloud-controller-manager is an optional control-plane component that integrates Kubernetes with cloud-provider APIs. kubelet and kube-proxy are node components, and CoreDNS is a cluster DNS addon. Optional means the cloud controller need not exist in every cluster; it does not change its architectural role.",
      "ko": "cloud-controller-manager는 Kubernetes와 클라우드 제공자 API를 연동하는 선택적 제어 플레인 구성 요소입니다. kubelet과 kube-proxy는 노드 구성 요소이고 CoreDNS는 클러스터 DNS 애드온입니다. 선택적이라는 것은 모든 클러스터에 클라우드 컨트롤러가 있어야 하는 것은 아니라는 뜻이며, 아키텍처상 역할이 달라지는 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/"
  },
  {
    "id": "local-457",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Storage operator identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed Kubernetes storage operator automates storage deployment and management to support self-healing and scaling?",
      "ko": "보기 중 Kubernetes에서 스토리지 배포·관리를 자동화하고 자동 복구·확장을 지원하는 스토리지 오퍼레이터는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Rook",
        "Kubernetes",
        "Helm",
        "Container Storage Interface (CSI)"
      ],
      "ko": [
        "Rook",
        "Kubernetes",
        "Helm",
        "Container Storage Interface (CSI)"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Rook's operator automates Ceph deployment, configuration, provisioning, scaling, upgrades, and monitoring. Kubernetes is the platform, Helm is a package manager, and CSI is the interface used by storage drivers; they are not the storage-system operator in this comparison. Self-management capabilities depend on the storage system and operator configuration.",
      "ko": "Rook 오퍼레이터는 Ceph의 배포·설정·프로비저닝·확장·업그레이드·모니터링을 자동화합니다. Kubernetes는 플랫폼, Helm은 패키지 관리자, CSI는 스토리지 드라이버가 사용하는 인터페이스이며 이 비교에서 묻는 스토리지 시스템 오퍼레이터가 아닙니다. 자동 관리 기능은 스토리지 시스템과 오퍼레이터 설정에 따라 동작합니다."
    },
    "ref": "https://rook.io/docs/rook/latest/Getting-Started/intro/"
  },
  {
    "id": "local-461",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container probe definition · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Within Kubernetes, what does a container probe refer to?",
      "ko": "Kubernetes에서 컨테이너 프로브는 무엇을 뜻합니까?"
    },
    "choices": {
      "en": [
        "A mechanism that monitors the Kubernetes API itself",
        "A pre-run execution scope issued by a kubectl agent",
        "A diagnostic that the kubelet periodically performs on a container",
        "A mechanism that records Kubernetes API logs"
      ],
      "ko": [
        "Kubernetes API 자체를 감시하는 메커니즘",
        "kubectl 에이전트가 실행 전에 발급하는 실행 범위",
        "kubelet이 컨테이너에 주기적으로 수행하는 진단",
        "Kubernetes API 로그를 기록하는 메커니즘"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A probe is a diagnostic that the kubelet performs on a container, using an exec command or a network check such as HTTP, TCP, or gRPC. Liveness, readiness, and startup probes use their results for different lifecycle decisions. A probe is not API-server monitoring or audit logging, and kubectl is a client rather than the node agent performing these checks.",
      "ko": "프로브는 kubelet이 컨테이너에 수행하는 진단으로, 명령 실행이나 HTTP·TCP·gRPC 같은 네트워크 검사를 사용합니다. 활성·준비·시작 프로브는 진단 결과를 서로 다른 생명주기 판단에 사용합니다. 프로브는 API 서버 모니터링이나 감사 로그가 아니며, kubectl은 이 검사를 수행하는 노드 에이전트가 아니라 클라이언트입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes"
  },
  {
    "id": "local-464",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Cluster DNS purpose · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the main purpose of the cluster DNS service in Kubernetes?",
      "ko": "Kubernetes 클러스터 DNS 서비스의 주된 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Serve DNS for virtual machines running outside the cluster",
        "Offer public DNS hosting where users register and manage zones for their own domains",
        "Translate IPv6 requests into IPv4 requests for dual-stack Pods",
        "Provide DNS names for Pods and Services so workloads can discover one another"
      ],
      "ko": [
        "클러스터 밖에서 실행되는 가상 머신을 위한 DNS를 제공한다",
        "사용자가 소유한 도메인의 영역을 등록·관리하는 공개 DNS 호스팅을 제공한다",
        "듀얼 스택 Pod의 IPv6 요청을 IPv4 요청으로 변환한다",
        "워크로드가 서로를 찾을 수 있도록 Pod와 Service의 DNS 이름을 제공한다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Cluster DNS publishes Service records and supports Pod DNS records according to the applicable configuration, enabling in-cluster name-based discovery. It is not a public-domain registration service or an IPv6-to-IPv4 translator. Pod records depend on naming and DNS configuration; the statement does not promise that every Pod automatically has a persistent individual DNS name.",
      "ko": "클러스터 DNS는 Service의 DNS 레코드를 제공하고 설정에 따라 Pod의 DNS 레코드도 지원하여 클러스터 내부에서 이름으로 대상을 찾게 합니다. 공개 도메인 등록 서비스나 IPv6·IPv4 변환기가 아닙니다. Pod 레코드는 이름과 DNS 설정에 따라 달라지며, 모든 Pod에 영구적인 개별 DNS 이름이 자동 생성된다는 뜻은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"
  },
  {
    "id": "local-468",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespace identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed construct provides logical resource grouping within one shared Kubernetes cluster?",
      "ko": "하나의 공유 Kubernetes 클러스터 안에서 리소스를 논리적으로 그룹화하는 구성은 무엇입니까?"
    },
    "choices": {
      "en": [
        "namespaces",
        "containers",
        "hypervisors",
        "cgroups"
      ],
      "ko": [
        "네임스페이스(namespaces)",
        "컨테이너(containers)",
        "하이퍼바이저(hypervisors)",
        "제어 그룹(cgroups)"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Namespaces scope resource names and organize namespaced objects within a shared cluster. Describing them as virtual clusters is an old logical-grouping metaphor, not a promise of separate API servers, kernels, or automatic network isolation. Containers run processes, hypervisors virtualize machines, and cgroups account for and constrain process resources. Cluster-scoped objects such as Nodes are not divided by namespace.",
      "ko": "네임스페이스는 공유 클러스터 안에서 리소스 이름의 범위를 정하고 네임스페이스 범위 객체를 구성합니다. 이를 가상 클러스터라고 부르는 표현은 오래된 논리적 그룹화 비유이며, 별도 API 서버·커널·자동 네트워크 격리를 보장하지 않습니다. 컨테이너는 프로세스를 실행하고, 하이퍼바이저는 머신을 가상화하며, cgroups는 프로세스의 자원 사용을 계산·제한합니다. Node 같은 클러스터 범위 객체는 네임스페이스로 나뉘지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-470",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API resource discovery · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command lists the API resource types supported by a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터가 지원하는 API 리소스 종류를 나열하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl api-resources",
        "kubectl get namespaces",
        "kubectl api-versions",
        "curl https://kubectrl/namespaces"
      ],
      "ko": [
        "kubectl api-resources",
        "kubectl get namespaces",
        "kubectl api-versions",
        "curl https://kubectrl/namespaces"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl api-resources prints the API resource types supported by the server. kubectl get namespaces lists Namespace instances, while kubectl api-versions lists API group/version identifiers. The supplied curl URL is not a standard API discovery request and does not list resource types. This is resource-type discovery, not field documentation from kubectl explain.",
      "ko": "kubectl api-resources는 서버가 지원하는 API 리소스 종류를 출력합니다. kubectl get namespaces는 Namespace 인스턴스를, kubectl api-versions는 API 그룹·버전 식별자를 나열합니다. 보기의 curl URL은 표준 API 검색 요청이 아니며 리소스 종류를 나열하지 않습니다. 이는 kubectl explain으로 조회하는 필드 문서와 구별됩니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_api-resources/"
  },
  {
    "id": "local-476",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment and ReplicaSet relationship · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement describes the controller relationship between Deployments and ReplicaSets?",
      "ko": "Deployment와 ReplicaSet의 컨트롤러 관계를 설명한 문장은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A Deployment manages ReplicaSets to deliver declarative Pod updates",
        "ReplicaSets handle stateful applications, and Deployments handle stateless applications",
        "A Deployment is a running instance of a ReplicaSet",
        "ReplicaSets belong to Jobs and CronJobs that use imperative Deployments"
      ],
      "ko": [
        "Deployment는 ReplicaSet을 관리하여 Pod에 선언적 업데이트를 제공한다",
        "ReplicaSet은 상태 저장 애플리케이션을, Deployment는 상태 비저장 애플리케이션을 담당한다",
        "Deployment는 ReplicaSet의 실행 인스턴스이다",
        "ReplicaSet은 명령형 Deployment를 사용하는 Job과 CronJob에 속한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The Deployment controller manages ReplicaSets, and ReplicaSets maintain the desired number of Pods. A Deployment adds declarative rollout and revision management above ReplicaSets. ReplicaSet is not the stateful-identity controller; Deployment is not a runtime instance of it; Jobs and CronJobs form a separate workload-controller relationship.",
      "ko": "Deployment 컨트롤러는 ReplicaSet을 관리하고 ReplicaSet은 원하는 Pod 수를 유지합니다. Deployment는 그 위에서 선언적 롤아웃과 리비전 관리를 제공합니다. ReplicaSet은 상태 저장 워크로드의 고정 식별자를 관리하는 컨트롤러가 아니며 Deployment는 ReplicaSet의 실행 인스턴스가 아닙니다. Job과 CronJob은 별도의 워크로드 컨트롤러 관계를 이룹니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
  },
  {
    "id": "local-479",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Application exposure resource · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed Kubernetes resource provides the networking abstraction used to expose an application?",
      "ko": "애플리케이션을 노출하기 위한 네트워크 추상화를 제공하는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Port",
        "Service",
        "DNS",
        "Deployment"
      ],
      "ko": [
        "Port",
        "Service",
        "DNS",
        "Deployment"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Service is the Kubernetes networking abstraction used to expose an application. A port is an endpoint attribute, DNS supplies names, and a Deployment manages workload Pods rather than the Service abstraction. Service behavior varies by type; a headless Service does not allocate a virtual cluster IP.",
      "ko": "Service는 애플리케이션을 노출하는 Kubernetes 네트워크 추상화입니다. 포트는 엔드포인트의 속성이고 DNS는 이름을 제공하며 Deployment는 Service 추상화가 아니라 워크로드 Pod를 관리합니다. Service의 동작은 종류에 따라 다르며 헤드리스 Service는 가상 클러스터 IP를 할당하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-480",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "DaemonSet definition · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which description matches the role of a Kubernetes DaemonSet?",
      "ko": "Kubernetes DaemonSet의 역할에 맞는 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A workload that runs a copy of a Pod on each node in a specified set",
        "A workload that maintains a stable number of replica Pods on arbitrary nodes",
        "A workload that runs periodically according to a schedule",
        "A workload that provides stable Pod identities and ordered management of a Pod set"
      ],
      "ko": [
        "지정된 노드 집합의 각 노드에서 Pod 복사본을 실행하는 워크로드",
        "임의의 노드에서 일정한 수의 복제 Pod를 유지하는 워크로드",
        "일정에 따라 주기적으로 실행되는 워크로드",
        "Pod의 고정 식별자와 Pod 집합의 순서 있는 관리를 제공하는 워크로드"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A DaemonSet manages a Pod copy on all or selected eligible nodes, commonly for node-local agents. ReplicaSets maintain a replica count, CronJobs schedule Jobs, and StatefulSets provide stable identities and ordered lifecycle behavior. This describes the desired node coverage, not an absolute guarantee that every node always has exactly one running Pod during failures or surge updates.",
      "ko": "DaemonSet은 모든 적격 노드 또는 선택된 적격 노드에서 Pod 복사본을 관리하며 노드별 에이전트에 흔히 사용됩니다. ReplicaSet은 복제 수를 유지하고 CronJob은 Job을 예약하며 StatefulSet은 고정 식별자와 순서 있는 생명주기 동작을 제공합니다. 이는 원하는 노드 적용 범위를 설명하는 것으로, 장애나 서지 업데이트 중에도 각 노드에 실행 중인 Pod가 항상 정확히 하나라는 절대 보장은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"
  },
  {
    "id": "local-481",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Tracing signal identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which telemetry signal connects related operations to represent an end-to-end request flow through a distributed system?",
      "ko": "분산 시스템을 거치는 요청의 전체 흐름을 나타내도록 관련 작업을 연결하는 텔레메트리 신호는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Metrics",
        "Logs",
        "Spans",
        "Traces"
      ],
      "ko": [
        "메트릭(Metrics)",
        "로그(Logs)",
        "스팬(Spans)",
        "트레이스(Traces)"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A trace connects related spans to represent a request's path through a system. A span represents one operation or unit of work within that trace. Metrics describe numerical measurements and logs record events; neither is the connected request-flow signal asked for here.",
      "ko": "트레이스는 관련 스팬을 연결해 시스템 안에서 요청이 이동하는 경로를 나타냅니다. 스팬은 그 트레이스 안의 개별 작업 단위입니다. 메트릭은 수치 측정값을, 로그는 이벤트 기록을 나타내며 여기서 묻는 연결된 요청 흐름 신호 자체가 아닙니다."
    },
    "ref": "https://opentelemetry.io/docs/concepts/signals/traces/"
  },
  {
    "id": "local-482",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container runtime identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed Kubernetes component is a container runtime responsible for running containers?",
      "ko": "보기 중 컨테이너 실행을 담당하는 컨테이너 런타임인 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "etcd",
        "CRI-O",
        "cloud-controller-manager",
        "kube-controller-manager"
      ],
      "ko": [
        "etcd",
        "CRI-O",
        "cloud-controller-manager",
        "kube-controller-manager"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "CRI-O implements the Container Runtime Interface and manages container execution using OCI runtimes. etcd stores cluster data, cloud-controller-manager integrates cloud-provider functions, and kube-controller-manager runs Kubernetes reconciliation controllers; those are not container runtimes.",
      "ko": "CRI-O는 Container Runtime Interface를 구현하고 OCI 런타임을 사용해 컨테이너 실행을 관리합니다. etcd는 클러스터 데이터를 저장하고 cloud-controller-manager는 클라우드 제공자 기능을 연동하며 kube-controller-manager는 Kubernetes 조정 컨트롤러를 실행합니다. 이들은 컨테이너 런타임이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
  },
  {
    "id": "local-484",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service proxy identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed component configures Service forwarding rules on nodes, using operating-system packet filtering where available?",
      "ko": "가능한 경우 운영체제의 패킷 필터링을 사용해 노드에 Service 전달 규칙을 구성하는 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-proxy",
        "kubelet",
        "etcd",
        "kube-controller-manager"
      ],
      "ko": [
        "kube-proxy",
        "kubelet",
        "etcd",
        "kube-controller-manager"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kube-proxy implements Service networking by maintaining node forwarding rules. kubelet manages node workloads, etcd stores API data, and kube-controller-manager runs reconciliation controllers. This does not mean kube-proxy handles every cluster packet; a networking implementation can also replace kube-proxy's Service-proxy function.",
      "ko": "kube-proxy는 노드의 전달 규칙을 유지하여 Service 네트워킹을 구현합니다. kubelet은 노드 워크로드를 관리하고 etcd는 API 데이터를 저장하며 kube-controller-manager는 조정 컨트롤러를 실행합니다. kube-proxy가 모든 클러스터 패킷을 처리한다는 뜻은 아니며, 네트워크 구현체가 Service 프록시 기능을 대신할 수도 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/networking/virtual-ips/"
  },
  {
    "id": "local-489",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Immutable flag resource identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed Kubernetes resource supports the top-level boolean field immutable: true?",
      "ko": "보기 중 최상위 불리언 필드 immutable: true를 지원하는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deployment",
        "Pod",
        "ConfigMap",
        "ReplicaSet"
      ],
      "ko": [
        "Deployment",
        "Pod",
        "ConfigMap",
        "ReplicaSet"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "ConfigMap supports the top-level immutable field; setting it to true prevents changes to its data. Secrets support the same feature but are not among these options. Other resources can have immutable individual fields, which is not the same as this top-level boolean switch.",
      "ko": "ConfigMap은 최상위 immutable 필드를 지원하며 true로 설정하면 데이터 변경을 막습니다. Secret도 이 기능을 지원하지만 보기에는 없습니다. 다른 리소스에 변경 불가능한 개별 필드가 있다는 사실은 이 최상위 불리언 스위치를 지원한다는 뜻이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable"
  },
  {
    "id": "local-491",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container scheduling unit identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource packages co-located containers as a unit for scheduling?",
      "ko": "함께 배치되는 컨테이너를 하나의 스케줄링 단위로 묶는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Pod",
        "ContainerSet",
        "ReplicaSet",
        "Deployment"
      ],
      "ko": [
        "Pod",
        "ContainerSet",
        "ReplicaSet",
        "Deployment"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Pod packages one or more containers that are co-located and co-scheduled. ReplicaSets and Deployments manage Pods rather than replacing this container scheduling unit. ContainerSet is not a Kubernetes core API resource type.",
      "ko": "Pod는 하나 이상의 컨테이너를 함께 배치하고 스케줄링하는 단위로 묶습니다. ReplicaSet과 Deployment는 Pod를 관리하며 이 컨테이너 스케줄링 단위를 대체하지 않습니다. ContainerSet은 Kubernetes 핵심 API의 리소스 종류가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/"
  },
  {
    "id": "local-499",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Native workload deployment workflow · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed workflow deploys a Kubernetes workload with the standard client, without requiring an additional deployment tool?",
      "ko": "별도의 배포 도구를 추가하지 않고 표준 클라이언트로 Kubernetes 워크로드를 배포하는 절차는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Create a Bash script and run it on a worker node",
        "Create a Helm chart and install it with helm",
        "Create a manifest and apply it with kubectl",
        "Create a Python script and run it with kubectl"
      ],
      "ko": [
        "Bash 스크립트를 만들고 워커 노드에서 실행한다",
        "Helm 차트를 만들고 helm으로 설치한다",
        "매니페스트를 만들고 kubectl로 적용한다",
        "Python 스크립트를 만들고 kubectl로 실행한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "kubectl apply -f workload.yaml submits a manifest to the Kubernetes API. Helm requires an additional executable, and kubectl is not a Python interpreter. Running a script on a worker does not by itself specify submission of Kubernetes resources; scripts can wrap API calls, but that is not the deployment mechanism stated by that option.",
      "ko": "kubectl apply -f workload.yaml은 매니페스트를 Kubernetes API에 제출합니다. Helm에는 별도 실행 파일이 필요하며 kubectl은 Python 인터프리터가 아닙니다. 워커에서 스크립트를 실행한다는 설명만으로 Kubernetes 리소스를 제출하는 절차가 정해지는 것은 아닙니다. 스크립트가 API 호출을 감쌀 수는 있지만 해당 보기에 그 배포 메커니즘은 제시되지 않았습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_apply/"
  },
  {
    "id": "local-526",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "nodeSelector matching attribute · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which node attribute does a PodSpec's nodeSelector match when choosing a node?",
      "ko": "PodSpec의 nodeSelector는 노드를 선택할 때 노드의 어떤 속성을 비교합니까?"
    },
    "choices": {
      "en": [
        "Annotations",
        "IP addresses",
        "Hostnames",
        "Labels"
      ],
      "ko": [
        "어노테이션(Annotations)",
        "IP 주소",
        "호스트 이름",
        "레이블(Labels)"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "nodeSelector matches node label key/value pairs; the selected node must satisfy every specified pair. Annotations and node IPs are not its matching input. A hostname can be selected through the kubernetes.io/hostname label, but that still uses the label mechanism rather than direct hostname matching.",
      "ko": "nodeSelector는 노드 레이블의 키·값 조합을 비교하며 선택된 노드는 지정된 모든 조합을 만족해야 합니다. 어노테이션이나 노드 IP를 직접 비교하는 기능이 아닙니다. kubernetes.io/hostname 레이블로 호스트 이름을 선택할 수는 있지만 이것도 직접 호스트 이름을 비교하는 별도 방식이 아니라 레이블 메커니즘을 사용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"
  },
  {
    "id": "local-528",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "FinOps practice identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which practice creates financial accountability for variable cloud-resource spending?",
      "ko": "변동하는 클라우드 리소스 지출에 재무적 책임성을 부여하는 실천 방식은 무엇입니까?"
    },
    "choices": {
      "en": [
        "FaaS",
        "DevOps",
        "CloudCost",
        "FinOps"
      ],
      "ko": [
        "FaaS",
        "DevOps",
        "CloudCost",
        "FinOps"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "FinOps combines engineering, finance, and business collaboration to create financial accountability and data-driven technology-value decisions. FaaS is an execution model and DevOps is a broader delivery/operations practice. Current FinOps also covers technology spending beyond cloud; its goal is business value, not simply cutting every cost.",
      "ko": "FinOps는 엔지니어링·재무·비즈니스 부문의 협업으로 재무적 책임성과 데이터 기반 기술 가치 판단을 제공합니다. FaaS는 실행 모델이고 DevOps는 더 넓은 전달·운영 실천 방식입니다. 현재 FinOps는 클라우드 외의 기술 지출도 다루며 목적은 모든 비용의 무조건적인 삭감이 아니라 비즈니스 가치입니다."
    },
    "ref": "https://www.finops.org/introduction/what-is-finops/"
  },
  {
    "id": "local-529",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Image-size build technique identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed build practice directly helps keep the final container image small?",
      "ko": "최종 컨테이너 이미지의 크기를 줄이는 데 직접 도움이 되는 빌드 방식은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Use a Dockerfile",
        "Use multi-stage builds",
        "Build images with different tags",
        "Add a build.sh script"
      ],
      "ko": [
        "Dockerfile을 사용한다",
        "멀티 스테이지 빌드를 사용한다",
        "서로 다른 태그로 이미지를 빌드한다",
        "build.sh 스크립트를 추가한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Multi-stage builds copy required artifacts into a final stage while leaving build tools and unwanted files behind. A Dockerfile or build script alone does not provide that separation, and changing tags does not remove image contents. The final size still depends on the base image and copied artifacts.",
      "ko": "멀티 스테이지 빌드는 필요한 산출물만 최종 단계로 복사하여 빌드 도구와 불필요한 파일을 제외할 수 있습니다. Dockerfile이나 빌드 스크립트가 있다는 사실만으로 이런 분리가 이뤄지지는 않으며 태그를 바꿔도 이미지 내용이 줄어들지 않습니다. 최종 크기는 베이스 이미지와 복사한 산출물에도 달려 있습니다."
    },
    "ref": "https://docs.docker.com/build/building/multi-stage/"
  },
  {
    "id": "local-532",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Horizontal application scaling definition · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does horizontal scaling of one application deployment change?",
      "ko": "단일 애플리케이션 배포를 수평 확장·축소하면 어떤 값이 바뀝니까?"
    },
    "choices": {
      "en": [
        "The number of node instances in the cluster",
        "The number of different applications deployed",
        "The number of instances of that same application",
        "The resources assigned to each application instance"
      ],
      "ko": [
        "클러스터의 노드 인스턴스 수",
        "배포한 서로 다른 애플리케이션의 수",
        "같은 애플리케이션의 인스턴스 수",
        "애플리케이션 인스턴스마다 할당한 리소스"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Horizontal application scaling adds or removes replicas of the same application. Vertical scaling changes resources per instance, and node scaling changes cluster capacity. HPA can automate the workload replica count based on observed metrics; adding unrelated applications is not scaling the original application.",
      "ko": "애플리케이션의 수평 확장·축소는 같은 애플리케이션의 복제본을 추가하거나 제거합니다. 수직 확장·축소는 인스턴스당 리소스를, 노드 확장·축소는 클러스터 용량을 바꿉니다. HPA는 관측된 메트릭에 따라 워크로드 복제본 수를 자동으로 조절할 수 있습니다. 무관한 애플리케이션을 추가하는 것은 원래 애플리케이션의 확장이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "local-533",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service type count · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How many Kubernetes Service types can you define?",
      "ko": "Kubernetes에서 정의할 수 있는 Service 유형은 몇 개입니까?"
    },
    "choices": {
      "en": [
        "2",
        "3",
        "4",
        "5"
      ],
      "ko": [
        "2개",
        "3개",
        "4개",
        "5개"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The Service API defines four type values: ClusterIP, NodePort, LoadBalancer, and ExternalName. A headless Service uses ClusterIP with clusterIP: None; it is not a fifth type value.",
      "ko": "Service API가 정의한 type 값은 ClusterIP, NodePort, LoadBalancer, ExternalName의 네 가지입니다. 헤드리스 Service는 ClusterIP에서 clusterIP: None을 설정한 것으로, 다섯 번째 type 값이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"
  },
  {
    "id": "local-534",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment versus ReplicaSet distinctions · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement correctly distinguishes a Deployment from a ReplicaSet?",
      "ko": "Deployment와 ReplicaSet의 차이를 올바르게 설명한 문장은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deployments cannot set a desired replica count",
        "ReplicaSets do not maintain a desired replica count",
        "A Deployment is just a ReplicaSet plus annotations",
        "A Deployment is a higher-level controller that manages ReplicaSets"
      ],
      "ko": [
        "Deployment에서는 원하는 복제본 수를 설정할 수 없다",
        "ReplicaSet은 원하는 복제본 수를 유지하지 않는다",
        "Deployment는 ReplicaSet에 어노테이션만 추가한 것이다",
        "Deployment는 ReplicaSet을 관리하는 상위 컨트롤러이다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A Deployment manages ReplicaSets and coordinates declarative application updates. Both resources specify a desired replica count; maintaining that count is the ReplicaSet's purpose. A Deployment is a separate higher-level API object, not merely an annotated ReplicaSet. Desired count is a reconciliation target, not an unconditional availability guarantee.",
      "ko": "Deployment는 ReplicaSet을 관리하고 선언적 애플리케이션 업데이트를 조정합니다. 두 리소스 모두 원하는 복제본 수를 지정하며 그 수를 유지하는 것이 ReplicaSet의 목적입니다. Deployment는 별도의 상위 API 오브젝트이지 단순히 어노테이션이 붙은 ReplicaSet이 아닙니다. 원하는 복제본 수는 조정 목표이지 무조건적인 가용성 보장은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/"
  },
  {
    "id": "local-539",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "HorizontalPodAutoscaler behavior · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How does the HorizontalPodAutoscaler normally scale a workload in Kubernetes?",
      "ko": "HorizontalPodAutoscaler는 일반적으로 Kubernetes 워크로드를 어떻게 확장·축소합니까?"
    },
    "choices": {
      "en": [
        "It changes the CPU or memory assigned to each Pod as load changes",
        "It adds Pods when load rises but never removes Pods when load falls",
        "It adds and removes a DaemonSet's Pods according to load",
        "It adds or removes workload Pod replicas as load moves above or below the configured target"
      ],
      "ko": [
        "부하에 따라 각 Pod에 할당한 CPU나 메모리를 바꾼다",
        "부하가 증가하면 Pod를 추가하지만 감소해도 Pod를 제거하지 않는다",
        "부하에 따라 DaemonSet의 Pod를 추가하거나 제거한다",
        "부하가 설정한 목표보다 높거나 낮아지면 워크로드의 Pod 복제본을 추가하거나 제거한다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "HPA changes the replica count of a workload that supports scaling, such as a Deployment. It can scale both up and down rather than resize each Pod, and it does not scale a DaemonSet. Replica bounds, tolerance, stabilization windows, and configured policies govern the actual change and timing.",
      "ko": "HPA는 Deployment처럼 확장을 지원하는 워크로드의 복제본 수를 조절합니다. 각 Pod의 크기를 바꾸는 것이 아니라 확장과 축소를 모두 할 수 있으며 DaemonSet을 확장하지는 않습니다. 실제 변경량과 시점은 복제본 수의 상·하한, 허용 오차, 안정화 구간, 설정된 정책에 따라 달라집니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "local-541",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node Pod-execution component identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which component allows Kubernetes to run Pods across its nodes?",
      "ko": "Kubernetes가 각 노드에서 Pod를 실행하도록 하는 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The node server",
        "The etcd static Pods",
        "The API server",
        "The kubelet"
      ],
      "ko": [
        "노드 서버",
        "etcd 정적 Pod",
        "API 서버",
        "kubelet"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Kubelets are the node agents that manage assigned PodSpecs and ask the container runtime to run the Pod's containers. The API server exposes the Kubernetes API; etcd stores API state even when etcd itself is deployed as static Pods. Pod scheduling is a different responsibility from execution on a node.",
      "ko": "kubelet은 각 노드의 에이전트로, 배정된 PodSpec을 관리하고 컨테이너 런타임에 Pod의 컨테이너 실행을 요청합니다. API 서버는 Kubernetes API를 제공하고 etcd는 정적 Pod로 배포되더라도 API 상태를 저장하는 역할입니다. Pod 스케줄링과 노드에서의 실행은 서로 다른 책임입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/#kubelet"
  },
  {
    "id": "local-542",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Recurring workload object identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes object is used to run a recurring workload?",
      "ko": "반복적으로 실행하는 워크로드에 사용하는 Kubernetes 오브젝트는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Job",
        "Batch",
        "DaemonSet",
        "CronJob"
      ],
      "ko": [
        "Job",
        "Batch",
        "DaemonSet",
        "CronJob"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A CronJob creates Jobs on a repeating schedule. A Job manages work to completion but does not itself define a recurring schedule; a DaemonSet maintains Pods on eligible nodes rather than scheduling periodic runs. Batch is not the built-in recurring-workload object kind. CronJob scheduling is approximate, so workloads should tolerate missed or duplicate runs.",
      "ko": "CronJob은 반복 일정에 따라 Job을 생성합니다. Job은 작업 완료를 관리하지만 자체적으로 반복 일정을 정의하지 않으며 DaemonSet은 주기적인 작업 실행이 아니라 대상 노드의 Pod를 유지합니다. Batch는 반복 워크로드를 나타내는 내장 오브젝트 종류가 아닙니다. CronJob의 일정 처리는 엄밀한 단일 실행 보장이 아니므로 작업은 누락이나 중복 실행에 대비해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
  },
  {
    "id": "local-543",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Developer delivery-tool role identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In DevOps, which role builds and automates continuous-delivery tools for developer teams?",
      "ko": "DevOps에서 개발팀에 제공할 지속적 전달 도구를 구축하고 자동화하는 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Application users",
        "Application developers",
        "Platform engineers",
        "Cluster operators"
      ],
      "ko": [
        "애플리케이션 사용자",
        "애플리케이션 개발자",
        "플랫폼 엔지니어",
        "클러스터 운영자"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "This description matches the platform-engineering function of building reusable development and delivery capabilities for internal developer teams. Application users consume applications, developers focus on application features, and cluster operators focus on cluster operation. Teams collaborate and job titles vary; this is not a claim that developers or operators cannot contribute to automation.",
      "ko": "이 설명은 내부 개발팀을 위해 재사용 가능한 개발·전달 기능을 구축하는 플랫폼 엔지니어링의 역할에 해당합니다. 애플리케이션 사용자는 앱을 사용하고 개발자는 앱 기능에, 클러스터 운영자는 클러스터 운영에 집중합니다. 팀은 협업하고 직함도 조직마다 다르므로 개발자나 운영자가 자동화에 기여할 수 없다는 뜻은 아닙니다."
    },
    "ref": "https://tag-app-delivery.cncf.io/whitepapers/platforms/"
  },
  {
    "id": "local-545",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Cloud-native resilience quality identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Cloud-native architecture centered on microservices aims for robust systems with which overall quality?",
      "ko": "마이크로서비스 중심의 클라우드 네이티브 아키텍처가 견고한 시스템에서 추구하는 전반적인 특성은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Fallback",
        "Resiliency",
        "Failover",
        "High reachability"
      ],
      "ko": [
        "대체 수단 전환(fallback)",
        "복원력(resiliency)",
        "장애 조치(failover)",
        "높은 도달성(high reachability)"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Resiliency is the broad system quality of handling failures and recovering, and the CNCF definition characterizes cloud-native systems as resilient. Fallback and failover are possible mechanisms supporting that quality; reachability concerns communication. Merely splitting an application into microservices does not automatically guarantee resilience.",
      "ko": "복원력은 장애에 대응하고 회복하는 전반적인 시스템 특성으로, CNCF 정의도 클라우드 네이티브 시스템을 복원력 있는 시스템으로 설명합니다. 대체 수단 전환과 장애 조치는 이를 뒷받침할 수 있는 메커니즘이고 도달성은 통신 가능성에 관한 특성입니다. 앱을 마이크로서비스로 나누기만 하면 복원력이 자동으로 보장되는 것은 아닙니다."
    },
    "ref": "https://github.com/cncf/toc/blob/main/DEFINITION.md"
  },
  {
    "id": "local-546",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment-creation command selection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which command creates an nginx Deployment with two desired replicas?",
      "ko": "원하는 복제본 수가 두 개인 nginx Deployment를 생성하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl run deploy nginx --image=nginx --replicas=2",
        "kubectl create deploy nginx --image=nginx --replicas=2",
        "kubectl create nginx deployment --image=nginx –replicas=2",
        "kubectl create deploy nginx --image=nginx --count=2"
      ],
      "ko": [
        "kubectl run deploy nginx --image=nginx --replicas=2",
        "kubectl create deploy nginx --image=nginx --replicas=2",
        "kubectl create nginx deployment --image=nginx –replicas=2",
        "kubectl create deploy nginx --image=nginx --count=2"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Create deploy is a valid abbreviation for create deployment; the name precedes --image and --replicas. Run is not this Deployment-creation form, the third choice misorders the subcommand and uses a non-ASCII flag dash, and --count is not the replicas flag. Desired replicas do not guarantee immediate readiness, and this command does not create a Service.",
      "ko": "create deploy는 create deployment의 올바른 축약형이며 이름 뒤에 --image와 --replicas를 지정합니다. run은 이 Deployment 생성 형식이 아니고 세 번째 보기는 하위 명령 순서와 비ASCII 대시가 잘못됐으며 --count는 복제본 수 플래그가 아닙니다. 원하는 복제본 수가 즉시 Ready 상태를 보장하지는 않고 Service도 생성하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_deployment/"
  },
  {
    "id": "local-547",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Continuous Integration definition · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What activity does Continuous Integration describe?",
      "ko": "Continuous Integration(CI)은 어떤 활동을 뜻합니까?"
    },
    "choices": {
      "en": [
        "Integrating and testing code contributions from multiple sources manually",
        "Integrating and testing code contributions from multiple sources through automation",
        "Moving changes from one environment to another",
        "Adding new developer-support tools to a project"
      ],
      "ko": [
        "여러 출처의 코드 변경을 수동으로 통합하고 테스트한다",
        "여러 출처의 코드 변경을 자동화를 통해 통합하고 테스트한다",
        "한 환경에서 다른 환경으로 변경 사항을 옮긴다",
        "프로젝트에 개발자 지원 도구를 새로 추가한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "CI frequently integrates code contributions and validates them with automated builds and tests, helping detect integration problems early. Moving changes between environments is a delivery/deployment concern, not the definition of CI; adding tools alone is not CI. Automated checks do not imply that every merge or approval must be automatic.",
      "ko": "CI는 코드 변경을 자주 통합하고 자동 빌드·테스트로 검증하여 통합 문제를 조기에 발견하도록 돕습니다. 환경 간 변경 전달은 전달·배포에 관한 활동이지 CI의 정의가 아니며 도구 추가만으로 CI가 되지도 않습니다. 자동 검증이 모든 병합이나 승인을 자동으로 처리해야 한다는 뜻은 아닙니다."
    },
    "ref": "https://glossary.cncf.io/continuous-integration/"
  },
  {
    "id": "local-550",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Dual-stack networking capability · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which capability does Kubernetes IPv4/IPv6 dual-stack networking provide?",
      "ko": "Kubernetes의 IPv4/IPv6 듀얼 스택 네트워킹은 어떤 기능을 제공합니까?"
    },
    "choices": {
      "en": [
        "Translates requests from an IPv4 Service to an IPv6 Service",
        "Accesses an IPv4 address simply by using an IPv6 address",
        "Requires NetworkPolicies to prevent Services from mixing requests",
        "Supports Services with both IPv4 and IPv6 cluster addresses"
      ],
      "ko": [
        "IPv4 Service의 요청을 IPv6 Service로 변환한다",
        "IPv6 주소를 사용하는 것만으로 IPv4 주소에 접근한다",
        "Service의 요청 혼합을 막기 위해 NetworkPolicy가 필요하다",
        "IPv4와 IPv6 클러스터 주소를 모두 가진 Service를 지원한다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Dual-stack support permits IPv4 and IPv6 networking together, including Services configured with both address families. It is not an automatic IPv4-to-IPv6 translator and does not require NetworkPolicy to separate the families. Cluster ranges and network support must permit dual stack; single-stack Services remain possible.",
      "ko": "듀얼 스택은 IPv4와 IPv6 네트워킹을 함께 지원하며 두 주소 계열을 사용하는 Service도 구성할 수 있게 합니다. IPv4를 IPv6로 자동 변환하는 기능이 아니고 두 계열을 구분하기 위해 NetworkPolicy가 필수인 것도 아닙니다. 클러스터 주소 범위와 네트워크 구현이 듀얼 스택을 지원해야 하며 단일 스택 Service도 사용할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/dual-stack/"
  },
  {
    "id": "local-553",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "OCI runtime-spec reference implementation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which project is the reference implementation of the OCI runtime specification?",
      "ko": "OCI 런타임 명세의 참조 구현인 프로젝트는 무엇입니까?"
    },
    "choices": {
      "en": [
        "LXC",
        "CRI-O",
        "runc",
        "Docker"
      ],
      "ko": [
        "LXC",
        "CRI-O",
        "runc",
        "Docker"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "runc is the OCI runtime-spec reference implementation for creating and running containers. CRI-O provides Kubernetes CRI integration and uses OCI-compatible runtimes; Docker is a broader container engine, and LXC is not this reference implementation. Being OCI-compatible is a different criterion from being the specification's reference implementation.",
      "ko": "runc는 컨테이너를 생성하고 실행하는 OCI 런타임 명세의 참조 구현입니다. CRI-O는 Kubernetes CRI 연동을 제공하며 OCI 호환 런타임을 사용하고, Docker는 더 넓은 기능의 컨테이너 엔진입니다. LXC도 이 참조 구현은 아닙니다. OCI 호환 여부와 명세의 참조 구현 여부는 서로 다른 기준입니다."
    },
    "ref": "https://github.com/opencontainers/runc"
  },
  {
    "id": "local-556",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "JWT user-authentication framework identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which framework can Kubernetes use to authenticate users with JSON Web Tokens?",
      "ko": "Kubernetes가 JSON Web Token으로 사용자를 인증할 때 사용할 수 있는 프레임워크는 무엇입니까?"
    },
    "choices": {
      "en": [
        "OpenID Connect",
        "OpenID Container",
        "OpenID Cluster",
        "OpenID CNCF"
      ],
      "ko": [
        "OpenID Connect",
        "OpenID Container",
        "OpenID Cluster",
        "OpenID CNCF"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "OpenID Connect (OIDC) is the identity framework used by the configured OIDC authenticator to validate an issuer's JWT identity tokens and derive user information. It is not the only JWT authentication path: ServiceAccount tokens are also JWTs. Authentication establishes identity; authorization such as RBAC is a separate decision.",
      "ko": "OpenID Connect(OIDC)는 OIDC 인증기가 발급자의 JWT 신원 토큰을 검증하고 사용자 정보를 얻을 때 사용하는 신원 프레임워크입니다. 모든 JWT 인증이 OIDC 사용자 인증인 것은 아니며 ServiceAccount 토큰도 JWT입니다. 인증은 신원을 확인하는 단계이고 RBAC 같은 인가는 별도의 판단입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens"
  },
  {
    "id": "local-557",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Built-in orchestration feature identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which feature does Kubernetes provide by default as a container orchestration platform?",
      "ko": "Kubernetes가 컨테이너 오케스트레이션 플랫폼으로서 기본 제공하는 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A portable operating system",
        "File system redundancy",
        "A container image registry",
        "Automated rollouts and rollbacks"
      ],
      "ko": [
        "이식 가능한 운영체제",
        "파일 시스템 이중화",
        "컨테이너 이미지 레지스트리",
        "자동화된 롤아웃과 롤백"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The Kubernetes overview lists automated rollouts and rollbacks: controllers reconcile requested versions at a controlled rate. It does not supply an operating system, redundant filesystem, or image registry by default. This feature name does not mean every failed Deployment automatically rolls back; an operator can request a rollback, and a progress deadline alone does not trigger one.",
      "ko": "Kubernetes 개요는 자동화된 롤아웃과 롤백을 기능으로 제시하며 컨트롤러가 요청한 버전으로 제어된 속도로 조정합니다. 운영체제, 이중화 파일 시스템, 이미지 레지스트리를 기본 제공하지는 않습니다. 이 기능명이 모든 Deployment 실패 시 자동 롤백을 뜻하지는 않습니다. 운영자가 롤백을 요청할 수 있지만 진행 기한 만료만으로 롤백이 실행되지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/"
  },
  {
    "id": "local-558",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod-hosting node runtime requirement · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement about container runtimes in Kubernetes is correct?",
      "ko": "Kubernetes의 컨테이너 런타임에 대한 올바른 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Making bridged traffic visible to iptables removes the need for a runtime",
        "Enabling IPv4 forwarding removes the need for a runtime",
        "Container runtimes are deprecated; install CRI instead on every node",
        "Install a container runtime on each node that will run Pods"
      ],
      "ko": [
        "iptables가 브리지 트래픽을 볼 수 있게 하면 런타임이 필요 없다",
        "IPv4 포워딩을 활성화하면 런타임이 필요 없다",
        "컨테이너 런타임은 폐기됐으므로 각 노드에 대신 CRI를 설치한다",
        "Pod를 실행할 각 노드에 컨테이너 런타임을 설치한다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A node hosting Pods needs a container runtime to execute their containers. Network settings such as bridged-traffic handling and IPv4 forwarding do not replace it. CRI is the kubelet/runtime communication interface, not a separate runtime replacement; modern kubelets require a CRI-compatible implementation or adapter.",
      "ko": "Pod를 호스팅하는 노드에는 컨테이너를 실행할 런타임이 필요합니다. 브리지 트래픽 처리나 IPv4 포워딩 같은 네트워크 설정이 이를 대체하지는 않습니다. CRI는 kubelet과 런타임 사이의 통신 인터페이스이지 별도의 런타임 대체 프로그램이 아닙니다. 현대 kubelet에는 CRI 호환 구현 또는 어댑터가 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
  },
  {
    "id": "local-565",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "CRI integration component identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes architecture component integrates with a CRI container runtime?",
      "ko": "CRI 컨테이너 런타임과 연동하는 Kubernetes 아키텍처 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubeadm",
        "kubelet",
        "kube-apiserver",
        "kubectl"
      ],
      "ko": [
        "kubeadm",
        "kubelet",
        "kube-apiserver",
        "kubectl"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The kubelet is the node agent that communicates with the container runtime through CRI to manage Pods. kubeadm bootstraps clusters and can contact CRI during setup, but it is not this ongoing node-agent role. The API server exposes the Kubernetes API, and kubectl is an API client.",
      "ko": "kubelet은 CRI를 통해 컨테이너 런타임과 통신하며 Pod를 관리하는 노드 에이전트입니다. kubeadm은 클러스터를 초기화하고 설정 중 CRI에 접근할 수 있지만 이 지속적인 노드 에이전트 역할은 아닙니다. API 서버는 Kubernetes API를 제공하고 kubectl은 API 클라이언트입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/cri/"
  },
  {
    "id": "local-571",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Secrets representation and default storage · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement correctly describes Kubernetes Secrets?",
      "ko": "Kubernetes Secret을 올바르게 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A Secret is an embedded part of a Pod specification",
        "Secret data is encrypted with the cluster private key by default",
        "Secret data is base64-encoded in the API representation, and Kubernetes stores Secrets unencrypted by default",
        "A Secret can contain only confidential data"
      ],
      "ko": [
        "Secret은 Pod 명세에 내장된 부분이다",
        "Secret 데이터는 기본적으로 클러스터의 개인 키로 암호화된다",
        "Secret 데이터는 API 표현에서 base64로 인코딩되며 Kubernetes는 기본적으로 Secret을 암호화하지 않고 저장한다",
        "Secret에는 기밀 데이터만 담을 수 있다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Secret data values use base64 in JSON/YAML API representations; this is not encryption. Kubernetes does not enable Secret encryption at rest in etcd by default. These are separate representation and storage facts, not a claim that etcd must store literal base64 strings. A Secret is a separate API object referenced by a Pod, and confidentiality is not a content restriction. Managed providers can add storage encryption; this item describes Kubernetes's default configuration.",
      "ko": "Secret의 data 값은 JSON/YAML API 표현에서 base64를 사용하며 이는 암호화가 아닙니다. Kubernetes는 기본적으로 etcd에 저장하는 Secret의 암호화를 활성화하지 않습니다. 표현 형식과 저장 시 암호화는 별개의 사실이며 etcd가 반드시 base64 문자열 자체를 저장한다는 뜻은 아닙니다. Secret은 Pod가 참조하는 별도의 API 오브젝트이고 기밀성은 내용 제한 조건이 아닙니다. 관리형 제공자는 저장 시 암호화를 추가할 수 있지만 이 문항은 Kubernetes의 기본 설정을 설명합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-572",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API extension mechanism identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of these mechanisms extends the Kubernetes API?",
      "ko": "다음 중 Kubernetes API를 확장하는 메커니즘은 무엇입니까?"
    },
    "choices": {
      "en": [
        "ConfigMap",
        "CustomResourceDefinition",
        "MutatingAdmissionWebhook",
        "Kustomize"
      ],
      "ko": [
        "ConfigMap",
        "CustomResourceDefinition",
        "MutatingAdmissionWebhook",
        "Kustomize"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A CustomResourceDefinition registers a new resource type in the Kubernetes API. A mutating admission webhook changes admitted objects but does not itself register a resource type. ConfigMaps store configuration data, and Kustomize customizes manifests. The aggregation layer is another API-extension mechanism, but it is not an offered alternative.",
      "ko": "CustomResourceDefinition은 Kubernetes API에 새 리소스 유형을 등록합니다. 변경 어드미션 웹훅은 처리 중인 오브젝트를 수정하지만 그 자체로 리소스 유형을 등록하지는 않습니다. ConfigMap은 설정 데이터를 저장하고 Kustomize는 매니페스트를 맞춤 구성합니다. API aggregation layer도 확장 방법이지만 보기에는 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"
  },
  {
    "id": "local-574",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Scheduled Job kind identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource creates Jobs at scheduled times or on a repeating schedule?",
      "ko": "정해진 시각이나 반복 일정에 따라 Job을 생성하는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Job",
        "CalenderJob",
        "BatchJob",
        "CronJob"
      ],
      "ko": [
        "Job",
        "CalenderJob",
        "BatchJob",
        "CronJob"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A CronJob creates Jobs according to a cron-style schedule. A Job tracks work to completion but does not itself provide a recurring calendar schedule. CalenderJob and BatchJob are not built-in Kubernetes resource kinds. CronJob scheduling is best effort, so workloads should tolerate missed or duplicate execution.",
      "ko": "CronJob은 cron 형식의 일정에 따라 Job을 생성합니다. Job은 작업의 완료를 추적하지만 자체적으로 반복 달력 일정을 제공하지 않습니다. CalenderJob과 BatchJob은 Kubernetes의 내장 리소스 유형이 아닙니다. CronJob 일정 처리는 최선 노력 방식이므로 작업은 실행 누락이나 중복을 고려해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
  },
  {
    "id": "local-584",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "etcd HA membership minimum · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the minimum number of etcd members needed for a highly available Kubernetes cluster?",
      "ko": "고가용성 Kubernetes 클러스터에 필요한 etcd 멤버의 최소 수는 얼마입니까?"
    },
    "choices": {
      "en": [
        "Two etcd members",
        "Five etcd members",
        "Six etcd members",
        "Three etcd members"
      ],
      "ko": [
        "etcd 멤버 2개",
        "etcd 멤버 5개",
        "etcd 멤버 6개",
        "etcd 멤버 3개"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A three-member etcd cluster retains its two-member majority after one member fails. A two-member cluster requires both members, so losing one stops quorum-based progress. Five or six are not the minimum. Membership count alone is not a complete HA design: independent failure domains and redundant control-plane components also matter.",
      "ko": "etcd 멤버가 3개이면 하나가 실패해도 2개로 과반수를 유지합니다. 2개 구성은 둘 다 필요하므로 하나가 실패하면 정족수를 이용하는 처리가 중단됩니다. 5개나 6개는 최소 수가 아닙니다. 멤버 수만으로 고가용성이 완성되는 것은 아니며 독립적인 장애 영역과 제어 영역 구성 요소의 중복성도 중요합니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/"
  },
  {
    "id": "local-585",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Ingress HTTP routing purpose · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the main purpose of Kubernetes Ingress?",
      "ko": "Kubernetes Ingress의 주요 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Access HTTP and HTTPS services in the cluster based on their IP address",
        "Access non-HTTP/HTTPS services in the cluster based on their IP address",
        "Access non-HTTP/HTTPS services in the cluster based on their path",
        "Access HTTP and HTTPS services in the cluster based on their path"
      ],
      "ko": [
        "IP 주소를 기준으로 클러스터의 HTTP·HTTPS 서비스에 접근",
        "IP 주소를 기준으로 클러스터의 HTTP·HTTPS 이외 서비스에 접근",
        "경로를 기준으로 클러스터의 HTTP·HTTPS 이외 서비스에 접근",
        "경로를 기준으로 클러스터의 HTTP·HTTPS 서비스에 접근"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The standard Ingress API provides HTTP/HTTPS routing to Services using host and path rules, implemented by an Ingress controller. Its purpose is application-layer routing rather than merely IP-based access or general non-HTTP transport routing. Controller-specific TCP extensions are not the standard Ingress API, and not every Ingress needs multiple path rules.",
      "ko": "표준 Ingress API는 Ingress 컨트롤러를 통해 호스트와 경로 규칙을 이용한 HTTP·HTTPS 라우팅을 Service에 제공합니다. 핵심은 애플리케이션 계층 라우팅이며 단순한 IP 기반 접근이나 HTTP 이외의 일반 전송 계층 라우팅이 아닙니다. 컨트롤러별 TCP 확장은 표준 Ingress API가 아니고 모든 Ingress가 여러 경로 규칙을 가져야 하는 것도 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "local-590",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Default ServiceAccount selection · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which ServiceAccount does a Pod use when no ServiceAccount is specified in its namespace?",
      "ko": "Pod에 ServiceAccount를 지정하지 않으면 해당 네임스페이스에서 어떤 ServiceAccount를 사용합니까?"
    },
    "choices": {
      "en": [
        "admin",
        "sysadmin",
        "root",
        "default"
      ],
      "ko": [
        "admin",
        "sysadmin",
        "root",
        "default"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The standard ServiceAccount admission behavior assigns the namespace's default ServiceAccount when spec.serviceAccountName is omitted. This does not grant administrator or Linux-root privileges. Token automount and RBAC permissions are separate settings; disabling token automount does not change the selected account.",
      "ko": "표준 ServiceAccount 어드미션 동작은 spec.serviceAccountName을 생략하면 해당 네임스페이스의 default ServiceAccount를 지정합니다. 이것이 관리자나 Linux root 권한을 부여하는 것은 아닙니다. 토큰 자동 마운트와 RBAC 권한은 별도 설정이며 토큰 자동 마운트를 끄더라도 선택된 계정은 바뀌지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/service-accounts/"
  },
  {
    "id": "local-592",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Community decision-making method · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed approach best reflects common conflict resolution and decision-making in CNCF open-source projects?",
      "ko": "CNCF 오픈소스 프로젝트의 일반적인 갈등 해결과 의사 결정 방식을 가장 잘 나타낸 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Financial analysis",
        "Discussion and voting",
        "Flipism: deciding by a coin toss",
        "The project founder's say"
      ],
      "ko": [
        "재무 분석",
        "토론과 투표",
        "동전 던지기로 결정하는 flipism",
        "프로젝트 창립자의 결정"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "CNCF's common maintainer-council guidance uses discussion and informal lazy consensus, with explicit votes for disagreement, major actions or decisions that governance requires voting on. It describes this as the most common basic formal model, not a quantified census of every CNCF decision. Not every decision needs a vote, and projects can document different governance structures.",
      "ko": "CNCF의 일반적인 maintainer council 지침은 토론과 비공식적인 lazy consensus를 사용하며 이견, 중요한 조치, 거버넌스가 투표를 요구하는 결정에는 명시적인 투표를 적용합니다. 이는 널리 쓰이는 기본 공식 모델에 대한 지침이지 모든 CNCF 결정을 계량한 조사 결과는 아닙니다. 모든 결정에 투표가 필요한 것은 아니고 프로젝트는 다른 거버넌스 구조를 문서화할 수 있습니다."
    },
    "ref": "https://contribute.cncf.io/projects/best-practices/governance/templates/governance-maintainer/"
  },
  {
    "id": "local-596",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Orchestration need at scale · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why do administrators need a container-orchestration tool?",
      "ko": "관리자에게 컨테이너 오케스트레이션 도구가 필요한 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "To manage the lifecycle of a large number of containers",
        "To assess security risks in production container images",
        "To learn how to convert monolithic applications into microservices",
        "Because tools such as Kubernetes are the future"
      ],
      "ko": [
        "많은 컨테이너의 생명주기를 관리하기 위해",
        "운영 컨테이너 이미지의 보안 위험을 평가하기 위해",
        "모놀리식 애플리케이션을 마이크로서비스로 바꾸는 방법을 배우기 위해",
        "Kubernetes 같은 도구가 미래이기 때문에"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Orchestration automates placement, scaling, recovery and lifecycle management across many containers. Image vulnerability assessment belongs to scanning and security workflows, architecture refactoring is a design task, and a popularity prediction is not an operational requirement. An orchestrator can integrate scanners without making scanning its main purpose.",
      "ko": "오케스트레이션은 많은 컨테이너의 배치, 확장·축소, 복구, 생명주기 관리를 자동화합니다. 이미지 취약점 평가는 스캔과 보안 작업에 속하고 구조 변경은 설계 작업이며 유행 예측은 운영상 요구가 아닙니다. 오케스트레이터가 스캐너와 연동할 수 있더라도 스캔이 주요 목적이 되는 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/"
  },
  {
    "id": "local-597",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod shared resource pair · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which pair of resources is shared by containers in the same Pod?",
      "ko": "같은 Pod의 컨테이너가 공유하는 리소스 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Network resources and liveness probes",
        "Storage and a container image registry",
        "Storage and network resources",
        "Network resources and Dockerfiles"
      ],
      "ko": [
        "네트워크 리소스와 liveness probe",
        "스토리지와 컨테이너 이미지 레지스트리",
        "스토리지와 네트워크 리소스",
        "네트워크 리소스와 Dockerfile"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Containers in a Pod share a network namespace and can access shared Pod volumes. Storage here means configured shared volumes, not automatically shared writable container filesystems or an image registry. Liveness probes are configured per container, and Dockerfiles are build inputs rather than a Pod runtime resource.",
      "ko": "Pod의 컨테이너는 네트워크 네임스페이스를 공유하고 공유 Pod 볼륨에 접근할 수 있습니다. 여기서 스토리지는 설정된 공유 볼륨을 뜻하며 컨테이너의 쓰기 가능한 파일시스템이 자동으로 공유되거나 이미지 레지스트리를 공유한다는 뜻은 아닙니다. liveness probe는 컨테이너별로 설정되고 Dockerfile은 Pod 런타임 리소스가 아니라 빌드 입력입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/"
  },
  {
    "id": "local-599",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Resource Metrics API group identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which API group exposes resource metrics supplied by metrics-server?",
      "ko": "metrics-server가 제공하는 리소스 메트릭을 노출하는 API 그룹은 무엇입니까?"
    },
    "choices": {
      "en": [
        "custom.k8s.io",
        "resources.k8s.io",
        "metrics.k8s.io",
        "cadvisor.k8s.io"
      ],
      "ko": [
        "custom.k8s.io",
        "resources.k8s.io",
        "metrics.k8s.io",
        "cadvisor.k8s.io"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "metrics-server exposes Pod and Node resource metrics through metrics.k8s.io, used by kubectl top and resource-metric autoscaling. The separate custom-metrics API is custom.metrics.k8s.io, not custom.k8s.io. cAdvisor can supply container measurements but cadvisor.k8s.io is not this API group.",
      "ko": "metrics-server는 kubectl top과 리소스 메트릭 기반 자동 확장에서 사용하는 Pod·Node 메트릭을 metrics.k8s.io를 통해 제공합니다. 별도의 사용자 정의 메트릭 API는 custom.k8s.io가 아니라 custom.metrics.k8s.io입니다. cAdvisor가 컨테이너 측정값을 제공할 수 있지만 cadvisor.k8s.io는 이 API 그룹이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-usage-monitoring/"
  },
  {
    "id": "local-602",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Default security habit · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which is a recommended default container-security habit in Kubernetes?",
      "ko": "Kubernetes에서 기본 컨테이너 보안 습관으로 권장되는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Run containers with group ID 0 (root) and any user ID",
        "Disallow privilege escalation from within containers by default",
        "Run containers with user ID 0 (root) and any group ID",
        "Allow privilege escalation from within containers by default"
      ],
      "ko": [
        "컨테이너를 그룹 ID 0(root)과 임의의 사용자 ID로 실행한다",
        "컨테이너 내부의 권한 상승을 기본 정책으로 금지한다",
        "컨테이너를 사용자 ID 0(root)과 임의의 그룹 ID로 실행한다",
        "컨테이너 내부의 권한 상승을 기본 정책으로 허용한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Prefer least privilege and deny privilege escalation in the default security policy. For ordinary Linux containers, allowPrivilegeEscalation: false controls no_new_privs; Kubernetes does not automatically set this false for every container. UID 0 is not a least-privilege default. GID 0 is not itself equivalent to UID 0, but selecting the root group with an unrestricted user ID is not a general Kubernetes hardening rule.",
      "ko": "최소 권한을 우선하고 기본 보안 정책에서 권한 상승을 금지하는 것이 권장됩니다. 일반 Linux 컨테이너에서 allowPrivilegeEscalation: false는 no_new_privs를 제어하지만 Kubernetes가 모든 컨테이너에 자동으로 false를 설정하는 것은 아닙니다. UID 0은 최소 권한 기본값이 아닙니다. GID 0 자체가 UID 0과 같은 것은 아니지만 root 그룹과 제한 없는 사용자 ID를 선택하는 것도 일반적인 Kubernetes 보안 강화 규칙은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "local-603",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Traditional observability pillars · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which are the pillars in the traditional three-pillars model of observability?",
      "ko": "관측성의 전통적인 세 가지 기둥 모델에 해당하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Metrics, logs, and traces",
        "Metrics, logs, and spans",
        "Metrics, data, and traces",
        "Resources, logs, and tracing"
      ],
      "ko": [
        "메트릭, 로그, 트레이스",
        "메트릭, 로그, 스팬",
        "메트릭, 데이터, 트레이스",
        "리소스, 로그, 트레이싱"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The traditional model names metrics, logs and traces. A span represents a unit of work within a trace rather than a replacement name for the trace signal. Data and resources are broader categories, not the standard three names. This model is not a claim that these are the only possible telemetry signals or that collecting them alone guarantees observability.",
      "ko": "전통적인 모델은 메트릭, 로그, 트레이스를 지칭합니다. 스팬은 트레이스 안에서 하나의 작업 단위를 나타내며 트레이스 신호의 대체 명칭이 아닙니다. 데이터와 리소스는 더 넓은 범주이지 표준적인 세 가지 이름이 아닙니다. 이 모델이 가능한 텔레메트리 신호가 이 셋뿐이라거나 이들을 수집하기만 하면 관측성이 보장된다는 뜻은 아닙니다."
    },
    "ref": "https://opentelemetry.io/docs/concepts/observability-primer/"
  },
  {
    "id": "local-604",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Envoy project identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which edge and service proxy is designed for cloud-native applications?",
      "ko": "클라우드 네이티브 애플리케이션을 위해 설계된 에지·서비스 프록시는 무엇입니까?"
    },
    "choices": {
      "en": [
        "CoreDNS",
        "CNI",
        "gRPC",
        "Envoy"
      ],
      "ko": [
        "CoreDNS",
        "CNI",
        "gRPC",
        "Envoy"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Envoy is a high-performance edge and service proxy used with cloud-native applications. CoreDNS is a DNS server, CNI defines container-networking interfaces, and gRPC is an RPC framework. These other projects can participate in application networking without being the specified edge/service proxy.",
      "ko": "Envoy는 클라우드 네이티브 애플리케이션에 사용하는 고성능 에지·서비스 프록시입니다. CoreDNS는 DNS 서버, CNI는 컨테이너 네트워킹 인터페이스, gRPC는 RPC 프레임워크입니다. 나머지도 애플리케이션 네트워킹에 참여할 수 있지만 질문에서 지정한 에지·서비스 프록시는 아닙니다."
    },
    "ref": "https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy"
  },
  {
    "id": "local-605",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Flux toolkit identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which toolkit is Flux built with?",
      "ko": "Flux는 어떤 툴킷으로 구성됩니까?"
    },
    "choices": {
      "en": [
        "GitLab Environment Toolkit",
        "GitOps Toolkit",
        "Helm Toolkit",
        "GitHub Actions Toolkit"
      ],
      "ko": [
        "GitLab Environment Toolkit",
        "GitOps Toolkit",
        "Helm Toolkit",
        "GitHub Actions Toolkit"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Flux is built with the GitOps Toolkit, a set of Kubernetes-native controllers and APIs for declarative delivery and reconciliation. Its Helm controller can manage Helm releases, but that does not rename the toolkit Helm Toolkit. A Git hosting or CI service is not the toolkit from which Flux is constructed.",
      "ko": "Flux는 선언적 배포와 상태 조정을 위한 Kubernetes 네이티브 컨트롤러·API 집합인 GitOps Toolkit으로 구성됩니다. Helm 컨트롤러가 Helm 릴리스를 관리할 수 있지만 툴킷 이름이 Helm Toolkit이라는 뜻은 아닙니다. Git 호스팅이나 CI 서비스가 Flux를 구성하는 툴킷인 것도 아닙니다."
    },
    "ref": "https://fluxcd.io/flux/components/"
  },
  {
    "id": "local-607",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Liveness detection purpose · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a Kubernetes liveness probe help detect?",
      "ko": "Kubernetes의 liveness probe는 무엇을 감지하는 데 도움이 됩니까?"
    },
    "choices": {
      "en": [
        "A container has started successfully",
        "A container is unresponsive",
        "A container is ready to serve traffic",
        "A container has exceeded resource limits"
      ],
      "ko": [
        "컨테이너가 성공적으로 시작되었음",
        "컨테이너가 응답하지 않음",
        "컨테이너가 트래픽을 처리할 준비가 되었음",
        "컨테이너가 리소스 제한을 초과했음"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Liveness probes check ongoing container health and can identify an unresponsive application so the kubelet can restart the container after the configured failure threshold. Startup and readiness probes have separate startup and traffic-readiness roles. Resource-limit enforcement is not the defining liveness-probe mechanism, and detection depends on the configured health check.",
      "ko": "liveness probe는 실행 중인 컨테이너의 상태를 검사하여 응답하지 않는 애플리케이션을 식별할 수 있고, 설정된 실패 임계값에 도달하면 kubelet이 컨테이너를 재시작할 수 있습니다. startup과 readiness probe는 각각 시작 및 트래픽 처리 준비 여부를 검사합니다. 리소스 제한 집행은 liveness probe를 정의하는 기능이 아니며 감지 여부는 설정된 상태 검사에 달려 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/"
  },
  {
    "id": "local-609",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Non-confidential configuration resource · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Secrets are intended for confidential data. Which Kubernetes API object holds non-confidential configuration data?",
      "ko": "Secret은 기밀 데이터를 위한 것입니다. 비기밀 설정 데이터를 저장하는 Kubernetes API 객체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "CSI",
        "RBAC",
        "CNI",
        "ConfigMaps"
      ],
      "ko": [
        "CSI",
        "RBAC",
        "CNI",
        "ConfigMaps"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "ConfigMaps store non-confidential configuration, which can be consumed through environment variables or mounted files. CSI concerns storage interfaces, RBAC concerns authorization, and CNI concerns container networking. A ConfigMap is not an appropriate confidentiality boundary for sensitive values.",
      "ko": "ConfigMap은 환경 변수나 마운트된 파일로 사용할 수 있는 비기밀 설정을 저장합니다. CSI는 스토리지 인터페이스, RBAC은 인가, CNI는 컨테이너 네트워킹에 관한 것입니다. ConfigMap을 민감한 값의 기밀성 보호 경계로 사용해서는 안 됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/configmap/"
  },
  {
    "id": "local-610",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Default Secret backend protection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "When a Kubernetes Secret is created, how is its data stored in etcd by default?",
      "ko": "Kubernetes Secret을 생성하면 데이터는 기본적으로 etcd에 어떻게 저장됩니까?"
    },
    "choices": {
      "en": [
        "As Base64-encoded strings that provide simple encoding but no actual encryption",
        "As an unencrypted Secret resource representation in etcd by default",
        "As encrypted records automatically protected using a Kubernetes control-plane master key",
        "As compressed binary objects optimized for space but not secured against access"
      ],
      "ko": [
        "실제 암호화 없이 단순 인코딩만 제공하는 Base64 문자열로 저장된다",
        "기본적으로 암호화되지 않은 Secret 리소스 표현으로 etcd에 저장된다",
        "Kubernetes 제어 영역의 마스터 키로 자동 보호되는 암호화된 레코드로 저장된다",
        "접근 보호 없이 공간 사용을 최적화한 압축 바이너리 객체로 저장된다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The official at-rest-encryption guide says the API server stores plaintext resource representations in etcd by default: no automatic confidentiality protection. Here plaintext means unencrypted; it does not mean the entire serialized entry is a human-readable text file. Built-in resources commonly use protobuf serialization, and Secret JSON/YAML data uses base64 at the API boundary, not a guaranteed literal base64-string backend format. EncryptionConfiguration or a managed platform can change the defaults.",
      "ko": "공식 저장 데이터 암호화 지침은 API 서버가 기본적으로 etcd에 평문 리소스 표현을 저장한다고 설명합니다. 자동 기밀성 보호가 없다는 뜻입니다. 여기서 평문은 암호화되지 않았다는 의미이지 직렬화된 전체 항목이 사람이 읽을 수 있는 텍스트 파일이라는 뜻은 아닙니다. 내장 리소스는 일반적으로 protobuf로 직렬화되고 Secret의 JSON·YAML data는 API 경계에서 base64를 사용하지만 백엔드에 반드시 base64 문자열 그대로 저장된다는 뜻은 아닙니다. EncryptionConfiguration이나 관리형 플랫폼의 설정으로 기본 동작은 달라질 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"
  },
  {
    "id": "local-612",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Multi-container log selection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which command retrieves Kubernetes logs for a specific container in a multi-container Pod?",
      "ko": "컨테이너가 여러 개인 Pod에서 특정 컨테이너의 Kubernetes 로그를 가져오는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl logs <pod> -c <container>",
        "kubectl logs <pod> -c <pod>",
        "kubectl exec <pod> -- tail /var/log/арр.log",
        "kubectl describe pod <pod> -c"
      ],
      "ko": [
        "kubectl logs <pod> -c <container>",
        "kubectl logs <pod> -c <pod>",
        "kubectl exec <pod> -- tail /var/log/арр.log",
        "kubectl describe pod <pod> -c"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl logs uses the Pod name as the resource and -c/--container to select the container's log stream. Supplying the Pod name as the container argument does not identify the intended container in general. The exec command reads one file in an implicitly selected container instead of selecting the target container's Kubernetes log stream; describe reports resource details rather than streaming logs.",
      "ko": "kubectl logs는 Pod 이름을 리소스로 사용하고 -c 또는 --container로 컨테이너의 로그 스트림을 선택합니다. 컨테이너 인수에 Pod 이름을 넣는 방식은 일반적으로 원하는 컨테이너를 지정하지 못합니다. 제시된 exec 명령은 암묵적으로 선택된 컨테이너에서 특정 파일을 읽으며 대상 컨테이너의 Kubernetes 로그 스트림을 지정하지 않습니다. describe는 로그 스트리밍이 아니라 리소스 상세 정보를 보여 줍니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/"
  },
  {
    "id": "local-615",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Gateway API role-separation advantage · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What advantage does Gateway API offer compared with Ingress?",
      "ko": "Ingress와 비교할 때 Gateway API가 제공하는 장점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Clearer separation of infrastructure-provider and application-developer roles",
        "External application exposure by creating only a Service resource",
        "Routing configured through annotations directly on Ingress resources",
        "Automatic workload scaling based on CPU and memory utilization"
      ],
      "ko": [
        "인프라 제공자와 애플리케이션 개발자 역할을 더 명확히 분리한다",
        "Service 리소스만 생성하여 애플리케이션을 외부에 노출한다",
        "Ingress 리소스의 annotation에 직접 라우팅 규칙을 설정한다",
        "CPU와 메모리 사용률에 따라 워크로드를 자동 확장한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Gateway API is role-oriented, separating infrastructure providers, cluster operators and application developers through resources such as GatewayClass, Gateway and routes. Ingress annotations describe the older extension pattern, a Service alone is not the Gateway API resource model, and utilization-based workload scaling is an autoscaling responsibility.",
      "ko": "Gateway API는 GatewayClass, Gateway, 라우트 등의 리소스를 통해 인프라 제공자·클러스터 운영자·애플리케이션 개발자의 역할을 분리하도록 설계되었습니다. Ingress annotation은 이전 방식의 확장 패턴이고 Service 하나만으로 Gateway API 리소스 모델을 구성하지는 않습니다. 사용률 기반 워크로드 확장은 오토스케일링의 역할입니다."
    },
    "ref": "https://gateway-api.sigs.k8s.io/concepts/api-overview/"
  },
  {
    "id": "local-616",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Logical backend-to-container relationship · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes API object is missing from the conceptual sequence Gateway API → Service → EndpointSlice → Container?",
      "ko": "개념적 연결 관계 Gateway API → Service → EndpointSlice → Container에서 빠진 Kubernetes API 객체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Docker",
        "Proxy",
        "Pod",
        "Firewall"
      ],
      "ko": [
        "Docker",
        "Proxy",
        "Pod",
        "Firewall"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A Pod is the Kubernetes API object that groups and runs containers, and an EndpointSlice can describe Pod backends for a Service. The sequence is a conceptual relationship, not a claim that API objects are literal packet-processing hops or that every EndpointSlice targets Pods. Docker, Proxy and Firewall are not the missing built-in container-hosting API object.",
      "ko": "Pod는 컨테이너를 묶어 실행하는 Kubernetes API 객체이며 EndpointSlice는 Service의 Pod 백엔드를 나타낼 수 있습니다. 제시된 순서는 개념적 관계이지 API 객체가 실제 패킷 처리 홉이라거나 모든 EndpointSlice가 Pod를 대상으로 한다는 뜻은 아닙니다. Docker, Proxy, Firewall은 빠진 내장 컨테이너 실행 단위 API 객체가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/"
  },
  {
    "id": "local-617",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Deployment image patch command · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which kubectl patch command updates a Deployment container image without recreating the Deployment resource?",
      "ko": "Deployment 리소스를 다시 생성하지 않고 컨테이너 이미지를 변경하는 kubectl patch 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl patch deployment my-app -p '{\"containers\":[{\"name\":\"app-container\",\"image\":\"nginx:1.25\"}]}'",
        "kubectl patch deployment my-app --image=nginx:l.25",
        "kubectl patch deployment my-app -p '{\"spec\":{\"containers\":[{\"name\":\"app-container\",\"image\":\"nginx:l.25\"}]}}'",
        "kubectl patch deployment my-app -p '{\"spec\":{\"template\":{\"spec\":{\"containers\":[{\"name\":\"app-container\",\"image\":\"nginx:1.25\"}]}}}}'"
      ],
      "ko": [
        "kubectl patch deployment my-app -p '{\"containers\":[{\"name\":\"app-container\",\"image\":\"nginx:1.25\"}]}'",
        "kubectl patch deployment my-app --image=nginx:l.25",
        "kubectl patch deployment my-app -p '{\"spec\":{\"containers\":[{\"name\":\"app-container\",\"image\":\"nginx:l.25\"}]}}'",
        "kubectl patch deployment my-app -p '{\"spec\":{\"template\":{\"spec\":{\"containers\":[{\"name\":\"app-container\",\"image\":\"nginx:1.25\"}]}}}}'"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A Deployment's containers belong under spec.template.spec.containers. The last command targets that path; the default strategic merge matches the named container and updates its image while preserving the Deployment object. The resulting template change triggers a rollout, not an in-place image change for every existing Pod. The other JSON paths are wrong, and patch has no --image option.",
      "ko": "Deployment의 컨테이너는 spec.template.spec.containers 아래에 있습니다. 마지막 명령이 이 경로를 대상으로 하며 기본 strategic merge는 이름으로 컨테이너를 찾아 이미지를 변경하면서 Deployment 객체를 유지합니다. 템플릿 변경은 롤아웃을 시작하며 기존 Pod 전체의 이미지를 제자리에서 변경하는 것은 아닙니다. 나머지 JSON 경로는 잘못되었고 patch에는 --image 옵션이 없습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_patch/"
  },
  {
    "id": "local-618",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Cluster-internal Service type · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes Service type exposes a Service only within the cluster?",
      "ko": "클러스터 내부에만 Service를 노출하는 Kubernetes Service 유형은 무엇입니까?"
    },
    "choices": {
      "en": [
        "ClusterIP",
        "LoadBalancer",
        "ExternalName",
        "NodePort"
      ],
      "ko": [
        "ClusterIP",
        "LoadBalancer",
        "ExternalName",
        "NodePort"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "ClusterIP is the conventional Service type for cluster-internal IP exposure. NodePort and LoadBalancer provide external exposure paths; ExternalName creates a DNS alias rather than a cluster virtual IP. This is the Service-type classification, not a security guarantee: routing changes, proxies or port forwarding can make an internal address reachable from outside.",
      "ko": "ClusterIP는 클러스터 내부 IP 노출에 사용하는 일반적인 Service 유형입니다. NodePort와 LoadBalancer는 외부 노출 경로를 제공하고 ExternalName은 클러스터 가상 IP 대신 DNS 별칭을 만듭니다. 이는 Service 유형의 분류이지 보안 보장은 아닙니다. 라우팅 변경, 프록시, 포트 포워딩 등으로 내부 주소에 외부에서 접근할 수도 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-619",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "CoreDNS primary cluster role · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is CoreDNS's main role within a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터 안에서 CoreDNS의 주요 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Provide consistent DNS names for Pods and Services so workloads can find one another",
        "Convert IPv6 calls into IPv4 calls for dual-stack Pods",
        "Act as the DNS server for virtual machines outside the cluster",
        "Provide managed DNS zones and registries for users' own public domains"
      ],
      "ko": [
        "워크로드가 서로를 찾도록 Pod와 Service에 일관된 DNS 이름을 제공한다",
        "듀얼 스택 Pod의 IPv6 호출을 IPv4 호출로 변환한다",
        "클러스터 외부 가상 머신의 DNS 서버 역할을 한다",
        "사용자의 퍼블릭 도메인에 대한 관리형 DNS 영역과 등록 기능을 제공한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "In Kubernetes, CoreDNS supplies cluster DNS and service discovery using Kubernetes Service and Pod information. It is not primarily a NAT64 translator, an outside-VM DNS service, or a managed public-domain registrar. Exact Pod DNS records depend on configuration; this does not promise a permanent hostname or unchanged IP for every Pod.",
      "ko": "Kubernetes에서 CoreDNS는 Service·Pod 정보를 이용해 클러스터 DNS와 서비스 발견 기능을 제공합니다. 주된 역할은 NAT64 변환, 외부 가상 머신의 DNS 서비스, 관리형 퍼블릭 도메인 등록이 아닙니다. 구체적인 Pod DNS 레코드는 설정에 따라 달라지므로 모든 Pod에 영구적인 호스트 이름이나 변하지 않는 IP를 보장한다는 뜻은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"
  },
  {
    "id": "local-624",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container-image build practice bundle · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which combination follows container-image build best practices?",
      "ko": "컨테이너 이미지 빌드 권장 사항을 따르는 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Use multi-stage builds, pin the base image by digest, and install only required packages",
        "Use multi-stage builds, pin the base image by digest, and install extra packages just in case",
        "Avoid multi-stage builds, use the latest tag, and install extra packages just in case",
        "Use multi-stage builds, use the latest tag, and install only required packages"
      ],
      "ko": [
        "멀티 스테이지 빌드, 베이스 이미지의 digest 고정, 필요한 패키지만 설치",
        "멀티 스테이지 빌드, 베이스 이미지의 digest 고정, 혹시 필요할 수 있는 추가 패키지 설치",
        "멀티 스테이지 빌드 회피, latest 태그 사용, 혹시 필요할 수 있는 추가 패키지 설치",
        "멀티 스테이지 빌드, latest 태그 사용, 필요한 패키지만 설치"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Multi-stage builds can keep build tools out of the final runtime image. A digest fixes the selected base-image content, while only required packages reduce unnecessary dependencies and attack surface. A mutable latest tag does not fix exact content, and speculative extra packages add avoidable exposure. Digest pinning requires deliberate updates to adopt security fixes; it is not automatic vulnerability remediation.",
      "ko": "멀티 스테이지 빌드는 최종 런타임 이미지에서 빌드 도구를 제외하는 데 도움이 됩니다. digest는 선택한 베이스 이미지 내용을 고정하고 필요한 패키지만 설치하면 불필요한 의존성과 공격 표면이 줄어듭니다. 변경 가능한 latest 태그는 정확한 내용을 고정하지 않으며 추측성 추가 패키지는 불필요한 노출을 늘립니다. digest를 고정했더라도 보안 수정 사항을 반영하려면 의도적으로 갱신해야 하며 취약점이 자동 해결되는 것은 아닙니다."
    },
    "ref": "https://docs.docker.com/build/building/best-practices/"
  },
  {
    "id": "local-625",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Ceph storage-orchestrator identification · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Ceph provides distributed block, object and shared-filesystem storage. Which cloud-native orchestrator automates Ceph deployment and management to support self-managing, scaling and healing storage services?",
      "ko": "Ceph는 분산 블록·객체·공유 파일 시스템 스토리지를 제공합니다. Ceph 배포와 관리를 자동화하여 자체 관리·확장·복구를 지원하는 클라우드 네이티브 오케스트레이터는 무엇입니까?"
    },
    "choices": {
      "en": [
        "MinIO",
        "OpenEBS",
        "CubeFS",
        "Rook"
      ],
      "ko": [
        "MinIO",
        "OpenEBS",
        "CubeFS",
        "Rook"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Rook's Kubernetes operator automates Ceph deployment and lifecycle management. MinIO, OpenEBS and CubeFS provide other storage implementations rather than the Ceph operator identified here. Automation supports storage scaling and recovery; it does not guarantee unlimited capacity or eliminate the need to provision suitable nodes and devices.",
      "ko": "Rook의 Kubernetes 오퍼레이터는 Ceph 배포와 생명주기 관리를 자동화합니다. MinIO, OpenEBS, CubeFS는 다른 스토리지 구현을 제공하며 여기서 묻는 Ceph 오퍼레이터가 아닙니다. 자동화는 스토리지 확장과 복구를 지원하지만 무제한 용량을 보장하거나 적절한 노드·장치 준비를 불필요하게 만들지는 않습니다."
    },
    "ref": "https://rook.io/docs/rook/latest/Getting-Started/intro/"
  },
  {
    "id": "local-632",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Limit-only request defaulting outcome · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Only a resource limit is specified, and no admission-time mechanism has supplied a default request. What happens to the request?",
      "ko": "리소스 limit만 지정했고 admission 시점의 어떤 메커니즘도 기본 request를 제공하지 않았습니다. request는 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "Kubernetes copies the specified limit into the resource request",
        "The container is created but necessarily enters CrashLoopBackOff",
        "Kubernetes chooses a random resource-request value",
        "Kubernetes rejects containers without requests and causes eviction"
      ],
      "ko": [
        "Kubernetes가 지정된 limit을 리소스 request로 복사한다",
        "컨테이너가 생성되지만 반드시 CrashLoopBackOff에 빠진다",
        "Kubernetes가 임의의 리소스 request 값을 선택한다",
        "Kubernetes가 request 없는 컨테이너를 거부하고 축출한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "With the request absent and no admission-time default supplying it, Kubernetes uses the specified limit as the request for that resource. An explicit or already-defaulted request takes precedence. This is resource defaulting, not random allocation or an automatic application crash or eviction.",
      "ko": "request가 없고 admission 시점의 기본값도 제공되지 않았다면 Kubernetes는 지정된 limit을 해당 리소스의 request로 사용합니다. 명시되었거나 이미 기본값이 제공된 request가 우선합니다. 이는 리소스 기본값 설정이지 임의 할당이나 자동 애플리케이션 장애·축출이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
  },
  {
    "id": "local-635",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Named nginx Pod creation command · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which kubectl command creates a Pod named my-app using the nginx image?",
      "ko": "nginx 이미지를 사용하는 my-app Pod를 생성하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl run my-app --image=nginx",
        "kubectl create my-app --image-nginx",
        "kubectl create nginx --name=my-app",
        "kubectl run nginx --name=my-app"
      ],
      "ko": [
        "kubectl run my-app --image=nginx",
        "kubectl create my-app --image-nginx",
        "kubectl create nginx --name=my-app",
        "kubectl run nginx --name=my-app"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Current kubectl run uses the positional NAME as the Pod name and --image to select its container image. The first command requests a Pod named my-app using nginx. The other forms do not follow the current Pod-creation command grammar; they do not become valid merely by swapping image and resource names.",
      "ko": "현재 kubectl run은 위치 인수 NAME을 Pod 이름으로 사용하고 --image로 컨테이너 이미지를 선택합니다. 첫 번째 명령은 nginx를 사용하는 my-app Pod 생성을 요청합니다. 나머지 형식은 현재 Pod 생성 명령 문법에 맞지 않으며 이미지와 리소스 이름을 바꾼다고 유효해지는 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_run/"
  },
  {
    "id": "local-636",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Local-to-Pod forwarding method · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which method forwards a local port to a specific port in a Kubernetes Pod to access an internal service?",
      "ko": "내부 서비스에 접근하기 위해 로컬 포트를 Kubernetes Pod의 특정 포트로 전달하는 방법은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Load Balancer",
        "kubectl port-forward",
        "Gateway API",
        "NodePort"
      ],
      "ko": [
        "Load Balancer",
        "kubectl port-forward",
        "Gateway API",
        "NodePort"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "kubectl port-forward opens a local listener and forwards connections to a selected Pod's port through the Kubernetes API. It can select a Pod directly or resolve one from a supported workload or Service target; it does not create a permanent public route. Load balancers, Gateway API and NodePort provide different traffic-exposure mechanisms.",
      "ko": "kubectl port-forward는 로컬 리스너를 열고 Kubernetes API를 통해 선택한 Pod의 포트로 연결을 전달합니다. Pod를 직접 지정하거나 지원되는 워크로드·Service 대상에서 Pod를 선택할 수 있으며 영구적인 퍼블릭 경로를 만들지 않습니다. 로드 밸런서, Gateway API, NodePort는 다른 트래픽 노출 메커니즘입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_port-forward/"
  },
  {
    "id": "local-638",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cordon without workload eviction · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "An SRE must temporarily prevent new Pods from being scheduled on node-2 while keeping existing workloads running. Which command fits?",
      "ko": "SRE가 기존 워크로드를 계속 실행하면서 node-2에 새 Pod가 스케줄링되는 것을 일시적으로 막아야 합니다. 어떤 명령이 적합합니까?"
    },
    "choices": {
      "en": [
        "kubectl pause deployment",
        "kubectl cordon node-2",
        "kubectl drain node-2",
        "kubectl delete node-2"
      ],
      "ko": [
        "kubectl pause deployment",
        "kubectl cordon node-2",
        "kubectl drain node-2",
        "kubectl delete node-2"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Cordon marks the node unschedulable without evicting its current Pods. Drain also removes eligible workloads, so it does not satisfy the keep-running requirement. Cordon controls normal scheduler placement, not every possible Pod creation: DaemonSet/tolerating Pods and direct node binding can bypass that ordinary placement restriction.",
      "ko": "cordon은 현재 Pod를 축출하지 않고 노드를 스케줄링 불가로 표시합니다. drain은 대상 워크로드도 제거하므로 기존 실행을 유지하라는 요구에 맞지 않습니다. cordon은 일반적인 스케줄러 배치를 제어하며 가능한 모든 Pod 생성을 막는 것은 아닙니다. DaemonSet·해당 taint를 허용하는 Pod·직접 노드 바인딩은 이 일반 배치 제한을 우회할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cordon/"
  },
  {
    "id": "local-639",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Deployment Service endpoint purpose · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why create a Service resource for a Kubernetes Deployment?",
      "ko": "Kubernetes Deployment에 Service 리소스를 생성하는 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Automatically adjust Pod count using CPU or memory utilization",
        "Centrally manage application runtime configuration values",
        "Provide a stable endpoint for Pods despite changing Pod IP addresses",
        "Define and attach persistent volumes for application data"
      ],
      "ko": [
        "CPU·메모리 사용률에 따라 Pod 수를 자동 조정한다",
        "애플리케이션 런타임 설정 값을 중앙에서 관리한다",
        "Pod IP 주소가 바뀌어도 접근할 수 있는 안정적인 엔드포인트를 제공한다",
        "애플리케이션 데이터를 위한 영구 볼륨을 정의하고 연결한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A Service decouples access from the changing individual Pods behind a Deployment, providing a stable service-discovery identity and, for a normal ClusterIP Service, a stable virtual IP. HPA changes replica count, configuration resources supply configuration, and PV/PVC mechanisms supply persistent storage. Headless and ExternalName Services do not imply the same virtual-IP behavior.",
      "ko": "Service는 Deployment 뒤의 개별 Pod가 바뀌어도 접근 방식을 분리하여 안정적인 서비스 발견 식별자를 제공합니다. 일반적인 ClusterIP Service에는 안정적인 가상 IP도 있습니다. replica 수는 HPA, 설정 값은 설정 리소스, 영구 스토리지는 PV·PVC 메커니즘이 담당합니다. headless·ExternalName Service가 같은 가상 IP 동작을 제공한다는 뜻은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-641",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "HPA primary purpose · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a HorizontalPodAutoscaler's primary purpose in Kubernetes?",
      "ko": "Kubernetes에서 HorizontalPodAutoscaler의 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Allocate and manage persistent volumes for stateful applications",
        "Track performance metrics and report node and Pod health",
        "Automatically scale Pod replica count based on resource utilization",
        "Coordinate rolling Pod updates for new application versions"
      ],
      "ko": [
        "상태 저장 애플리케이션의 영구 볼륨을 할당하고 관리한다",
        "성능 메트릭을 추적하고 노드·Pod의 상태를 보고한다",
        "리소스 사용률에 따라 Pod replica 수를 자동 확장·축소한다",
        "새 애플리케이션 버전의 Pod 롤링 업데이트를 조정한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "HPA adjusts a scalable workload's desired replica count according to configured metrics, commonly CPU or memory utilization. It changes horizontal replica count rather than per-container resource allocation or cluster node count. Custom and external metrics are also supported; volume provisioning and application rollouts are separate responsibilities.",
      "ko": "HPA는 설정된 메트릭에 따라 확장 가능한 워크로드의 원하는 replica 수를 조정하며 CPU·메모리 사용률을 흔히 사용합니다. 컨테이너별 자원 할당이나 클러스터 노드 수가 아니라 수평 replica 수를 바꿉니다. 사용자 정의·외부 메트릭도 지원하며 볼륨 프로비저닝과 애플리케이션 롤아웃은 별도의 역할입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "local-642",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Ephemeral-storage binary quantity · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How is a request for 500 mebibytes of ephemeral storage written in Kubernetes YAML?",
      "ko": "Kubernetes YAML에서 ephemeral storage 500 mebibyte의 request는 어떻게 표기합니까?"
    },
    "choices": {
      "en": [
        "0.5M",
        "500m",
        "500Mi",
        "500mi"
      ],
      "ko": [
        "0.5M",
        "500m",
        "500Mi",
        "500mi"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "500Mi means 500 × 2^20 bytes. Suffixes are case-sensitive: 0.5M is 500,000 bytes, 500m is 0.5 byte rather than 500 mebibytes, and lowercase mi is not a valid quantity suffix. Ephemeral storage is a byte quantity; do not confuse its milli suffix with CPU millicores.",
      "ko": "500Mi는 500 × 2^20 바이트입니다. 접미사는 대소문자를 구분합니다. 0.5M은 500,000바이트이고 500m은 500 mebibyte가 아니라 0.5바이트이며 소문자 mi는 유효한 수량 접미사가 아닙니다. ephemeral storage는 바이트 수량이므로 milli 접미사를 CPU millicore와 혼동해서는 안 됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#local-ephemeral-storage"
  },
  {
    "id": "local-643",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Failing-Pod describe command · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed kubectl command is commonly used to investigate a failing Pod?",
      "ko": "다음 중 실패하는 Pod를 조사할 때 흔히 사용하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl inspect",
        "kubectl analyze",
        "kubectl info",
        "kubectl describe"
      ],
      "ko": [
        "kubectl inspect",
        "kubectl analyze",
        "kubectl info",
        "kubectl describe"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "kubectl describe displays live resource details, container state and associated events that help investigate scheduling, image-pull and probe problems. Supply the target, for example kubectl describe pod my-app. Inspect, analyze and info are not the corresponding standard built-in kubectl subcommands; plugins can add commands, but describe is the listed built-in diagnostic command.",
      "ko": "kubectl describe는 실제 리소스 상세 정보, 컨테이너 상태, 관련 이벤트를 보여 주어 스케줄링·이미지 pull·probe 문제를 조사하는 데 도움이 됩니다. kubectl describe pod my-app처럼 대상을 지정합니다. inspect, analyze, info는 이에 해당하는 표준 내장 kubectl 하위 명령이 아닙니다. 플러그인으로 명령을 추가할 수 있지만 제시된 내장 진단 명령은 describe입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/"
  },
  {
    "id": "local-644",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "StatefulSet use-case selection · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which scenario best fits a Kubernetes StatefulSet?",
      "ko": "Kubernetes StatefulSet의 사용 사례에 가장 적합한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A web application needing multiple replicas for load balancing",
        "A service routing traffic to different microservices",
        "A database needing persistent storage and stable network identities",
        "A periodic background job that does not retain state"
      ],
      "ko": [
        "로드 밸런싱을 위해 여러 replica가 필요한 웹 애플리케이션",
        "여러 마이크로서비스로 트래픽을 전달하는 서비스",
        "영구 스토리지와 안정적인 네트워크 식별자가 필요한 데이터베이스",
        "상태를 유지하지 않고 주기적으로 실행하는 백그라운드 작업"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "StatefulSets provide stable per-Pod identities and persistent-storage association, matching the stated database needs most directly. Multiple replicas alone do not require a StatefulSet, routing is a networking responsibility, and periodic stateless work fits a CronJob. Not every database must use a StatefulSet; the stated requirements determine the best fit.",
      "ko": "StatefulSet은 Pod별 안정적인 식별자와 영구 스토리지 연결을 제공하므로 제시된 데이터베이스 요구에 가장 직접적으로 맞습니다. replica가 여러 개라는 사실만으로 StatefulSet이 필요한 것은 아니며 라우팅은 네트워킹의 역할이고 주기적인 무상태 작업에는 CronJob이 적합합니다. 모든 데이터베이스가 반드시 StatefulSet을 써야 한다는 뜻은 아니며 제시된 요구가 선택 기준입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"
  },
  {
    "id": "local-645",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm default-values filename · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Helm chart file defines default configuration values that users can override at deployment?",
      "ko": "배포 시 사용자가 재정의할 수 있는 기본 설정 값을 정의하는 Helm chart 파일은 무엇입니까?"
    },
    "choices": {
      "en": [
        "templates/deployment.yaml",
        "Chart.yaml",
        "values.yaml",
        "requirements.yaml"
      ],
      "ko": [
        "templates/deployment.yaml",
        "Chart.yaml",
        "values.yaml",
        "requirements.yaml"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "values.yaml supplies a chart's default input values, overridable by user values files or --set. Chart.yaml contains chart metadata, templates contain resource-generating templates, and requirements.yaml is a legacy dependency declaration rather than the default-values file. Current chart dependencies are declared in Chart.yaml.",
      "ko": "values.yaml은 chart의 기본 입력 값을 제공하며 사용자의 values 파일이나 --set으로 재정의할 수 있습니다. Chart.yaml은 chart 메타데이터를, templates는 리소스 생성 템플릿을 담습니다. requirements.yaml은 기본 values 파일이 아니라 이전 버전의 의존성 선언 파일이며 현재 chart 의존성은 Chart.yaml에 선언합니다."
    },
    "ref": "https://helm.sh/docs/chart_template_guide/values_files/"
  },
  {
    "id": "local-646",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Deployment rollout completion command · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which command most directly checks Deployment rollout progress and confirms successful completion?",
      "ko": "Deployment 롤아웃 진행 상황을 확인하고 성공적인 완료를 가장 직접적으로 확인하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl logs deployment/my-deployment --all-containers=true",
        "kubectl describe deployment my-deployment --namespace=default",
        "kubectl rollout status deployment/my-deployment",
        "kubectl get deployments --show-labels -o wide"
      ],
      "ko": [
        "kubectl logs deployment/my-deployment --all-containers=true",
        "kubectl describe deployment my-deployment --namespace=default",
        "kubectl rollout status deployment/my-deployment",
        "kubectl get deployments --show-labels -o wide"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "kubectl rollout status watches the latest rollout by default and reports when the controller's rollout completes or fails. Logs show application output, describe gives a detailed snapshot, and get lists resource state rather than offering the purpose-built completion watch. Successful rollout status does not prove application business correctness or replace health and functional checks.",
      "ko": "kubectl rollout status는 기본적으로 최신 롤아웃을 감시하며 컨트롤러의 롤아웃 완료 또는 실패를 보고합니다. logs는 애플리케이션 출력, describe는 상세 상태 스냅샷, get은 리소스 상태 목록을 보여 주며 완료 감시에 특화된 명령은 아닙니다. 롤아웃 성공이 애플리케이션의 업무 기능 정확성을 입증하거나 상태·기능 검사를 대체하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/"
  },
  {
    "id": "local-647",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Scheduler primary role · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the Kubernetes scheduler's primary role in a cluster?",
      "ko": "클러스터에서 Kubernetes 스케줄러의 주된 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Manage Pod lifecycle by restarting failed Pods",
        "Monitor the health of nodes and Pods",
        "Handle network traffic between Services",
        "Assign Pods to nodes based on resource availability and placement constraints"
      ],
      "ko": [
        "실패한 Pod를 재시작하여 Pod 수명 주기를 관리한다",
        "노드와 Pod의 상태를 감시한다",
        "Service 간 네트워크 트래픽을 처리한다",
        "리소스 가용성과 배치 제약에 따라 Pod를 노드에 배정한다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "kube-scheduler selects a suitable node for an unscheduled Pod, considering resource requests and placement constraints. Container restarts follow kubelet restart-policy handling; workload controllers may create replacement Pods. Node-health reconciliation and Service traffic handling are not the scheduler's primary role, and resource availability is not simply an observed low CPU percentage.",
      "ko": "kube-scheduler는 자원 requests와 배치 제약을 고려하여 아직 배정되지 않은 Pod에 적합한 노드를 선택합니다. 컨테이너 재시작은 kubelet의 restart policy 처리에 따르며 워크로드 컨트롤러는 대체 Pod를 만들 수 있습니다. 노드 상태 조정과 Service 트래픽 처리는 스케줄러의 주된 역할이 아니고 리소스 가용성은 단순히 관측된 CPU 사용률이 낮다는 의미가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
  },
  {
    "id": "local-648",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespace aggregate memory budget · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "An administrator wants a 4Gi memory budget across all Pods in one namespace. Which resource provides the aggregate namespace limit?",
      "ko": "관리자가 하나의 네임스페이스에 있는 모든 Pod의 메모리 총량을 4Gi 예산으로 제한하려고 합니다. 네임스페이스 합계 제한을 제공하는 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Namespace",
        "LimitRange",
        "ClusterRole",
        "ResourceQuota"
      ],
      "ko": [
        "Namespace",
        "LimitRange",
        "ClusterRole",
        "ResourceQuota"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "ResourceQuota supplies admission-time namespace budgets. limits.memory: 4Gi caps the sum of declared memory limits for non-terminal Pods; requests.memory instead budgets declared requests. LimitRange sets per-object defaults or bounds, Namespace organizes resources, and ClusterRole grants permissions. The quota does not measure live RAM usage or automatically reduce already-created resources; runtime memory enforcement is a separate layer.",
      "ko": "ResourceQuota는 admission 시점에 네임스페이스 예산을 적용합니다. limits.memory: 4Gi는 종료되지 않은 Pod에 선언된 메모리 limits 합계를 제한하며 requests.memory는 선언된 requests의 합계를 제한합니다. LimitRange는 객체별 기본값·범위, Namespace는 리소스 구분, ClusterRole은 권한을 다룹니다. quota가 실제 RAM 사용량을 측정하거나 이미 생성된 리소스를 자동 축소하는 것은 아니며 실행 중 메모리 제한은 별도 계층입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/policy/resource-quotas/"
  },
  {
    "id": "local-651",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "CrashLoopBackOff diagnostic workflow · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A Pod shows CrashLoopBackOff. Which listed workflow is appropriate for investigating it?",
      "ko": "Pod에 CrashLoopBackOff가 표시됩니다. 이를 조사하기에 적절한 절차는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Check CPU with kubectl top pod, then scale the Deployment to more replicas",
        "Review events with kubectl describe pod, then inspect container output with kubectl logs",
        "Check capacity with kubectl get nodes, then restart the Pod with kubectl apply -f",
        "Connect with kubectl exec -- bash, then inspect /var/log/kubelet.log inside the container"
      ],
      "ko": [
        "kubectl top pod로 CPU를 확인한 뒤 Deployment replica 수를 늘린다",
        "kubectl describe pod로 이벤트를 확인한 뒤 kubectl logs로 컨테이너 출력을 조사한다",
        "kubectl get nodes로 용량을 확인한 뒤 kubectl apply -f로 Pod를 재시작한다",
        "kubectl exec -- bash로 접속한 뒤 컨테이너 안의 /var/log/kubelet.log를 조사한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Describe provides Pod/container state and events; logs supplies application output, with --previous useful for a previous terminated container instance when available. CrashLoopBackOff is restart backoff, not a Pod phase or a unique diagnosis. More replicas do not establish the cause, applying an unchanged manifest does not generally restart a Pod, and exec may be unavailable in a rapidly exiting container; kubelet logs are node-side, not normally application-container files.",
      "ko": "describe는 Pod·컨테이너 상태와 이벤트를, logs는 애플리케이션 출력을 제공합니다. 이전 종료 컨테이너 인스턴스가 있으면 --previous가 유용합니다. CrashLoopBackOff는 재시작 대기 상태이지 Pod phase나 유일한 원인 진단이 아닙니다. replica 증가로 원인을 확인할 수는 없고 동일 매니페스트 적용은 일반적으로 Pod를 재시작하지 않습니다. 빠르게 종료되는 컨테이너에는 exec가 어려울 수 있으며 kubelet 로그는 보통 애플리케이션 컨테이너 파일이 아니라 노드 측에 있습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/"
  },
  {
    "id": "local-652",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Pod-group exposure abstraction · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes abstraction exposes a group of Pods inside the cluster?",
      "ko": "클러스터 내부에서 Pod 그룹을 노출하는 Kubernetes 추상화는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Service",
        "Deployment",
        "Unit",
        "Daemon"
      ],
      "ko": [
        "Service",
        "Deployment",
        "Unit",
        "Daemon"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Service provides an access/discovery abstraction for a logical set of backends, commonly Pods selected by labels. A Deployment manages workload replicas rather than exposing them as a network service. Unit and Daemon are not the standard Service resource; Daemon is not an alias for DaemonSet. Not every Service has a virtual IP: headless and ExternalName behavior differs.",
      "ko": "Service는 논리적인 백엔드 집합에 접근·발견 추상화를 제공하며 보통 label로 선택한 Pod를 대상으로 합니다. Deployment는 네트워크 서비스 노출이 아니라 워크로드 replica를 관리합니다. Unit과 Daemon은 표준 Service 리소스가 아니며 Daemon은 DaemonSet의 별칭이 아닙니다. 모든 Service가 가상 IP를 갖는 것은 아니며 headless·ExternalName의 동작은 다릅니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-653",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Purpose-built base-image selection · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is an important consideration when selecting a container base image for a Kubernetes workload?",
      "ko": "Kubernetes 워크로드의 컨테이너 base image를 선택할 때 중요한 고려 사항은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Choose the largest image so that every dependency is included",
        "Always choose the latest version for its newest features",
        "Prefer a minimal, application-appropriate image to reduce attack surface and image overhead",
        "Use any public image without inspecting its contents"
      ],
      "ko": [
        "모든 의존성을 포함하도록 가장 큰 이미지를 선택한다",
        "최신 기능을 위해 항상 최신 버전을 선택한다",
        "공격 표면과 이미지 부담을 줄이는 최소한의 애플리케이션 적합 이미지를 선호한다",
        "내용을 살피지 않고 어떤 공개 이미지든 사용한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A minimal purpose-built runtime image avoids unnecessary packages while including the application's real dependencies. This can reduce potential attack surface and transfer/storage footprint; a smaller image does not guarantee faster application execution or security. Trust, maintenance and compatibility still matter. Always-largest, always-latest and uninspected-public-image rules ignore those requirements.",
      "ko": "최소한의 목적별 런타임 이미지는 실제 애플리케이션 의존성을 포함하면서 불필요한 패키지를 줄입니다. 잠재적 공격 표면과 전송·저장 부담을 줄일 수 있지만 작은 이미지가 애플리케이션 실행 속도나 보안을 보장하지는 않습니다. 신뢰성·유지보수·호환성도 중요합니다. 항상 가장 큰 이미지·항상 최신 버전·검토하지 않은 공개 이미지를 선택하는 규칙은 이런 요구를 무시합니다."
    },
    "ref": "https://docs.docker.com/build/building/best-practices/"
  },
  {
    "id": "local-655",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node-label scheduling field · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which manifest field restricts Pod scheduling to nodes labeled disktype: ssd?",
      "ko": "Pod를 disktype: ssd label이 있는 노드에만 스케줄링하도록 제한하는 매니페스트 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "annotations:\n  disktype: ssd",
        "labels:\n  disktype: ssd",
        "nodeSelector:\n  disktype: ssd",
        "resources:\n  disktype: ssd"
      ],
      "ko": [
        "annotations:\n  disktype: ssd",
        "labels:\n  disktype: ssd",
        "nodeSelector:\n  disktype: ssd",
        "resources:\n  disktype: ssd"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "nodeSelector matches required node label key/value pairs during scheduling. Put it in a Pod's spec or a Deployment's spec.template.spec, not at the manifest root. Pod labels/annotations describe the Pod rather than select eligible nodes; resources is not this label constraint. Every selector pair must match, and other scheduling constraints can still keep the Pod pending.",
      "ko": "nodeSelector는 스케줄링 시 필요한 노드 label의 키·값을 비교합니다. 매니페스트 최상위가 아니라 Pod의 spec 또는 Deployment의 spec.template.spec에 둡니다. Pod label·annotation은 Pod를 설명하며 적합한 노드를 선택하지 않고 resources도 이 label 제약이 아닙니다. 모든 selector 쌍이 일치해야 하며 다른 스케줄링 제약 때문에 Pod가 Pending에 남을 수도 있습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/"
  },
  {
    "id": "local-656",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Gateway API purpose · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the purpose of Gateway API in Kubernetes?",
      "ko": "Kubernetes에서 Gateway API의 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Collect, monitor and log application performance metrics inside Pods",
        "Define and manage persistent storage used by Pods",
        "Provide a standardized interface for managing traffic routing to Services",
        "Automatically adjust application resource usage and scale with demand"
      ],
      "ko": [
        "Pod 내부 애플리케이션의 성능 메트릭을 수집·감시·기록한다",
        "Pod가 사용하는 영구 스토리지를 정의하고 관리한다",
        "Service로의 트래픽 라우팅을 관리하는 표준화된 인터페이스를 제공한다",
        "수요에 따라 애플리케이션 자원 사용량을 조정하고 자동 확장·축소한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Gateway API defines declarative, role-oriented traffic configuration through resources such as GatewayClass, Gateway and routes. A compatible implementation supplies controllers and data-plane behavior; the API specification does not itself proxy traffic. Metrics, storage and autoscaling are separate responsibilities. Service backends are common, not the only possible backend kind supported by implementations.",
      "ko": "Gateway API는 GatewayClass·Gateway·Route 같은 리소스로 선언적이고 역할별로 구분된 트래픽 설정을 정의합니다. 호환 구현이 컨트롤러와 데이터 플레인 동작을 제공하며 API 명세 자체가 트래픽을 프록시하지는 않습니다. 메트릭·스토리지·자동 확장은 별도의 역할입니다. Service는 일반적인 백엔드지만 구현에서 지원할 수 있는 유일한 백엔드 종류는 아닙니다."
    },
    "ref": "https://gateway-api.sigs.k8s.io/docs/concepts/api-overview/"
  },
  {
    "id": "local-661",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Service-mesh proxy plane · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Lightweight network proxies such as Envoy belong to which service-mesh plane?",
      "ko": "Envoy 같은 경량 네트워크 프록시는 서비스 메시의 어느 플레인에 속합니까?"
    },
    "choices": {
      "en": [
        "Management plane",
        "Control plane",
        "Data plane",
        "Gateway plane"
      ],
      "ko": [
        "관리 플레인",
        "컨트롤 플레인",
        "데이터 플레인",
        "게이트웨이 플레인"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Traffic-handling proxies form the mesh data plane; the control plane supplies configuration and related coordination. Data-plane proxies need not all be sidecars: gateways and other deployment models also handle traffic. Envoy can serve other proxy roles outside a mesh, but the stated mesh proxy role is data-plane work.",
      "ko": "트래픽을 처리하는 프록시는 메시 데이터 플레인을 구성하며 컨트롤 플레인은 설정과 관련 조정을 제공합니다. 데이터 플레인 프록시가 모두 sidecar인 것은 아니고 gateway·다른 배포 모델도 트래픽을 처리합니다. Envoy는 메시 밖에서도 다른 프록시 역할을 할 수 있지만 제시된 메시 프록시 역할은 데이터 플레인의 작업입니다."
    },
    "ref": "https://istio.io/latest/docs/ops/deployment/architecture/"
  },
  {
    "id": "local-662",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "GitOps operational antipattern · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed deployment practice is an antipattern once a normal GitOps workflow is operational?",
      "ko": "일반적인 GitOps 워크플로가 운영되기 시작한 뒤 배포 방식의 안티패턴에 해당하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deploy Kubernetes objects through imperative commands",
        "Leave manual comments in pull-request discussions",
        "Deploy Kubernetes objects from declarative manifests",
        "Push builds carrying a deploy label"
      ],
      "ko": [
        "명령형 명령으로 Kubernetes 객체를 배포한다",
        "pull request 토론에 수동으로 의견을 남긴다",
        "선언적 매니페스트로 Kubernetes 객체를 배포한다",
        "deploy label이 붙은 빌드를 push한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Normal GitOps keeps versioned declarative desired state and lets an agent pull and reconcile it. Direct imperative live changes bypass that deployment model, can drift from the recorded state and can be overwritten by reconciliation. Review comments and build labels are not inherently conflicts. Declarative YAML alone does not establish GitOps, and explicitly controlled emergency operations are a separate policy concern.",
      "ko": "일반적인 GitOps는 버전 관리된 선언적 원하는 상태를 유지하고 에이전트가 이를 가져와 조정하게 합니다. 실제 리소스를 명령형으로 직접 바꾸면 이 배포 모델을 우회하고 기록된 상태와 차이가 생기거나 조정 과정에서 덮어써질 수 있습니다. 리뷰 의견과 빌드 label 자체는 충돌이 아닙니다. 선언적 YAML만으로 GitOps가 성립하지는 않으며 명시적으로 관리하는 긴급 조치는 별도의 정책 문제입니다."
    },
    "ref": "https://opengitops.dev/"
  },
  {
    "id": "local-663",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Deployment revision-history command · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command checks the revisions of Deployment web-app?",
      "ko": "Deployment web-app의 리비전을 확인하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl rollout history deployment/web-app",
        "kubectl rollout status deployment/web-app",
        "kubectl get history deployment/web-app",
        "kubectl describe rollout deployment/web-app"
      ],
      "ko": [
        "kubectl rollout history deployment/web-app",
        "kubectl rollout status deployment/web-app",
        "kubectl get history deployment/web-app",
        "kubectl describe rollout deployment/web-app"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl rollout history lists retained rollout revisions; --revision can inspect a particular revision. Rollout status monitors progress rather than listing revision history. The other spellings are not the standard Deployment history interface. Retained history depends on revisionHistoryLimit; listing history does not itself roll back or promise unlimited retained revisions.",
      "ko": "kubectl rollout history는 보존된 롤아웃 리비전을 나열하며 --revision으로 특정 리비전을 조사할 수 있습니다. rollout status는 리비전 이력 나열이 아니라 진행 상태를 감시합니다. 나머지 표기는 표준 Deployment 이력 인터페이스가 아닙니다. 이력 보존은 revisionHistoryLimit의 영향을 받으며 이력 조회 자체가 rollback하거나 무제한 보존을 보장하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_history/"
  },
  {
    "id": "local-666",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "GitOps reconciler tool pair · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which tool pair keeps Kubernetes clusters in sync with configuration sources such as Git and automates deployment-configuration updates?",
      "ko": "Git 같은 설정 소스와 Kubernetes 클러스터를 동기화하고 배포 설정 갱신을 자동화하는 도구 쌍은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Flux and Argo CD",
        "Helm and Kustomize",
        "Linkerd and Istio",
        "Tekton and Jenkins X"
      ],
      "ko": [
        "Flux와 Argo CD",
        "Helm과 Kustomize",
        "Linkerd와 Istio",
        "Tekton과 Jenkins X"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Flux and Argo CD are GitOps reconcilers that can apply desired configuration changes from their configured sources. Helm/Kustomize package or transform configuration, Linkerd/Istio provide service meshes, and Tekton/Jenkins X focus on delivery pipelines. This does not mean core Argo CD builds new code or automatically rewrites Git image tags: CI or configured image-update automation supplies those source changes, and synchronization policy determines application.",
      "ko": "Flux와 Argo CD는 설정된 소스의 원하는 설정 변경을 적용할 수 있는 GitOps 조정 도구입니다. Helm·Kustomize는 설정 패키징·변환, Linkerd·Istio는 서비스 메시, Tekton·Jenkins X는 전달 파이프라인에 초점을 둡니다. Argo CD 핵심 기능이 새 코드를 빌드하거나 Git 이미지 tag를 자동 수정한다는 뜻은 아닙니다. CI나 설정된 이미지 갱신 자동화가 소스 변경을 제공하며 적용 방식은 동기화 정책에 따릅니다."
    },
    "ref": "https://opengitops.dev/"
  },
  {
    "id": "local-668",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Observability definition · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement best describes observability in a cloud-native environment?",
      "ko": "클라우드 네이티브 환경의 observability를 가장 잘 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Collect and analyze logs, metrics and traces to understand system behavior",
        "Use alerts and dashboards to notify administrators about outages",
        "Restart failed Pods to maintain availability",
        "Configure health probes to check whether containers run correctly"
      ],
      "ko": [
        "로그·메트릭·trace를 수집·분석하여 시스템 동작을 이해한다",
        "알림과 대시보드로 관리자에게 장애를 통지한다",
        "가용성을 유지하도록 실패한 Pod를 재시작한다",
        "컨테이너의 올바른 실행 여부를 확인하는 health probe를 설정한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Observability concerns understanding internal system behavior through external signals; collecting and analyzing telemetry supports that goal. Outage alerts and health checks are narrower activities, while restarting is remediation. Logs, metrics and traces are common signals, not an exhaustive required list or a guarantee that the system is understandable.",
      "ko": "Observability는 외부 신호로 시스템 내부 동작을 이해할 수 있는 특성이며 telemetry 수집·분석이 이를 지원합니다. 장애 알림과 상태 확인은 더 좁은 활동이고 재시작은 복구 조치입니다. 로그·메트릭·trace는 일반적인 신호이지 반드시 모두 필요하거나 이것만으로 시스템 이해가 보장되는 완전한 목록은 아닙니다."
    },
    "ref": "https://opentelemetry.io/docs/concepts/observability-primer/"
  },
  {
    "id": "local-670",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Gateway API predecessor · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Gateway API is a successor to which Kubernetes API?",
      "ko": "Gateway API는 어떤 Kubernetes API를 계승하여 확장합니까?"
    },
    "choices": {
      "en": [
        "NetworkPolicy",
        "Service",
        "NodePort",
        "Ingress"
      ],
      "ko": [
        "NetworkPolicy",
        "Service",
        "NodePort",
        "Ingress"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Gateway API evolves the Ingress traffic-management model with richer, role-oriented resources and routing capabilities. Ingress remains supported and can coexist; successor does not mean existing Ingress objects are automatically removed. Services remain backend/access abstractions, NetworkPolicy is traffic policy, and NodePort is a Service type rather than the predecessor routing API.",
      "ko": "Gateway API는 더 풍부한 역할별 리소스와 라우팅 기능으로 Ingress의 트래픽 관리 모델을 발전시킵니다. Ingress도 계속 지원되며 공존할 수 있어 계승이 기존 Ingress 객체의 자동 삭제를 뜻하지는 않습니다. Service는 백엔드·접근 추상화, NetworkPolicy는 트래픽 정책이며 NodePort는 이전 라우팅 API가 아니라 Service의 한 유형입니다."
    },
    "ref": "https://gateway-api.sigs.k8s.io/docs/concepts/api-overview/"
  },
  {
    "id": "local-676",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Labels identifying metadata · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement describes the purpose of Kubernetes labels?",
      "ko": "Kubernetes label의 목적을 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Labels must be defined before any object can be created",
        "Labels assign objects to namespaces for resource isolation",
        "Labels supply globally unique identifiers across the cluster",
        "Labels attach identifying metadata so objects can be selected and grouped"
      ],
      "ko": [
        "어떤 객체든 생성하기 전에 label을 반드시 정의해야 한다",
        "label이 리소스 격리를 위해 객체를 네임스페이스에 배정한다",
        "label이 클러스터 전체에서 고유한 식별자를 제공한다",
        "label이 식별용 메타데이터를 붙여 객체를 선택·그룹화할 수 있게 한다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Labels are identifying key/value attributes; selectors evaluate them to identify groups of objects. Labels may be shared and are not globally unique IDs or namespace assignment. Some workload selectors require matching template labels, but labels are not mandatory for every Kubernetes object. A selector is the selection expression, not the attached metadata itself.",
      "ko": "label은 식별용 키·값 속성이며 selector가 이를 평가하여 객체 그룹을 찾습니다. label은 여러 객체가 공유할 수 있고 전역 고유 ID나 네임스페이스 배정 기능이 아닙니다. 일부 워크로드 selector에는 일치하는 템플릿 label이 필요하지만 모든 Kubernetes 객체에 label이 필수는 아닙니다. selector는 선택 표현식이고 label은 붙이는 메타데이터입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"
  },
  {
    "id": "local-678",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment replica-count flag · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command sets Deployment my-app to three desired Pod replicas?",
      "ko": "Deployment my-app의 원하는 Pod replica 수를 3으로 설정하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl scale --clones=3 deployment/my-app",
        "kubectl scale --pods=3 deployment/my-app",
        "kubectl scale --replicas=3 deployment/my-app",
        "kubectl scale --copy=3 deployment/my-app"
      ],
      "ko": [
        "kubectl scale --clones=3 deployment/my-app",
        "kubectl scale --pods=3 deployment/my-app",
        "kubectl scale --replicas=3 deployment/my-app",
        "kubectl scale --copy=3 deployment/my-app"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "kubectl scale uses the required --replicas flag to set the desired replica count of a scalable resource such as a Deployment. Clones, pods and copy are not the listed built-in scaling flags. Controllers reconcile the new count asynchronously; the command does not guarantee that three Pods are immediately running and ready.",
      "ko": "kubectl scale은 필수 --replicas 플래그로 Deployment 같은 확장 가능한 리소스의 원하는 replica 수를 설정합니다. clones·pods·copy는 제시된 내장 확장 플래그가 아닙니다. 컨트롤러가 새 수에 비동기적으로 맞추므로 명령이 즉시 3개의 Pod 실행·Ready 상태를 보장하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_scale/"
  },
  {
    "id": "local-679",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Baseline policy identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Pod Security Standard balances ease of adoption while preventing known privilege escalations?",
      "ko": "도입 용이성을 고려하면서 알려진 권한 상승을 막도록 설계된 Pod Security Standard는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Privileged",
        "Permissive",
        "Restricted",
        "Baseline"
      ],
      "ko": [
        "Privileged",
        "Permissive",
        "Restricted",
        "Baseline"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Baseline is the minimally restrictive standard designed to prevent known privilege escalations while allowing common workloads. Restricted is the strongest of the three standards and Privileged imposes no PSS restrictions; Permissive is not one of these three standard names. A policy level alone does not guarantee overall workload security or mean every namespace enforces it.",
      "ko": "Baseline은 일반적인 워크로드를 허용하면서 알려진 권한 상승을 막도록 설계된 최소 제한 수준입니다. Restricted는 세 표준 중 가장 제한적이고 Privileged에는 PSS 제한이 없습니다. Permissive는 이 세 표준의 명칭이 아닙니다. 정책 수준만으로 워크로드 전체 보안이 보장되거나 모든 네임스페이스에 그 수준이 적용된다는 뜻은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "local-681",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "TLS Secret command selection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which kubectl command creates a TLS-type Secret containing a certificate and its associated private key?",
      "ko": "인증서와 해당 개인 키를 포함하는 TLS 유형 Secret을 생성하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl create secret generic tls-secret --cert=path/to/tls.crt --key=path/to/tls.key",
        "kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key",
        "kubectl create secret tls tls-secret --from-file=cert=path/to/tls.crt --from-file=key=path/to/tls.key",
        "kubectl create secret generic tls-secret --from-file=cert=path/to/tls.crt --from-file=key=path/to/tls.key"
      ],
      "ko": [
        "kubectl create secret generic tls-secret --cert=path/to/tls.crt --key=path/to/tls.key",
        "kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key",
        "kubectl create secret tls tls-secret --from-file=cert=path/to/tls.crt --from-file=key=path/to/tls.key",
        "kubectl create secret generic tls-secret --from-file=cert=path/to/tls.crt --from-file=key=path/to/tls.key"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The tls subcommand accepts --cert and --key, validates the PEM pair and sets type kubernetes.io/tls with tls.crt and tls.key data fields. Generic does not accept the listed --cert/--key flags, and tls does not accept the listed --from-file flags. The last generic command can store files under cert/key but does not request TLS type or the standard TLS data keys.",
      "ko": "tls 하위 명령은 --cert·--key를 받아 PEM 쌍을 검증하고 kubernetes.io/tls 유형과 tls.crt·tls.key 데이터 필드를 설정합니다. generic에는 제시된 --cert·--key 플래그가 없고 tls에는 제시된 --from-file 플래그가 없습니다. 마지막 generic 명령은 cert·key 이름으로 파일을 저장할 수 있지만 TLS 유형이나 표준 TLS 데이터 키를 지정하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_secret_tls/"
  },
  {
    "id": "local-683",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Containerization definition · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A developer preparing a Kubernetes deployment is learning containerization. Which description best fits?",
      "ko": "Kubernetes 배포를 준비하는 개발자가 컨테이너화를 배우고 있습니다. 가장 적절한 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Run applications only on bare-metal servers without abstraction",
        "Run applications in lightweight isolated environments using shared OS resources",
        "Create and manage virtual machines for applications",
        "Virtualize physical hardware to run multiple operating systems"
      ],
      "ko": [
        "추상화 없이 베어메탈 서버에서만 애플리케이션을 실행한다",
        "공유 OS 자원을 이용하는 가벼운 격리 환경에서 애플리케이션을 실행한다",
        "애플리케이션용 가상 머신을 생성·관리한다",
        "물리 하드웨어를 가상화하여 여러 운영체제를 실행한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The standard OS-level container model packages applications and dependencies into isolated environments while sharing host-kernel resources. It differs from virtualizing hardware for guest operating systems and can run on bare metal or VMs. This describes the common model, not an assertion that every sandboxed or VM-backed container runtime shares a native host kernel.",
      "ko": "표준 OS 수준 컨테이너 모델은 애플리케이션과 의존성을 격리 환경에 담아 호스트 커널 자원을 공유합니다. 게스트 운영체제용 하드웨어 가상화와 다르며 베어메탈이나 VM에서 실행할 수 있습니다. 일반적인 모델의 설명이지 모든 샌드박스·VM 기반 컨테이너 런타임이 네이티브 호스트 커널을 공유한다는 주장은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/"
  },
  {
    "id": "local-684",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Labels and selectors relationship · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How do labels and selectors work together to organize Kubernetes resources?",
      "ko": "label과 selector는 Kubernetes 리소스를 구성·관리할 때 어떻게 함께 사용됩니까?"
    },
    "choices": {
      "en": [
        "Labels serve only service discovery and do not affect resource management",
        "Labels categorize resources; selectors filter and retrieve resources using those labels",
        "Selectors apply only to Pods, not other Kubernetes resource types",
        "Kubernetes automatically generates labels, while users manually define selectors"
      ],
      "ko": [
        "label은 서비스 검색에만 사용되고 리소스 관리에는 영향을 주지 않는다",
        "label이 리소스를 분류하고 selector가 해당 label로 리소스를 선별·조회한다",
        "selector는 Pod에만 적용되고 다른 Kubernetes 리소스에는 적용되지 않는다",
        "Kubernetes가 label을 자동 생성하고 사용자가 selector를 수동 정의한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Labels are key/value attributes attached to objects, and label selectors express matching conditions to identify object sets. They are not limited to service discovery or Pods; users and controllers can both manage labels and selectors. A label does not itself execute grouping or grant access, and not every resource field accepts every selector form.",
      "ko": "label은 객체에 붙는 키·값 속성이고 label selector는 객체 집합을 식별하는 일치 조건을 표현합니다. 서비스 검색이나 Pod에만 한정되지 않으며 사용자와 컨트롤러 모두 label·selector를 관리할 수 있습니다. label 자체가 그룹화 작업을 실행하거나 접근 권한을 부여하지는 않고 모든 리소스 필드가 모든 selector 형식을 받는 것도 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"
  },
  {
    "id": "local-685",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service application endpoint role · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the primary role of a Kubernetes Service?",
      "ko": "Kubernetes Service의 주된 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Expose an application behind a single outward-facing endpoint",
        "Store configuration data and secrets in the cluster",
        "Provide an endpoint for external access to the cluster on the Internet",
        "Automatically manage application scaling in the cluster"
      ],
      "ko": [
        "단일 외부 지향 엔드포인트 뒤에서 실행되는 애플리케이션을 노출한다",
        "클러스터의 설정 데이터와 Secret을 저장한다",
        "인터넷에서 외부가 클러스터에 접근하는 엔드포인트를 제공한다",
        "클러스터의 애플리케이션 확장을 자동으로 관리한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The official Service introduction describes exposing an application behind one outward-facing endpoint. Outward-facing here is an application-access abstraction, not a guarantee of public Internet exposure: the default ClusterIP is internal, and external exposure requires suitable configuration. ConfigMaps/Secrets hold configuration and HPA scales workloads. The logical endpoint model does not mean every Service has one virtual IP; headless and ExternalName differ.",
      "ko": "공식 Service 소개는 단일 외부 지향 엔드포인트 뒤의 애플리케이션을 노출하는 역할을 설명합니다. 여기서 외부 지향은 애플리케이션 접근 추상화이지 공개 인터넷 노출 보장이 아닙니다. 기본 ClusterIP는 내부용이며 외부 노출에는 적절한 구성이 필요합니다. ConfigMap·Secret은 설정을 보관하고 HPA는 워크로드를 확장합니다. 논리적 엔드포인트 모델이 모든 Service에 단일 가상 IP가 있음을 뜻하지는 않으며 headless·ExternalName은 동작이 다릅니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-686",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Missing container runtime consequence · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What happens when Kubernetes worker nodes lack a container runtime?",
      "ko": "Kubernetes worker 노드에 컨테이너 런타임이 없으면 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "The kubelet cannot communicate with kube-apiserver",
        "Nodes cannot communicate with one another",
        "The kubelet cannot launch Pods",
        "Pods cannot communicate with one another"
      ],
      "ko": [
        "kubelet이 kube-apiserver와 통신할 수 없다",
        "노드끼리 통신할 수 없다",
        "kubelet이 Pod를 실행할 수 없다",
        "Pod끼리 통신할 수 없다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The kubelet needs a CRI-compatible runtime to create Pod sandboxes and start their containers. Pod API objects may still be created, but that worker cannot launch their containers without the runtime. API-server access and the node network are separate dependencies; a missing runtime does not itself establish a cluster-wide communication failure.",
      "ko": "kubelet은 Pod sandbox 생성과 컨테이너 시작에 CRI 호환 런타임이 필요합니다. Pod API 객체를 생성할 수는 있지만 해당 worker는 런타임 없이 컨테이너를 실행할 수 없습니다. API 서버 접근과 노드 네트워크는 별도 의존성이며 런타임 부재만으로 클러스터 전체 통신 장애가 성립하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
  },
  {
    "id": "local-687",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Restricted policy identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Pod Security Standard defines the most restrictive settings for workload hardening?",
      "ko": "워크로드 보안 강화를 위해 가장 제한적인 설정을 정의하는 Pod Security Standard는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Unrestricted",
        "Restricted",
        "Privileged",
        "Baseline"
      ],
      "ko": [
        "Unrestricted",
        "Restricted",
        "Privileged",
        "Baseline"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Restricted is the strongest of the three PSS policies and follows current Pod-hardening best practices. Privileged has no PSS restrictions, Baseline is minimally restrictive, and Unrestricted is not one of the three standard names. PSS defines policy; enforcement requires an admission mechanism configured for that level. Restricted alone does not guarantee security or fit every privileged system workload.",
      "ko": "Restricted는 세 PSS 정책 중 가장 제한적이며 현재 Pod 보안 강화 모범 사례를 따릅니다. Privileged에는 PSS 제한이 없고 Baseline은 최소 제한 수준이며 Unrestricted는 세 표준의 명칭이 아닙니다. PSS는 정책을 정의하고 실제 강제 적용에는 해당 수준으로 설정된 admission 메커니즘이 필요합니다. Restricted만으로 보안이 보장되거나 모든 특권 시스템 워크로드에 적합해지는 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "local-689",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "NetworkPolicy direction names · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which pair names the directions used by NetworkPolicy policyTypes?",
      "ko": "NetworkPolicy의 policyTypes에 사용하는 방향 명칭 쌍은 무엇입니까?"
    },
    "choices": {
      "en": [
        "inbound and outbound",
        "ingress and egress",
        "push and pull",
        "get and put"
      ],
      "ko": [
        "inbound와 outbound",
        "ingress와 egress",
        "push와 pull",
        "get과 put"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The directions are ingress and egress. In an actual manifest the case-sensitive enum values are Ingress and Egress, not the lowercase direction labels in these alternatives. Ingress governs incoming traffic and Egress outgoing traffic for selected Pods; inbound/outbound are generic synonyms rather than the API names. Enforcement requires a supporting network plugin.",
      "ko": "방향 명칭은 ingress와 egress입니다. 실제 매니페스트의 대소문자를 구분하는 enum 값은 Ingress·Egress이며 보기의 소문자 방향 명칭을 그대로 쓰면 안 됩니다. Ingress는 선택된 Pod로 들어오는 트래픽을, Egress는 나가는 트래픽을 다룹니다. inbound·outbound는 일반적인 동의어이지 API 명칭이 아닙니다. 실제 적용에는 지원 네트워크 플러그인이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-694",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "In-container environment inspection · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which listed kubectl exec command approach inspects environment variables inside a running container?",
      "ko": "실행 중인 컨테이너 내부 환경 변수를 확인하는 kubectl exec 명령 방식은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Run kubectl exec -- show variables",
        "Run kubectl exec -- get env",
        "Run kubectl exec -- list config",
        "Run kubectl exec -- env"
      ],
      "ko": [
        "kubectl exec -- show variables를 실행한다",
        "kubectl exec -- get env를 실행한다",
        "kubectl exec -- list config를 실행한다",
        "kubectl exec -- env를 실행한다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The env utility prints the environment inside the selected container. These alternatives abbreviate the exec command and omit its required target: use kubectl exec POD [-c CONTAINER] -- env in a real invocation, with env available in that container. The other phrases are not standard environment-inspection commands. This inspects process environment, not just declared Pod YAML, and does not require an interactive shell.",
      "ko": "env 도구는 선택한 컨테이너 내부 환경을 출력합니다. 보기는 exec 명령을 축약하여 필수 대상을 생략했으므로 실제 호출에는 kubectl exec POD [-c CONTAINER] -- env를 사용하고 컨테이너에 env 도구가 있어야 합니다. 나머지 문구는 표준 환경 조회 명령이 아닙니다. 선언된 Pod YAML만이 아니라 프로세스 환경을 확인하며 대화형 셸은 필요하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/"
  },
  {
    "id": "local-695",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node-maintenance drain command · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "An engineer is preparing worker-1, which runs multiple Pods, for maintenance. Which command should be used for safe workload eviction and replacement on other nodes?",
      "ko": "여러 Pod가 실행되는 worker-1을 유지보수하려고 합니다. 워크로드의 안전한 축출과 다른 노드의 대체 Pod 생성을 위해 사용할 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl delete node worker-1 --delete-emptydir-data",
        "kubectl drain worker-1 --ignore-daemonsets",
        "kubectl scale deployment --replicas=0 --namespace=production",
        "kubectl cordon worker-1 --daemonsets=off"
      ],
      "ko": [
        "kubectl delete node worker-1 --delete-emptydir-data",
        "kubectl drain worker-1 --ignore-daemonsets",
        "kubectl scale deployment --replicas=0 --namespace=production",
        "kubectl cordon worker-1 --daemonsets=off"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Drain marks the node unschedulable and normally uses the Eviction API for eligible Pods. --ignore-daemonsets leaves DaemonSet Pods alone; it does not evict them. Controllers can create new replacement Pods elsewhere if capacity and constraints allow; existing Pod identities do not move. PDBs or unsupported/unmanaged workloads can block completion. Deleting a node or scaling to zero is not that workflow, and the listed delete/cordon flags are invalid for those commands.",
      "ko": "drain은 노드를 스케줄 불가 상태로 만들고 일반적으로 Eviction API로 대상 Pod를 축출합니다. --ignore-daemonsets는 DaemonSet Pod를 남겨 두며 축출하는 플래그가 아닙니다. 용량과 제약이 허용하면 컨트롤러가 다른 곳에 새로운 대체 Pod를 만들고 기존 Pod 식별자가 이동하지는 않습니다. PDB나 지원되지 않는·관리되지 않는 워크로드가 완료를 막을 수 있습니다. 노드 삭제나 replica 0 설정은 이 절차가 아니며 제시된 delete·cordon 플래그는 해당 명령에 유효하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_drain/"
  },
  {
    "id": "local-696",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Envoy proxy identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which CNCF project is a high-performance microservices proxy for service communication, load balancing and observability in service meshes?",
      "ko": "서비스 메시의 서비스 간 통신·로드 밸런싱·관측성에 사용하는 고성능 마이크로서비스 프록시인 CNCF 프로젝트는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Helm",
        "Fluentd",
        "Envoy",
        "Prometheus"
      ],
      "ko": [
        "Helm",
        "Fluentd",
        "Envoy",
        "Prometheus"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Envoy is a network/application proxy used at the edge and in service-mesh data planes for routing, load balancing and telemetry. Helm manages application packages, Fluentd collects/routes logs and Prometheus handles monitoring metrics. Envoy is not the entire mesh control plane, and capabilities depend on configuration; high-performance is the project role description, not a measured benchmark claim here.",
      "ko": "Envoy는 edge와 서비스 메시 데이터 플레인에서 라우팅·로드 밸런싱·telemetry에 사용하는 네트워크·애플리케이션 프록시입니다. Helm은 애플리케이션 패키지, Fluentd는 로그 수집·전달, Prometheus는 모니터링 메트릭을 다룹니다. Envoy가 메시 전체 제어 플레인은 아니며 기능은 설정에 따릅니다. 여기서 고성능은 프로젝트 역할 설명이지 측정한 벤치마크 주장이 아닙니다."
    },
    "ref": "https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy"
  },
  {
    "id": "local-697",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Simplest node-label scheduling constraint · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which feature is the simplest way to restrict a Pod or Deployment's Pods to nodes with a specific label?",
      "ko": "Pod 또는 Deployment의 Pod를 특정 label이 있는 노드로 제한하는 가장 단순한 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Taint",
        "NodeSelector",
        "NodeAffinity",
        "Toleration"
      ],
      "ko": [
        "Taint",
        "NodeSelector",
        "NodeAffinity",
        "Toleration"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "nodeSelector is the simplest recommended node-selection constraint: normal scheduling requires every specified node-label pair to match. Set it in a Pod's spec or a Deployment's Pod-template spec. Required node affinity can express similar hard constraints with more flexible syntax; tolerations merely tolerate matching taints and do not guarantee placement. This is a scheduling constraint, not retroactive eviction when labels change or node creation.",
      "ko": "nodeSelector는 권장되는 가장 단순한 노드 선택 제약으로, 일반 스케줄링에서 지정된 모든 노드 label 쌍이 일치해야 합니다. Pod의 spec 또는 Deployment의 Pod 템플릿 spec에 설정합니다. required node affinity도 더 유연한 문법으로 유사한 필수 제약을 표현할 수 있고 toleration은 일치하는 taint를 견딜 뿐 배치를 보장하지 않습니다. 스케줄링 제약이지 label 변경 시의 소급 축출이나 노드 생성 기능은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"
  },
  {
    "id": "local-700",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "SSD preference with fallback · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A data science team's ML Pods prefer nodes labeled disk=ssd but must allow other nodes if SSD nodes are unavailable. Which rule fits?",
      "ko": "데이터 과학 팀의 ML Pod는 disk=ssd label이 있는 노드를 선호하지만 SSD 노드가 없으면 다른 노드에서도 실행할 수 있어야 합니다. 적절한 규칙은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Node Affinity with PreferredDuringSchedulingIgnoredDuringExecution",
        "Pod Anti-Affinity",
        "Taints and Tolerations",
        "Node Affinity with RequiredDuringSchedulingIgnoredDuringExecution"
      ],
      "ko": [
        "PreferredDuringSchedulingIgnoredDuringExecution을 사용하는 Node Affinity",
        "Pod Anti-Affinity",
        "Taints와 Tolerations",
        "RequiredDuringSchedulingIgnoredDuringExecution을 사용하는 Node Affinity"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Use node affinity's preferredDuringSchedulingIgnoredDuringExecution field for a weighted label preference: eligible nonmatching nodes remain candidates. Required affinity would exclude them; Pod anti-affinity relates placement to other Pods, and taints/tolerations are not this label-preference rule. The real field starts with lowercase p, unlike the capitalized option name. Overall scores can still select another eligible node, later label changes do not evict the Pod, and capacity/other constraints still apply.",
      "ko": "node affinity의 preferredDuringSchedulingIgnoredDuringExecution 필드로 가중치 기반 label 선호를 설정합니다. label이 없는 적격 노드도 후보로 남습니다. required affinity는 그런 노드를 제외하고 Pod anti-affinity는 다른 Pod와의 배치를 다루며 taint·toleration은 이 label 선호 규칙이 아닙니다. 실제 필드는 보기의 대문자 명칭과 달리 소문자 p로 시작합니다. 전체 점수로 다른 적격 노드가 선택될 수 있고 이후 label 변경으로 Pod를 축출하지 않으며 용량·다른 제약도 적용됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity"
  },
  {
    "id": "local-702",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Missing core Prometheus metric type · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Prometheus's four core metric types include Summary, Histogram and Gauge. Which type is missing?",
      "ko": "Prometheus의 네 가지 핵심 메트릭 유형 중 Summary, Histogram, Gauge가 제시돼 있습니다. 나머지 유형은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Sampler",
        "Counter",
        "Final",
        "Total"
      ],
      "ko": [
        "Sampler",
        "Counter",
        "Final",
        "Total"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Counter completes the four core instrumentation types: Counter, Gauge, Histogram and Summary. A Counter increases cumulatively and may reset on restart; a Gauge can also decrease. Sampler, Final and Total are not names of the other core types. A metric name ending in _total commonly denotes a Counter, not a separate Total type.",
      "ko": "나머지는 Counter입니다. 계측 라이브러리의 네 가지 핵심 유형은 Counter, Gauge, Histogram, Summary입니다. Counter는 누적 증가하며 재시작 시 초기화될 수 있고 Gauge는 감소할 수도 있습니다. Sampler, Final, Total은 나머지 핵심 유형의 이름이 아닙니다. _total로 끝나는 메트릭 이름은 보통 Counter를 나타내며 별도의 Total 유형을 뜻하지 않습니다."
    },
    "ref": "https://prometheus.io/docs/concepts/metric_types/"
  },
  {
    "id": "local-705",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "CRD API-extension purpose · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of CustomResourceDefinitions (CRDs) in Kubernetes?",
      "ko": "Kubernetes에서 CustomResourceDefinition(CRD)의 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To automatically scale Pods based on resource usage",
        "To facilitate network communication between Pods and Services",
        "To define custom resources that extend the Kubernetes API",
        "To manage persistent-volume storage within a Kubernetes cluster"
      ],
      "ko": [
        "리소스 사용량에 따라 Pod를 자동 확장하는 것",
        "Pod와 Service 사이의 네트워크 통신을 제공하는 것",
        "Kubernetes API를 확장하는 사용자 정의 리소스를 정의하는 것",
        "Kubernetes 클러스터의 persistent volume 저장소를 관리하는 것"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A CRD registers a custom resource type with the Kubernetes API so its objects can be created, retrieved and updated. Defining that type alone does not supply autoscaling, networking or storage implementation. A controller can add application-specific reconciliation; a CRD does not automatically create that controller.",
      "ko": "CRD는 Kubernetes API에 사용자 정의 리소스 유형을 등록해 해당 객체를 생성·조회·수정할 수 있게 합니다. 유형을 정의하는 것만으로 자동 확장·네트워크·저장소 구현이 제공되지는 않습니다. 컨트롤러를 결합하면 애플리케이션별 조정 로직을 추가할 수 있지만 CRD가 컨트롤러를 자동 생성하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"
  },
  {
    "id": "local-706",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Selecting a container for logs · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which kubectl logs option selects one container in a multi-container Pod?",
      "ko": "여러 컨테이너가 있는 Pod에서 특정 컨테이너의 로그를 선택하는 kubectl logs 옵션은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl logs --describe",
        "kubectl logs --container",
        "kubectl logs --application",
        "kubectl logs --docker"
      ],
      "ko": [
        "kubectl logs --describe",
        "kubectl logs --container",
        "kubectl logs --application",
        "kubectl logs --docker"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Use --container (short form -c) with the container name, for example kubectl logs POD --container CONTAINER. All alternatives are abbreviated option sketches, not complete runnable commands: a Pod/resource target and the container value are omitted. --describe, --application and --docker are not kubectl logs options. --follow/-f streams new logs and answers a different question.",
      "ko": "컨테이너 이름과 함께 --container(짧은 형식 -c)를 사용합니다. 예: kubectl logs POD --container CONTAINER. 모든 보기는 옵션을 줄여 나타낸 것으로 실행 가능한 완전한 명령은 아닙니다. Pod·리소스 대상과 컨테이너 값이 생략돼 있습니다. --describe, --application, --docker는 kubectl logs 옵션이 아닙니다. --follow/-f는 새 로그를 실시간으로 스트리밍하는 별개의 기능입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/"
  },
  {
    "id": "local-577",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node-health controller identification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which control-plane component updates the Node Ready condition when a node becomes unreachable?",
      "ko": "노드에 연결할 수 없게 되면 Node의 Ready 조건을 갱신하는 제어 영역 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-oroxy",
        "The node controller",
        "kubelct",
        "kube-apiserver"
      ],
      "ko": [
        "kube-oroxy",
        "노드 컨트롤러",
        "kubelct",
        "kube-apiserver"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The node controller, running within kube-controller-manager, monitors node health and updates Ready to Unknown when a node is unreachable. It writes the update through the API server; the API server is not the health-reconciliation controller. kube-oroxy and kubelct are not standard Kubernetes component names.",
      "ko": "kube-controller-manager 안에서 실행되는 노드 컨트롤러는 노드 상태를 감시하며 노드에 연결할 수 없으면 Ready를 Unknown으로 갱신합니다. 갱신은 API 서버를 통해 기록하지만 API 서버 자체가 노드 상태 조정 컨트롤러는 아닙니다. kube-oroxy와 kubelct는 표준 Kubernetes 구성 요소 이름이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/nodes/"
  },
  {
    "id": "kcsa-mock-001",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Standards",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What was the precursor to the Pod Security Standards (PSS) in Kubernetes?",
      "ko": "Kubernetes에서 Pod Security Standards(PSS)의 전신은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Pod Security Admission (PSA)",
        "Kubernetes Security Policies (KSP)",
        "PodSecurityPolicy (PSP)",
        "Network Policies",
        "Role-Based Access Control (RBAC)"
      ],
      "ko": [
        "Pod Security Admission(PSA)",
        "Kubernetes Security Policies(KSP)",
        "PodSecurityPolicy(PSP)",
        "Network Policies",
        "Role-Based Access Control(RBAC)"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "PodSecurityPolicy (PSP) was the precursor to Pod Security Standards (PSS). PSP was deprecated and replaced by PSS and the PodSecurity admission controller to improve pod security management in Kubernetes clusters.",
      "ko": "PodSecurityPolicy(PSP)는 Pod Security Standards(PSS)의 전신입니다. Kubernetes 클러스터에서 Pod 보안 관리를 개선하기 위해 PSP는 더 이상 사용되지 않게 되었고, PSS와 PodSecurity admission controller로 대체되었습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-002",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you enable Pod Security Admission (PSA) in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 Pod Security Admission(PSA)을 어떻게 활성화합니까?"
    },
    "choices": {
      "en": [
        "Install the PSA plugin via kubectl",
        "Add 'PodSecurity' to the '--enable-admission-plugins' flag in the API server",
        "Apply a custom resource definition for PSA",
        "Use a third-party tool to enforce PSA",
        "Enable it in the kubelet configuration"
      ],
      "ko": [
        "kubectl을 통해 PSA 플러그인을 설치한다",
        "API server를 시작할 때 '--enable-admission-plugins' 플래그에 'PodSecurity'를 추가한다",
        "PSA용 custom resource definition을 적용한다",
        "타사 도구를 사용해 PSA를 강제한다",
        "kubelet 구성에서 활성화한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "To enable Pod Security Admission (PSA), you need to add 'PodSecurity' to the '--enable-admission-plugins' flag when starting the API server. This ensures that the PodSecurity admission controller is active and enforcing pod security standards.",
      "ko": "Pod Security Admission(PSA)을 활성화하려면 API server를 시작할 때 '--enable-admission-plugins' 플래그에 'PodSecurity'를 추가해야 합니다. 그러면 PodSecurity admission controller가 활성화되어 Pod 보안 표준을 적용합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-003",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Can you enforce more than one Pod Security Admission (PSA) policy level concurrently within a single namespace?",
      "ko": "하나의 namespace 안에서 둘 이상의 Pod Security Admission(PSA) 정책 수준을 동시에 적용할 수 있습니까?"
    },
    "choices": {
      "en": [
        "Yes, by applying multiple labels",
        "No, only one policy level per namespace",
        "Yes, but only with custom configurations",
        "Only if the namespace is partitioned",
        "It depends on the Kubernetes version"
      ],
      "ko": [
        "예, 여러 label을 지정하면 된다",
        "아니요, namespace마다 하나의 정책 수준만 사용할 수 있다",
        "예, custom configuration을 사용할 때만 가능하다",
        "namespace를 분할한 경우에만 가능하다",
        "Kubernetes 버전에 따라 다르다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "PSA policies are applied at the namespace level. Only one PSA policy level (privileged, baseline, or restricted) can be enforced per namespace for each mode (enforce, audit, or warn). This ensures clear and consistent policy enforcement.",
      "ko": "PSA 정책은 namespace 수준에서 적용됩니다. 각 모드(enforce, audit, warn)마다 namespace 하나에 적용할 수 있는 PSA 정책 수준은 privileged, baseline, restricted 중 하나뿐입니다. 따라서 정책 적용 방식이 명확하고 일관되게 유지됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "kcsa-mock-004",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Standards",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following restrictions does the 'baseline' Pod Security Standard enforce? (Select all that apply)",
      "ko": "다음 중 'baseline' Pod Security Standard가 적용하는 제한은 무엇입니까? (해당하는 항목을 모두 선택하십시오)"
    },
    "choices": {
      "en": [
        "Disallows privileged containers",
        "Allows hostPath volumes",
        "Blocks host networking and ports",
        "Requires running as non-root",
        "Allows all Linux capabilities"
      ],
      "ko": [
        "privileged container를 허용하지 않는다",
        "hostPath volume을 허용한다",
        "host networking과 host port를 차단한다",
        "non-root로 실행하도록 요구한다",
        "모든 Linux capability를 허용한다"
      ]
    },
    "answer": [
      0,
      2
    ],
    "explain": {
      "en": "The 'baseline' Pod Security Standard disallows privileged containers and blocks host networking and ports. This ensures that pods are less vulnerable to security risks by limiting their capabilities.",
      "ko": "'baseline' Pod Security Standard는 privileged container를 허용하지 않고 host networking과 host port를 차단합니다. Pod의 기능을 제한하여 보안 위험에 덜 취약하게 만드는 것이 목적입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-005",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes RBAC, what does a Role define?",
      "ko": "Kubernetes RBAC에서 Role은 무엇을 정의합니까?"
    },
    "choices": {
      "en": [
        "A set of users and their passwords",
        "Permissions within a namespace",
        "Network policies for pods",
        "Global cluster-wide permissions",
        "Resource quotas for a project"
      ],
      "ko": [
        "사용자와 해당 사용자의 password 집합",
        "namespace 안에서의 permission",
        "Pod를 위한 network policy",
        "클러스터 전체에 적용되는 global permission",
        "project를 위한 resource quota"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Role in Kubernetes RBAC defines a set of permissions that are applicable within a specific namespace. This allows for fine-grained control over resources within that namespace.",
      "ko": "Kubernetes RBAC의 Role은 특정 namespace 안에서 적용되는 permission 집합을 정의합니다. 이를 통해 해당 namespace의 resource를 세밀하게 제어할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-006",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes admission controller runs first during the admission control process?",
      "ko": "Kubernetes admission control 과정에서 가장 먼저 실행되는 admission controller는 무엇입니까?"
    },
    "choices": {
      "en": [
        "ValidatingAdmissionWebhook",
        "MutatingAdmissionWebhook",
        "ResourceQuota",
        "NamespaceLifecycle",
        "AlwaysPullImages"
      ],
      "ko": [
        "ValidatingAdmissionWebhook",
        "MutatingAdmissionWebhook",
        "ResourceQuota",
        "NamespaceLifecycle",
        "AlwaysPullImages"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The MutatingAdmissionWebhook runs first in the Kubernetes admission control process. This is because mutating admission controllers are designed to modify the incoming request before it is validated by validating admission controllers. Other options, such as ValidatingAdmissionWebhook, ResourceQuota, NamespaceLifecycle, and AlwaysPullImages, either run later in the process or serve different purposes.",
      "ko": "Kubernetes admission control 과정에서는 MutatingAdmissionWebhook이 먼저 실행됩니다. Mutating admission controller는 들어온 요청을 수정한 뒤 validating admission controller가 검증할 수 있도록 설계되었기 때문입니다. ValidatingAdmissionWebhook, ResourceQuota, NamespaceLifecycle, AlwaysPullImages는 이후에 실행되거나 서로 다른 목적을 담당합니다."
    },
    "ref": "https://kubernetes.io/blog/2019/03/21/a-guide-to-kubernetes-admission-controllers/"
  },
  {
    "id": "kcsa-mock-007",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload and Application Code Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of a Cloud Workload Protection Platform (CWPP)?",
      "ko": "Cloud Workload Protection Platform(CWPP)의 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Monitor network traffic",
        "Secure workloads across various environments",
        "Manage cloud costs",
        "Provide identity and access management",
        "Automate infrastructure provisioning"
      ],
      "ko": [
        "network traffic을 모니터링한다",
        "다양한 환경에서 workload를 보호한다",
        "cloud 비용을 관리한다",
        "identity와 access management를 제공한다",
        "infrastructure provisioning을 자동화한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "CWPPs are designed to protect workloads in any environment.",
      "ko": "CWPP는 어떤 환경에서 실행되든 workload를 보호하도록 설계된 플랫폼입니다."
    },
    "ref": "https://github.com/thiago4go/kubernetes-security-kcsa-mock"
  },
  {
    "id": "kcsa-mock-008",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which NIST Special Publication provides comprehensive guidelines on security and privacy controls specifically for federal information systems?",
      "ko": "연방 정보 시스템을 위한 보안 및 privacy control 지침을 종합적으로 제공하는 NIST Special Publication은 무엇입니까?"
    },
    "choices": {
      "en": [
        "NIST SP 800-53 Rev. 5",
        "NIST SP 800-190",
        "NIST SP 800-63",
        "NIST SP 800-171",
        "NIST SP 800-30"
      ],
      "ko": [
        "NIST SP 800-53 Rev. 5",
        "NIST SP 800-190",
        "NIST SP 800-63",
        "NIST SP 800-171",
        "NIST SP 800-30"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "NIST SP 800-53 Rev. 5 is the primary publication that provides guidelines on security and privacy controls for federal information systems. It outlines a comprehensive set of controls that are crucial for protecting the confidentiality, integrity, and availability of federal information systems. NIST SP 800-190 focuses on cloud computing security, NIST SP 800-63 deals with digital identity guidelines, NIST SP 800-171 provides guidelines for protecting controlled unclassified information in nonfederal systems, and NIST SP 800-30 is about risk management.",
      "ko": "NIST SP 800-53 Rev. 5는 연방 정보 시스템의 보안 및 privacy control 지침을 제공하는 대표적인 간행물입니다. 연방 정보 시스템의 confidentiality, integrity, availability를 보호하는 데 중요한 종합적인 control 체계를 제시합니다. NIST SP 800-190은 cloud computing security, NIST SP 800-63은 digital identity 지침, NIST SP 800-171은 비연방 시스템에서 controlled unclassified information을 보호하는 지침, NIST SP 800-30은 risk management를 다룹니다."
    },
    "ref": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
  },
  {
    "id": "kcsa-mock-009",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the recommended method to restrict access to the Kubernetes kubelet API securely?",
      "ko": "Kubernetes kubelet API에 대한 접근을 안전하게 제한하는 권장 방법은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Disable the kubelet service entirely",
        "Configure kubelet with '--authorization-mode=Webhook' and '--authentication-token-webhook=true' flags",
        "Remove the kubelet binary from all nodes",
        "Access kubelet only via SSH tunnels",
        "Set '--allow-privileged=false' to restrict privileged containers"
      ],
      "ko": [
        "kubelet service를 완전히 비활성화한다",
        "'--authorization-mode=Webhook'과 '--authentication-token-webhook=true' 플래그를 사용하도록 kubelet을 구성한다",
        "모든 node에서 kubelet binary를 삭제한다",
        "SSH tunnel을 통해서만 kubelet에 접근한다",
        "privileged container를 제한하도록 '--allow-privileged=false'를 설정한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The kubelet API should be secured by enabling authentication and authorization mechanisms. Using the '--authorization-mode=Webhook' flag enables authorization via an external webhook, typically the API server, while '--authentication-token-webhook=true' enables token-based authentication against the API server. This combination ensures that only authenticated and authorized requests can access the kubelet API. Disabling the kubelet or removing it is impractical as it is essential for node management. Accessing kubelet only via SSH does not inherently secure the API itself. Setting '--allow-privileged=false' restricts privileged containers but does not control API access.",
      "ko": "kubelet API는 authentication과 authorization mechanism을 활성화하여 보호해야 합니다. '--authorization-mode=Webhook'은 일반적으로 API server인 외부 webhook을 통한 authorization을 활성화하고, '--authentication-token-webhook=true'는 API server를 대상으로 token 기반 authentication을 활성화합니다. 이 조합은 인증되고 권한이 부여된 요청만 kubelet API에 접근하도록 합니다. kubelet을 비활성화하거나 삭제하는 것은 node 관리에 필수적이므로 현실적이지 않습니다. SSH로만 접근한다고 해서 API 자체가 안전해지는 것도 아니며, '--allow-privileged=false'는 privileged container를 제한할 뿐 API 접근을 제어하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet-authentication-authorization/"
  },
  {
    "id": "kcsa-mock-010",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of signing container images in a cloud-native environment?",
      "ko": "cloud-native 환경에서 container image에 서명하는 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To reduce the image size for deployment",
        "To verify the image's integrity and authenticity",
        "To include metadata for deployment automation",
        "To enforce runtime security policies",
        "To speed up image pulling during deployment"
      ],
      "ko": [
        "배포에 필요한 image 크기를 줄인다",
        "image의 무결성과 진위성을 검증한다",
        "배포 자동화를 위한 metadata를 포함한다",
        "runtime security policy를 강제한다",
        "배포 중 image pull 속도를 높인다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The primary purpose of image signing is to ensure that a container image originates from a trusted source and has not been tampered with. This process involves cryptographically signing the image, allowing users to verify its integrity and authenticity before use. Incorrect options such as reducing image size or speeding up deployment do not relate to the security function of signing. Similarly, metadata inclusion and runtime policy enforcement are separate mechanisms unrelated to image signing.",
      "ko": "image signing의 주된 목적은 container image가 신뢰할 수 있는 출처에서 왔고 변조되지 않았음을 보장하는 것입니다. image에 cryptographic signature를 부여하면 사용 전에 무결성과 진위성을 검증할 수 있습니다. image 크기 축소나 배포 속도 향상은 signing의 보안 기능과 관련이 없습니다. metadata를 포함하거나 runtime policy를 강제하는 것도 image signing과 별개의 mechanism입니다."
    },
    "ref": "https://docs.docker.com/engine/security/trust/"
  },
  {
    "id": "kcsa-mock-011",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary role of Public Key Infrastructure (PKI) in IT security?",
      "ko": "IT 보안에서 Public Key Infrastructure(PKI)의 주된 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Managing network configurations",
        "Handling storage volumes",
        "Issuing and managing digital certificates and encryption keys",
        "Maintaining container images",
        "Collecting and analyzing application logs"
      ],
      "ko": [
        "network configuration을 관리한다",
        "storage volume을 처리한다",
        "digital certificate와 encryption key를 발급하고 관리한다",
        "container image를 유지 관리한다",
        "application log를 수집하고 분석한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Public Key Infrastructure (PKI) is a framework that manages digital certificates and encryption keys to enable secure communication and authentication over networks. It does not handle network configurations, storage volumes, container images, or application logs. PKI ensures trust by issuing certificates that verify identities and encrypt data.",
      "ko": "Public Key Infrastructure(PKI)는 network에서 안전한 통신과 authentication을 가능하게 하도록 digital certificate와 encryption key를 관리하는 framework입니다. network configuration, storage volume, container image 또는 application log를 처리하는 역할은 하지 않습니다. PKI는 신원을 확인하고 data를 암호화하는 certificate를 발급하여 신뢰를 보장합니다."
    },
    "ref": "https://learn.microsoft.com/en-us/windows-server/security/public-key-infrastructure/pki-overview"
  },
  {
    "id": "kcsa-mock-012",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of Grafana in IT operations?",
      "ko": "IT 운영에서 Grafana의 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Managing code version control",
        "Automating continuous integration pipelines",
        "Visualizing and monitoring metrics through dashboards",
        "Enforcing network security policies",
        "Managing user identities and access"
      ],
      "ko": [
        "code version control을 관리한다",
        "continuous integration pipeline을 자동화한다",
        "dashboard를 통해 metric을 시각화하고 모니터링한다",
        "network security policy를 강제한다",
        "사용자 identity와 access를 관리한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Grafana is an open-source platform used primarily for creating dashboards that visualize metrics and monitoring data from various sources. It helps IT teams observe system performance and troubleshoot issues. It is not used for version control, continuous integration, network security enforcement, or identity management.",
      "ko": "Grafana는 다양한 source의 metric과 monitoring data를 시각화하는 dashboard를 만드는 데 주로 사용하는 open-source platform입니다. IT 팀이 system performance를 관찰하고 문제를 해결하는 데 도움을 줍니다. version control, continuous integration, network security 강제 또는 identity management를 위한 도구는 아닙니다."
    },
    "ref": "https://grafana.com/docs/grafana/latest/introduction/what-is-grafana/"
  },
  {
    "id": "kcsa-mock-013",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which statement accurately describes how Kubernetes Network Policies control pod-to-pod communication within a cluster?",
      "ko": "Kubernetes Network Policy가 클러스터 안에서 Pod 간 통신을 제어하는 방식을 정확히 설명한 문장은 무엇입니까?"
    },
    "choices": {
      "en": [
        "By default, they block all traffic between pods.",
        "They use iptables rules (via the CNI plugin) to control pod communication.",
        "They are enforced by the kube-scheduler.",
        "They manage access to the Kubernetes API.",
        "They control storage access for pods."
      ],
      "ko": [
        "기본적으로 모든 Pod 사이의 traffic을 차단한다",
        "CNI plugin을 통해 iptables rule을 사용하여 Pod 통신을 제어한다",
        "kube-scheduler가 이를 강제한다",
        "Kubernetes API에 대한 access를 관리한다",
        "Pod의 storage access를 제어한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes Network Policies define how groups of pods are allowed to communicate with each other and with other network endpoints. These policies are enforced by the Container Network Interface (CNI) plugin used in the cluster. Most CNI plugins implement network policies using iptables or similar mechanisms to control traffic at the network level. By default, if no Network Policy is applied, all pods can communicate freely. Network Policies do not block all traffic by default, nor are they enforced by the kube-scheduler. They do not manage API or storage access.",
      "ko": "Kubernetes Network Policy는 Pod group이 서로 및 다른 network endpoint와 통신할 수 있는 방식을 정의합니다. 이 policy는 클러스터에서 사용하는 Container Network Interface(CNI) plugin이 강제합니다. 대부분의 CNI plugin은 iptables 또는 유사한 mechanism으로 network 수준의 traffic을 제어합니다. Network Policy가 없으면 기본적으로 모든 Pod가 자유롭게 통신할 수 있으므로 모든 traffic을 기본 차단하지 않으며, kube-scheduler가 이를 강제하지도 않습니다. API access나 storage access를 관리하는 기능도 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-014",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do multistage builds in Docker reduce image size?",
      "ko": "Docker의 multistage build는 image 크기를 어떻게 줄입니까?"
    },
    "choices": {
      "en": [
        "By running multiple containers within a single image",
        "By creating images compatible with multiple architectures",
        "By separating build-time dependencies from runtime components in different stages",
        "By enabling parallel builds across multiple stages",
        "By deploying to multiple environments simultaneously"
      ],
      "ko": [
        "하나의 image 안에서 여러 container를 실행하여 줄인다",
        "여러 architecture와 호환되는 image를 만들어 줄인다",
        "서로 다른 stage에서 build-time dependency와 runtime component를 분리하여 줄인다",
        "여러 stage에서 build를 병렬로 실행하여 줄인다",
        "여러 environment에 동시에 배포하여 줄인다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Multistage builds in Docker allow developers to separate build-time dependencies (e.g., compilers, libraries) from runtime components by using multiple `FROM` instructions in a single Dockerfile. This ensures that only the necessary artifacts (e.g., binaries) are included in the final image, significantly reducing its size and improving security. While multistage builds can simplify workflows, they do not inherently enable parallel builds or support multi-environment deployments.",
      "ko": "Docker의 multistage build는 하나의 Dockerfile에서 여러 개의 `FROM` instruction을 사용해 compiler나 library 같은 build-time dependency를 runtime component와 분리합니다. 그 결과 최종 image에는 binary 같은 필요한 artifact만 포함되어 크기가 크게 줄고 보안도 향상됩니다. multistage build가 workflow를 단순하게 만들 수는 있지만, 본질적으로 병렬 build를 활성화하거나 여러 environment 배포를 지원하는 것은 아닙니다."
    },
    "ref": "https://docs.docker.com/get-started/docker-concepts/building-images/multi-stage-builds/"
  },
  {
    "id": "kcsa-mock-015",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Privilege Escalation",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What does the term 'container breakout' refer to in the context of container security?",
      "ko": "container security에서 'container breakout'은 무엇을 의미합니까?"
    },
    "choices": {
      "en": [
        "When a container fails to start properly",
        "A container exceeding its allocated resource limits",
        "An attack where an attacker escapes container isolation to gain access to the host system",
        "Scaling a container beyond its maximum configured replicas",
        "Migrating a container to a different node in the cluster"
      ],
      "ko": [
        "container가 정상적으로 시작하지 못하는 경우",
        "container가 할당된 resource limit을 초과하는 경우",
        "공격자가 container isolation을 탈출하여 host system에 접근하는 공격",
        "container를 설정된 최대 replica 수 이상으로 확장하는 것",
        "container를 클러스터의 다른 node로 migration하는 것"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A container breakout occurs when an attacker exploits vulnerabilities to escape the isolation boundaries of a container and gain unauthorized access to the underlying host system. This compromises the host's security and can lead to privilege escalation. Other options describe container lifecycle or resource management issues, which are unrelated to security breaches involving isolation escape.",
      "ko": "container breakout은 공격자가 vulnerability를 악용해 container의 isolation 경계를 탈출하고 기반이 되는 host system에 승인 없이 접근하는 상황입니다. 이는 host 보안을 침해하고 privilege escalation으로 이어질 수 있습니다. 나머지 선택지는 container lifecycle이나 resource management 문제를 설명할 뿐, isolation 탈출에 따른 보안 침해와는 관련이 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-016",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Does setting 'privileged: true' on a Kubernetes pod grant it access to Kubernetes Secrets?",
      "ko": "Kubernetes Pod에 'privileged: true'를 설정하면 Kubernetes Secret에 접근할 수 있습니까?"
    },
    "choices": {
      "en": [
        "Yes, it grants full access to all Secrets in the cluster",
        "No, it only elevates the pod's privileges on the host system but does not affect Secrets access",
        "Yes, but only to Secrets within the same namespace",
        "No, it explicitly prevents access to Secrets",
        "Access depends solely on RBAC permissions, regardless of privileged mode"
      ],
      "ko": [
        "예, 클러스터의 모든 Secret에 대한 전체 access를 부여한다",
        "아니요, host system에서 Pod의 privilege만 높일 뿐 Secret access에는 영향을 주지 않는다",
        "예, 같은 namespace의 Secret에만 가능하다",
        "아니요, Secret access를 명시적으로 차단한다",
        "privileged mode와 관계없이 access는 전적으로 RBAC permission에 따라 결정된다"
      ]
    },
    "answer": [
      1,
      4
    ],
    "explain": {
      "en": "Setting 'privileged: true' on a pod grants the container elevated privileges on the host system, such as access to devices and kernel capabilities, but it does not inherently grant access to Kubernetes Secrets. Access to Secrets is controlled by Kubernetes Role-Based Access Control (RBAC) policies and namespace scoping.",
      "ko": "Pod에 'privileged: true'를 설정하면 device와 kernel capability에 접근하는 등 container의 host system privilege가 높아지지만, Kubernetes Secret access가 자동으로 부여되지는 않습니다. Secret access는 Kubernetes Role-Based Access Control(RBAC) policy와 namespace 범위에 의해 제어됩니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-017",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you update the container image of a Kubernetes deployment without modifying other deployment configurations?",
      "ko": "다른 Deployment 설정은 변경하지 않고 Kubernetes Deployment의 컨테이너 이미지를 어떻게 업데이트할 수 있습니까?"
    },
    "choices": {
      "en": [
        "Manually edit the deployment YAML file and apply changes",
        "Delete the existing deployment and recreate it with the new image",
        "Use the 'kubectl set image' command to update the image",
        "Scale the deployment down to zero replicas, update the image, then scale back up",
        "Update the image directly in the container registry"
      ],
      "ko": [
        "Deployment YAML 파일을 직접 편집한 뒤 변경 사항을 적용한다",
        "기존 Deployment를 삭제하고 새 이미지로 다시 만든다",
        "'kubectl set image' 명령으로 이미지를 업데이트한다",
        "Deployment를 replica 0으로 축소하고 이미지를 업데이트한 다음 다시 확장한다",
        "컨테이너 레지스트리에서 이미지를 직접 업데이트한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The 'kubectl set image' command allows you to update the container image of a deployment directly without changing other configuration parameters. This command triggers a rolling update, ensuring minimal downtime. Manually editing the YAML is error-prone and may unintentionally alter other settings. Deleting and recreating the deployment causes downtime and loss of state. Scaling down to zero is unnecessary and disruptive. Updating the image in the container registry alone does not affect running deployments.",
      "ko": "'kubectl set image' 명령을 사용하면 다른 구성 매개변수는 변경하지 않고 Deployment의 컨테이너 이미지만 직접 업데이트할 수 있습니다. 이 명령은 롤링 업데이트를 시작하므로 다운타임을 최소화합니다. YAML을 수동으로 편집하면 오류가 발생하기 쉽고 다른 설정을 의도치 않게 바꿀 수 있습니다. Deployment를 삭제하고 다시 만들면 다운타임이 발생하고 상태가 손실됩니다. replica를 0으로 줄이는 것은 불필요하며 서비스 중단을 일으킵니다. 컨테이너 레지스트리의 이미지만 바꾸어서는 이미 실행 중인 Deployment에 영향을 주지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment"
  },
  {
    "id": "kcsa-mock-018",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation Techniques",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What are the key characteristics of gVisor and Firecracker? (Select all that apply)",
      "ko": "gVisor와 Firecracker의 핵심 특징은 무엇입니까? (해당하는 항목을 모두 선택하십시오.)"
    },
    "choices": {
      "en": [
        "gVisor is a user-space kernel providing sandboxing",
        "Firecracker uses lightweight microVMs with KVM",
        "Both provide full hardware virtualization",
        "Firecracker is a container runtime interface",
        "gVisor offers better performance than traditional VMs"
      ],
      "ko": [
        "gVisor는 샌드박싱을 제공하는 사용자 공간 커널이다",
        "Firecracker는 KVM을 사용하는 경량 microVM을 사용한다",
        "둘 다 완전한 하드웨어 가상화를 제공한다",
        "Firecracker는 컨테이너 런타임 인터페이스다",
        "gVisor는 기존 VM보다 더 나은 성능을 제공한다"
      ]
    },
    "answer": [
      0,
      1,
      4
    ],
    "explain": {
      "en": "gVisor provides sandboxing by running in user space and intercepting system calls, which enhances security without the need for full hardware virtualization. Firecracker uses microVMs, leveraging KVM for efficient isolation. gVisor can offer better performance compared to traditional VMs due to its lightweight nature.",
      "ko": "gVisor는 사용자 공간에서 실행되며 시스템 호출을 가로채 샌드박싱을 제공하므로 완전한 하드웨어 가상화 없이도 보안을 높입니다. Firecracker는 KVM을 활용하는 microVM으로 효율적인 격리를 제공합니다. gVisor는 가벼운 구조 덕분에 기존 VM보다 더 나은 성능을 낼 수 있습니다."
    },
    "ref": "https://gvisor.dev/docs/"
  },
  {
    "id": "kcsa-mock-019",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation Techniques",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary difference between MicroVM and User-Space Kernel approaches in cloud native security?",
      "ko": "클라우드 네이티브 보안에서 MicroVM 방식과 User-Space Kernel 방식의 가장 중요한 차이는 무엇입니까?"
    },
    "choices": {
      "en": [
        "MicroVMs are larger in size",
        "User-space kernels provide hardware virtualization",
        "MicroVMs run directly on hardware without a host OS",
        "User-space kernels intercept system calls in user space",
        "There is no difference; they are the same"
      ],
      "ko": [
        "MicroVM은 크기가 더 크다",
        "사용자 공간 커널이 하드웨어 가상화를 제공한다",
        "MicroVM은 호스트 OS 없이 하드웨어에서 직접 실행된다",
        "사용자 공간 커널은 사용자 공간에서 시스템 호출을 가로챈다",
        "차이가 없으며 둘은 같은 방식이다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The primary difference lies in how they operate. User-space kernels, like gVisor, run in user space and intercept system calls, providing a lightweight sandboxing mechanism. MicroVMs, on the other hand, are full-fledged virtual machines that run directly on hardware but require a host OS for management.",
      "ko": "핵심 차이는 작동 방식에 있습니다. gVisor와 같은 사용자 공간 커널은 사용자 공간에서 실행되며 시스템 호출을 가로채 가벼운 샌드박싱을 제공합니다. 반면 MicroVM은 완전한 가상 머신으로 하드웨어에서 실행되지만 이를 관리하려면 호스트 OS가 필요합니다."
    },
    "ref": "https://gvisor.dev/docs/"
  },
  {
    "id": "kcsa-mock-020",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What are the potential impacts of enabling detailed auditing of request responses in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 요청 응답에 대한 상세 감사를 활성화하면 어떤 영향이 발생할 수 있습니까?"
    },
    "choices": {
      "en": [
        "Improved cluster performance due to better monitoring",
        "Reduced storage requirements for audit logs",
        "Increased security with no performance or storage drawbacks",
        "Performance overhead and increased storage usage due to detailed logs",
        "Disabling of API server logging as a side effect"
      ],
      "ko": [
        "모니터링이 향상되어 클러스터 성능이 좋아진다",
        "감사 로그에 필요한 저장 공간이 줄어든다",
        "성능이나 저장 공간의 부담 없이 보안이 향상된다",
        "상세한 로그 때문에 성능 부담과 저장 공간 사용량이 증가한다",
        "그 부작용으로 API server 로깅이 비활성화된다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Enabling detailed auditing of request responses in Kubernetes increases the volume and detail of audit logs generated, leading to higher storage consumption and potential performance overhead on the API server. While detailed auditing improves security visibility, it must be balanced against these resource impacts.",
      "ko": "Kubernetes에서 요청 응답에 대한 상세 감사를 활성화하면 생성되는 감사 로그의 양과 세부 정보가 늘어나 저장 공간 사용량이 증가하고 API server에 성능 부담이 생길 수 있습니다. 상세 감사는 보안 가시성을 높이지만, 이러한 리소스 영향을 고려해 균형을 맞춰야 합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "kcsa-mock-021",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Runtime",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you configure Kubernetes to use a specific container runtime, such as containerd, on a node?",
      "ko": "노드에서 containerd와 같은 특정 컨테이너 런타임을 사용하도록 Kubernetes를 어떻게 설정합니까?"
    },
    "choices": {
      "en": [
        "Specify the container runtime in the pod specification",
        "Set the '--container-runtime-endpoint' flag in the kubelet configuration",
        "Configure the container runtime in the kube-proxy settings",
        "Rely on automatic detection; no manual configuration is required",
        "Set an environment variable on the master node to specify the runtime"
      ],
      "ko": [
        "Pod 사양에 컨테이너 런타임을 지정한다",
        "kubelet 설정에서 '--container-runtime-endpoint' 플래그를 지정한다",
        "kube-proxy 설정에서 컨테이너 런타임을 구성한다",
        "자동 감지에 맡기면 되므로 수동 설정은 필요하지 않다",
        "master 노드에 환경 변수를 설정해 런타임을 지정한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The kubelet is responsible for managing the container runtime on each node. To specify a container runtime like containerd, you configure the kubelet with the '--container-runtime-endpoint' flag, which points to the runtime's socket endpoint. This setting ensures kubelet communicates with the correct container runtime. The pod specification does not control the runtime used by the node. Kube-proxy manages networking and is unrelated to container runtimes. Automatic detection is not reliable for runtime selection. Environment variables on the master node do not affect node-level runtime configuration.",
      "ko": "각 노드의 컨테이너 런타임 관리는 kubelet의 책임입니다. containerd 같은 런타임을 지정하려면 런타임의 소켓 엔드포인트를 가리키도록 kubelet에 '--container-runtime-endpoint' 플래그를 설정합니다. 이 설정으로 kubelet이 올바른 런타임과 통신합니다. Pod 사양은 노드가 사용할 런타임을 제어하지 않습니다. kube-proxy는 네트워킹을 관리하므로 컨테이너 런타임과 무관합니다. 런타임 선택을 자동 감지에 의존하는 것은 신뢰할 수 없습니다. master 노드의 환경 변수도 노드 수준 런타임 설정에 영향을 주지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
  },
  {
    "id": "kcsa-mock-022",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What components are necessary to verify the integrity and authenticity of a container image?",
      "ko": "컨테이너 이미지의 무결성과 진위성을 확인하려면 어떤 구성 요소가 필요합니까?"
    },
    "choices": {
      "en": [
        "A checksum and the image manifest",
        "A digital signature, public key, and verification tool",
        "The Dockerfile used to build the image",
        "Access to the container registry logs",
        "The image's pull secret"
      ],
      "ko": [
        "체크섬과 이미지 매니페스트",
        "디지털 서명, 공개 키, 검증 도구",
        "이미지를 빌드할 때 사용한 Dockerfile",
        "컨테이너 레지스트리 로그에 대한 접근 권한",
        "이미지의 pull secret"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "To verify the integrity and authenticity of a container image, you need a digital signature, a public key to verify the signature, and a verification tool. This ensures that the image has not been tampered with and comes from a trusted source.",
      "ko": "컨테이너 이미지의 무결성과 진위성을 확인하려면 디지털 서명, 서명을 검증할 공개 키, 검증 도구가 필요합니다. 이를 통해 이미지가 변조되지 않았고 신뢰할 수 있는 출처에서 왔는지 확인할 수 있습니다."
    },
    "ref": "https://docs.docker.com/engine/security/"
  },
  {
    "id": "kcsa-mock-023",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Malicious Code Execution and Compromised Applications in Containers",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In the STRIDE threat model, which category best describes a Trojan horse that compromises a build server?",
      "ko": "STRIDE 위협 모델에서 빌드 서버를 손상시키는 트로이 목마를 가장 잘 설명하는 범주는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Spoofing",
        "Repudiation",
        "Information Disclosure",
        "Denial of Service",
        "Tampering"
      ],
      "ko": [
        "Spoofing",
        "Repudiation",
        "Information Disclosure",
        "Denial of Service",
        "Tampering"
      ]
    },
    "answer": 4,
    "explain": {
      "en": "A Trojan horse compromising a build server is an example of tampering because it involves unauthorized modification of system components or data. Tampering refers to malicious alterations that can affect the integrity of software or systems. Spoofing involves impersonation, repudiation relates to denial of actions, information disclosure concerns unauthorized data exposure, and denial of service targets availability, none of which precisely describe this scenario.",
      "ko": "빌드 서버를 손상시키는 트로이 목마는 시스템 구성 요소나 데이터를 무단으로 변경하므로 Tampering의 사례입니다. Tampering은 소프트웨어나 시스템의 무결성에 영향을 줄 수 있는 악의적 변경을 뜻합니다. Spoofing은 사칭, Repudiation은 행위의 부인, Information Disclosure는 승인되지 않은 데이터 노출, Denial of Service는 가용성 공격을 의미하므로 이 상황을 정확히 설명하지 못합니다."
    },
    "ref": "https://docs.microsoft.com/en-us/azure/security/develop/threat-modeling-tool"
  },
  {
    "id": "kcsa-mock-024",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat Modelling Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the MITRE ATT&CK framework, and how is it used in cybersecurity?",
      "ko": "MITRE ATT&CK 프레임워크란 무엇이며 사이버 보안에서 어떻게 사용됩니까?"
    },
    "choices": {
      "en": [
        "A set of compliance requirements for cloud providers",
        "A vulnerability scanning tool",
        "A knowledge base of adversary tactics and techniques used in cyberattacks",
        "An incident response guide for organizations",
        "A network security protocol for secure communication"
      ],
      "ko": [
        "클라우드 제공업체를 위한 컴플라이언스 요구 사항 모음",
        "취약점 스캐닝 도구",
        "사이버 공격에 사용되는 공격자의 전술과 기법을 정리한 지식 기반",
        "조직을 위한 사고 대응 지침서",
        "안전한 통신을 위한 네트워크 보안 프로토콜"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The MITRE ATT&CK framework is a comprehensive knowledge base that catalogs adversary tactics, techniques, and procedures (TTPs) observed in real-world cyberattacks. It is widely used by cybersecurity professionals to understand attacker behavior, improve threat detection, and enhance defense strategies. Other options are incorrect because they describe unrelated tools or concepts.",
      "ko": "MITRE ATT&CK 프레임워크는 실제 사이버 공격에서 관찰된 공격자의 전술, 기법, 절차(TTP)를 체계적으로 정리한 종합 지식 기반입니다. 사이버 보안 전문가는 이를 이용해 공격자의 행동을 이해하고, 위협 탐지와 방어 전략을 개선합니다. 나머지 선택지는 서로 무관한 도구나 개념을 설명하므로 틀렸습니다."
    },
    "ref": "https://attack.mitre.org/"
  },
  {
    "id": "kcsa-mock-025",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Scheduler",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following best practices are recommended to secure the Kubernetes scheduler (kube-scheduler)? (Select all that apply.)",
      "ko": "Kubernetes scheduler(kube-scheduler)를 보호하기 위해 권장되는 보안 관행은 무엇입니까? (해당하는 항목을 모두 선택하십시오.)"
    },
    "choices": {
      "en": [
        "Bind the scheduler to 0.0.0.0 to ensure it is accessible from all network interfaces",
        "Use Role-Based Access Control (RBAC) to restrict access to the scheduler API",
        "Run the scheduler as a non-root user to minimize privilege escalation risks",
        "Enable anonymous authentication to simplify access for debugging purposes",
        "Configure network policies to restrict network access to and from the scheduler"
      ],
      "ko": [
        "모든 네트워크 인터페이스에서 접근할 수 있도록 scheduler를 0.0.0.0에 바인딩한다",
        "RBAC를 사용해 scheduler API에 대한 접근을 제한한다",
        "권한 상승 위험을 줄이기 위해 scheduler를 비-root 사용자로 실행한다",
        "디버깅을 쉽게 하려고 익명 인증을 활성화한다",
        "scheduler로 들어오고 나가는 네트워크 접근을 제한하도록 network policy를 구성한다"
      ]
    },
    "answer": [
      1,
      2,
      4
    ],
    "explain": {
      "en": "The recommended security measures for securing the kube-scheduler include: using Role-Based Access Control (RBAC) to enforce least privilege, ensuring only authorized entities can interact with the scheduler's API; running the kube-scheduler as a non-root user to reduce potential risks of privilege escalation in case of a compromise; and configuring network policies to restrict unauthorized network access to or from the kube-scheduler, thereby enhancing its security. Binding the scheduler to 0.0.0.0 increases exposure and is not recommended. Similarly, enabling anonymous authentication weakens security by allowing unauthenticated access.",
      "ko": "kube-scheduler를 보호하려면 RBAC로 최소 권한을 적용해 승인된 주체만 scheduler API와 상호작용하도록 하고, 침해가 발생했을 때 권한 상승 위험을 줄이도록 kube-scheduler를 비-root 사용자로 실행하며, 무단으로 scheduler에 접근하거나 scheduler에서 나가는 네트워크 접근을 제한하도록 network policy를 구성해야 합니다. scheduler를 0.0.0.0에 바인딩하면 노출 범위가 커지므로 권장되지 않습니다. 익명 인증을 켜면 인증되지 않은 접근을 허용해 보안이 약화됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "kcsa-mock-026",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following controllers are included in the Kubernetes kube-controller-manager? (Select all that apply)",
      "ko": "다음 중 Kubernetes kube-controller-manager에 포함되는 controller는 무엇입니까? (해당하는 항목을 모두 선택하십시오.)"
    },
    "choices": {
      "en": [
        "Node Controller",
        "ReplicaSet Controller",
        "Ingress Controller",
        "Cloud Controller Manager",
        "Service Account Controller"
      ],
      "ko": [
        "Node Controller",
        "ReplicaSet Controller",
        "Ingress Controller",
        "Cloud Controller Manager",
        "Service Account Controller"
      ]
    },
    "answer": [
      0,
      1,
      4
    ],
    "explain": {
      "en": "The kube-controller-manager runs several core controllers including the Node Controller, which manages node status; the ReplicaSet Controller, which ensures the desired number of pod replicas; and the Service Account Controller, which manages service account tokens. The Ingress Controller is typically deployed separately as an add-on and is not part of the kube-controller-manager. The Cloud Controller Manager is a separate component responsible for cloud-specific control loops and is not included in the kube-controller-manager.",
      "ko": "kube-controller-manager는 여러 핵심 controller를 실행합니다. Node Controller는 노드 상태를 관리하고, ReplicaSet Controller는 원하는 Pod replica 수를 유지하며, Service Account Controller는 service account token을 관리합니다. Ingress Controller는 일반적으로 add-on으로 별도 배포되므로 kube-controller-manager의 일부가 아닙니다. Cloud Controller Manager도 클라우드별 제어 루프를 담당하는 별도 구성 요소이므로 kube-controller-manager에 포함되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"
  },
  {
    "id": "kcsa-mock-027",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Kubernetes Trust Boundaries and Data Flow",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following actions in Kubernetes cross trust boundaries and potentially introduce security risks? (Select all that apply)",
      "ko": "Kubernetes에서 다음 중 trust boundary를 넘으며 보안 위험을 일으킬 수 있는 동작은 무엇입니까? (해당하는 항목을 모두 선택하십시오.)"
    },
    "choices": {
      "en": [
        "Accessing the Kubernetes API server",
        "Communicating between pods within the same namespace",
        "Mounting hostPath volumes into pods",
        "Using service accounts across different namespaces",
        "Pulling container images from public registries"
      ],
      "ko": [
        "Kubernetes API server에 접근한다",
        "같은 namespace 안의 Pod끼리 통신한다",
        "Pod에 hostPath volume을 마운트한다",
        "서로 다른 namespace에서 service account를 사용한다",
        "public registry에서 컨테이너 이미지를 가져온다"
      ]
    },
    "answer": [
      2,
      3,
      4
    ],
    "explain": {
      "en": "Mounting hostPath volumes allows pods to access the host filesystem, crossing the boundary between container and host, which poses significant security risks. Using service accounts across namespaces can bypass namespace isolation, potentially escalating privileges. Pulling images from public registries introduces risks from untrusted or malicious images. Accessing the Kubernetes API is a controlled and authenticated action, while pod-to-pod communication within the same namespace is generally within the same trust boundary and less risky.",
      "ko": "hostPath volume을 마운트하면 Pod가 호스트 파일 시스템에 접근할 수 있어 컨테이너와 호스트 사이의 경계를 넘으므로 큰 보안 위험이 있습니다. 여러 namespace에서 service account를 사용하면 namespace 격리를 우회해 잠재적으로 권한이 상승할 수 있습니다. public registry에서 이미지를 가져오면 신뢰할 수 없거나 악성인 이미지가 유입될 위험이 있습니다. Kubernetes API에 접근하는 것은 통제되고 인증된 동작이며, 같은 namespace 안의 Pod 간 통신은 일반적으로 같은 trust boundary 안에서 이루어지므로 위험이 더 낮습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "kcsa-mock-028",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "The 4Cs of Cloud Native Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What are the four key areas of focus for cloud-native security, often referred to as the '4 Cs'?",
      "ko": "흔히 '4 Cs'라고 부르는 클라우드 네이티브 보안의 네 가지 핵심 영역은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Code, Container, Cluster, Cloud",
        "Compute, Connectivity, Compliance, Cost",
        "Cloud, Core, Control, Compliance",
        "Code, Continuous Integration, Cloud, Compliance",
        "Containerization, Coordination, Configuration, Control"
      ],
      "ko": [
        "Code, Container, Cluster, Cloud",
        "Compute, Connectivity, Compliance, Cost",
        "Cloud, Core, Control, Compliance",
        "Code, Continuous Integration, Cloud, Compliance",
        "Containerization, Coordination, Configuration, Control"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The '4 Cs' of cloud-native security are Code, Container, Cluster, and Cloud. These represent the layers where security should be applied to ensure comprehensive protection across the entire cloud-native stack.",
      "ko": "클라우드 네이티브 보안의 '4 Cs'는 Code, Container, Cluster, Cloud입니다. 이는 클라우드 네이티브 스택 전체를 포괄적으로 보호하기 위해 보안을 적용해야 하는 계층을 나타냅니다."
    },
    "ref": "https://cloudnativecomputing.dev/"
  },
  {
    "id": "kcsa-mock-029",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following actions can improve the security of the Kubernetes kubelet? (Select all that apply)",
      "ko": "다음 중 Kubernetes kubelet의 보안을 향상할 수 있는 동작은 무엇입니까? (해당하는 항목을 모두 선택하십시오.)"
    },
    "choices": {
      "en": [
        "Enable authentication and authorization on the kubelet API",
        "Disable anonymous access to the kubelet",
        "Expose the kubelet read-only port to all network interfaces",
        "Use TLS certificates for kubelet communication",
        "Run the kubelet process in privileged mode"
      ],
      "ko": [
        "kubelet API에서 인증과 인가를 활성화한다",
        "kubelet에 대한 익명 접근을 비활성화한다",
        "모든 네트워크 인터페이스에 kubelet 읽기 전용 포트를 노출한다",
        "kubelet 통신에 TLS 인증서를 사용한다",
        "kubelet 프로세스를 privileged mode로 실행한다"
      ]
    },
    "answer": [
      0,
      1,
      3
    ],
    "explain": {
      "en": "Improving kubelet security involves enabling authentication and authorization to ensure only authorized users can access the API, disabling anonymous access to prevent unauthenticated requests, and using TLS certificates to encrypt communication between components. Exposing the read-only port publicly increases attack surface and is discouraged. Running kubelet in privileged mode is not a security best practice and can increase risk.",
      "ko": "kubelet 보안을 높이려면 인증과 인가를 활성화해 승인된 사용자만 API에 접근하도록 하고, 인증되지 않은 요청을 막기 위해 익명 접근을 비활성화하며, 구성 요소 간 통신을 암호화하도록 TLS 인증서를 사용해야 합니다. 읽기 전용 포트를 외부에 공개하면 공격 표면이 넓어지므로 피해야 합니다. kubelet을 privileged mode로 실행하는 것도 보안 모범 사례가 아니며 위험을 키울 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/kubelet-authentication-authorization/"
  },
  {
    "id": "kcsa-mock-030",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why might a pod retain privileged access even after applying the 'restricted' Pod Security Standard (PSS) or Pod Security Admission (PSA) policy to its namespace?",
      "ko": "namespace에 'restricted' Pod Security Standard(PSS) 또는 Pod Security Admission(PSA) 정책을 적용한 뒤에도 Pod가 privileged 접근 권한을 유지할 수 있는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The Pod Security Standard does not apply retroactively to existing pods",
        "The namespace labels required for policy enforcement are misconfigured or missing",
        "The Kubernetes API server does not support Pod Security Standards",
        "The pod specification explicitly overrides the policy",
        "Privileged access is always allowed regardless of policy"
      ],
      "ko": [
        "Pod Security Standard는 이미 존재하는 Pod에 소급 적용되지 않는다",
        "정책 적용에 필요한 namespace label이 잘못 설정되었거나 누락되었다",
        "Kubernetes API server는 Pod Security Standard를 지원하지 않는다",
        "Pod 사양이 정책을 명시적으로 재정의한다",
        "정책과 관계없이 privileged 접근은 항상 허용된다"
      ]
    },
    "answer": [
      0,
      1
    ],
    "explain": {
      "en": "The 'restricted' Pod Security Standard or Pod Security Admission policy applies only to pods created or updated after the policy is enforced; existing pods are not automatically remediated. Enforcement also depends on correct namespace labeling (e.g., 'pod-security.kubernetes.io/enforce=restricted'). If these labels are missing or misconfigured, the policy will not be enforced on pods in that namespace.",
      "ko": "'restricted' Pod Security Standard 또는 Pod Security Admission 정책은 정책이 적용된 후 새로 생성되거나 업데이트된 Pod에만 적용되며, 기존 Pod를 자동으로 수정하지 않습니다. 또한 적용 여부는 올바른 namespace label 설정(예: 'pod-security.kubernetes.io/enforce=restricted')에 달려 있습니다. 이 label이 없거나 잘못 설정되면 해당 namespace의 Pod에 정책이 적용되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "kcsa-mock-032",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Cloud Provider and Infrastructure Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How does the underlying cloud infrastructure impact the security of a Kubernetes cluster?",
      "ko": "기반이 되는 클라우드 인프라는 Kubernetes 클러스터의 보안에 어떤 영향을 줍니까?"
    },
    "choices": {
      "en": [
        "No impact, as Kubernetes abstracts infrastructure entirely",
        "Yes, infrastructure vulnerabilities can compromise cluster security",
        "Only if using on-premises hardware",
        "It depends on the Kubernetes version",
        "Only when running stateful applications"
      ],
      "ko": [
        "Kubernetes가 인프라를 완전히 추상화하므로 영향이 없다",
        "그렇다. 인프라의 취약점이 클러스터의 보안을 침해할 수 있다",
        "온프레미스 하드웨어를 사용할 때만 영향을 준다",
        "Kubernetes 버전에 따라 달라진다",
        "stateful application을 실행할 때만 영향을 준다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The security of the underlying cloud infrastructure directly impacts the security of a Kubernetes cluster. Vulnerabilities in the infrastructure can compromise the cluster, making it essential to ensure the infrastructure is secure.",
      "ko": "기반 클라우드 인프라의 보안은 Kubernetes 클러스터의 보안에 직접 영향을 줍니다. 인프라의 취약점이 클러스터를 침해할 수 있으므로 인프라 자체가 안전한지 확인해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "kcsa-mock-033",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authentication",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which authentication mechanisms are commonly used by kubeadm during Kubernetes cluster bootstrapping? (Select all that apply)",
      "ko": "Kubernetes 클러스터 부트스트랩 과정에서 kubeadm이 일반적으로 사용하는 인증 메커니즘은 무엇입니까? (해당하는 항목을 모두 선택하십시오.)"
    },
    "choices": {
      "en": [
        "TLS certificates",
        "Token-based authentication",
        "OAuth tokens",
        "Static passwords",
        "Biometric authentication"
      ],
      "ko": [
        "TLS 인증서",
        "토큰 기반 인증",
        "OAuth token",
        "정적 비밀번호",
        "생체 인증"
      ]
    },
    "answer": [
      0,
      1
    ],
    "explain": {
      "en": "kubeadm primarily uses TLS certificates and token-based authentication mechanisms to secure communication and authenticate components during cluster bootstrapping. TLS certificates are used for API server and client authentication, while bootstrap tokens facilitate node joining.",
      "ko": "kubeadm은 클러스터 부트스트랩 중 통신을 보호하고 구성 요소를 인증하기 위해 주로 TLS 인증서와 토큰 기반 인증을 사용합니다. TLS 인증서는 API server와 client 인증에 사용되고, bootstrap token은 노드가 클러스터에 참여할 수 있도록 합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/#tls-bootstrap"
  },
  {
    "id": "kcsa-mock-034",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which directories on a client machine contain sensitive information related to accessing Kubernetes clusters? (Select all that apply)",
      "ko": "클라이언트 머신에서 Kubernetes 클러스터에 접근하는 데 관련된 민감한 정보가 들어 있는 디렉터리는 무엇인가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "/var/log/",
        "~/.kube/config",
        "/etc/hosts",
        "~/.ssh/",
        "/tmp/"
      ],
      "ko": [
        "/var/log/",
        "~/.kube/config",
        "/etc/hosts",
        "~/.ssh/",
        "/tmp/"
      ]
    },
    "answer": [
      1,
      3
    ],
    "explain": {
      "en": "The ~/.kube/config file stores Kubernetes cluster access credentials and configuration, making it sensitive. The ~/.ssh/ directory contains SSH keys used for secure access to nodes or clusters. Other directories like /var/log/, /etc/hosts, and /tmp/ do not typically contain sensitive Kubernetes access information.",
      "ko": "~/.kube/config 파일에는 Kubernetes 클러스터 접근 자격 증명과 설정이 저장되므로 민감한 정보에 해당합니다. ~/.ssh/ 디렉터리에는 노드나 클러스터에 안전하게 접근할 때 사용하는 SSH 키가 들어 있습니다. /var/log/, /etc/hosts, /tmp/ 같은 디렉터리에는 일반적으로 Kubernetes 접근 관련 민감 정보가 저장되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"
  },
  {
    "id": "kcsa-mock-035",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why is a ConfigMap not suitable for storing sensitive information such as secrets in Kubernetes?",
      "ko": "Kubernetes에서 Secret과 같은 민감한 정보를 저장하는 데 ConfigMap이 적합하지 않은 이유는 무엇인가?"
    },
    "choices": {
      "en": [
        "ConfigMaps cannot be mounted as volumes in pods",
        "ConfigMaps do not support key-value pairs",
        "Data stored in ConfigMaps is kept in plain text and not encrypted",
        "ConfigMaps are deprecated in recent Kubernetes versions",
        "ConfigMaps have strict size limitations that prevent storing secrets"
      ],
      "ko": [
        "ConfigMap은 Pod에 볼륨으로 마운트할 수 없다",
        "ConfigMap은 키-값 쌍을 지원하지 않는다",
        "ConfigMap에 저장된 데이터는 평문으로 보관되며 암호화되지 않는다",
        "최근 Kubernetes 버전에서는 ConfigMap이 더 이상 사용되지 않는다",
        "ConfigMap에는 엄격한 크기 제한이 있어 Secret을 저장할 수 없다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "ConfigMaps are designed to store non-sensitive configuration data as key-value pairs and store data in plain text within etcd. They do not provide encryption or access controls suitable for sensitive information. Secrets, on the other hand, are specifically designed to store sensitive data and can be encrypted at rest. ConfigMaps can be mounted as volumes and are not deprecated. While ConfigMaps have size limits, the primary reason they are unsuitable for secrets is the lack of security.",
      "ko": "ConfigMap은 민감하지 않은 설정 데이터를 키-값 쌍으로 저장하도록 설계되며, 데이터는 etcd에 평문으로 저장됩니다. 따라서 민감한 정보에 필요한 암호화나 접근 제어를 제공하지 않습니다. 반면 Secret은 민감한 데이터를 저장하도록 설계되었고 저장 시 암호화할 수 있습니다. ConfigMap은 볼륨으로 마운트할 수 있으며 더 이상 사용되지 않는 기능도 아닙니다. ConfigMap에 크기 제한이 있기는 하지만, Secret 저장에 적합하지 않은 주된 이유는 보안 기능이 부족하기 때문입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/configmap/"
  },
  {
    "id": "kcsa-mock-036",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In managed Kubernetes services (e.g., EKS, GKE, AKS), who is responsible for managing the etcd cluster?",
      "ko": "관리형 Kubernetes 서비스(예: EKS, GKE, AKS)에서는 누가 etcd 클러스터를 관리하는가?"
    },
    "choices": {
      "en": [
        "The user manages etcd directly",
        "The cloud provider manages etcd",
        "etcd is not used in managed services",
        "A third-party vendor manages etcd",
        "The Kubernetes community manages etcd"
      ],
      "ko": [
        "사용자가 etcd를 직접 관리한다",
        "클라우드 제공자가 etcd를 관리한다",
        "관리형 서비스에서는 etcd를 사용하지 않는다",
        "타사 공급업체가 etcd를 관리한다",
        "Kubernetes 커뮤니티가 etcd를 관리한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "In managed Kubernetes services, the cloud provider is responsible for managing the etcd cluster, including backups, scaling, and availability. Users do not manage etcd directly. etcd is a core component of Kubernetes and is always used, but its management is abstracted away in managed services. The Kubernetes community develops etcd but does not manage individual clusters.",
      "ko": "관리형 Kubernetes 서비스에서는 백업, 확장, 가용성을 포함한 etcd 클러스터 관리를 클라우드 제공자가 담당합니다. 사용자가 etcd를 직접 관리하지는 않습니다. etcd는 Kubernetes의 핵심 구성 요소이므로 관리형 서비스에서도 항상 사용되지만, 그 관리 작업은 서비스 뒤로 추상화되어 있습니다. Kubernetes 커뮤니티는 etcd를 개발하지만 개별 클러스터를 관리하지는 않습니다."
    },
    "ref": "https://docs.aws.amazon.com/eks/latest/userguide/cluster-architecture.html"
  },
  {
    "id": "kcsa-mock-037",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What types of data are stored inside the etcd key-value store in a Kubernetes cluster? (Select all that apply)",
      "ko": "Kubernetes 클러스터의 etcd 키-값 저장소에는 어떤 종류의 데이터가 저장되는가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "Kubernetes cluster state",
        "Persistent application data",
        "Pod logs",
        "Secrets and ConfigMaps",
        "Container images"
      ],
      "ko": [
        "Kubernetes 클러스터 상태",
        "영구 애플리케이션 데이터",
        "Pod 로그",
        "Secret과 ConfigMap",
        "컨테이너 이미지"
      ]
    },
    "answer": [
      0,
      3
    ],
    "explain": {
      "en": "etcd stores the entire Kubernetes cluster state, including resource objects such as Secrets and ConfigMaps. It does not store persistent application data (which is stored in volumes), pod logs (which are stored on nodes or centralized logging systems), or container images (stored in container registries).",
      "ko": "etcd에는 Secret과 ConfigMap 같은 리소스 객체를 포함해 Kubernetes 클러스터의 전체 상태가 저장됩니다. 영구 애플리케이션 데이터는 볼륨에 저장되고, Pod 로그는 노드나 중앙 집중식 로깅 시스템에 저장되며, 컨테이너 이미지는 컨테이너 레지스트리에 저장되므로 etcd에 저장되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/components/#etcd"
  },
  {
    "id": "kcsa-mock-038",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation Techniques",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In which scenarios is soft multi-tenancy preferred over hard multi-tenancy in cloud-native environments?",
      "ko": "클라우드 네이티브 환경에서 하드 멀티테넌시보다 소프트 멀티테넌시를 선호하는 경우는 언제인가?"
    },
    "choices": {
      "en": [
        "When strict tenant isolation is mandatory",
        "For workloads from untrusted tenants requiring strong isolation",
        "To maximize resource utilization efficiency in trusted tenant environments",
        "When compliance with strict regulatory requirements is necessary",
        "When deploying workloads across multiple Kubernetes clusters"
      ],
      "ko": [
        "테넌트 간 엄격한 격리가 필수인 경우",
        "신뢰할 수 없는 테넌트의 워크로드에 강력한 격리가 필요한 경우",
        "신뢰할 수 있는 테넌트 환경에서 리소스 활용 효율을 극대화하려는 경우",
        "엄격한 규제 요건을 준수해야 하는 경우",
        "여러 Kubernetes 클러스터에 워크로드를 배포하는 경우"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Soft multi-tenancy is preferred when tenants are trusted and strict isolation is not required, allowing for more efficient sharing of resources. Hard multi-tenancy, by contrast, enforces strict isolation suitable for untrusted tenants or compliance-driven environments. Therefore, soft multi-tenancy optimizes resource usage in trusted settings but is not suitable where strong isolation or regulatory compliance is mandatory.",
      "ko": "소프트 멀티테넌시는 테넌트를 신뢰할 수 있고 엄격한 격리가 필요하지 않을 때 선호되며, 리소스를 효율적으로 공유할 수 있습니다. 반대로 하드 멀티테넌시는 엄격한 격리를 적용하므로 신뢰할 수 없는 테넌트나 규정 준수가 중요한 환경에 적합합니다. 따라서 강력한 격리나 규제 준수가 요구되는 상황에서는 하드 멀티테넌시를 사용해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/multi-tenancy/"
  },
  {
    "id": "kcsa-mock-039",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation Techniques",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which methods can be used to isolate resources effectively in a multi-tenant Kubernetes environment? (Select all that apply)",
      "ko": "멀티테넌트 Kubernetes 환경에서 리소스를 효과적으로 격리하는 방법은 무엇인가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "Deploying separate Kubernetes clusters for each tenant",
        "Using Kubernetes namespaces combined with Role-Based Access Control (RBAC)",
        "Applying Kubernetes Network Policies to restrict traffic",
        "Sharing service accounts among tenants to simplify access",
        "Disabling resource quotas to allow unlimited resource usage"
      ],
      "ko": [
        "테넌트마다 별도의 Kubernetes 클러스터를 배포한다",
        "Kubernetes namespace를 Role-Based Access Control (RBAC)과 함께 사용한다",
        "Kubernetes Network Policy를 적용해 트래픽을 제한한다",
        "접근을 단순화하기 위해 테넌트 간 service account를 공유한다",
        "무제한 리소스 사용을 허용하도록 resource quota를 비활성화한다"
      ]
    },
    "answer": [
      0,
      1,
      2
    ],
    "explain": {
      "en": "Effective resource isolation in multi-tenant Kubernetes environments can be achieved by deploying separate clusters, using namespaces with RBAC to control access, and applying network policies to restrict communication. Sharing service accounts among tenants reduces isolation and is insecure. Disabling resource quotas removes limits on resource consumption, which can lead to resource contention and is not recommended.",
      "ko": "멀티테넌트 Kubernetes 환경에서는 테넌트별로 별도 클러스터를 배포하고, namespace와 RBAC을 사용해 접근을 제어하며, Network Policy를 적용해 통신을 제한함으로써 효과적으로 리소스를 격리할 수 있습니다. 테넌트 간 service account를 공유하면 격리가 약화되고 권한이 의도치 않게 확대될 수 있습니다. resource quota를 비활성화하면 한 테넌트가 리소스를 독점할 수 있어 격리에 도움이 되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "kcsa-mock-040",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Controls and Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is an effective and consistent approach to enforce policies across multiple Kubernetes clusters?",
      "ko": "여러 Kubernetes 클러스터 전반에 정책을 효과적이고 일관되게 적용하는 방법은 무엇인가?"
    },
    "choices": {
      "en": [
        "Manually applying policies individually on each cluster",
        "Using policy-as-code tools such as Open Policy Agent (OPA) or Kyverno",
        "Relying solely on default Kubernetes security settings",
        "Implementing different policies tailored for each environment",
        "Enforcing policies only at the application layer"
      ],
      "ko": [
        "각 클러스터에 정책을 개별적으로 수동 적용한다",
        "Open Policy Agent (OPA)나 Kyverno 같은 policy-as-code 도구를 사용한다",
        "Kubernetes의 기본 보안 설정에만 의존한다",
        "환경마다 서로 다른 정책을 맞춤 구현한다",
        "애플리케이션 계층에서만 정책을 적용한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Using policy-as-code tools like OPA or Kyverno enables automated, consistent, and scalable enforcement of policies across multiple Kubernetes clusters. Manual application is error-prone and inconsistent. Default Kubernetes settings are minimal and insufficient for comprehensive policy enforcement. Tailoring different policies per environment can lead to inconsistencies. Enforcing policies only at the application layer misses cluster-level security controls.",
      "ko": "OPA나 Kyverno 같은 policy-as-code 도구를 사용하면 여러 Kubernetes 클러스터에 정책을 자동화되고 일관되며 확장 가능한 방식으로 적용할 수 있습니다. 정책을 수동으로 적용하면 오류가 발생하기 쉽고 일관성이 떨어집니다. Kubernetes의 기본 설정은 최소한의 보안만 제공하므로 포괄적인 정책 적용에는 부족합니다. 환경마다 정책을 다르게 만들면 일관된 집행이 어려워지고, 애플리케이션 계층에만 의존하면 클러스터 수준의 요구 사항을 다룰 수 없습니다."
    },
    "ref": "https://www.openpolicyagent.org/docs/latest/"
  },
  {
    "id": "kcsa-mock-041",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following statements about static pods in Kubernetes are true? (Select all that apply)",
      "ko": "Kubernetes의 static pod에 관한 다음 설명 중 옳은 것은 무엇인가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "They are managed directly by the kubelet on a node",
        "They are defined in the API server and stored in etcd",
        "They are useful for running critical system components",
        "They are automatically rescheduled on other nodes if the node fails",
        "They can be updated using kubectl commands"
      ],
      "ko": [
        "노드의 kubelet이 직접 관리한다",
        "API server에 정의되고 etcd에 저장된다",
        "중요한 시스템 구성 요소를 실행하는 데 유용하다",
        "노드에 장애가 발생하면 다른 노드에 자동으로 재스케줄된다",
        "kubectl 명령으로 업데이트할 수 있다"
      ]
    },
    "answer": [
      0,
      2
    ],
    "explain": {
      "en": "Static pods are defined by placing pod manifest files directly on a node’s filesystem and are managed by the kubelet on that node, not through the API server or etcd. They are useful for running critical system components that must run on a specific node. Static pods are not rescheduled automatically if the node fails, and they cannot be updated via kubectl since they are not managed through the Kubernetes API.",
      "ko": "static pod는 Pod manifest 파일을 노드의 파일 시스템에 직접 배치해 정의하며, 해당 노드의 kubelet이 관리합니다. API server나 etcd를 통해 관리되는 것이 아닙니다. 특정 노드에서 반드시 실행되어야 하는 중요한 시스템 구성 요소를 구동하는 데 유용합니다. 노드에 장애가 발생해도 다른 노드로 자동 재스케줄되지 않으며, kubectl 명령으로 업데이트할 수도 없습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/"
  },
  {
    "id": "kcsa-mock-042",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "When you run the command 'kubectl apply', which Kubernetes component processes the request first?",
      "ko": "'kubectl apply' 명령을 실행하면 어떤 Kubernetes 구성 요소가 요청을 가장 먼저 처리하는가?"
    },
    "choices": {
      "en": [
        "etcd",
        "kube-scheduler",
        "kube-controller-manager",
        "kube-apiserver",
        "kubelet"
      ],
      "ko": [
        "etcd",
        "kube-scheduler",
        "kube-controller-manager",
        "kube-apiserver",
        "kubelet"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "All kubectl commands interact first with the kube-apiserver, which is the central management entity of the Kubernetes control plane. The API server authenticates and validates the request, then persists the desired state in etcd. Other components like the scheduler and controller manager act later based on the updated state.",
      "ko": "모든 kubectl 명령은 먼저 control plane의 중앙 관리 주체인 kube-apiserver와 통신합니다. API server는 요청을 인증하고 검증한 다음, 원하는 상태를 etcd에 저장합니다. scheduler와 controller manager 같은 다른 구성 요소는 업데이트된 상태를 바탕으로 그 이후에 동작합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/overview/"
  },
  {
    "id": "kcsa-mock-043",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Scheduler",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of the Kubernetes scheduler in a cluster?",
      "ko": "Kubernetes 클러스터에서 scheduler의 주요 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "To monitor the overall health of the cluster",
        "To assign pods to nodes based on resource availability and scheduling policies",
        "To manage service discovery within the cluster",
        "To enforce network policies between pods",
        "To control user access to the Kubernetes API server"
      ],
      "ko": [
        "클러스터 전체의 상태를 모니터링한다",
        "리소스 가용성과 스케줄링 정책에 따라 Pod를 노드에 할당한다",
        "클러스터 내부의 service discovery를 관리한다",
        "Pod 간 네트워크 정책을 적용한다",
        "Kubernetes API server에 대한 사용자 접근을 제어한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The Kubernetes scheduler is responsible for selecting the most suitable node for each pod to run on, based on resource availability, constraints, and scheduling policies. It does not monitor cluster health, manage service discovery, enforce network policies, or control API server access. Those responsibilities belong to other components like the kube-controller-manager, CoreDNS, network plugins, and the API server's authentication/authorization mechanisms.",
      "ko": "Kubernetes scheduler는 리소스 가용성, 제약 조건, 스케줄링 정책을 고려해 각 Pod를 실행할 가장 적합한 노드를 선택합니다. 클러스터 상태 모니터링, service discovery 관리, 네트워크 정책 적용, API server 접근 제어는 scheduler의 역할이 아니며 각각 다른 구성 요소가 담당합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
  },
  {
    "id": "kcsa-mock-044",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "KubeProxy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the impact on a Kubernetes cluster if the kube-proxy component enters a 'CrashLoopBackOff' state?",
      "ko": "Kubernetes 클러스터에서 kube-proxy 구성 요소가 'CrashLoopBackOff' 상태에 들어가면 어떤 영향이 발생하는가?"
    },
    "choices": {
      "en": [
        "Pods will not be scheduled on any nodes",
        "Network traffic between services may be disrupted or fail",
        "The entire Kubernetes cluster will shut down",
        "The kubelet service on nodes will stop functioning",
        "Access to Kubernetes Secrets will be blocked"
      ],
      "ko": [
        "어떤 노드에도 Pod가 스케줄되지 않는다",
        "서비스 간 네트워크 트래픽이 중단되거나 실패할 수 있다",
        "Kubernetes 클러스터 전체가 종료된다",
        "노드의 kubelet 서비스가 작동을 멈춘다",
        "Kubernetes Secret에 대한 접근이 차단된다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "kube-proxy manages network rules on each node to enable service communication and load balancing. If kube-proxy crashes repeatedly (CrashLoopBackOff), network traffic between services can be disrupted, causing failures in service discovery and connectivity. However, pod scheduling, kubelet operation, cluster availability, and secret access are not directly affected by kube-proxy failures.",
      "ko": "kube-proxy는 서비스 통신과 로드 밸런싱이 가능하도록 각 노드의 네트워크 규칙을 관리합니다. kube-proxy가 반복적으로 충돌해 CrashLoopBackOff 상태가 되면 서비스 간 네트워크 트래픽이 중단될 수 있어 service discovery와 연결이 실패할 수 있습니다. 그러나 Pod 스케줄링, kubelet 동작, 클러스터 가용성, Secret 접근 자체는 영향을 받지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies"
  },
  {
    "id": "kcsa-mock-045",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a common cause for failing to pull the latest version of a container image from the 'k8s.gcr.io' registry?",
      "ko": "'k8s.gcr.io' 레지스트리에서 컨테이너 이미지의 최신 버전을 가져오지 못하는 흔한 원인은 무엇인가?"
    },
    "choices": {
      "en": [
        "The image registry has been deprecated or is unavailable",
        "Specifying an incorrect image name or tag in the pull command",
        "Network policies blocking outbound traffic from the node",
        "The Kubernetes node lacks sufficient CPU or memory resources",
        "The kube-proxy component is not running on the node"
      ],
      "ko": [
        "이미지 레지스트리가 더 이상 사용되지 않거나 이용할 수 없다",
        "pull 명령에 잘못된 이미지 이름이나 tag를 지정했다",
        "Network Policy가 노드의 외부 송신 트래픽을 차단한다",
        "Kubernetes 노드에 CPU나 메모리 리소스가 충분하지 않다",
        "노드에서 kube-proxy 구성 요소가 실행되고 있지 않다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A frequent reason for image pull failures is specifying an incorrect image name or tag, which leads to the registry not finding the requested image. While registry deprecation or network policies can also cause issues, the most common and easily overlooked cause is a typo or mismatch in the image reference. Insufficient node resources or kube-proxy issues typically do not directly cause image pull failures.",
      "ko": "이미지 pull이 실패하는 흔한 이유는 잘못된 이미지 이름이나 tag를 지정하는 것입니다. 이 경우 레지스트리에서 요청한 이미지를 찾지 못합니다. 레지스트리의 사용 중단이나 Network Policy도 문제를 일으킬 수 있지만, 가장 흔하고 쉽게 놓치는 원인은 오타나 이미지 이름·tag의 불일치입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "kcsa-mock-046",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a common reason why a Kubernetes Network Policy might not be enforced as expected in a cluster?",
      "ko": "Kubernetes 클러스터에서 Network Policy가 예상대로 적용되지 않는 흔한 이유는 무엇인가?"
    },
    "choices": {
      "en": [
        "Network Policies are enabled by default in all clusters",
        "The installed CNI plugin does not support Network Policies",
        "The Network Policy YAML contains syntax errors",
        "The Kubernetes API server is unavailable",
        "Network Policies only apply to traffic from outside the cluster"
      ],
      "ko": [
        "모든 클러스터에서 Network Policy가 기본적으로 활성화되어 있다",
        "설치된 CNI plugin이 Network Policy를 지원하지 않는다",
        "Network Policy YAML에 문법 오류가 있다",
        "Kubernetes API server를 사용할 수 없다",
        "Network Policy는 클러스터 외부에서 들어오는 트래픽에만 적용된다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Network Policies in Kubernetes rely on the underlying Container Network Interface (CNI) plugin to enforce rules. If the CNI plugin does not support Network Policies, then the policies will not be enforced regardless of their correctness. While syntax errors in the YAML or API server issues can cause problems, the primary reason Network Policies might not work is lack of CNI support. Also, Network Policies affect pod-to-pod traffic within the cluster, not just external traffic.",
      "ko": "Kubernetes의 Network Policy는 기본이 되는 Container Network Interface (CNI) plugin에 의존해 규칙을 적용합니다. CNI plugin이 Network Policy를 지원하지 않으면 정책 자체가 올바르더라도 적용되지 않습니다. YAML 문법 오류나 API server 문제도 장애를 일으킬 수 있지만, 정책이 생성되고 유효한데도 적용되지 않는 경우에는 CNI plugin의 지원 여부가 핵심 원인입니다. Network Policy는 외부에서 들어오는 트래픽에만 국한되지 않고 Pod 간 트래픽 등에도 적용될 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-047",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "If a user is granted the 'cluster-admin' ClusterRole through a RoleBinding, what level of access will they have?",
      "ko": "사용자에게 RoleBinding을 통해 'cluster-admin' ClusterRole을 부여하면 어떤 수준의 접근 권한을 갖게 되는가?"
    },
    "choices": {
      "en": [
        "Full administrative privileges limited to the namespace where the RoleBinding is applied",
        "Full cluster-wide administrative privileges",
        "Read-only access to all resources in the cluster",
        "No permissions; ClusterRoles require ClusterRoleBindings to take effect",
        "Access only to service accounts within the namespace"
      ],
      "ko": [
        "RoleBinding이 적용된 namespace로 제한된 전체 관리자 권한",
        "클러스터 전체에 대한 전체 관리자 권한",
        "클러스터의 모든 리소스에 대한 읽기 전용 접근",
        "권한이 없다. ClusterRole이 적용되려면 ClusterRoleBinding이 필요하다",
        "해당 namespace의 service account에만 접근"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "When a ClusterRole, such as 'cluster-admin', is assigned using a RoleBinding, it grants full administrative privileges but only within the namespace where the RoleBinding is applied. This is because RoleBindings are namespace-scoped, meaning they cannot grant cluster-wide permissions even if the associated role is a ClusterRole. To grant cluster-wide permissions, a ClusterRoleBinding must be used. Incorrect options: (1) Full cluster-wide privileges require a ClusterRoleBinding, not a RoleBinding. (2) Read-only access is not tied to this scenario. (3) The statement about 'no permissions' is incorrect because RoleBindings do apply within their namespace. (4) Access to service accounts is not exclusive in this context.",
      "ko": "'cluster-admin'과 같은 ClusterRole을 RoleBinding으로 할당하면 RoleBinding이 적용된 namespace 안에서만 전체 관리자 권한이 부여됩니다. RoleBinding은 namespace 범위 리소스이므로 클러스터 전체 권한을 부여할 수 없습니다. 클러스터 전체 권한이 필요하다면 ClusterRoleBinding을 사용해야 합니다. 따라서 ClusterRole은 ClusterRoleBinding으로만 사용할 수 있다는 설명은 틀렸고, 읽기 전용 접근이나 service account만에 대한 접근도 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-048",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Privilege Escalation",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which combination of pod configurations can allow a compromised Kubernetes pod to access and potentially modify the host system? (Select all that apply)",
      "ko": "침해된 Kubernetes Pod가 호스트 시스템에 접근하고 잠재적으로 변경할 수 있게 만드는 Pod 설정 조합은 무엇인가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "Running the pod in privileged mode",
        "Mounting the host filesystem into the pod",
        "Using host networking in the pod",
        "Dropping all Linux capabilities from the pod",
        "Running the pod as a non-root user"
      ],
      "ko": [
        "Pod를 privileged 모드로 실행한다",
        "호스트 파일 시스템을 Pod에 마운트한다",
        "Pod에서 host networking을 사용한다",
        "Pod에서 모든 Linux capability를 제거한다",
        "Pod를 non-root 사용자로 실행한다"
      ]
    },
    "answer": [
      0,
      1,
      2
    ],
    "explain": {
      "en": "Running a pod in privileged mode grants it broad permissions, including the ability to access host resources and perform actions that can compromise the host system. Mounting the host filesystem into the pod exposes sensitive files and allows the pod to read or modify host data, which is a significant security risk. Using host networking gives the pod direct access to the host's network stack, increasing the risk of network-based attacks or eavesdropping. In contrast, dropping all Linux capabilities and running as a non-root user are security best practices that reduce the attack surface and limit the pod's ability to affect the host, making these options incorrect.",
      "ko": "Pod를 privileged 모드로 실행하면 광범위한 권한이 부여되어 호스트 리소스에 접근하거나 호스트 시스템을 침해할 수 있는 작업을 수행할 수 있습니다. 호스트 파일 시스템을 Pod에 마운트하면 민감한 파일이 노출되고 Pod가 호스트 데이터를 읽거나 수정할 수 있어 심각한 보안 위험이 됩니다. host networking은 네트워크 격리를 약화시켜 위험을 높일 수 있지만, 그 자체로 호스트 파일 시스템이나 모든 호스트 리소스에 대한 접근을 허용하지는 않습니다. 모든 Linux capability를 제거하거나 non-root 사용자로 실행하면 권한이 줄어들어 호스트 침해 위험을 낮춥니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-049",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Persistence",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "When an attacker gains access to a Kubernetes pod, which of the following attack scenarios is typically not persistent after the pod restarts?",
      "ko": "공격자가 Kubernetes Pod에 접근했을 때 다음 공격 시나리오 중 Pod가 재시작된 후 일반적으로 지속되지 않는 것은 무엇인가?"
    },
    "choices": {
      "en": [
        "Modifying the container image stored in the registry",
        "Installing malware inside the pod's ephemeral filesystem",
        "Exfiltrating data from the pod during its runtime",
        "Altering data stored in a mounted PersistentVolume",
        "Changing configurations stored in a ConfigMap"
      ],
      "ko": [
        "레지스트리에 저장된 컨테이너 이미지를 수정한다",
        "Pod의 ephemeral 파일 시스템에 malware를 설치한다",
        "Pod 실행 중 데이터를 외부로 유출한다",
        "마운트된 PersistentVolume에 저장된 데이터를 변경한다",
        "ConfigMap에 저장된 설정을 변경한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The pod's filesystem is ephemeral, meaning any changes such as malware installation inside the container's filesystem are lost when the pod restarts. Modifications to the container image in the registry, persistent volumes, or ConfigMaps are persistent because they exist outside the pod lifecycle. Data exfiltration is a runtime activity and does not persist but can have lasting impact.",
      "ko": "Pod의 파일 시스템은 ephemeral이므로 컨테이너 파일 시스템 내부에 malware를 설치하는 등의 변경은 Pod가 재시작되면 사라집니다. 반면 레지스트리의 컨테이너 이미지, PersistentVolume의 데이터, ConfigMap의 변경은 Pod 외부에 존재하므로 지속됩니다. Pod가 실행되는 동안 데이터를 외부로 유출하는 행위는 이미 발생한 결과이며, Pod 재시작으로 되돌릴 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/volumes/"
  },
  {
    "id": "kcsa-mock-051",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you enable Pod Security Admission (PSA) in a Kubernetes cluster to enforce pod security standards?",
      "ko": "Pod Security Admission (PSA)을 활성화하여 Pod 보안 표준을 적용하려면 Kubernetes 클러스터에서 어떻게 해야 하는가?"
    },
    "choices": {
      "en": [
        "By applying security labels directly to pods",
        "By configuring the API server to enable the PodSecurity admission controller",
        "By setting environment variables on cluster nodes",
        "By deploying a third-party admission webhook",
        "By updating kubelet configurations on nodes"
      ],
      "ko": [
        "Pod에 보안 레이블을 직접 적용한다",
        "API 서버에서 PodSecurity admission controller를 활성화하도록 구성한다",
        "클러스터 노드에 환경 변수를 설정한다",
        "서드파티 admission webhook을 배포한다",
        "노드의 kubelet 구성을 업데이트한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Pod Security Admission (PSA) is enabled by configuring the Kubernetes API server to include the 'PodSecurity' admission controller in its '--enable-admission-plugins' flag. This admission controller enforces pod security standards based on namespace labels. Applying labels to pods or setting environment variables on nodes does not enable PSA. While third-party admission webhooks can enforce policies, PSA is a built-in admission controller. Kubelet configurations do not control PSA.",
      "ko": "Pod Security Admission (PSA)은 Kubernetes API 서버의 '--enable-admission-plugins' 플래그에 'PodSecurity' admission controller를 포함하도록 구성하여 활성화한다. 이 admission controller는 namespace 레이블을 기준으로 Pod 보안 표준을 적용한다. Pod에 레이블을 붙이거나 노드에 환경 변수를 설정하는 것만으로는 PSA가 활성화되지 않는다. 서드파티 admission webhook도 정책을 적용할 수 있지만, PSA 자체는 Kubernetes에 내장된 admission controller이다. kubelet 구성은 PSA를 제어하지 않는다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "kcsa-mock-052",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes Role-Based Access Control (RBAC), what is the purpose of a RoleBinding?",
      "ko": "Kubernetes Role-Based Access Control (RBAC)에서 RoleBinding의 목적은 무엇인가?"
    },
    "choices": {
      "en": [
        "Defines permissions within a namespace",
        "Associates a Role with users, groups, or service accounts within a namespace",
        "Creates a new role with cluster-wide permissions",
        "Manages network policies for a namespace",
        "Sets resource quotas for a project"
      ],
      "ko": [
        "namespace 안에서 권한을 정의한다",
        "namespace 안의 사용자, 그룹 또는 service account에 Role을 연결한다",
        "클러스터 전체 권한을 가진 새 Role을 생성한다",
        "namespace의 네트워크 정책을 관리한다",
        "프로젝트의 리소스 할당량을 설정한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A RoleBinding in Kubernetes RBAC binds a Role to one or more subjects (users, groups, or service accounts) within a specific namespace, granting them the permissions defined in that Role. Roles themselves define permissions, but RoleBindings associate those permissions with subjects. ClusterRoles and ClusterRoleBindings are used for cluster-wide permissions. Network policies and resource quotas are managed by different Kubernetes objects unrelated to RoleBindings.",
      "ko": "Kubernetes RBAC에서 RoleBinding은 특정 namespace 안의 하나 이상의 주체(사용자, 그룹 또는 service account)에 Role을 연결하여, 해당 Role에 정의된 권한을 부여한다. Role 자체는 권한을 정의하고, RoleBinding은 그 권한을 주체와 연결한다. 클러스터 전체에 적용되는 권한에는 ClusterRole과 ClusterRoleBinding을 사용한다. 네트워크 정책과 리소스 할당량은 RoleBinding과 관계없는 다른 Kubernetes 객체가 관리한다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-054",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Controls and Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of the Open Policy Agent (OPA) in Kubernetes environments?",
      "ko": "Kubernetes 환경에서 Open Policy Agent (OPA)의 주요 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "A tool for monitoring and analyzing cluster performance metrics",
        "A general-purpose policy engine that enables defining and enforcing custom policies",
        "A built-in Kubernetes admission controller for validating resources",
        "A network policy enforcement tool for controlling pod communication",
        "A secret management system for storing sensitive data"
      ],
      "ko": [
        "클러스터 성능 지표를 모니터링하고 분석하는 도구",
        "사용자 지정 정책을 정의하고 적용할 수 있는 범용 정책 엔진",
        "리소스를 검증하는 Kubernetes 내장 admission controller",
        "Pod 간 통신을 제어하는 네트워크 정책 적용 도구",
        "민감한 데이터를 저장하는 Secret 관리 시스템"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Open Policy Agent (OPA) is a flexible, general-purpose policy engine that allows administrators to define and enforce custom policies across Kubernetes and other systems. It integrates with Kubernetes admission controllers but is not itself built-in. OPA is not a monitoring tool, network policy enforcer, or secret management system, although it can be used to enforce policies related to these areas.",
      "ko": "Open Policy Agent (OPA)는 Kubernetes와 다른 시스템 전반에서 사용자 지정 정책을 정의하고 적용할 수 있게 하는 유연한 범용 정책 엔진이다. OPA는 Kubernetes admission controller와 연동되지만, Kubernetes에 자체적으로 내장된 admission controller는 아니다. OPA는 모니터링 도구, 네트워크 정책 적용 도구 또는 Secret 관리 시스템이 아니지만, 이러한 영역과 관련된 정책을 적용하는 데 사용할 수는 있다."
    },
    "ref": "https://www.openpolicyagent.org/docs/latest/"
  },
  {
    "id": "kcsa-mock-056",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the role of the Service Account Controller in Kubernetes?",
      "ko": "Kubernetes에서 Service Account Controller의 역할은 무엇인가?"
    },
    "choices": {
      "en": [
        "Manages the creation and lifecycle of service accounts and their associated authentication tokens",
        "Controls access permissions to external services from the cluster",
        "Assigns network policies to service accounts for traffic control",
        "Manages the lifecycle and scaling of Kubernetes services",
        "Handles automatic scaling of deployments based on load"
      ],
      "ko": [
        "service account의 생성과 수명주기 및 연결된 인증 토큰을 관리한다",
        "클러스터에서 외부 서비스에 접근할 수 있는 권한을 제어한다",
        "트래픽을 제어하기 위해 service account에 네트워크 정책을 할당한다",
        "Kubernetes Service의 수명주기와 확장을 관리한다",
        "부하에 따라 Deployment를 자동으로 확장한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The Service Account Controller, part of the kube-controller-manager, is responsible for creating service accounts and generating the associated authentication tokens used by pods to interact securely with the Kubernetes API. It does not control external service access, assign network policies, manage service lifecycles, or handle deployment scaling.",
      "ko": "kube-controller-manager의 일부인 Service Account Controller는 service account를 생성하고, Pod가 Kubernetes API와 안전하게 상호작용할 때 사용하는 연결된 인증 토큰을 생성하는 역할을 한다. 외부 서비스에 대한 접근을 제어하거나 네트워크 정책을 할당하거나 Service의 수명주기를 관리하거나 Deployment를 확장하는 역할은 하지 않는다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"
  },
  {
    "id": "kcsa-mock-057",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following controllers is NOT managed by the kube-controller-manager in Kubernetes?",
      "ko": "다음 중 Kubernetes에서 kube-controller-manager가 관리하지 않는 controller는 무엇인가?"
    },
    "choices": {
      "en": [
        "Node Controller",
        "Endpoint Controller",
        "Ingress Controller",
        "Deployment Controller",
        "Service Account Controller"
      ],
      "ko": [
        "Node Controller",
        "Endpoint Controller",
        "Ingress Controller",
        "Deployment Controller",
        "Service Account Controller"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The Ingress Controller is not part of the kube-controller-manager; it is typically deployed separately as a pod or set of pods to manage external HTTP/S traffic routing. The kube-controller-manager manages controllers such as Node, Endpoint, Deployment, and Service Account Controllers internally.",
      "ko": "Ingress Controller는 kube-controller-manager에 포함되지 않는다. 일반적으로 별도의 Pod 또는 Pod 집합으로 배포되어 외부 HTTP/S 트래픽의 라우팅을 관리한다. kube-controller-manager는 내부적으로 Node, Endpoint, Deployment, Service Account Controller와 같은 controller를 관리한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/controller/"
  },
  {
    "id": "kcsa-mock-058",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following are best practices for securing etcd in a Kubernetes cluster? (Select all that apply)",
      "ko": "Kubernetes 클러스터에서 etcd를 보호하기 위한 모범 사례는 다음 중 무엇인가? (해당하는 항목을 모두 선택하시오)"
    },
    "choices": {
      "en": [
        "Enable TLS encryption for all communication with etcd",
        "Limit access to etcd endpoints to trusted networks only",
        "Use authentication and authorization mechanisms for etcd access",
        "Expose etcd endpoints publicly to facilitate monitoring",
        "Store etcd backups in a secure and access-controlled location"
      ],
      "ko": [
        "etcd와 주고받는 모든 통신에 TLS 암호화를 활성화한다",
        "etcd endpoint에 대한 접근을 신뢰할 수 있는 네트워크로만 제한한다",
        "etcd 접근에 인증 및 인가 메커니즘을 사용한다",
        "모니터링을 쉽게 하도록 etcd endpoint를 공개한다",
        "etcd 백업을 안전하고 접근이 통제되는 위치에 저장한다"
      ]
    },
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explain": {
      "en": "Securing etcd is critical as it stores the cluster state and sensitive data. Best practices include enabling TLS encryption to protect data in transit, restricting access to trusted networks to prevent unauthorized access, implementing authentication and authorization to control who can access etcd, and securely storing backups to prevent data loss or compromise. Exposing etcd endpoints publicly is strongly discouraged as it poses a significant security risk.",
      "ko": "etcd는 클러스터 상태와 민감한 데이터를 저장하므로 이를 보호하는 것이 매우 중요하다. 모범 사례에는 전송 중인 데이터를 보호하기 위한 TLS 암호화 활성화, 무단 접근을 막기 위한 신뢰할 수 있는 네트워크로의 접근 제한, etcd에 접근할 수 있는 주체를 통제하기 위한 인증 및 인가 적용, 데이터 손실이나 유출을 방지하기 위한 백업의 안전한 저장이 포함된다. etcd endpoint를 공개하는 것은 심각한 보안 위험을 초래하므로 강하게 권장하지 않는다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-etcd"
  },
  {
    "id": "kcsa-mock-059",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component is responsible for persisting the cluster's state?",
      "ko": "Kubernetes 클러스터의 상태를 영속적으로 저장하는 Kubernetes 구성 요소는 무엇인가?"
    },
    "choices": {
      "en": [
        "kube-scheduler",
        "etcd",
        "kube-controller-manager",
        "kube-proxy",
        "kubelet"
      ],
      "ko": [
        "kube-scheduler",
        "etcd",
        "kube-controller-manager",
        "kube-proxy",
        "kubelet"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "etcd is a distributed key-value store that persists the Kubernetes cluster's state. It ensures that the cluster's configuration and data are consistent across all nodes.",
      "ko": "etcd는 Kubernetes 클러스터의 상태를 영속적으로 저장하는 분산 키-값 저장소이다. 모든 노드에서 클러스터의 구성과 데이터가 일관되게 유지되도록 한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/components/"
  },
  {
    "id": "kcsa-mock-060",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of Resource Quotas in a Kubernetes namespace?",
      "ko": "Kubernetes namespace에서 Resource Quota의 주요 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "Limit the number of namespaces in the cluster",
        "Restrict access to the Kubernetes API server",
        "Control the amount of resources consumed within a namespace",
        "Schedule pods to specific nodes",
        "Enforce network policies"
      ],
      "ko": [
        "클러스터의 namespace 수를 제한한다",
        "Kubernetes API 서버에 대한 접근을 제한한다",
        "namespace 안에서 소비할 수 있는 리소스의 양을 제어한다",
        "Pod를 특정 노드에 스케줄링한다",
        "네트워크 정책을 적용한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Resource Quotas in Kubernetes are used to limit the total amount of compute resources (such as CPU, memory, and object counts) that can be consumed within a namespace. This helps prevent a single namespace from exhausting cluster resources. Resource Quotas do not limit namespaces themselves, control API server access, schedule pods, or enforce network policies, which are handled by other Kubernetes components.",
      "ko": "Kubernetes의 Resource Quota는 namespace 안에서 소비할 수 있는 전체 컴퓨팅 리소스(예: CPU, 메모리 및 객체 수)를 제한하는 데 사용된다. 이를 통해 하나의 namespace가 클러스터 리소스를 모두 소진하는 것을 막을 수 있다. Resource Quota는 namespace 자체의 수를 제한하거나 API 서버 접근을 제어하거나 Pod를 스케줄링하거나 네트워크 정책을 적용하지 않으며, 이러한 기능은 다른 Kubernetes 구성 요소가 담당한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/policy/resource-quotas/"
  },
  {
    "id": "kcsa-mock-061",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the effect of disabling anonymous authentication on the kubelet?",
      "ko": "kubelet에서 익명 인증을 비활성화하면 어떤 효과가 있는가?"
    },
    "choices": {
      "en": [
        "Increased security by requiring authentication",
        "Nodes cannot join the cluster",
        "Pods fail to start",
        "kube-proxy stops working",
        "No effect; kubelet does not support anonymous access"
      ],
      "ko": [
        "인증을 요구하므로 보안이 강화된다",
        "노드가 클러스터에 참여할 수 없게 된다",
        "Pod가 시작되지 않는다",
        "kube-proxy가 작동을 멈춘다",
        "효과가 없다. kubelet은 익명 접근을 지원하지 않는다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Disabling anonymous authentication on the kubelet enhances security by ensuring that only authenticated requests are accepted. This prevents unauthorized access and reduces the risk of attacks.",
      "ko": "kubelet에서 익명 인증을 비활성화하면 인증된 요청만 허용되므로 보안이 강화된다. 이 설정은 무단 접근을 막고 공격 위험을 줄인다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/security-best-practices/"
  },
  {
    "id": "kcsa-mock-062",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes object is specifically designed to store sensitive information such as passwords, tokens, or keys?",
      "ko": "비밀번호, 토큰 또는 키와 같은 민감한 정보를 저장하도록 특별히 설계된 Kubernetes 객체는 무엇인가?"
    },
    "choices": {
      "en": [
        "ConfigMap",
        "Secret",
        "Volume",
        "Pod Annotation",
        "Deployment"
      ],
      "ko": [
        "ConfigMap",
        "Secret",
        "Volume",
        "Pod Annotation",
        "Deployment"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes Secrets are intended to store sensitive data like passwords, OAuth tokens, and SSH keys securely. Unlike ConfigMaps, which store non-sensitive configuration data, Secrets provide mechanisms to protect this sensitive information, including base64 encoding and integration with encryption at rest. Volumes, Pod Annotations, and Deployments are not designed for securely storing sensitive data.",
      "ko": "Kubernetes Secret은 비밀번호, OAuth 토큰, SSH 키와 같은 민감한 데이터를 안전하게 저장하기 위한 객체이다. 민감하지 않은 구성 데이터를 저장하는 ConfigMap과 달리, Secret은 base64 인코딩과 저장 시 암호화(encryption at rest) 연동을 비롯해 이러한 민감한 정보를 보호하는 메커니즘을 제공한다. Volume, Pod Annotation, Deployment는 민감한 데이터를 안전하게 저장하도록 설계된 객체가 아니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "kcsa-mock-063",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation Techniques",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What security risk is associated with mounting the Docker socket ('/var/run/docker.sock') into a container?",
      "ko": "Docker socket ('/var/run/docker.sock')을 컨테이너에 마운트할 때 어떤 보안 위험이 발생하는가?"
    },
    "choices": {
      "en": [
        "No risk; it's a common practice",
        "The container can control the Docker daemon and other containers",
        "It improves container performance",
        "It provides secure access to host resources",
        "It isolates the container from the host"
      ],
      "ko": [
        "위험이 없다. 흔히 사용하는 방식이다",
        "컨테이너가 Docker daemon과 다른 컨테이너를 제어할 수 있다",
        "컨테이너 성능이 향상된다",
        "호스트 리소스에 안전하게 접근할 수 있다",
        "컨테이너가 호스트로부터 격리된다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Mounting the Docker socket into a container allows the container to control the host's Docker daemon, potentially leading to unauthorized access or manipulation of other containers and host resources. This practice should be avoided unless absolutely necessary and properly secured.",
      "ko": "Docker socket을 컨테이너에 마운트하면 해당 컨테이너가 호스트의 Docker daemon을 제어할 수 있다. 그 결과 다른 컨테이너와 호스트 리소스에 무단으로 접근하거나 이를 조작할 가능성이 생긴다. 이 방식은 반드시 필요한 경우가 아니면 피해야 하며, 사용하더라도 적절히 보안을 적용해야 한다."
    },
    "ref": "https://docs.docker.com/engine/reference/commandline/dockerd/"
  },
  {
    "id": "kcsa-mock-064",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following are common CNI plugins that support Network Policies? (Select all that apply)",
      "ko": "다음 중 Network Policy를 지원하는 일반적인 CNI plugin은 무엇인가? (해당하는 항목을 모두 선택하시오)"
    },
    "choices": {
      "en": [
        "Flannel",
        "Calico",
        "Weave Net",
        "AWS VPC CNI",
        "Cilium"
      ],
      "ko": [
        "Flannel",
        "Calico",
        "Weave Net",
        "AWS VPC CNI",
        "Cilium"
      ]
    },
    "answer": [
      1,
      2,
      3,
      4
    ],
    "explain": {
      "en": "Calico, Weave Net, Cilium, and AWS VPC CNI are CNI plugins that support Network Policies. AWS VPC CNI supports network policies but requires them to be enabled and does not support them for Fargate or Windows containers. Flannel does not support Network Policies by default.",
      "ko": "Calico, Weave Net, Cilium, AWS VPC CNI는 Network Policy를 지원하는 CNI plugin이다. AWS VPC CNI는 Network Policy를 지원하지만 이를 활성화해야 하며, Fargate 또는 Windows 컨테이너에는 지원하지 않는다. Flannel은 기본적으로 Network Policy를 지원하지 않는다."
    },
    "ref": "https://aws.amazon.com/about-aws/whats-new/2023/08/amazon-vpc-cni-kubernetes-networkpolicy-enforcement/"
  },
  {
    "id": "kcsa-mock-065",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What does the '--anonymous-auth=false' flag do when set on the kube-apiserver?",
      "ko": "kube-apiserver에 '--anonymous-auth=false' 플래그를 설정하면 어떤 기능을 하는가?"
    },
    "choices": {
      "en": [
        "Disables anonymous requests to the API server",
        "Disables authentication entirely",
        "Allows all requests without authentication",
        "Enables anonymous authentication",
        "Forces all clients to use tokens"
      ],
      "ko": [
        "API 서버에 대한 익명 요청을 비활성화한다",
        "인증을 완전히 비활성화한다",
        "인증 없이 모든 요청을 허용한다",
        "익명 인증을 활성화한다",
        "모든 클라이언트가 토큰을 사용하도록 강제한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Setting '--anonymous-auth=false' on the kube-apiserver ensures that all requests to the API server must be authenticated. This enhances security by preventing unauthorized access.",
      "ko": "kube-apiserver에 '--anonymous-auth=false'를 설정하면 API 서버로 보내는 모든 요청에 인증이 필요해진다. 이를 통해 무단 접근을 막아 보안을 강화할 수 있다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-066",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you ensure that only signed images are run in your Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 서명된 이미지만 실행되도록 하려면 어떻게 해야 하는가?"
    },
    "choices": {
      "en": [
        "Use imagePullSecrets",
        "Configure admission controllers to verify image signatures",
        "Manually inspect images before deployment",
        "Disable image caching on nodes",
        "Use a private container registry"
      ],
      "ko": [
        "imagePullSecrets를 사용한다",
        "이미지 서명을 검증하도록 admission controller를 구성한다",
        "배포하기 전에 이미지를 수동으로 검사한다",
        "노드에서 이미지 캐싱을 비활성화한다",
        "private container registry를 사용한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "To ensure only signed images are run in a Kubernetes cluster, you can configure admission controllers like Gatekeeper or Kyverno to enforce policies that verify image signatures. This ensures that only trusted images are deployed.",
      "ko": "Kubernetes 클러스터에서 서명된 이미지만 실행되도록 하려면 Gatekeeper 또는 Kyverno와 같은 admission controller를 구성하여 이미지 서명을 검증하는 정책을 적용할 수 있다. 이렇게 하면 신뢰할 수 있는 이미지만 배포되도록 보장할 수 있다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "kcsa-mock-067",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes feature enables encryption of Secrets data at rest within the cluster?",
      "ko": "클러스터 내 미사용 Secrets 데이터를 암호화할 수 있는 Kubernetes 기능은 무엇인가요?"
    },
    "choices": {
      "en": [
        "Enabling TLS on the API server",
        "Using the etcd encryption provider for at-rest encryption",
        "Storing Secrets in ConfigMaps",
        "Encrypting data at the application layer",
        "Using third-party encryption tools outside Kubernetes"
      ],
      "ko": [
        "API 서버에서 TLS 활성화",
        "미사용 암호화를 위해 etcd 암호화 공급자 사용",
        "ConfigMap에 Secrets 저장",
        "애플리케이션 계층에서 데이터 암호화",
        "Kubernetes 외부에서 타사 암호화 도구 사용"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes supports encryption of Secrets at rest by enabling the etcd encryption provider, which encrypts Secret data stored in etcd, the cluster's backing store. This protects sensitive data from unauthorized access if etcd storage is compromised. TLS on the API server secures data in transit, not at rest. ConfigMaps do not provide encryption and are not intended for sensitive data. Application-layer encryption and third-party tools can add security but are not native Kubernetes features for Secrets encryption.",
      "ko": "Kubernetes는 클러스터의 백업 저장소인 etcd에 저장된 Secrets 데이터를 암호화하는 etcd 암호화 공급자를 활성화하여 저장 중인 Secrets의 암호화를 지원합니다. 이는 etcd 스토리지가 손상된 경우 무단 액세스로부터 중요한 데이터를 보호합니다. API 서버의 TLS는 저장 중인 데이터가 아닌 전송 중인 데이터를 보호합니다. ConfigMap은 암호화를 제공하지 않으며 민감한 데이터용으로 사용되지 않습니다. 애플리케이션 계층 암호화 및 타사 도구는 보안을 추가할 수 있지만 Secrets 암호화를 위한 기본 Kubernetes 기능은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"
  },
  {
    "id": "kcsa-mock-068",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the default behavior of Kubernetes network traffic when no Network Policies are applied to a namespace?",
      "ko": "네임스페이스에 네트워크 정책이 적용되지 않은 경우 Kubernetes 네트워크 트래픽의 기본 동작은 무엇입니까?"
    },
    "choices": {
      "en": [
        "All ingress and egress traffic is denied",
        "All ingress traffic is denied; egress traffic is allowed",
        "All ingress and egress traffic is allowed",
        "All egress traffic is denied; ingress traffic is allowed",
        "Traffic is allowed only within the namespace"
      ],
      "ko": [
        "모든 수신 및 송신 트래픽이 거부됩니다.",
        "모든 수신 트래픽이 거부됩니다. 송신 트래픽이 허용됩니다.",
        "모든 수신 및 송신 트래픽이 허용됩니다.",
        "모든 송신 트래픽이 거부됩니다. 인그레스 트래픽은 허용됩니다",
        "트래픽은 네임스페이스 내에서만 허용됩니다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "By default, Kubernetes allows all ingress and egress traffic to pods if no Network Policies are applied. Network Policies are opt-in and must be explicitly created to restrict traffic. Without any policies, pods can send and receive traffic unrestricted. The other options describe behaviors that occur only when specific Network Policies are configured.",
      "ko": "기본적으로 Kubernetes는 네트워크 정책이 적용되지 않은 경우 Pod에 대한 모든 수신 및 송신 트래픽을 허용합니다. 네트워크 정책은 선택 가능하며 트래픽을 제한하기 위해 명시적으로 생성되어야 합니다. 정책이 없으면 Pod는 제한 없이 트래픽을 보내고 받을 수 있습니다. 다른 옵션은 특정 네트워크 정책이 구성된 경우에만 발생하는 동작을 설명합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-069",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do Kubernetes Secrets provide improved security compared to ConfigMaps?",
      "ko": "Kubernetes Secret은 ConfigMap과 비교하여 어떻게 향상된 보안을 제공하나요?"
    },
    "choices": {
      "en": [
        "Secrets are encrypted by default in etcd",
        "Secrets are stored in a separate database from ConfigMaps",
        "Secrets are base64-encoded and can be encrypted at rest, whereas ConfigMaps are stored in plain text",
        "Secrets provide built-in versioning",
        "Secrets can only be accessed by cluster administrators"
      ],
      "ko": [
        "Secrets은 etcd에서 기본적으로 암호화됩니다.",
        "Secrets은 ConfigMap과 별도의 데이터베이스에 저장됩니다.",
        "Secrets은 base64로 인코딩되어 저장 시 암호화될 수 있는 반면, ConfigMap은 일반 텍스트로 저장됩니다.",
        "Secrets은 기본 제공 버전 관리 기능을 제공합니다.",
        "Secrets은 클러스터 관리자만 액세스할 수 있습니다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Kubernetes Secrets are base64-encoded and can be configured to be encrypted at rest in etcd, providing better protection for sensitive data than ConfigMaps, which are stored as plain text in etcd. Secrets are not encrypted by default unless encryption at rest is enabled. They do not provide built-in versioning, and access controls depend on RBAC policies rather than restricting access solely to cluster admins.",
      "ko": "Kubernetes Secret은 base64로 인코딩되며 etcd에서 저장 시 암호화되도록 구성할 수 있으므로 etcd에 일반 텍스트로 저장되는 ConfigMap보다 중요한 데이터를 더 효과적으로 보호할 수 있습니다. 유휴 암호화가 활성화되어 있지 않으면 Secrets은 기본적으로 암호화되지 않습니다. 기본 제공 버전 관리 기능을 제공하지 않으며 액세스 제어는 클러스터 관리자에게만 액세스를 제한하는 대신 RBAC 정책에 따라 달라집니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "kcsa-mock-070",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component is responsible for enforcing Pod Security Standards through admission control?",
      "ko": "승인 제어를 통해 Pod 보안 표준을 시행하는 역할을 담당하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-scheduler",
        "kube-apiserver with the PodSecurity admission plugin",
        "kube-controller-manager",
        "kubelet",
        "etcd"
      ],
      "ko": [
        "kube-scheduler",
        "kube-apiserver와 PodSecurity admission 플러그인",
        "kube-controller-manager",
        "kubelet",
        "etcd"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The kube-apiserver enforces Pod Security Standards by using the PodSecurity admission plugin, which validates and enforces security policies on pods during creation or update. The kube-scheduler schedules pods to nodes, kube-controller-manager manages controllers, kubelet runs on nodes to manage pods, and etcd is the cluster data store; none of these enforce Pod Security Standards directly.",
      "ko": "kube-apiserver는 생성 또는 업데이트 중에 Pod에 대한 보안 정책을 검증하고 시행하는 PodSecurity 허용 플러그인을 사용하여 Pod 보안 표준을 시행합니다. kube-scheduler는 Pod를 노드에 예약하고, kube-controller-manager는 컨트롤러를 관리하고, kubelet은 노드에서 실행되어 Pod를 관리하며, etcd는 클러스터 데이터 저장소입니다. 이들 중 어느 것도 Pod 보안 표준을 직접적으로 시행하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "kcsa-mock-071",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the purpose of the '--allow-privileged' flag in the Kubernetes API server configuration?",
      "ko": "Kubernetes API 서버 구성에서 '--allow-privileged' 플래그의 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Allows pods to run privileged containers with elevated permissions",
        "Enables unauthenticated access to the API server",
        "Grants cluster-admin rights to all users",
        "Disables security contexts on pods",
        "Controls enforcement of network policies"
      ],
      "ko": [
        "포드가 높은 권한으로 권한 있는 컨테이너를 실행할 수 있도록 허용합니다.",
        "API 서버에 대한 인증되지 않은 액세스를 활성화합니다.",
        "모든 사용자에게 클러스터 관리자 권한을 부여합니다.",
        "포드의 보안 컨텍스트를 비활성화합니다.",
        "네트워크 정책 시행을 제어합니다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The '--allow-privileged' flag on the Kubernetes API server enables or disables the ability to create privileged containers, which have elevated permissions on the host and can perform sensitive operations. This flag does not affect authentication, user permissions, security contexts broadly, or network policy enforcement. Running privileged containers increases security risks and should be carefully controlled.",
      "ko": "Kubernetes API 서버의 '--allow-privileged' 플래그는 호스트에 대한 높은 권한을 갖고 중요한 작업을 수행할 수 있는 권한 있는 컨테이너를 생성하는 기능을 활성화하거나 비활성화합니다. 이 플래그는 인증, 사용자 권한, 광범위한 보안 컨텍스트 또는 네트워크 정책 시행에 영향을 주지 않습니다. 권한 있는 컨테이너를 실행하면 보안 위험이 증가하므로 신중하게 제어해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-072",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Privilege Escalation",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following practices help prevent container breakout vulnerabilities? (Select all that apply)",
      "ko": "다음 중 컨테이너 침입 취약성을 방지하는 데 도움이 되는 방법은 무엇입니까? (해당되는 항목을 모두 선택하세요.)"
    },
    "choices": {
      "en": [
        "Running containers with root privileges",
        "Using minimal base images to reduce attack surface",
        "Applying the principle of least privilege to container permissions",
        "Disabling security modules like SELinux or AppArmor",
        "Regularly updating container runtimes and dependencies"
      ],
      "ko": [
        "루트 권한으로 컨테이너 실행",
        "공격 표면을 줄이기 위해 최소한의 기본 이미지 사용",
        "컨테이너 권한에 최소 권한 원칙 적용",
        "SELinux 또는 AppArmor와 같은 보안 모듈 비활성화",
        "컨테이너 런타임 및 종속성을 정기적으로 업데이트"
      ]
    },
    "answer": [
      1,
      2,
      4
    ],
    "explain": {
      "en": "Preventing container breakouts involves minimizing the attack surface and restricting privileges. Using minimal base images reduces unnecessary software that could be exploited. Applying the principle of least privilege limits container capabilities to only what is necessary, reducing risk. Regularly updating container runtimes ensures known vulnerabilities are patched. Conversely, running containers as root increases risk, and disabling security modules like SELinux or AppArmor removes important security layers, increasing breakout potential.",
      "ko": "컨테이너 침입을 방지하려면 공격 표면을 최소화하고 권한을 제한해야 합니다. 최소한의 기본 이미지를 사용하면 악용될 수 있는 불필요한 소프트웨어가 줄어듭니다. 최소 권한 원칙을 적용하면 컨테이너 기능을 필요한 기능으로만 제한하여 위험을 줄일 수 있습니다. 컨테이너 런타임을 정기적으로 업데이트하면 알려진 취약점이 패치됩니다. 반대로 컨테이너를 루트로 실행하면 위험이 증가하고 SELinux 또는 AppArmor와 같은 보안 모듈을 비활성화하면 중요한 보안 계층이 제거되어 침입 가능성이 높아집니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-073",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary benefit of using multistage Docker builds?",
      "ko": "다단계 Docker 빌드를 사용하면 얻을 수 있는 주요 이점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Faster build times by reusing intermediate stages",
        "Smaller and more secure final images by excluding build-time dependencies",
        "Compatibility with older Docker versions for broader deployment",
        "Simplified deployment scripts for easier automation",
        "Enhanced network performance during container communication"
      ],
      "ko": [
        "중간 단계를 재사용하여 빌드 시간 단축",
        "빌드 시간 종속성을 제외하여 더 작고 안전한 최종 이미지",
        "더 광범위한 배포를 위한 이전 Docker 버전과의 호환성",
        "더 쉬운 자동화를 위한 단순화된 배포 스크립트",
        "컨테이너 통신 중 네트워크 성능 향상"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The primary advantage of multistage Docker builds is the ability to create smaller and more secure final images. By separating the build and runtime stages, unnecessary build-time dependencies (e.g., compilers, libraries) are excluded from the final image. This reduces the image size, minimizes the attack surface, and enhances security. While multistage builds can indirectly improve build times by optimizing layers, their main focus is on producing leaner and safer images. They do not specifically address network performance or deployment script simplification.",
      "ko": "다단계 Docker 빌드의 주요 장점은 더 작고 더 안전한 최종 이미지를 생성할 수 있다는 것입니다. 빌드 단계와 런타임 단계를 분리함으로써 불필요한 빌드 시간 종속성(예: 컴파일러, 라이브러리)이 최종 이미지에서 제외됩니다. 이렇게 하면 이미지 크기가 줄어들고 공격 표면이 최소화되며 보안이 강화됩니다. 다단계 빌드는 레이어를 최적화하여 빌드 시간을 간접적으로 향상시킬 수 있지만 주요 초점은 더 간결하고 안전한 이미지를 생성하는 것입니다. 네트워크 성능이나 배포 스크립트 단순화를 구체적으로 다루지는 않습니다."
    },
    "ref": "https://docs.docker.com/get-started/docker-concepts/building-images/multi-stage-builds/"
  },
  {
    "id": "kcsa-mock-074",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a significant security risk associated with not restricting egress traffic in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 송신 트래픽을 제한하지 않는 것과 관련된 심각한 보안 위험은 무엇입니까?"
    },
    "choices": {
      "en": [
        "It complicates the debugging process for network-related issues.",
        "It leads to reduced latency in network communications within the cluster.",
        "It creates a potential pathway for data exfiltration from compromised pods to external, unauthorized destinations.",
        "It enhances and simplifies pod-to-pod communication within the cluster.",
        "It simplifies network configuration, reducing the complexity of network policies."
      ],
      "ko": [
        "네트워크 관련 문제에 대한 디버깅 프로세스가 복잡해집니다.",
        "이는 클러스터 내 네트워크 통신의 대기 시간을 줄여줍니다.",
        "이는 손상된 포드에서 승인되지 않은 외부 대상으로 데이터가 유출될 수 있는 잠재적인 경로를 생성합니다.",
        "클러스터 내에서 포드 간 통신을 향상하고 단순화합니다.",
        "네트워크 구성을 단순화하여 네트워크 정책의 복잡성을 줄입니다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Failing to restrict egress traffic in Kubernetes can expose the cluster to significant security risks, most notably data exfiltration. Without proper egress controls, a compromised pod can freely communicate with external servers, potentially leaking sensitive data to attackers. While unrestricted egress might simplify initial network configurations, the security implications far outweigh any convenience gained. Restricting egress traffic is a critical security measure to limit the attack surface and prevent unauthorized communication from within the cluster.",
      "ko": "Kubernetes에서 송신 트래픽을 제한하지 못하면 클러스터가 심각한 보안 위험, 특히 데이터 유출에 노출될 수 있습니다. 적절한 송신 제어가 없으면 손상된 Pod가 외부 서버와 자유롭게 통신할 수 있어 민감한 데이터가 공격자에게 유출될 가능성이 있습니다. 무제한 송신은 초기 네트워크 구성을 단순화할 수 있지만 보안에 미치는 영향은 얻는 편의성보다 훨씬 큽니다. 송신 트래픽을 제한하는 것은 공격 표면을 제한하고 클러스터 내에서 무단 통신을 방지하는 중요한 보안 조치입니다."
    },
    "ref": "https://www.tigera.io/blog/prevent-data-exfiltration-in-kubernetes-the-critical-role-of-egress-access-controls/"
  },
  {
    "id": "kcsa-mock-075",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you verify that Pod Security Admission (PSA) is actively enforcing security policies within a specific Kubernetes namespace?",
      "ko": "PSA(Pod Security Admission)가 특정 Kubernetes 네임스페이스 내에서 보안 정책을 적극적으로 시행하고 있는지 어떻게 확인할 수 있습니까?"
    },
    "choices": {
      "en": [
        "Check the API server logs for PSA-related entries",
        "Attempt to create a pod that violates the PSA policy and observe the outcome",
        "Inspect the kubelet configuration on the nodes",
        "Review the scheduler's event logs for pod scheduling issues",
        "Use the command 'kubectl get psa' to check enforcement status"
      ],
      "ko": [
        "PSA 관련 항목에 대한 API 서버 로그를 확인하세요.",
        "PSA 정책을 위반하는 Pod 생성을 시도하고 결과 관찰",
        "노드에서 kubelet 구성 검사",
        "Pod 예약 문제에 대한 스케줄러의 이벤트 로그를 검토합니다.",
        "적용 상태를 확인하려면 'kubectl get psa' 명령을 사용하십시오."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The most direct way to verify that Pod Security Admission is enforcing policies is to try creating a pod that violates the defined PSA policy in the target namespace. If the pod creation is denied, it confirms that PSA is active and enforcing the policies. Checking API server logs or scheduler events may provide indirect clues but are less reliable for verification. The kubelet configuration does not control PSA enforcement, and 'kubectl get psa' is not a valid command for checking PSA status.",
      "ko": "Pod 보안 승인이 정책을 시행하고 있는지 확인하는 가장 직접적인 방법은 대상 네임스페이스에서 정의된 PSA 정책을 위반하는 Pod를 생성해 보는 것입니다. Pod 생성이 거부되면 PSA가 활성화되어 정책을 시행하고 있음을 확인합니다. API 서버 로그나 스케줄러 이벤트를 확인하면 간접적인 단서를 얻을 수 있지만 확인 신뢰성이 떨어집니다. kubelet 구성은 PSA 시행을 제어하지 않으며 'kubectl get psa'는 PSA 상태를 확인하는 데 유효한 명령이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "kcsa-mock-076",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the effect of applying a Kubernetes NetworkPolicy that does not select any pods in the cluster?",
      "ko": "클러스터에서 Pod를 선택하지 않는 Kubernetes NetworkPolicy를 적용하면 어떤 효과가 있나요?"
    },
    "choices": {
      "en": [
        "It has no effect on network traffic within the cluster",
        "It denies all network traffic to and from all pods",
        "It allows all network traffic by default",
        "It causes an error in the network plugin",
        "It only affects newly created pods after the policy is applied"
      ],
      "ko": [
        "클러스터 내의 네트워크 트래픽에는 영향을 미치지 않습니다.",
        "모든 Pod에서 들어오고 나가는 모든 네트워크 트래픽을 거부합니다.",
        "기본적으로 모든 네트워크 트래픽을 허용합니다.",
        "네트워크 플러그인에 오류가 발생합니다.",
        "정책이 적용된 후 새로 생성된 Pod에만 영향을 미칩니다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A NetworkPolicy that does not select any pods effectively applies to no pods and therefore has no impact on network traffic. It neither denies nor allows traffic beyond the cluster's default behavior. It does not cause errors in the network plugin, nor does it selectively affect only new pods. NetworkPolicies only affect pods that they select.",
      "ko": "Pod를 선택하지 않는 NetworkPolicy는 Pod 없음에 효과적으로 적용되므로 네트워크 트래픽에 영향을 주지 않습니다. 클러스터의 기본 동작을 넘어서는 트래픽을 거부하거나 허용하지 않습니다. 네트워크 플러그인에 오류를 일으키지 않으며, 새로운 Pod에만 선택적으로 영향을 주지도 않습니다. NetworkPolicy는 선택한 Pod에만 영향을 미칩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-077",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Is there a Kubernetes object specifically designed to limit the number of concurrent requests to the API server?",
      "ko": "API 서버에 대한 동시 요청 수를 제한하도록 특별히 설계된 Kubernetes 개체가 있습니까?"
    },
    "choices": {
      "en": [
        "ResourceQuota",
        "LimitRange",
        "PodDisruptionBudget",
        "PriorityClass",
        "There is no such object"
      ],
      "ko": [
        "ResourceQuota",
        "LimitRange",
        "PodDisruptionBudget",
        "PriorityClass",
        "그런 개체가 없습니다"
      ]
    },
    "answer": 4,
    "explain": {
      "en": "Kubernetes does not have an object specifically for limiting concurrent API server requests. Instead, this is typically controlled through API server configuration flags.",
      "ko": "Kubernetes에는 동시 API 서버 요청을 제한하기 위한 객체가 없습니다. 대신 이는 일반적으로 API 서버 구성 플래그를 통해 제어됩니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-078",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the recommended method to rotate TLS certificates in a Kubernetes cluster managed by kubeadm?",
      "ko": "kubeadm이 관리하는 Kubernetes 클러스터에서 TLS 인증서를 교체하는 데 권장되는 방법은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Manually delete and recreate certificates",
        "Use the 'kubeadm certs renew' command to renew certificates",
        "TLS certificates cannot be rotated once issued",
        "Restart the kubelet service to refresh certificates",
        "Use a third-party certificate manager exclusively"
      ],
      "ko": [
        "수동으로 인증서 삭제 및 다시 만들기",
        "인증서를 갱신하려면 'kubeadm certs renew' 명령을 사용하십시오.",
        "TLS 인증서는 발급되면 순환할 수 없습니다.",
        "kubelet 서비스를 다시 시작하여 인증서 새로 고침",
        "타사 인증서 관리자만 사용"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes clusters initialized with kubeadm provide the 'kubeadm certs renew' command to safely renew TLS certificates without manual deletion. Manually deleting certificates or restarting kubelet alone is not sufficient and can cause downtime. While third-party certificate managers can be used, kubeadm's built-in commands are the recommended approach for certificate rotation.",
      "ko": "kubeadm으로 초기화된 Kubernetes 클러스터는 수동 삭제 없이 TLS 인증서를 안전하게 갱신할 수 있는 'kubeadm certs renew' 명령을 제공합니다. 수동으로 인증서를 삭제하거나 kubelet을 다시 시작하는 것만으로는 충분하지 않으며 가동 중지 시간이 발생할 수 있습니다. 타사 인증서 관리자를 사용할 수 있지만 kubeadm의 내장 명령은 인증서 교체에 권장되는 접근 방식입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/"
  },
  {
    "id": "kcsa-mock-080",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "KubeProxy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary role of the kube-proxy component in Kubernetes?",
      "ko": "Kubernetes에서 kube-proxy 구성 요소의 기본 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Managing network policies",
        "Providing service discovery and routing",
        "Scheduling pods to nodes",
        "Storing cluster state",
        "Monitoring node health"
      ],
      "ko": [
        "네트워크 정책 관리",
        "서비스 검색 및 라우팅 제공",
        "포드를 노드로 예약",
        "클러스터 상태 저장",
        "노드 상태 모니터링"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "kube-proxy is responsible for maintaining network rules on each node to ensure service discovery and routing. It does not manage network policies or schedule pods.",
      "ko": "kube-proxy는 서비스 검색 및 라우팅을 보장하기 위해 각 노드의 네트워크 규칙을 유지 관리하는 역할을 담당합니다. 네트워크 정책이나 Pod 예약을 관리하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "kcsa-mock-081",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What command is used to check the version of the Kubernetes API server?",
      "ko": "Kubernetes API 서버 버전을 확인하는 데 사용되는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "'kubectl version'",
        "'kubectl get apiserver'",
        "'kube-apiserver --version'",
        "'kubectl cluster-info'",
        "'kubectl describe componentstatus'"
      ],
      "ko": [
        "'kubectl version'",
        "'kubectl get apiserver'",
        "'kube-apiserver --version'",
        "'kubectl cluster-info'",
        "'kubectl describe componentstatus'"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The `kubectl version` command is used to display the client and server versions of Kubernetes. This is useful for ensuring compatibility and identifying potential version mismatches.",
      "ko": "`kubectl version` 명령은 Kubernetes의 클라이언트 및 서버 버전을 표시하는 데 사용됩니다. 이는 호환성을 보장하고 잠재적인 버전 불일치를 식별하는 데 유용합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/overview/"
  },
  {
    "id": "kcsa-mock-082",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the default service type in Kubernetes if not explicitly specified?",
      "ko": "명시적으로 지정되지 않은 경우 Kubernetes의 기본 서비스 유형은 무엇입니까?"
    },
    "choices": {
      "en": [
        "ClusterIP",
        "NodePort",
        "LoadBalancer",
        "ExternalName",
        "Ingress"
      ],
      "ko": [
        "ClusterIP",
        "NodePort",
        "LoadBalancer",
        "ExternalName",
        "Ingress"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "If not specified, the default service type in Kubernetes is ClusterIP. This means the service is only accessible within the cluster. Other types like NodePort or LoadBalancer are used for external access.",
      "ko": "지정하지 않으면 Kubernetes의 기본 서비스 유형은 ClusterIP입니다. 이는 클러스터 내에서만 서비스에 액세스할 수 있음을 의미합니다. NodePort 또는 LoadBalancer와 같은 다른 유형은 외부 액세스에 사용됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"
  },
  {
    "id": "kcsa-mock-083",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you restrict a Kubernetes user to create resources only within a specific namespace?",
      "ko": "Kubernetes 사용자가 특정 네임스페이스 내에서만 리소스를 생성하도록 제한하려면 어떻게 해야 합니까?"
    },
    "choices": {
      "en": [
        "Assign the user the cluster-admin role",
        "Create a Role and RoleBinding scoped to that namespace for the user",
        "Modify the kube-apiserver configuration to limit user access",
        "Create a NetworkPolicy that restricts user actions",
        "Set a resource quota on the namespace to limit resource creation"
      ],
      "ko": [
        "사용자에게 클러스터 관리자 역할 할당",
        "사용자에 대해 해당 네임스페이스로 범위가 지정된 역할 및 RoleBinding을 만듭니다.",
        "사용자 액세스를 제한하도록 kube-apiserver 구성 수정",
        "사용자 작업을 제한하는 NetworkPolicy 만들기",
        "리소스 생성을 제한하려면 네임스페이스에 리소스 할당량을 설정하세요."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "To restrict a user to create resources only within a specific namespace, you create a Role that defines the allowed permissions within that namespace and bind it to the user via a RoleBinding. Assigning cluster-admin grants full cluster-wide permissions, which is too broad. Modifying kube-apiserver configuration is not practical for per-user namespace restrictions. NetworkPolicies control pod network traffic, not user permissions. Resource quotas limit resource consumption but do not restrict user actions.",
      "ko": "사용자가 특정 네임스페이스 내에서만 리소스를 생성하도록 제한하려면 해당 네임스페이스 내에서 허용되는 권한을 정의하는 역할을 생성하고 이를 RoleBinding을 통해 사용자에게 바인딩합니다. 클러스터 관리자를 할당하면 전체 클러스터 전체 권한이 부여되는데 이는 너무 광범위합니다. 사용자별 네임스페이스 제한으로 인해 kube-apiserver 구성을 수정하는 것은 실용적이지 않습니다. NetworkPolicy는 사용자 권한이 아닌 Pod 네트워크 트래픽을 제어합니다. 리소스 할당량은 리소스 소비를 제한하지만 사용자 작업을 제한하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-084",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of a PodDisruptionBudget in Kubernetes?",
      "ko": "Kubernetes에서 PodDisruptionBudget의 주요 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To prevent pods from being evicted during maintenance",
        "To limit the number of pods in a namespace",
        "To allocate CPU and memory resources",
        "To define pod scheduling constraints",
        "To enforce network policies"
      ],
      "ko": [
        "유지 관리 중에 Pod가 제거되는 것을 방지하려면",
        "네임스페이스의 Pod 수를 제한하려면",
        "CPU 및 메모리 리소스를 할당하려면",
        "Pod 예약 제약 조건을 정의하려면",
        "네트워크 정책을 시행하려면"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A PodDisruptionBudget ensures that a specified number of replicas of a pod are available at any time, preventing disruptions during maintenance or other events that might cause pod eviction.",
      "ko": "PodDisruptionBudget은 지정된 수의 Pod 복제본을 언제든지 사용할 수 있도록 보장하여 유지 관리 또는 Pod 제거를 유발할 수 있는 기타 이벤트 중에 중단을 방지합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"
  },
  {
    "id": "kcsa-mock-085",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which tool serves as a data source for visualizing Kubernetes cluster metrics in Grafana?",
      "ko": "Grafana에서 Kubernetes 클러스터 지표를 시각화하기 위한 데이터 소스 역할을 하는 도구는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Prometheus",
        "Elasticsearch",
        "Kibana",
        "Fluentd",
        "Logstash"
      ],
      "ko": [
        "Prometheus",
        "Elasticsearch",
        "Kibana",
        "Fluentd",
        "Logstash"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Prometheus is a robust monitoring and alerting toolkit that collects metrics from Kubernetes clusters. These metrics can be integrated into Grafana as a data source to create dashboards for visualization. While Grafana handles the visualization, Prometheus provides the necessary data. Other options like Elasticsearch, Kibana, Fluentd, and Logstash are primarily used for logging and log analysis, not for collecting or serving metrics directly.",
      "ko": "Prometheus는 Kubernetes 클러스터에서 지표를 수집하는 강력한 모니터링 및 알림 도구 키트입니다. 이러한 측정항목을 Grafana에 데이터 소스로 통합하여 시각화용 대시보드를 만들 수 있습니다. Grafana가 시각화를 처리하는 동안 Prometheus는 필요한 데이터를 제공합니다. Elasticsearch, Kibana, Fluentd 및 Logstash와 같은 다른 옵션은 지표를 직접 수집하거나 제공하는 것이 아니라 주로 로깅 및 로그 분석에 사용됩니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitoring/"
  },
  {
    "id": "kcsa-mock-086",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the main function of the kubelet in a Kubernetes node?",
      "ko": "Kubernetes 노드에서 kubelet의 주요 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Managing pod networking",
        "Running containers on each node",
        "Storing cluster configuration",
        "Scheduling pods to nodes",
        "Managing the control plane"
      ],
      "ko": [
        "포드 네트워킹 관리",
        "각 노드에서 컨테이너 실행",
        "클러스터 구성 저장",
        "포드를 노드로 예약",
        "제어 영역 관리"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The kubelet is responsible for running and managing containers on each node in a Kubernetes cluster. It ensures that the pods are running as expected and reports back to the control plane.",
      "ko": "kubelet은 Kubernetes 클러스터의 각 노드에서 컨테이너를 실행하고 관리하는 역할을 담당합니다. Pod가 예상대로 실행되고 제어 플레인에 다시 보고되는지 확인합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"
  },
  {
    "id": "kcsa-mock-087",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What measures can you take to prevent a container from running as the root user in Kubernetes?",
      "ko": "컨테이너가 Kubernetes에서 루트 사용자로 실행되는 것을 방지하려면 어떤 조치를 취할 수 있나요?"
    },
    "choices": {
      "en": [
        "Set 'runAsUser: 0' in the security context",
        "Use a Pod Security Admission to enforce non-root user requirements",
        "It is not possible to prevent this",
        "Modify the container image to exclude root user privileges",
        "Set 'allowPrivilegeEscalation: true' in the security context"
      ],
      "ko": [
        "보안 컨텍스트에서 'runAsUser: 0'을 설정하세요.",
        "포드 보안 승인을 사용하여 루트가 아닌 사용자 요구 사항 적용",
        "이를 방지하는 것은 불가능합니다",
        "루트 사용자 권한을 제외하도록 컨테이너 이미지를 수정합니다.",
        "보안 컨텍스트에서 'allowPrivilegeEscalation: true'를 설정하세요."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "To enhance security, you can use Pod Security Admission to enforce that containers run as non-root users. This prevents potential privilege escalation attacks. Option 1 ('runAsUser: 0') explicitly allows running as root, which is insecure. Option 3 is incorrect because Kubernetes provides mechanisms to enforce non-root users. Option 4 may reduce root privileges but does not enforce non-root execution. Option 5 ('allowPrivilegeEscalation: true') enables privilege escalation, which contradicts the goal of preventing root access.",
      "ko": "보안을 강화하려면 Pod 보안 승인을 사용하여 컨테이너가 루트가 아닌 사용자로 실행되도록 강제할 수 있습니다. 이는 잠재적인 권한 상승 공격을 방지합니다. 옵션 1('runAsUser: 0')은 루트로 실행을 명시적으로 허용하지만 이는 안전하지 않습니다. Kubernetes는 루트가 아닌 사용자를 강제하는 메커니즘을 제공하므로 옵션 3은 올바르지 않습니다. 옵션 4는 루트 권한을 줄일 수 있지만 루트가 아닌 실행을 강제하지는 않습니다. 옵션 5('allowPrivilegeEscalation: true')는 루트 액세스 방지 목표와 모순되는 권한 에스컬레이션을 활성화합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-088",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of Role-Based Access Control (RBAC) in Kubernetes?",
      "ko": "Kubernetes에서 RBAC(역할 기반 액세스 제어)의 주요 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To manage network policies for pods",
        "To control user and process access to Kubernetes resources",
        "To schedule pods efficiently across nodes",
        "To monitor cluster performance metrics",
        "To provide logging and audit capabilities"
      ],
      "ko": [
        "포드에 대한 네트워크 정책을 관리하려면",
        "Kubernetes 리소스에 대한 사용자 및 프로세스 액세스를 제어하려면",
        "노드 전체에서 포드를 효율적으로 예약하려면",
        "클러스터 성능 지표를 모니터링하려면",
        "로깅 및 감사 기능을 제공하려면"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "RBAC in Kubernetes is designed to control and manage access permissions for users and processes to Kubernetes resources, ensuring that only authorized entities can perform specific actions. It does not manage network policies, scheduling, monitoring, or logging directly, although these areas may have their own mechanisms.",
      "ko": "Kubernetes의 RBAC는 Kubernetes 리소스에 대한 사용자 및 프로세스의 액세스 권한을 제어하고 관리하여 승인된 엔터티만 특정 작업을 수행할 수 있도록 설계되었습니다. 네트워크 정책, 예약, 모니터링 또는 로깅을 직접 관리하지는 않지만 이러한 영역에는 자체 메커니즘이 있을 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-089",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes object is used to define a set of network access rules that control traffic to and from pods?",
      "ko": "Pod에서 들어오고 나가는 트래픽을 제어하는 ​​네트워크 액세스 규칙 집합을 정의하는 데 사용되는 Kubernetes 개체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Service",
        "Deployment",
        "Ingress",
        "NetworkPolicy",
        "ConfigMap"
      ],
      "ko": [
        "Service",
        "Deployment",
        "Ingress",
        "NetworkPolicy",
        "ConfigMap"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "NetworkPolicy objects in Kubernetes are used to specify rules that control the ingress and egress traffic to and from pods. Services manage access at a different layer, Ingress manages external access, Deployments manage pod lifecycle, and ConfigMaps store configuration data, none of which control pod-level network access rules.",
      "ko": "Kubernetes의 NetworkPolicy 객체는 Pod와의 수신 및 송신 트래픽을 제어하는 ​​규칙을 지정하는 데 사용됩니다. 서비스는 다른 계층에서 액세스를 관리하고, Ingress는 외부 액세스를 관리하고, 배포는 Pod 수명 주기를 관리하고, ConfigMap은 구성 데이터를 저장하며, 이들 중 어느 것도 Pod 수준 네트워크 액세스 규칙을 제어하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-090",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the outcome of setting 'imagePullPolicy: Never' in a Kubernetes pod specification?",
      "ko": "Kubernetes Pod 사양에서 'imagePullPolicy: Never'를 설정하면 어떤 결과가 나오나요?"
    },
    "choices": {
      "en": [
        "The image will always be pulled from the registry",
        "The pod will fail to start if the image is not present locally",
        "The image will be pulled only if not present",
        "The pod will ignore image updates in the registry",
        "The kubelet will crash"
      ],
      "ko": [
        "이미지는 항상 레지스트리에서 가져옵니다.",
        "이미지가 로컬에 없으면 Pod가 시작되지 않습니다.",
        "이미지가 없는 경우에만 이미지를 가져옵니다.",
        "Pod는 레지스트리의 이미지 업데이트를 무시합니다.",
        "kubelet이 충돌할 것입니다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Setting 'imagePullPolicy: Never' in a Kubernetes pod specification means that the image will not be pulled from the registry. The pod will only start if the image is already present locally. This policy is useful for environments where network connectivity is limited or unreliable.",
      "ko": "Kubernetes Pod 사양에서 'imagePullPolicy: Never'를 설정하면 레지스트리에서 이미지를 가져오지 않는다는 의미입니다. Pod는 이미지가 이미 로컬에 있는 경우에만 시작됩니다. 이 정책은 네트워크 연결이 제한되거나 신뢰할 수 없는 환경에 유용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/#imagepullpolicy"
  },
  {
    "id": "kcsa-mock-091",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command is used to retrieve the logs of a pod named 'my-pod'?",
      "ko": "'my-pod'라는 Pod의 로그를 검색하는 데 사용되는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get logs my-pod",
        "kubectl describe my-pod",
        "kubectl logs my-pod",
        "kubectl status my-pod",
        "kubectl inspect my-pod"
      ],
      "ko": [
        "kubectl get logs my-pod",
        "kubectl describe my-pod",
        "kubectl logs my-pod",
        "kubectl status my-pod",
        "kubectl inspect my-pod"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The correct command to view the logs of a pod named 'my-pod' is 'kubectl logs my-pod'. This command fetches the standard output and error logs from the pod's containers. 'kubectl describe' provides detailed resource information but not logs. The other commands are invalid or do not exist.",
      "ko": "'my-pod'라는 Pod의 로그를 보는 올바른 명령은 'kubectl logs my-pod'입니다. 이 명령은 Pod 컨테이너에서 표준 출력 및 오류 로그를 가져옵니다. 'kubectl describe'은 자세한 리소스 정보를 제공하지만 로그는 제공하지 않습니다. 다른 명령은 유효하지 않거나 존재하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-application/logging/"
  },
  {
    "id": "kcsa-mock-092",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How does Kubernetes ensure that a Deployment maintains the desired number of replicas?",
      "ko": "Kubernetes는 배포가 원하는 수의 복제본을 유지하도록 어떻게 보장합니까?"
    },
    "choices": {
      "en": [
        "Through the kube-scheduler",
        "Using the ReplicaSet controller",
        "Via the kubelet on each node",
        "By the API server checking periodically",
        "It does not ensure this automatically"
      ],
      "ko": [
        "kube-scheduler를 통해",
        "ReplicaSet 컨트롤러 사용",
        "각 노드의 kubelet을 통해",
        "API 서버에서 주기적으로 확인하여",
        "이는 자동으로 보장되지 않습니다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes Deployments use ReplicaSets to ensure that the desired number of pod replicas is maintained. ReplicaSets automatically adjust the number of replicas if any discrepancies are detected.",
      "ko": "Kubernetes 배포는 ReplicaSets를 사용하여 원하는 수의 Pod 복제본이 유지되는지 확인합니다. ReplicaSets는 불일치가 감지되면 자동으로 복제본 수를 조정합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
  },
  {
    "id": "kcsa-mock-093",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following is NOT a valid Kubernetes Service type?",
      "ko": "다음 중 유효한 Kubernetes Service 유형이 아닌 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "ClusterIP",
        "NodePort",
        "LoadBalancer",
        "ExternalName",
        "InternalPort"
      ],
      "ko": [
        "ClusterIP",
        "NodePort",
        "LoadBalancer",
        "ExternalName",
        "InternalPort"
      ]
    },
    "answer": 4,
    "explain": {
      "en": "Kubernetes defines several Service types to expose applications: ClusterIP, NodePort, LoadBalancer, and ExternalName are valid types. 'InternalPort' is not a recognized Service type in Kubernetes and does not exist in the official API. ClusterIP exposes the service on a cluster-internal IP, NodePort exposes the service on each node's IP at a static port, LoadBalancer provisions an external load balancer, and ExternalName maps the service to a DNS name. Therefore, 'InternalPort' is invalid.",
      "ko": "Kubernetes는 애플리케이션을 노출하기 위해 여러 서비스 유형을 정의합니다. ClusterIP, NodePort, LoadBalancer 및 ExternalName은 유효한 유형입니다. 'InternalPort'는 Kubernetes에서 인식되는 서비스 유형이 아니며 공식 API에도 존재하지 않습니다. ClusterIP는 클러스터 내부 IP에 서비스를 노출하고, NodePort는 고정 포트의 각 노드 IP에 서비스를 노출하고, LoadBalancer는 외부 로드 밸런서를 프로비저닝하고, ExternalName은 서비스를 DNS 이름에 매핑합니다. 따라서 'InternalPort'는 유효하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "kcsa-mock-094",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the purpose of the '--service-account-key-file' flag in the kube-apiserver?",
      "ko": "kube-apiserver에서 '--service-account-key-file' 플래그의 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To specify the private key file used to sign service account tokens",
        "To define the service account used by the API server",
        "To store service account credentials",
        "To encrypt service account Secrets",
        "To disable service accounts"
      ],
      "ko": [
        "서비스 계정 토큰에 서명하는 데 사용되는 비공개 키 파일을 지정하려면",
        "API 서버에서 사용하는 서비스 계정을 정의하려면",
        "서비스 계정 자격 증명을 저장하려면",
        "서비스 계정 Secrets번호를 암호화하려면",
        "서비스 계정을 비활성화하려면"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The '--service-account-key-file' flag in the kube-apiserver specifies the path to the private key file used to sign service account tokens. This key is critical for token authentication and validation. The API server uses this key to cryptographically sign tokens issued to service accounts, ensuring their authenticity. Other options are incorrect: the flag does not define which service account the API server uses, nor does it store credentials or encrypt Secrets. It also does not disable service accounts.",
      "ko": "kube-apiserver의 '--service-account-key-file' 플래그는 서비스 계정 토큰에 서명하는 데 사용되는 비공개 키 파일의 경로를 지정합니다. 이 키는 토큰 인증 및 유효성 검사에 중요합니다. API 서버는 이 키를 사용하여 서비스 계정에 발행된 토큰에 암호화 서명하여 토큰의 신뢰성을 보장합니다. 다른 옵션은 올바르지 않습니다. 플래그는 API 서버가 사용하는 서비스 계정을 정의하지 않으며 자격 증명을 저장하거나 Secrets을 암호화하지도 않습니다. 또한 서비스 계정을 비활성화하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-095",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which statement best describes the Kubernetes Ingress resource?",
      "ko": "Kubernetes Ingress 리소스를 가장 잘 설명하는 설명은 무엇인가요?"
    },
    "choices": {
      "en": [
        "It defines internal networking rules between pods",
        "It manages external HTTP and HTTPS access to services",
        "It is used for storing configuration data",
        "It schedules pods to nodes",
        "It provides persistent storage to pods"
      ],
      "ko": [
        "포드 간의 내부 네트워킹 규칙을 정의합니다.",
        "서비스에 대한 외부 HTTP 및 HTTPS 액세스를 관리합니다.",
        "구성 데이터를 저장하는 데 사용됩니다.",
        "포드를 노드에 예약합니다.",
        "포드에 영구 스토리지를 제공합니다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes Ingress is a resource that manages external access to services, typically HTTP and HTTPS traffic. It provides routing rules to direct external requests to the appropriate backend services within the cluster. It does not define internal pod networking (that is handled by Services and network plugins), nor is it used for storing configuration data (ConfigMaps/Secrets), scheduling pods (handled by the scheduler), or providing persistent storage (handled by PersistentVolumes).",
      "ko": "Kubernetes Ingress는 서비스(일반적으로 HTTP 및 HTTPS 트래픽)에 대한 외부 액세스를 관리하는 리소스입니다. 외부 요청을 클러스터 내의 적절한 백엔드 서비스로 전달하는 라우팅 규칙을 제공합니다. 내부 Pod 네트워킹(서비스 및 네트워크 플러그인에 의해 처리됨)을 정의하지 않으며 구성 데이터 저장(ConfigMap/Secrets), Pod 예약(스케줄러에 의해 처리됨) 또는 영구 저장소 제공(PersistentVolumes에 의해 처리됨)에 사용되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "kcsa-mock-096",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you force delete a Kubernetes pod that is stuck in the 'Terminating' state?",
      "ko": "'종료 중' 상태에 멈춰 있는 Kubernetes Pod를 강제로 삭제하려면 어떻게 해야 하나요?"
    },
    "choices": {
      "en": [
        "Run 'kubectl delete pod <pod-name>' normally",
        "Restart the kubelet service on the node",
        "Run 'kubectl delete pod <pod-name> --force --grace-period=0'",
        "Delete the node where the pod is running",
        "Edit the pod's YAML to remove finalizers"
      ],
      "ko": [
        "'kubectl delete pod <pod-name>'을 정상적으로 실행하세요.",
        "노드에서 kubelet 서비스를 다시 시작합니다.",
        "'kubectl delete pod <pod-name> --force --grace-period=0'을 실행합니다.",
        "Pod가 실행 중인 노드 삭제",
        "Pod의 YAML을 편집하여 종료자를 제거합니다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A pod stuck in 'Terminating' state can be force deleted using the command 'kubectl delete pod <pod-name> --force --grace-period=0'. This command bypasses the graceful termination period and forcibly removes the pod from the API server, even if the pod's containers are still running. Restarting the kubelet or deleting the node can be disruptive and are not recommended first steps. Editing the pod's YAML to remove finalizers can help if finalizers are blocking deletion, but the force delete command is the standard immediate solution.",
      "ko": "'종료 중' 상태에서 멈춰 있는 Pod는 'kubectl delete pod <pod-name> --force --grace-period=0' 명령을 사용하여 강제 삭제할 수 있습니다. 이 명령은 Pod의 컨테이너가 여전히 실행 중이더라도 단계적 종료 기간을 우회하고 API 서버에서 Pod를 강제로 제거합니다. kubelet을 다시 시작하거나 노드를 삭제하면 중단이 발생할 수 있으므로 첫 번째 단계에서는 권장되지 않습니다. 종료자가 삭제를 차단하는 경우 Pod의 YAML을 편집하여 종료자를 제거하는 것이 도움이 될 수 있지만 강제 삭제 명령이 즉각적인 표준 솔루션입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination"
  },
  {
    "id": "kcsa-mock-097",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the effect of the 'kubectl config use-context' command in Kubernetes?",
      "ko": "Kubernetes에서 'kubectl config use-context' 명령의 효과는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Switches the active namespace in the current context",
        "Changes the current kubeconfig file being used",
        "Modifies the cluster configuration in kubeconfig",
        "Sets the current context to the specified one in kubeconfig",
        "Updates the API server endpoint in the current context"
      ],
      "ko": [
        "현재 컨텍스트에서 활성 네임스페이스를 전환합니다.",
        "현재 사용 중인 kubeconfig 파일을 변경합니다.",
        "kubeconfig에서 클러스터 구성을 수정합니다.",
        "현재 컨텍스트를 kubeconfig에 지정된 컨텍스트로 설정합니다.",
        "현재 컨텍스트에서 API 서버 엔드포인트를 업데이트합니다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The command 'kubectl config use-context <context-name>' sets the current context in the kubeconfig file to the specified context. This changes which cluster, user, and namespace kubectl commands operate against by default. It does not switch namespaces directly (that requires 'kubectl config set-context' or 'kubectl config set-namespace'), nor does it change the kubeconfig file itself or modify cluster details. It simply selects which predefined context is active.",
      "ko": "'kubectl config use-context <context-name>' 명령은 kubeconfig 파일의 현재 컨텍스트를 지정된 컨텍스트로 설정합니다. 이는 기본적으로 kubectl 명령이 작동하는 클러스터, 사용자 및 네임스페이스를 변경합니다. 네임스페이스를 직접 전환하지 않으며('kubectl config set-context' 또는 'kubectl config set-namespace' 필요) kubeconfig 파일 자체를 변경하거나 클러스터 세부 정보를 수정하지 않습니다. 단순히 사전 정의된 컨텍스트가 활성화되어 있는지 선택합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"
  },
  {
    "id": "kcsa-mock-098",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What command is used to list all pods across all namespaces in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터의 모든 네임스페이스에 걸쳐 모든 Pod를 나열하는 데 사용되는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "'kubectl get pods'",
        "'kubectl get pods --all'",
        "'kubectl get pods -A'",
        "'kubectl get pods --namespaces'",
        "'kubectl get all-pods'"
      ],
      "ko": [
        "'kubectl get pods'",
        "'kubectl get pods --all'",
        "'kubectl get pods -A'",
        "'kubectl get pods --namespaces'",
        "'kubectl get all-pods'"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The '-A' flag is used with 'kubectl get pods' to list resources in all namespaces. This is a shorthand for '--all-namespaces', which ensures that pods from every namespace are displayed.",
      "ko": "'-A' 플래그는 'kubectl get pods'와 함께 사용되어 모든 네임스페이스의 리소스를 나열합니다. 이는 모든 네임스페이스의 Pod가 표시되도록 하는 '--all-namespaces'의 약어입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/overview/"
  },
  {
    "id": "kcsa-mock-099",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of a ReplicaSet in Kubernetes?",
      "ko": "Kubernetes에서 ReplicaSet의 주요 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To ensure that a specified number of pod replicas are running at all times",
        "To expose services to external traffic using load balancing",
        "To store persistent data for applications",
        "To define and enforce network policies for pods",
        "To schedule pods to specific nodes based on resource requirements"
      ],
      "ko": [
        "지정된 수의 Pod 복제본이 항상 실행되고 있는지 확인하려면",
        "로드 밸런싱을 사용하여 외부 트래픽에 서비스를 노출하려면",
        "애플리케이션의 영구 데이터를 저장하려면",
        "Pod에 대한 네트워크 정책을 정의하고 시행하려면",
        "리소스 요구 사항에 따라 특정 노드에 Pod를 예약하려면"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A ReplicaSet in Kubernetes ensures that a specified number of pod replicas are running at all times. It monitors existing pods and creates or deletes them as needed to maintain the desired state. Incorrect options: (1) Exposing services to external traffic is handled by Services, not ReplicaSets. (2) Persistent data storage is managed by PersistentVolumes and PersistentVolumeClaims. (3) Network policies are defined separately using NetworkPolicy resources. (4) Scheduling pods to specific nodes is handled by the Kubernetes Scheduler.",
      "ko": "Kubernetes의 ReplicaSet은 지정된 수의 Pod 복제본이 항상 실행되도록 보장합니다. 기존 Pod를 모니터링하고 필요에 따라 생성하거나 삭제하여 원하는 상태를 유지합니다. 잘못된 옵션: (1) 서비스를 외부 트래픽에 노출하는 것은 ReplicaSet가 아닌 서비스에 의해 처리됩니다. (2) 영구 데이터 스토리지는 PersistentVolume 및 PersistentVolumeClaim에 의해 관리됩니다. (3) 네트워크 정책은 NetworkPolicy 리소스를 사용하여 별도로 정의됩니다. (4) 특정 노드에 대한 Pod 예약은 Kubernetes 스케줄러에 의해 처리됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/"
  },
  {
    "id": "kcsa-mock-100",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command allows you to view the current resource usage (CPU and memory) of a specific pod?",
      "ko": "특정 Pod의 현재 리소스 사용량(CPU 및 메모리)을 볼 수 있는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl describe pod <pod-name>",
        "kubectl top pod <pod-name>",
        "kubectl get pod <pod-name> --resources",
        "kubectl logs <pod-name>",
        "kubectl inspect pod <pod-name>"
      ],
      "ko": [
        "kubectl describe pod <pod-name>",
        "kubectl top pod <pod-name>",
        "kubectl get pod <pod-name> --resources",
        "kubectl logs <pod-name>",
        "kubectl inspect pod <pod-name>"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'kubectl top pod <pod-name>' command displays the current CPU and memory usage of the specified pod, provided that the Metrics Server is installed and running in the cluster. 'kubectl describe' shows detailed pod information but not real-time resource usage. The other commands do not provide resource consumption data.",
      "ko": "'kubectl top pod <pod-name>' 명령은 Metrics Server가 클러스터에 설치되어 실행 중인 경우 지정된 Pod의 현재 CPU 및 메모리 사용량을 표시합니다. 'kubectl describe'은 자세한 Pod 정보를 표시하지만 실시간 리소스 사용량은 표시하지 않습니다. 다른 명령은 리소스 소비 데이터를 제공하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug-application-cluster/resource-metrics-pipeline/"
  },
  {
    "id": "kcsa-mock-101",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of Kubernetes labels in organizing resources?",
      "ko": "리소스 구성에서 Kubernetes 레이블의 주요 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To provide human-readable names for resources",
        "To organize and select groups of objects",
        "To store configuration data",
        "To set permissions on resources",
        "To define network policies"
      ],
      "ko": [
        "사람이 읽을 수 있는 리소스 이름을 제공하려면",
        "객체 그룹을 구성하고 선택하려면",
        "구성 데이터를 저장하려면",
        "리소스에 대한 권한을 설정하려면",
        "네트워크 정책을 정의하려면"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes labels are key-value pairs attached to objects, such as pods or services, to facilitate identification and selection. They enable users to organize and filter resources based on specific criteria, making it easier to manage complex environments.",
      "ko": "Kubernetes 레이블은 식별 및 선택을 용이하게 하기 위해 Pod 또는 서비스와 같은 객체에 연결된 키-값 쌍입니다. 이를 통해 사용자는 특정 기준에 따라 리소스를 구성하고 필터링할 수 있으므로 복잡한 환경을 보다 쉽게 ​​관리할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"
  },
  {
    "id": "kcsa-mock-102",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you scale a Kubernetes deployment named 'my-deployment' to 5 replicas using the CLI?",
      "ko": "CLI를 사용하여 'my-deployment'라는 Kubernetes 배포를 5개의 복제본으로 어떻게 확장합니까?"
    },
    "choices": {
      "en": [
        "kubectl scale deployment my-deployment --replicas=5",
        "kubectl update deployment my-deployment --replicas=5",
        "kubectl set deployment my-deployment replicas=5",
        "kubectl resize deployment my-deployment 5",
        "kubectl deploy my-deployment --replicas=5"
      ],
      "ko": [
        "kubectl scale deployment my-deployment --replicas=5",
        "kubectl update deployment my-deployment --replicas=5",
        "kubectl set deployment my-deployment replicas=5",
        "kubectl resize deployment my-deployment 5",
        "kubectl deploy my-deployment --replicas=5"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The 'kubectl scale' command is used to adjust the number of replicas in a deployment. In this case, 'kubectl scale deployment my-deployment --replicas=5' will scale the deployment to 5 replicas.",
      "ko": "'kubectl scale' 명령은 배포의 복제본 수를 조정하는 데 사용됩니다. 이 경우 'kubectl scale deployment my-deployment --replicas=5'는 배포를 5개의 복제본으로 확장합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/scale"
  },
  {
    "id": "kcsa-mock-103",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "KubeProxy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component is responsible for maintaining network rules on nodes for services?",
      "ko": "서비스 노드의 네트워크 규칙을 유지 관리하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubelet",
        "kube-proxy",
        "kube-scheduler",
        "kube-controller-manager",
        "etcd"
      ],
      "ko": [
        "kubelet",
        "kube-proxy",
        "kube-scheduler",
        "kube-controller-manager",
        "etcd"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "kube-proxy is the component that maintains network rules on nodes for services. It ensures that incoming traffic is properly routed to the correct service endpoints.",
      "ko": "kube-proxy는 서비스 노드에서 네트워크 규칙을 유지 관리하는 구성 요소입니다. 이는 수신 트래픽이 올바른 서비스 엔드포인트로 올바르게 라우팅되도록 보장합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/"
  },
  {
    "id": "kcsa-mock-104",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of a DaemonSet in Kubernetes?",
      "ko": "Kubernetes에서 DaemonSet의 주요 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A pod runs on all nodes or a subset of nodes",
        "Only one pod runs in the cluster",
        "Pods are automatically scaled based on load",
        "Services are exposed externally",
        "ConfigMaps are synchronized across namespaces"
      ],
      "ko": [
        "Pod는 모든 노드 또는 노드의 하위 집합에서 실행됩니다.",
        "클러스터에서는 하나의 Pod만 실행됩니다.",
        "Pod는 부하에 따라 자동으로 확장됩니다.",
        "서비스가 외부에 노출됩니다.",
        "ConfigMap은 네임스페이스 전체에서 동기화됩니다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "DaemonSets ensure that a copy of a pod runs on each node or a subset of nodes in a Kubernetes cluster. This is useful for running system daemons or monitoring agents.",
      "ko": "DaemonSet는 Kubernetes 클러스터의 각 노드 또는 노드 하위 집합에서 Pod 복사본이 실행되도록 합니다. 이는 시스템 데몬이나 모니터링 에이전트를 실행하는 데 유용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"
  },
  {
    "id": "kcsa-mock-105",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you create a ConfigMap from a file in Kubernetes?",
      "ko": "Kubernetes의 파일에서 ConfigMap을 어떻게 만들 수 있나요?"
    },
    "choices": {
      "en": [
        "kubectl create configmap my-config --file=config.yaml",
        "kubectl apply configmap my-config --from-file=config.yaml",
        "kubectl create configmap my-config --from-file=config.yaml",
        "kubectl generate configmap my-config config.yaml",
        "kubectl configmap my-config --import=config.yaml"
      ],
      "ko": [
        "kubectl create configmap my-config --file=config.yaml",
        "kubectl apply configmap my-config --from-file=config.yaml",
        "kubectl create configmap my-config --from-file=config.yaml",
        "kubectl generate configmap my-config config.yaml",
        "kubectl configmap my-config --import=config.yaml"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "To create a ConfigMap from a file, you use the command `kubectl create configmap my-config --from-file=config.yaml`. This command allows you to import configuration data from a file into a ConfigMap, which can then be used by applications running in Kubernetes.",
      "ko": "파일에서 ConfigMap을 생성하려면 `kubectl create configmap my-config --from-file=config.yaml` 명령을 사용합니다. 이 명령을 사용하면 파일의 구성 데이터를 ConfigMap으로 가져올 수 있으며, 이는 Kubernetes에서 실행되는 애플리케이션에서 사용할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/configmap/"
  },
  {
    "id": "kcsa-mock-106",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What happens by default when a container in a Kubernetes pod crashes?",
      "ko": "Kubernetes Pod의 컨테이너가 충돌하면 기본적으로 어떻게 되나요?"
    },
    "choices": {
      "en": [
        "The pod is deleted",
        "Kubernetes does nothing",
        "The kubelet restarts the container",
        "An alert is sent to the administrator",
        "The node is drained"
      ],
      "ko": [
        "Pod가 삭제되었습니다.",
        "Kubernetes는 아무것도 하지 않습니다.",
        "kubelet이 컨테이너를 다시 시작합니다.",
        "관리자에게 알림이 전송됩니다",
        "노드가 배수되었습니다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "By default, when a container in a Kubernetes pod crashes, the kubelet will automatically restart it. This behavior can be configured using restart policies.",
      "ko": "기본적으로 Kubernetes Pod의 컨테이너가 충돌하면 kubelet이 자동으로 컨테이너를 다시 시작합니다. 이 동작은 다시 시작 정책을 사용하여 구성할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"
  },
  {
    "id": "kcsa-mock-107",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What command is used to update an image in a Kubernetes deployment?",
      "ko": "Kubernetes 배포에서 이미지를 업데이트하는 데 사용되는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl set image deployment/my-deployment my-container=my-image:tag",
        "kubectl update image deployment/my-deployment my-container=my-image:tag",
        "kubectl replace image deployment/my-deployment my-container=my-image:tag",
        "kubectl change image deployment/my-deployment my-container=my-image:tag",
        "kubectl edit deployment my-deployment"
      ],
      "ko": [
        "kubectl set image deployment/my-deployment my-container=my-image:tag",
        "kubectl update image deployment/my-deployment my-container=my-image:tag",
        "kubectl replace image deployment/my-deployment my-container=my-image:tag",
        "kubectl change image deployment/my-deployment my-container=my-image:tag",
        "kubectl edit deployment my-deployment"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The `kubectl set image` command is used to update the image for a specified container in a Kubernetes deployment. This command modifies the deployment configuration to use the new image, which triggers a rollout of the updated pods.",
      "ko": "`kubectl set image` 명령은 Kubernetes 배포에서 지정된 컨테이너의 이미지를 업데이트하는 데 사용됩니다. 이 명령은 업데이트된 Pod의 롤아웃을 트리거하는 새 이미지를 사용하도록 배포 구성을 수정합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/overview/"
  },
  {
    "id": "kcsa-mock-108",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you prevent pods from being scheduled on a Kubernetes node?",
      "ko": "Kubernetes 노드에서 Pod가 예약되는 것을 어떻게 방지할 수 있나요?"
    },
    "choices": {
      "en": [
        "kubectl cordon <node-name>",
        "kubectl drain <node-name>",
        "kubectl taint nodes <node-name> key=value:NoSchedule",
        "kubectl label nodes <node-name> unschedulable=true",
        "kubectl delete node <node-name>"
      ],
      "ko": [
        "kubectl cordon <node-name>",
        "kubectl drain <node-name>",
        "kubectl taint nodes <node-name> key=value:NoSchedule",
        "kubectl label nodes <node-name> unschedulable=true",
        "kubectl delete node <node-name>"
      ]
    },
    "answer": [
      0,
      2
    ],
    "explain": {
      "en": "Both cordoning and tainting a node with `kubectl taint nodes <node-name> key=value:NoSchedule` prevents pods without a matching toleration from being scheduled on it. This is a way to mark nodes as unsuitable for certain workloads without completely removing them from the cluster.",
      "ko": "`kubectl taint nodes <node-name> key=value:NoSchedule`을 사용하여 노드를 차단하고 오염시키면 일치하는 허용 오차가 없는 Pod가 예약되는 것을 방지할 수 있습니다. 이는 노드를 클러스터에서 완전히 제거하지 않고 특정 작업 부하에 적합하지 않은 것으로 표시하는 방법입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"
  },
  {
    "id": "kcsa-mock-109",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of the 'kubeadm' tool in Kubernetes?",
      "ko": "Kubernetes에서 'kubeadm' 도구의 주요 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To manage container images",
        "To bootstrap Kubernetes clusters",
        "To monitor cluster health",
        "To deploy applications to the cluster",
        "To manage network policies"
      ],
      "ko": [
        "컨테이너 이미지를 관리하려면",
        "Kubernetes 클러스터를 부트스트랩하려면",
        "클러스터 상태를 모니터링하려면",
        "클러스터에 애플리케이션을 배포하려면",
        "네트워크 정책을 관리하려면"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The `kubeadm` tool is used to bootstrap a Kubernetes cluster, making it easier to set up and manage clusters. It automates the installation and configuration process, ensuring that all necessary components are properly initialized.",
      "ko": "`kubeadm` 도구는 Kubernetes 클러스터를 부트스트랩하는 데 사용되므로 클러스터를 더 쉽게 설정하고 관리할 수 있습니다. 설치 및 구성 프로세스를 자동화하여 필요한 모든 구성 요소가 올바르게 초기화되도록 합니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/"
  },
  {
    "id": "kcsa-mock-110",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command provides detailed information about a specific Kubernetes resource, including its configuration and status?",
      "ko": "구성 및 상태를 포함하여 특정 Kubernetes 리소스에 대한 자세한 정보를 제공하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get <resource>",
        "kubectl describe <resource>",
        "kubectl inspect <resource>",
        "kubectl show <resource>",
        "kubectl info <resource>"
      ],
      "ko": [
        "kubectl get <resource>",
        "kubectl describe <resource>",
        "kubectl inspect <resource>",
        "kubectl show <resource>",
        "kubectl info <resource>"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'kubectl describe <resource>' command outputs detailed information about a Kubernetes resource, including its configuration, status, events, and other metadata. In contrast, 'kubectl get <resource>' provides a summary list or status of resources, but not detailed information. The other commands such as 'inspect', 'show', and 'info' are not valid kubectl commands for this purpose.",
      "ko": "'kubectl describe <resource>' 명령은 구성, 상태, 이벤트 및 기타 메타데이터를 포함하여 Kubernetes 리소스에 대한 자세한 정보를 출력합니다. 반면 'kubectl get <resource>'는 요약 목록이나 리소스 상태를 제공하지만 자세한 정보는 제공하지 않습니다. 'inspect', 'show' 및 'info'와 같은 다른 명령은 이 목적에 유효한 kubectl 명령이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#describe"
  },
  {
    "id": "kcsa-mock-111",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you delete a Kubernetes namespace and all its associated resources?",
      "ko": "Kubernetes 네임스페이스 및 모든 관련 리소스를 어떻게 삭제합니까?"
    },
    "choices": {
      "en": [
        "kubectl delete all --namespace=<namespace>",
        "kubectl delete namespace <namespace>",
        "kubectl remove namespace <namespace>",
        "kubectl clean namespace <namespace>",
        "kubectl purge namespace <namespace>"
      ],
      "ko": [
        "kubectl delete all --namespace=<namespace>",
        "kubectl delete namespace <namespace>",
        "kubectl remove namespace <namespace>",
        "kubectl clean namespace <namespace>",
        "kubectl purge namespace <namespace>"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Deleting a namespace with `kubectl delete namespace <namespace>` removes the namespace and all resources within it. This includes pods, services, deployments, and other objects defined within that namespace.",
      "ko": "`kubectl delete namespace <namespace>`를 사용하여 네임스페이스를 삭제하면 네임스페이스와 그 안에 있는 모든 리소스가 제거됩니다. 여기에는 해당 네임스페이스 내에 정의된 Pod, 서비스, 배포 및 기타 개체가 포함됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "kcsa-mock-112",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod Management",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the purpose of the 'kubectl exec' command in Kubernetes?",
      "ko": "Kubernetes에서 'kubectl exec' 명령의 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Executes a command on the Kubernetes control plane",
        "Runs a command inside a container in a pod",
        "Creates a new pod in the cluster",
        "Updates an existing deployment",
        "Deletes a Kubernetes resource"
      ],
      "ko": [
        "Kubernetes 제어 영역에서 명령을 실행합니다.",
        "Pod의 컨테이너 내에서 명령을 실행합니다.",
        "클러스터에 새 Pod를 생성합니다.",
        "기존 배포를 업데이트합니다.",
        "Kubernetes 리소스를 삭제합니다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "'kubectl exec' is used to execute a command inside a running container within a Kubernetes pod. This is particularly useful for debugging or interacting with applications running inside containers. For example, you can use it to access logs or run shell commands within the container. Other options are incorrect because:\n- Option 0: Commands are not executed on the control plane using 'kubectl exec'.\n- Option 2: It does not create new pods; 'kubectl run' or deployment manifests are used for that.\n- Option 3: Updating deployments is done using 'kubectl apply' or 'kubectl set'.\n- Option 4: Deleting resources is handled by 'kubectl delete'.",
      "ko": "'kubectl exec'는 Kubernetes Pod 내의 실행 중인 컨테이너 내에서 명령을 실행하는 데 사용됩니다. 이는 컨테이너 내부에서 실행되는 애플리케이션을 디버깅하거나 상호 작용하는 데 특히 유용합니다. 예를 들어 이를 사용하여 로그에 액세스하거나 컨테이너 내에서 셸 명령을 실행할 수 있습니다. 다른 옵션은 다음과 같은 이유로 올바르지 않습니다.\n- 옵션 0: 'kubectl exec'를 사용하여 제어 플레인에서 명령이 실행되지 않습니다.\n- 옵션 2: 새 Pod를 생성하지 않습니다. 이를 위해 'kubectl run' 또는 배포 매니페스트가 사용됩니다.\n- 옵션 3: 배포 업데이트는 'kubectl apply' 또는 'kubectl set'을 사용하여 수행됩니다.\n- 옵션 4: 리소스 삭제는 'kubectl delete'로 처리됩니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#exec"
  },
  {
    "id": "kcsa-mock-113",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you expose a Kubernetes deployment as a service?",
      "ko": "Kubernetes 배포를 서비스로 노출하려면 어떻게 해야 합니까?"
    },
    "choices": {
      "en": [
        "kubectl expose deployment my-deployment",
        "kubectl service deployment my-deployment",
        "kubectl create service my-deployment",
        "kubectl generate service my-deployment",
        "kubectl map service my-deployment"
      ],
      "ko": [
        "kubectl expose deployment my-deployment",
        "kubectl service deployment my-deployment",
        "kubectl create service my-deployment",
        "kubectl generate service my-deployment",
        "kubectl map service my-deployment"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The `kubectl expose` command creates a Service that exposes the deployment, allowing access to the pods within the deployment from outside the cluster.",
      "ko": "`kubectl expose` 명령은 배포를 노출하는 서비스를 생성하여 클러스터 외부에서 배포 내의 Pod에 대한 액세스를 허용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "kcsa-mock-114",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of a Horizontal Pod Autoscaler (HPA) in Kubernetes?",
      "ko": "Kubernetes에서 HPA(Horizontal Pod Autoscaler)의 주요 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Automatically scales nodes",
        "Scales pods based on CPU utilization",
        "Schedules pods to nodes",
        "Balances network traffic",
        "Manages storage volumes"
      ],
      "ko": [
        "자동으로 노드 크기 조정",
        "CPU 사용률을 기준으로 Pod 확장",
        "Pod를 노드에 예약합니다.",
        "네트워크 트래픽 균형",
        "스토리지 볼륨 관리"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Horizontal Pod Autoscaler (HPA) in Kubernetes automatically adjusts the number of replicas of a pod based on observed CPU utilization or other custom metrics. This helps ensure that the application has sufficient resources to handle the current workload without over-allocating resources when demand is low.",
      "ko": "Kubernetes의 HPA(Horizontal Pod Autoscaler)는 관찰된 CPU 사용률 또는 기타 사용자 지정 지표를 기반으로 Pod의 복제본 수를 자동으로 조정합니다. 이는 수요가 낮을 때 리소스를 과도하게 할당하지 않고 현재 워크로드를 처리할 수 있는 충분한 리소스를 애플리케이션에 확보하는 데 도움이 됩니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "kcsa-mock-116",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the main purpose of an Ingress Controller in Kubernetes?",
      "ko": "Kubernetes에서 Ingress Controller의 주요 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To expose services outside the cluster using HTTP/HTTPS",
        "To manage internal pod communication",
        "To store and manage secrets",
        "To schedule pods to nodes",
        "To provide persistent storage"
      ],
      "ko": [
        "HTTP/HTTPS를 사용하여 클러스터 외부에 서비스를 노출하려면",
        "내부 포드 통신을 관리하려면",
        "비밀을 저장하고 관리하려면",
        "포드를 노드에 예약하려면",
        "영구 저장소를 제공하려면"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Ingress Controllers in Kubernetes manage external access to cluster services via HTTP/HTTPS. They act as entry points for incoming HTTP requests and route them to appropriate services within the cluster, allowing for load balancing, SSL termination, and path-based routing.",
      "ko": "Kubernetes의 Ingress Controller는 HTTP/HTTPS를 통해 클러스터 서비스에 대한 외부 액세스를 관리합니다. 이는 들어오는 HTTP 요청의 진입점 역할을 하며 이를 클러스터 내의 적절한 서비스로 라우팅하여 로드 밸런싱, SSL 종료 및 경로 기반 라우팅을 허용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "kcsa-mock-117",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you label a Kubernetes node with the key 'env' and value 'production'?",
      "ko": "키 'env'와 값 'production'을 사용하여 Kubernetes 노드에 어떻게 레이블을 지정합니까?"
    },
    "choices": {
      "en": [
        "kubectl label node <node-name> env:production",
        "kubectl label nodes <node-name> env=production",
        "kubectl annotate node <node-name> env=production",
        "kubectl set label node <node-name> env=production",
        "kubectl tag node <node-name> env=production"
      ],
      "ko": [
        "kubectl label node <node-name> env:production",
        "kubectl label nodes <node-name> env=production",
        "kubectl annotate node <node-name> env=production",
        "kubectl set label node <node-name> env=production",
        "kubectl tag node <node-name> env=production"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "To label a Kubernetes node with the key 'env' and value 'production', you use the command `kubectl label nodes <node-name> env=production`. This command adds a label to the specified node, which can be used for filtering or selecting nodes for specific tasks.",
      "ko": "키 'env'와 값 'production'으로 Kubernetes 노드에 레이블을 지정하려면 `kubectl label nodes <node-name> env=production` 명령을 사용합니다. 이 명령은 특정 작업에 대한 노드를 필터링하거나 선택하는 데 사용할 수 있는 지정된 노드에 레이블을 추가합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#label"
  },
  {
    "id": "kcsa-mock-118",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource is used to run a one-time task?",
      "ko": "일회성 작업을 실행하는 데 어떤 Kubernetes 리소스가 사용됩니까?"
    },
    "choices": {
      "en": [
        "Deployment",
        "StatefulSet",
        "DaemonSet",
        "Job",
        "ReplicaSet"
      ],
      "ko": [
        "Deployment",
        "StatefulSet",
        "DaemonSet",
        "Job",
        "ReplicaSet"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "In Kubernetes, a Job is used to run a one-time task. Jobs create one or more pods to perform a task and ensure they complete successfully. They are ideal for batch processing or running tasks that need to complete before the pods are terminated.",
      "ko": "Kubernetes에서 Job은 일회성 작업을 실행하는 데 사용됩니다. Job은 작업을 수행하고 성공적으로 완료되도록 하기 위해 하나 이상의 Pod를 생성합니다. Pod가 종료되기 전에 완료해야 하는 일괄 처리 또는 작업 실행에 이상적입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/job/"
  },
  {
    "id": "kcsa-mock-119",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you retrieve a list of all contexts in your kubeconfig file?",
      "ko": "kubeconfig 파일에서 모든 컨텍스트 목록을 어떻게 검색할 수 있나요?"
    },
    "choices": {
      "en": [
        "kubectl config get-contexts",
        "kubectl get contexts",
        "kubectl config view",
        "kubectl context list",
        "kubectl list contexts"
      ],
      "ko": [
        "kubectl config get-contexts",
        "kubectl get contexts",
        "kubectl config view",
        "kubectl context list",
        "kubectl list contexts"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "To list all contexts in your kubeconfig file, you use the command `kubectl config get-contexts`. This command displays all available contexts, which are used to manage different Kubernetes clusters or environments.",
      "ko": "kubeconfig 파일의 모든 컨텍스트를 나열하려면 `kubectl config get-contexts` 명령을 사용합니다. 이 명령은 다양한 Kubernetes 클러스터 또는 환경을 관리하는 데 사용되는 모든 사용 가능한 컨텍스트를 표시합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#config"
  },
  {
    "id": "kcsa-mock-120",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What happens when you set 'terminationGracePeriodSeconds' to zero in a Kubernetes pod spec?",
      "ko": "Kubernetes Pod 사양에서 'terminationGracePeriodSeconds'를 0으로 설정하면 어떻게 되나요?"
    },
    "choices": {
      "en": [
        "The pod will terminate immediately without a graceful shutdown",
        "The pod will never terminate",
        "The pod will have infinite time to terminate",
        "The setting is ignored by Kubernetes",
        "The pod will terminate after 30 seconds"
      ],
      "ko": [
        "Pod는 정상적인 종료 없이 즉시 종료됩니다.",
        "Pod는 절대 종료되지 않습니다.",
        "Pod는 종료되는 데 무한한 시간을 갖습니다.",
        "Kubernetes에서는 설정을 무시합니다.",
        "Pod는 30초 후에 종료됩니다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Setting 'terminationGracePeriodSeconds' to zero forces the pod to terminate immediately without a graceful shutdown. This means any running processes will be forcefully stopped, which can lead to data corruption or other issues if not handled properly.",
      "ko": "'terminationGracePeriodSeconds'를 0으로 설정하면 Pod가 정상적으로 종료되지 않고 즉시 종료됩니다. 이는 실행 중인 모든 프로세스가 강제로 중지되며, 제대로 처리되지 않으면 데이터 손상이나 기타 문제가 발생할 수 있음을 의미합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"
  },
  {
    "id": "kcsa-mock-121",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes object is used to manage stateful applications that require persistent storage and network identities?",
      "ko": "영구 스토리지 및 네트워크 ID가 필요한 상태 저장 애플리케이션을 관리하는 데 사용되는 Kubernetes 개체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deployment",
        "StatefulSet",
        "ReplicaSet",
        "DaemonSet",
        "Job"
      ],
      "ko": [
        "Deployment",
        "StatefulSet",
        "ReplicaSet",
        "DaemonSet",
        "Job"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "StatefulSets are used to manage stateful applications that require persistent storage and network identities. Unlike Deployments, StatefulSets maintain a stable network identity and storage for each pod, making them suitable for applications like databases.",
      "ko": "StatefulSet는 영구 스토리지 및 네트워크 ID가 필요한 상태 저장 애플리케이션을 관리하는 데 사용됩니다. 배포와 달리 StatefulSet는 각 Pod에 대해 안정적인 네트워크 ID와 스토리지를 유지하므로 데이터베이스와 같은 애플리케이션에 적합합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"
  },
  {
    "id": "kcsa-mock-122",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you create a Kubernetes namespace named 'dev'?",
      "ko": "'dev'라는 Kubernetes 네임스페이스를 어떻게 생성하나요?"
    },
    "choices": {
      "en": [
        "kubectl create namespace dev",
        "kubectl apply namespace dev",
        "kubectl generate namespace dev",
        "kubectl make namespace dev",
        "kubectl new namespace dev"
      ],
      "ko": [
        "kubectl create namespace dev",
        "kubectl apply namespace dev",
        "kubectl generate namespace dev",
        "kubectl make namespace dev",
        "kubectl new namespace dev"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "To create a Kubernetes namespace named 'dev', you use the command 'kubectl create namespace dev'. This command directly creates a new namespace in your cluster.",
      "ko": "'dev'라는 Kubernetes 네임스페이스를 생성하려면 'kubectl create namespace dev' 명령을 사용합니다. 이 명령은 클러스터에 새 네임스페이스를 직접 생성합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "kcsa-mock-123",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What command can you use to edit a Kubernetes resource directly in your default editor?",
      "ko": "기본 편집기에서 Kubernetes 리소스를 직접 편집하기 위해 어떤 명령을 사용할 수 있나요?"
    },
    "choices": {
      "en": [
        "kubectl change <resource>",
        "kubectl update <resource>",
        "kubectl edit <resource>",
        "kubectl modify <resource>",
        "kubectl adjust <resource>"
      ],
      "ko": [
        "kubectl change <resource>",
        "kubectl update <resource>",
        "kubectl edit <resource>",
        "kubectl modify <resource>",
        "kubectl adjust <resource>"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The 'kubectl edit' command is used to edit a Kubernetes resource directly in your default editor. This command opens the resource's configuration file in your editor, allowing you to make changes before saving and applying them.",
      "ko": "'kubectl edit' 명령은 기본 편집기에서 Kubernetes 리소스를 직접 편집하는 데 사용됩니다. 이 명령은 편집기에서 리소스의 구성 파일을 열어 저장하고 적용하기 전에 변경할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/overview/"
  },
  {
    "id": "kcsa-mock-125",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you port-forward a local port to a port on a Kubernetes pod?",
      "ko": "로컬 포트를 Kubernetes Pod의 포트로 어떻게 포트 전달합니까?"
    },
    "choices": {
      "en": [
        "kubectl port-forward <pod-name> <local-port>:<pod-port>",
        "kubectl forward-port <pod-name> <local-port>:<pod-port>",
        "kubectl tunnel <pod-name> <local-port>:<pod-port>",
        "kubectl proxy <pod-name> --port=<local-port>",
        "kubectl connect <pod-name> --port=<local-port>"
      ],
      "ko": [
        "kubectl port-forward <pod-name> <local-port>:<pod-port>",
        "kubectl forward-port <pod-name> <local-port>:<pod-port>",
        "kubectl tunnel <pod-name> <local-port>:<pod-port>",
        "kubectl proxy <pod-name> --port=<local-port>",
        "kubectl connect <pod-name> --port=<local-port>"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "To port-forward a local port to a port on a Kubernetes pod, you use the command 'kubectl port-forward <pod-name> <local-port>:<pod-port>'. This command allows you to access the pod's port from your local machine.",
      "ko": "로컬 포트를 Kubernetes Pod의 포트로 포트 전달하려면 'kubectl port-forward <pod-name> <local-port>:<pod-port>' 명령을 사용합니다. 이 명령을 사용하면 로컬 시스템에서 Pod의 포트에 액세스할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"
  },
  {
    "id": "kcsa-mock-126",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of a PersistentVolumeClaim (PVC) in Kubernetes?",
      "ko": "Kubernetes에서 PersistentVolumeClaim(PVC)의 주요 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To request storage resources from the cluster",
        "To define storage classes",
        "To monitor disk usage",
        "To create a new volume",
        "To delete unused volumes"
      ],
      "ko": [
        "클러스터에서 스토리지 리소스를 요청하려면",
        "스토리지 클래스를 정의하려면",
        "디스크 사용량을 모니터링하려면",
        "새 볼륨을 생성하려면",
        "사용하지 않는 볼륨을 삭제하려면"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A PersistentVolumeClaim (PVC) is a request for storage by a user that binds to a PersistentVolume (PV) in the cluster. It abstracts the details of how storage is provided and allows pods to use storage resources without knowing the underlying storage implementation. PVCs do not define storage classes, monitor disk usage, create new volumes directly, or delete volumes; those tasks are handled by other Kubernetes components.",
      "ko": "PersistentVolumeClaim(PVC)은 클러스터의 PersistentVolume(PV)에 바인딩되는 사용자의 스토리지 요청입니다. 이는 스토리지 제공 방법에 대한 세부 정보를 추상화하고 Pod가 기본 스토리지 구현을 알지 못해도 스토리지 리소스를 사용할 수 있도록 합니다. PVC는 스토리지 클래스를 정의하거나, 디스크 사용량을 모니터링하거나, 새 볼륨을 직접 생성하거나, 볼륨을 삭제하지 않습니다. 이러한 작업은 다른 Kubernetes 구성 요소에 의해 처리됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
  },
  {
    "id": "kcsa-mock-127",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command is recommended to check the readiness and status of Kubernetes cluster components?",
      "ko": "Kubernetes 클러스터 구성 요소의 준비 상태와 상태를 확인하려면 어떤 명령이 권장됩니까?"
    },
    "choices": {
      "en": [
        "kubectl get components",
        "kubectl get --raw='/readyz?verbose'",
        "kubectl get cs",
        "kubectl get componentstatuses",
        "kubectl describe components"
      ],
      "ko": [
        "kubectl get components",
        "kubectl get --raw='/readyz?verbose'",
        "kubectl get cs",
        "kubectl get componentstatuses",
        "kubectl describe components"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The command `kubectl get --raw='/readyz?verbose'` is the recommended way to check the readiness and status of Kubernetes cluster components. This approach provides detailed and up-to-date information about the health of the cluster. Other commands, such as `kubectl get cs` (deprecated shorthand) and `kubectl get componentstatuses` (deprecated endpoint), are no longer reliable in newer Kubernetes versions.",
      "ko": "`kubectl get --raw='/readyz?verbose'` 명령은 Kubernetes 클러스터 구성 요소의 준비 상태와 상태를 확인하는 데 권장되는 방법입니다. 이 접근 방식은 클러스터 상태에 대한 자세한 최신 정보를 제공합니다. `kubectl get cs`(더 이상 사용되지 않음) 및 `kubectl get componentstatuses`(더 이상 사용되지 않음)와 같은 다른 명령은 최신 Kubernetes 버전에서 더 이상 신뢰할 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/using-api/health-checks/"
  },
  {
    "id": "kcsa-mock-128",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command is used to check the health status and readiness of all nodes in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에 있는 모든 노드의 상태와 준비 상태를 확인하는 데 사용되는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get nodes",
        "kubectl describe nodes",
        "kubectl health nodes",
        "kubectl check nodes",
        "kubectl status nodes"
      ],
      "ko": [
        "kubectl get nodes",
        "kubectl describe nodes",
        "kubectl health nodes",
        "kubectl check nodes",
        "kubectl status nodes"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "'kubectl get nodes' lists all nodes in the cluster along with their status, including whether they are Ready or NotReady, which indicates their health and availability. While 'kubectl describe nodes' provides detailed information about each node, including conditions and events, the primary command to quickly check node health is 'kubectl get nodes'. The other commands are not valid kubectl commands.",
      "ko": "'kubectl get nodes'는 상태와 가용성을 나타내는 Ready 또는 NotReady 여부를 포함하여 클러스터의 모든 노드를 상태와 함께 나열합니다. 'kubectl describe nodes'는 조건, 이벤트 등 각 노드에 대한 자세한 정보를 제공하지만, 노드 상태를 빠르게 확인하는 기본 명령은 'kubectl get nodes'입니다. 다른 명령은 유효한 kubectl 명령이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/nodes/"
  },
  {
    "id": "kcsa-mock-129",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource is designed to manage long-running, stateful applications that require stable network identities and persistent storage?",
      "ko": "안정적인 네트워크 ID와 영구 스토리지가 필요한 장기 실행, 상태 저장 애플리케이션을 관리하도록 설계된 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deployment",
        "Job",
        "StatefulSet",
        "DaemonSet",
        "ReplicaSet"
      ],
      "ko": [
        "Deployment",
        "Job",
        "StatefulSet",
        "DaemonSet",
        "ReplicaSet"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "StatefulSets are used to manage stateful applications that require stable, unique network identifiers and persistent storage across pod restarts. Unlike Deployments or ReplicaSets, which are suited for stateless applications, StatefulSets ensure that pods are created in order and maintain persistent identities. Jobs are for batch or finite tasks, and DaemonSets ensure a pod runs on every node but do not provide stable identities or storage.",
      "ko": "StatefulSet는 Pod 재시작 시 안정적이고 고유한 네트워크 식별자와 영구 스토리지가 필요한 상태 저장 애플리케이션을 관리하는 데 사용됩니다. 상태 비저장 애플리케이션에 적합한 배포 또는 ReplicaSet와 달리 StatefulSet는 Pod가 순서대로 생성되고 지속적인 ID를 유지하도록 보장합니다. Job은 배치 또는 유한 작업을 위한 것이며 DaemonSet는 Pod가 모든 노드에서 실행되도록 보장하지만 안정적인 ID나 스토리지를 제공하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"
  },
  {
    "id": "kcsa-mock-130",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the default Kubernetes behavior when a container exceeds its configured memory limit?",
      "ko": "컨테이너가 구성된 메모리 제한을 초과할 때 기본 Kubernetes 동작은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The container is throttled",
        "The container is terminated",
        "The pod is moved to another node",
        "Kubernetes does nothing",
        "Additional memory is allocated"
      ],
      "ko": [
        "컨테이너가 제한되었습니다.",
        "컨테이너가 종료되었습니다.",
        "Pod가 다른 노드로 이동되었습니다.",
        "Kubernetes는 아무것도 하지 않습니다.",
        "추가 메모리가 할당됩니다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "When a container exceeds its memory limit, the Kubernetes kubelet kills the container to prevent it from affecting other workloads. This is known as an Out Of Memory (OOM) kill. The container is terminated and may be restarted depending on the pod's restart policy. CPU limits result in throttling, but memory limits cause termination. Kubernetes does not move pods automatically to other nodes or allocate additional memory beyond the specified limit.",
      "ko": "컨테이너가 메모리 제한을 초과하면 Kubernetes kubelet은 컨테이너를 종료하여 다른 워크로드에 영향을 주지 않도록 합니다. 이를 OOM(메모리 부족) 종료라고 합니다. 컨테이너가 종료되고 Pod의 다시 시작 정책에 따라 다시 시작될 수 있습니다. CPU 제한으로 인해 조절이 발생하지만 메모리 제한으로 인해 종료됩니다. Kubernetes는 Pod를 자동으로 다른 노드로 이동하거나 지정된 한도를 초과하는 추가 메모리를 할당하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
  },
  {
    "id": "kcsa-mock-131",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command lists all resource types within a specific namespace?",
      "ko": "특정 네임스페이스 내의 모든 리소스 유형을 나열하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get all --namespace=<namespace>",
        "kubectl get resources --namespace=<namespace>",
        "kubectl describe namespace <namespace>",
        "kubectl list namespace <namespace>",
        "kubectl get all <namespace>"
      ],
      "ko": [
        "kubectl get all --namespace=<namespace>",
        "kubectl get resources --namespace=<namespace>",
        "kubectl describe namespace <namespace>",
        "kubectl list namespace <namespace>",
        "kubectl get all <namespace>"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command 'kubectl get all --namespace=<namespace>' retrieves all resource types (pods, services, deployments, etc.) within the specified namespace. The other options are either invalid commands or do not list all resources. 'kubectl describe namespace' provides details about the namespace itself, not its resources.",
      "ko": "'kubectl get all --namespace=<namespace>' 명령은 지정된 네임스페이스 내의 모든 리소스 유형(Pod, 서비스, 배포 등)을 검색합니다. 다른 옵션은 잘못된 명령이거나 모든 리소스를 나열하지 않습니다. 'kubectl describe namespace'는 리소스가 아닌 네임스페이스 자체에 대한 세부정보를 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/cheatsheet/"
  },
  {
    "id": "kcsa-mock-132",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the effect of the 'kubectl rollout undo' command on a Kubernetes deployment?",
      "ko": "Kubernetes Deployment에서 'kubectl rollout undo' 명령의 효과는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deletes the deployment",
        "Rolls back to the previous revision",
        "Pauses the deployment",
        "Scales down the deployment",
        "Updates the deployment to a new version"
      ],
      "ko": [
        "Deployment를 삭제한다",
        "이전 리비전으로 롤백한다",
        "Deployment를 일시 중지한다",
        "Deployment를 축소한다",
        "Deployment를 새 버전으로 업데이트한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'kubectl rollout undo' command reverts a deployment to its previous revision, effectively rolling back any changes made in the most recent update. It does not delete, pause, scale, or update the deployment to a new version but restores the last known good state.",
      "ko": "'kubectl rollout undo'는 Deployment를 이전 리비전으로 되돌려 최근 업데이트의 변경을 롤백합니다. 삭제, 일시 중지, 축소 또는 새 버전 업데이트가 아니라 마지막으로 정상인 상태를 복원합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout"
  },
  {
    "id": "kcsa-mock-133",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload and Application Code Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes or related object defines how to build and deploy an application from source code?",
      "ko": "소스 코드에서 애플리케이션을 빌드하고 배포하는 방법을 정의하는 Kubernetes 또는 관련 객체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deployment",
        "StatefulSet",
        "BuildConfig (OpenShift)",
        "DaemonSet",
        "Job"
      ],
      "ko": [
        "Deployment",
        "StatefulSet",
        "BuildConfig (OpenShift)",
        "DaemonSet",
        "Job"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "While Kubernetes itself does not have a native object for building applications from source code, OpenShift uses the 'BuildConfig' object for this purpose. It defines how to build and deploy applications from source code into containers.",
      "ko": "Kubernetes 자체에는 소스 코드에서 애플리케이션을 빌드하는 네이티브 객체가 없지만, OpenShift는 이를 위해 'BuildConfig' 객체를 사용합니다. 이 객체는 소스 코드에서 애플리케이션을 빌드하고 컨테이너로 배포하는 방법을 정의합니다."
    },
    "ref": "https://docs.openshift.com/container-platform/4.11/builds/what-are-builds.html"
  },
  {
    "id": "kcsa-mock-134",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a common use case for a Kubernetes CronJob?",
      "ko": "Kubernetes CronJob의 일반적인 사용 사례는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Running a database",
        "Serving web traffic",
        "Scheduling regular, recurring tasks",
        "Managing network policies",
        "Providing persistent storage"
      ],
      "ko": [
        "데이터베이스 실행",
        "웹 트래픽 제공",
        "정기적이고 반복되는 작업 예약",
        "네트워크 정책 관리",
        "영구 스토리지 제공"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Kubernetes CronJobs are designed to schedule and run Jobs at specified times or intervals, similar to cron jobs in Unix-like systems. They are ideal for automating repetitive tasks such as backups, report generation, or periodic maintenance. Other options like running a database, serving web traffic, managing network policies, or providing persistent storage are outside the scope of CronJobs' functionality.",
      "ko": "CronJob은 Unix 계열 시스템의 cron처럼 지정한 시간 또는 간격에 Job을 예약하고 실행합니다. 백업, 보고서 생성, 주기적 유지보수 같은 반복 작업 자동화에 적합합니다. 데이터베이스 실행, 웹 트래픽 제공, 네트워크 정책 관리, 영구 스토리지 제공은 CronJob의 기능 범위가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
  },
  {
    "id": "kcsa-mock-135",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you display the full YAML definition of a specific pod in Kubernetes using kubectl?",
      "ko": "kubectl을 사용해 Kubernetes의 특정 Pod 전체 YAML 정의를 어떻게 표시합니까?"
    },
    "choices": {
      "en": [
        "kubectl show pod <pod-name>",
        "kubectl get pod <pod-name> -o yaml",
        "kubectl describe pod <pod-name>",
        "kubectl view pod <pod-name>",
        "kubectl yaml pod <pod-name>"
      ],
      "ko": [
        "kubectl show pod <pod-name>",
        "kubectl get pod <pod-name> -o yaml",
        "kubectl describe pod <pod-name>",
        "kubectl view pod <pod-name>",
        "kubectl yaml pod <pod-name>"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The command 'kubectl get pod <pod-name> -o yaml' outputs the complete YAML manifest of the specified pod, showing its configuration as stored in the cluster. 'kubectl describe pod <pod-name>' provides detailed runtime information but not the raw YAML definition. The other commands are not valid kubectl commands.",
      "ko": "'kubectl get pod <pod-name> -o yaml'은 클러스터에 저장된 지정 Pod의 완전한 YAML 매니페스트와 설정을 출력합니다. 'kubectl describe pod <pod-name>'은 자세한 런타임 정보를 제공하지만 원시 YAML 정의는 아닙니다. 나머지는 유효한 kubectl 명령이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get"
  },
  {
    "id": "kcsa-mock-136",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command is used to delete a deployment named 'my-app' in Kubernetes?",
      "ko": "Kubernetes에서 'my-app'이라는 Deployment를 삭제하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl remove deployment my-app",
        "kubectl delete deployment my-app",
        "kubectl destroy deployment my-app",
        "kubectl erase deployment my-app",
        "kubectl terminate deployment my-app"
      ],
      "ko": [
        "kubectl remove deployment my-app",
        "kubectl delete deployment my-app",
        "kubectl destroy deployment my-app",
        "kubectl erase deployment my-app",
        "kubectl terminate deployment my-app"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The correct command to delete a deployment in Kubernetes is 'kubectl delete deployment my-app'. This command removes the deployment resource and all associated pods. The other options are incorrect as they are not valid kubectl commands for deleting resources.",
      "ko": "Deployment 삭제 명령은 'kubectl delete deployment my-app'입니다. 이 명령은 Deployment 리소스와 연결된 모든 Pod를 제거합니다. 나머지는 리소스 삭제에 유효한 kubectl 명령이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#delete"
  },
  {
    "id": "kcsa-mock-137",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of a Kubernetes Service of type 'NodePort'?",
      "ko": "Kubernetes Service 유형 'NodePort'의 주된 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Exposes the service on a static port on each node's IP address",
        "Load balances traffic across multiple services",
        "Exposes the service externally using a cloud provider's load balancer",
        "Maps the service to an external DNS name",
        "Provides internal cluster DNS resolution"
      ],
      "ko": [
        "각 노드의 IP 주소에서 정적 포트로 Service를 노출한다",
        "여러 Service로 트래픽을 로드 밸런싱한다",
        "클라우드 제공자의 로드 밸런서를 사용해 Service를 외부에 노출한다",
        "Service를 외부 DNS 이름에 매핑한다",
        "내부 클러스터 DNS 해석을 제공한다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Kubernetes Service of type 'NodePort' exposes the service on the same static port across all nodes in the cluster, allowing external traffic to access the service via <NodeIP>:<NodePort>. It does not provide load balancing across multiple services (that is handled by ClusterIP or LoadBalancer types), nor does it map to external DNS names or provide internal DNS resolution. The LoadBalancer type is used to expose services externally via cloud provider load balancers.",
      "ko": "'NodePort'는 클러스터의 모든 노드에서 같은 정적 포트로 Service를 노출하므로 <NodeIP>:<NodePort>로 외부 트래픽이 접근할 수 있습니다. 여러 Service 간 로드 밸런싱, 외부 DNS 매핑, 내부 DNS 해석을 제공하지 않습니다. 클라우드 로드 밸런서는 LoadBalancer 유형이 사용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"
  },
  {
    "id": "kcsa-mock-138",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command displays the Kubernetes client and server versions for the cluster?",
      "ko": "클러스터의 Kubernetes 클라이언트 및 서버 버전을 표시하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl version",
        "kubectl get version",
        "kubectl cluster-info",
        "kubectl describe cluster",
        "kubectl info"
      ],
      "ko": [
        "kubectl version",
        "kubectl get version",
        "kubectl cluster-info",
        "kubectl describe cluster",
        "kubectl info"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command 'kubectl version' shows both the client and server (cluster) Kubernetes versions, which is useful for verifying compatibility and troubleshooting. Other commands like 'kubectl get version' or 'kubectl info' are invalid or do not provide version details. 'kubectl cluster-info' provides cluster endpoint information but not version details.",
      "ko": "'kubectl version'은 클라이언트와 서버(클러스터)의 Kubernetes 버전을 모두 표시해 호환성 확인과 문제 해결에 유용합니다. 'kubectl get version'과 'kubectl info'는 유효하지 않거나 버전 정보를 제공하지 않으며, 'kubectl cluster-info'는 엔드포인트 정보를 제공하지만 버전은 표시하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#version"
  },
  {
    "id": "kcsa-mock-139",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of the 'kubectl config' command in Kubernetes?",
      "ko": "Kubernetes에서 'kubectl config' 명령의 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To configure Kubernetes cluster settings",
        "To manage kubeconfig files and contexts",
        "To update deployment configurations",
        "To set node configurations",
        "To modify pod specifications"
      ],
      "ko": [
        "Kubernetes 클러스터 설정 구성",
        "kubeconfig 파일과 컨텍스트 관리",
        "Deployment 구성 업데이트",
        "노드 구성 설정",
        "Pod 사양 수정"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "'kubectl config' is used to view and modify kubeconfig files, which store cluster connection information, user credentials, and contexts. This command helps manage multiple clusters and user access configurations. It does not directly configure cluster settings, deployments, nodes, or pods.",
      "ko": "'kubectl config'는 클러스터 연결 정보, 사용자 자격 증명, 컨텍스트를 저장하는 kubeconfig 파일을 조회하고 수정합니다. 여러 클러스터와 사용자 접근 구성을 관리하며, 클러스터·Deployment·노드·Pod를 직접 구성하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#config"
  },
  {
    "id": "kcsa-mock-141",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you create a Secret from literal values in Kubernetes?",
      "ko": "Kubernetes에서 리터럴 값으로 Secret을 어떻게 생성합니까?"
    },
    "choices": {
      "en": [
        "kubectl create secret generic my-secret --from-literal=key1=value1",
        "kubectl create secret generic my-secret key1=value1",
        "kubectl create secret my-secret --literal key1=value1",
        "kubectl create secret tls my-secret --key1 value1",
        "kubectl secret create my-secret key1=value1"
      ],
      "ko": [
        "kubectl create secret generic my-secret --from-literal=key1=value1",
        "kubectl create secret generic my-secret key1=value1",
        "kubectl create secret my-secret --literal key1=value1",
        "kubectl create secret tls my-secret --key1 value1",
        "kubectl secret create my-secret key1=value1"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "To create a Secret from literal values, you use the command `kubectl create secret generic my-secret --from-literal=key1=value1`. This command allows you to define key-value pairs directly in the command line, which are then stored as a Secret in Kubernetes.",
      "ko": "리터럴 값으로 Secret을 만들려면 `kubectl create secret generic my-secret --from-literal=key1=value1`을 사용합니다. 명령줄에서 키-값 쌍을 직접 정의해 Kubernetes Secret으로 저장합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "kcsa-mock-142",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the role of the 'cluster-admin' ClusterRole?",
      "ko": "'cluster-admin' ClusterRole의 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Read-only access to cluster resources",
        "Admin access limited to one namespace",
        "Full control over all resources in the cluster",
        "Access to manage nodes but not pods",
        "Limited to managing storage resources"
      ],
      "ko": [
        "클러스터 리소스에 대한 읽기 전용 접근",
        "하나의 네임스페이스로 제한된 관리자 접근",
        "클러스터의 모든 리소스에 대한 전체 제어",
        "Pod는 제외하고 노드 관리 접근",
        "스토리지 리소스 관리로 제한"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The 'cluster-admin' ClusterRole grants full cluster-wide administrative permissions. When bound via a ClusterRoleBinding, it provides full control over all resources in the cluster. When bound via a RoleBinding, its permissions are limited to the namespace specified in the binding.",
      "ko": "'cluster-admin' ClusterRole은 클러스터 전체의 관리자 권한을 부여합니다. ClusterRoleBinding으로 연결하면 모든 리소스를 완전히 제어합니다. RoleBinding으로 연결하면 바인딩에 지정된 네임스페이스로 권한이 제한됩니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-143",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command is used to apply a label to a pod in Kubernetes?",
      "ko": "Kubernetes에서 Pod에 레이블을 적용하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl label pods <pod-name> key=value",
        "kubectl annotate pods <pod-name> key=value",
        "kubectl tag pods <pod-name> key=value",
        "kubectl set label pods <pod-name> key=value",
        "kubectl edit pods <pod-name> --label key=value"
      ],
      "ko": [
        "kubectl label pods <pod-name> key=value",
        "kubectl annotate pods <pod-name> key=value",
        "kubectl tag pods <pod-name> key=value",
        "kubectl set label pods <pod-name> key=value",
        "kubectl edit pods <pod-name> --label key=value"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command `kubectl label pods <pod-name> key=value` is used to apply a label to a pod. This command updates the metadata of the pod with the specified key-value pair, allowing for easier management and filtering of resources.",
      "ko": "`kubectl label pods <pod-name> key=value`는 Pod에 레이블을 적용합니다. 지정한 키-값 쌍으로 Pod 메타데이터를 업데이트해 리소스를 쉽게 관리하고 필터링합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"
  },
  {
    "id": "kcsa-mock-144",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command allows you to view the events occurring in a Kubernetes cluster, such as pod lifecycle changes and errors, using the most current recommended method?",
      "ko": "가장 최신 권장 방법으로 Pod 수명 주기 변경과 오류 등 Kubernetes 클러스터 이벤트를 보는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get events",
        "kubectl describe events",
        "kubectl list events",
        "kubectl events",
        "kubectl get logs"
      ],
      "ko": [
        "kubectl get events",
        "kubectl describe events",
        "kubectl list events",
        "kubectl events",
        "kubectl get logs"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "'kubectl events' is the newer and recommended command for viewing events in a Kubernetes cluster, including pod lifecycle changes, warnings, and errors. It provides enhanced filtering and output options compared to the traditional 'kubectl get events'. 'kubectl describe events' is not a valid command; 'kubectl describe' is used with specific resource types but not directly with 'events'. 'kubectl list events' is not a valid command. 'kubectl get logs' is used to fetch logs from pods, not cluster events.",
      "ko": "'kubectl events'는 Pod 수명 주기 변경, 경고, 오류를 포함한 클러스터 이벤트를 보는 새 권장 명령이며 기존 'kubectl get events'보다 향상된 필터와 출력을 제공합니다. 'kubectl describe events'와 'kubectl list events'는 유효하지 않고, 'kubectl get logs'는 Pod 로그용입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/event-logging/"
  },
  {
    "id": "kcsa-mock-145",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of a Kubernetes Ingress resource in managing network traffic?",
      "ko": "네트워크 트래픽 관리에서 Kubernetes Ingress 리소스의 주된 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To manage internal cluster networking",
        "To define rules for routing external HTTP and HTTPS traffic to services",
        "To provide persistent storage to pods",
        "To schedule pods onto nodes",
        "To configure network policies for pod communication"
      ],
      "ko": [
        "내부 클러스터 네트워킹 관리",
        "외부 HTTP 및 HTTPS 트래픽을 Service로 라우팅하는 규칙 정의",
        "Pod에 영구 스토리지 제공",
        "노드에 Pod 스케줄링",
        "Pod 통신을 위한 네트워크 정책 구성"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Kubernetes Ingress resource primarily manages external access to services within a cluster by defining rules for routing HTTP and HTTPS traffic. It acts as an entry point that controls how external clients reach services inside the cluster. Other options are incorrect because internal networking is handled by Services and CNI plugins, storage is managed by PersistentVolumes, pod scheduling is done by the scheduler, and network policies control pod-to-pod communication rather than external traffic.",
      "ko": "Ingress는 HTTP 및 HTTPS 트래픽 라우팅 규칙을 정의해 클러스터 내부 Service에 대한 외부 접근을 관리합니다. 내부 네트워킹은 Service와 CNI 플러그인, 스토리지는 PersistentVolume, 스케줄링은 스케줄러, Pod 간 통신은 NetworkPolicy가 담당합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "kcsa-mock-146",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "The 4Cs of Cloud Native Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What are the key principles of the 4 Cs of cloud-native security?",
      "ko": "클라우드 네이티브 보안의 4 Cs의 핵심 원칙은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Encrypting data at rest only",
        "Applying security at Code, Container, Cluster, and Cloud levels",
        "Relying solely on cloud provider security",
        "Using containers to bypass security checks",
        "Limiting security to the network layer"
      ],
      "ko": [
        "저장 데이터만 암호화",
        "Code, Container, Cluster, Cloud 수준에 보안 적용",
        "클라우드 제공자 보안에만 의존",
        "보안 검사를 우회하도록 컨테이너 사용",
        "네트워크 계층으로 보안 제한"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 4 Cs of cloud-native security emphasize the importance of applying security measures at multiple levels: Code (secure coding practices), Container (secure containerization), Cluster (secure Kubernetes clusters), and Cloud (secure cloud infrastructure). This layered approach ensures comprehensive security.",
      "ko": "4 Cs는 Code(안전한 코딩), Container(안전한 컨테이너화), Cluster(안전한 Kubernetes 클러스터), Cloud(안전한 클라우드 인프라) 등 여러 수준에 보안 조치를 적용하는 원칙입니다. 이 계층적 접근은 포괄적 보안을 보장합니다."
    },
    "ref": "https://cloudnative.io/cloud-native-security/"
  },
  {
    "id": "kcsa-mock-147",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you enable debug-level logging for the Kubernetes kubelet component?",
      "ko": "Kubernetes kubelet 구성 요소의 디버그 수준 로깅을 어떻게 활성화합니까?"
    },
    "choices": {
      "en": [
        "Set the verbosity level to 4 by adding '--v=4' to the kubelet startup arguments",
        "Run the command 'kubectl debug kubelet'",
        "Modify the kubelet configuration file to set 'logLevel: debug'",
        "Restart the kubelet with the flag '--debug=true'",
        "Debug logging cannot be enabled for the kubelet"
      ],
      "ko": [
        "kubelet 시작 인자에 '--v=4'를 추가해 로그 상세도를 4로 설정",
        "'kubectl debug kubelet' 명령 실행",
        "kubelet 구성 파일에서 'logLevel: debug' 설정",
        "'--debug=true' 플래그로 kubelet 재시작",
        "kubelet 디버그 로깅은 활성화할 수 없다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Debug logging in kubelet is enabled by increasing the verbosity level through the '--v' flag, with '--v=4' commonly used to enable debug-level logs. The other options are incorrect: 'kubectl debug kubelet' is not a valid command; kubelet configuration does not use a 'logLevel' field; '--debug=true' is not a recognized flag; and debug logging is indeed possible and commonly used for troubleshooting.",
      "ko": "'--v' 플래그로 로그 상세도를 높여 kubelet 디버그 로깅을 켜며, '--v=4'가 일반적으로 사용됩니다. 'kubectl debug kubelet'은 유효하지 않고, kubelet 설정에는 'logLevel' 필드가 없으며 '--debug=true'도 인식되지 않습니다. 디버그 로깅은 문제 해결에 사용할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"
  },
  {
    "id": "kcsa-mock-148",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command is used to create a pod directly from a container image?",
      "ko": "컨테이너 이미지에서 직접 Pod를 생성하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl create pod <pod-name> --image=<image>",
        "kubectl run <pod-name> --image=<image>",
        "kubectl new pod <pod-name> --image=<image>",
        "kubectl pod <pod-name> --image=<image>",
        "kubectl deploy pod <pod-name> --image=<image>"
      ],
      "ko": [
        "kubectl create pod <pod-name> --image=<image>",
        "kubectl run <pod-name> --image=<image>",
        "kubectl new pod <pod-name> --image=<image>",
        "kubectl pod <pod-name> --image=<image>",
        "kubectl deploy pod <pod-name> --image=<image>"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'kubectl run' command is used to create a pod or deployment from a specified container image. It is the standard way to quickly start a pod with a given image. The other options are invalid commands or syntaxes that do not exist in kubectl.",
      "ko": "'kubectl run'은 지정한 컨테이너 이미지로 Pod 또는 Deployment를 생성합니다. 주어진 이미지로 Pod를 빠르게 시작하는 표준 방법이며 나머지는 유효한 명령이나 구문이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run"
  },
  {
    "id": "kcsa-mock-149",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the effect of executing the command 'kubectl drain <node-name>' on a Kubernetes node?",
      "ko": "Kubernetes 노드에서 'kubectl drain <node-name>'을 실행하면 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "Deletes the node from the cluster",
        "Marks the node as unschedulable and evicts all pods safely",
        "Restarts the node",
        "Upgrades the node's Kubernetes version",
        "Cleans up unused container images on the node"
      ],
      "ko": [
        "클러스터에서 노드를 삭제한다",
        "노드를 스케줄 불가로 표시하고 모든 Pod를 안전하게 축출한다",
        "노드를 재시작한다",
        "노드의 Kubernetes 버전을 업그레이드한다",
        "노드에서 사용하지 않는 컨테이너 이미지를 정리한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "'kubectl drain' prepares a node for maintenance by marking it unschedulable to prevent new pods from being scheduled and safely evicting all existing pods. It does not delete the node, restart it, upgrade Kubernetes, or clean images. This ensures workloads are gracefully moved before maintenance.",
      "ko": "'kubectl drain'은 유지보수를 위해 노드를 스케줄 불가로 표시해 새 Pod의 스케줄링을 막고 기존 Pod를 안전하게 축출합니다. 노드를 삭제·재시작·업그레이드하거나 이미지를 정리하지 않으며, 유지보수 전에 워크로드를 정상적으로 이동시킵니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#drain"
  },
  {
    "id": "kcsa-mock-150",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload and Application Code Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes Pod specification field allows you to inject environment variables from a ConfigMap into containers?",
      "ko": "ConfigMap에서 환경 변수를 컨테이너에 주입할 수 있는 Kubernetes Pod 사양 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "VolumeMount",
        "envFrom",
        "Secret",
        "Annotation",
        "Label"
      ],
      "ko": [
        "VolumeMount",
        "envFrom",
        "Secret",
        "Annotation",
        "Label"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'envFrom' field in a Pod specification enables injecting all key-value pairs from a ConfigMap as environment variables into the container. 'VolumeMount' is used for mounting volumes, 'Secret' is a separate object for sensitive data, 'Annotation' and 'Label' are metadata and do not inject environment variables.",
      "ko": "Pod 사양의 'envFrom'은 ConfigMap의 모든 키-값 쌍을 컨테이너 환경 변수로 주입합니다. 'VolumeMount'는 볼륨 마운트용이고 Secret은 별도 객체이며 Annotation과 Label은 메타데이터이므로 환경 변수를 주입하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"
  },
  {
    "id": "kcsa-mock-151",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command lists all the nodes currently registered in a Kubernetes cluster?",
      "ko": "현재 Kubernetes 클러스터에 등록된 모든 노드를 나열하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get nodes",
        "kubectl describe cluster",
        "kubectl list nodes",
        "kubectl cluster-info",
        "kubectl get cluster-nodes"
      ],
      "ko": [
        "kubectl get nodes",
        "kubectl describe cluster",
        "kubectl list nodes",
        "kubectl cluster-info",
        "kubectl get cluster-nodes"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "'kubectl get nodes' is the standard command to list all nodes in the cluster along with their status and other summary information. 'kubectl describe cluster' and 'kubectl get cluster-nodes' are not valid commands. 'kubectl list nodes' is not a valid kubectl command. 'kubectl cluster-info' provides cluster endpoint information but does not list nodes.",
      "ko": "'kubectl get nodes'는 상태와 요약 정보를 포함해 클러스터의 모든 노드를 나열하는 표준 명령입니다. 다른 나열 명령은 유효하지 않으며 'kubectl cluster-info'는 엔드포인트 정보만 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/nodes/"
  },
  {
    "id": "kcsa-mock-152",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "When configuring encryption at rest for Kubernetes secrets using etcd, which Kubernetes component's configuration must be updated to enable this encryption?",
      "ko": "etcd에서 Kubernetes Secret의 저장 시 암호화를 구성하려면 어느 Kubernetes 구성 요소의 설정을 업데이트해야 합니까?"
    },
    "choices": {
      "en": [
        "kube-scheduler",
        "kube-controller-manager",
        "kubelet",
        "kube-apiserver",
        "etcd"
      ],
      "ko": [
        "kube-scheduler",
        "kube-controller-manager",
        "kubelet",
        "kube-apiserver",
        "etcd"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Encryption at rest for Kubernetes secrets is configured by updating the kube-apiserver with an encryption configuration file. The kube-apiserver handles requests and encrypts secrets before storing them in etcd. The other components do not manage encryption configuration for secrets.",
      "ko": "Secret의 저장 시 암호화는 암호화 구성 파일로 kube-apiserver를 업데이트해 설정합니다. kube-apiserver가 요청을 처리하고 etcd에 저장하기 전에 Secret을 암호화합니다. 다른 구성 요소는 Secret 암호화 설정을 관리하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"
  },
  {
    "id": "kcsa-mock-153",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Runtime",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes Pod specifications, which field explicitly defines the container runtime class that should be used for pod execution?",
      "ko": "Kubernetes Pod 사양에서 실행에 사용할 컨테이너 런타임 클래스를 명시하는 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "runtime",
        "runtimeClassName",
        "containerRuntime",
        "runtimeClass",
        "containerRuntimeClass"
      ],
      "ko": [
        "runtime",
        "runtimeClassName",
        "containerRuntime",
        "runtimeClass",
        "containerRuntimeClass"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'runtimeClassName' field in Pod specifications references a RuntimeClass object that defines container runtime configurations. This allows administrators to control runtime security parameters and isolation mechanisms. Other options like 'runtimeClass' or 'containerRuntimeClass' are invalid field names in the Kubernetes API.",
      "ko": "'runtimeClassName'은 컨테이너 런타임 구성을 정의하는 RuntimeClass 객체를 참조합니다. 이를 통해 런타임 보안 매개변수와 격리를 제어할 수 있습니다. 'runtimeClass'와 'containerRuntimeClass' 등은 유효한 API 필드명이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/runtime-class/"
  },
  {
    "id": "kcsa-mock-154",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the purpose of the 'allowPrivilegeEscalation' field in a Kubernetes pod's security context?",
      "ko": "Kubernetes Pod의 security context에서 'allowPrivilegeEscalation' 필드의 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Allows the container to run as root",
        "Controls whether a process can gain more privileges than its parent process",
        "Enables privileged mode for the container",
        "Allows mounting of host directories",
        "Disables all capabilities for the container"
      ],
      "ko": [
        "컨테이너가 root로 실행되도록 허용",
        "프로세스가 부모 프로세스보다 더 많은 권한을 얻을 수 있는지 제어",
        "컨테이너의 privileged 모드 활성화",
        "호스트 디렉터리 마운트 허용",
        "컨테이너의 모든 capability 비활성화"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'allowPrivilegeEscalation' field in a Kubernetes pod's security context controls whether a process can gain more privileges than its parent process. This setting is crucial for security as it prevents potential privilege escalation attacks by limiting the capabilities of processes within a container.",
      "ko": "'allowPrivilegeEscalation'은 프로세스가 부모 프로세스보다 더 많은 권한을 얻을 수 있는지 제어합니다. 컨테이너 내부 프로세스의 capability를 제한해 권한 상승 공격을 막는 데 중요합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-155",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes object specifically controls inbound/outbound network traffic between Pods at the IP address and port level?",
      "ko": "IP 주소와 포트 수준에서 Pod 간 인바운드/아웃바운드 네트워크 트래픽을 제어하는 Kubernetes 객체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "NetworkPolicy",
        "Ingress",
        "Service",
        "Endpoint",
        "FirewallRule"
      ],
      "ko": [
        "NetworkPolicy",
        "Ingress",
        "Service",
        "Endpoint",
        "FirewallRule"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "NetworkPolicy objects define granular rules for Pod-to-Pod communication, including allowed ingress/egress traffic. While Services enable network access to Pods and Ingress manages external HTTP(S) routing, NetworkPolicy provides critical microsegmentation capabilities for zero-trust security architectures.",
      "ko": "NetworkPolicy 객체는 허용할 ingress와 egress를 포함해 Pod 간 통신의 세밀한 규칙을 정의합니다. Service는 Pod 접근을 제공하고 Ingress는 외부 HTTP(S) 라우팅을 관리하므로, 제로 트러스트의 핵심 마이크로세그멘테이션은 NetworkPolicy가 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-156",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Cloud Provider and Infrastructure Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "To prevent Pods from accessing the cloud provider's metadata API, which IP address should be blocked in a Kubernetes NetworkPolicy?",
      "ko": "Pod가 클라우드 제공자의 메타데이터 API에 접근하지 못하게 하려면 Kubernetes NetworkPolicy에서 어느 IP 주소를 차단해야 합니까?"
    },
    "choices": {
      "en": [
        "0.0.0.0/0",
        "127.0.0.1/32",
        "169.254.169.254/32",
        "255.255.255.255/32",
        "192.168.0.1/32"
      ],
      "ko": [
        "0.0.0.0/0",
        "127.0.0.1/32",
        "169.254.169.254/32",
        "255.255.255.255/32",
        "192.168.0.1/32"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The IP address 169.254.169.254 is the standard link-local address used by cloud providers (such as AWS, GCP, Azure) for their metadata service. Blocking this IP in a NetworkPolicy prevents Pods from querying sensitive metadata, mitigating risks like metadata service exploitation. Other IPs listed do not correspond to the cloud metadata service.",
      "ko": "169.254.169.254는 AWS, GCP, Azure 등 클라우드 제공자의 메타데이터 서비스에 쓰이는 표준 링크 로컬 주소입니다. NetworkPolicy에서 이를 차단하면 민감한 메타데이터 조회와 메타데이터 서비스 악용 위험을 줄입니다. 나머지는 클라우드 메타데이터 서비스 주소가 아닙니다."
    },
    "ref": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html"
  },
  {
    "id": "kcsa-mock-157",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the correct kubectl command syntax to create a Role named 'pod-reader' with get/watch/list permissions on Pods in the current namespace?",
      "ko": "현재 네임스페이스의 Pod에 get/watch/list 권한을 갖는 'pod-reader' Role을 만드는 올바른 kubectl 구문은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl apply role",
        "kubectl create role pod-reader --verb=get,list,watch --resource=pods",
        "kubectl generate role",
        "kubectl new role",
        "kubectl init role"
      ],
      "ko": [
        "kubectl apply role",
        "kubectl create role pod-reader --verb=get,list,watch --resource=pods",
        "kubectl generate role",
        "kubectl new role",
        "kubectl init role"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'kubectl create role' command with proper flags creates RBAC Roles. The full syntax requires specifying verbs (--verb) and resources (--resource). This command creates non-namespaced Roles; for cluster-wide permissions, use 'kubectl create clusterrole' instead.",
      "ko": "적절한 플래그와 함께 'kubectl create role'을 사용해 RBAC Role을 만듭니다. --verb와 --resource를 지정하며, 이 명령은 네임스페이스 범위의 Role을 생성합니다. 클러스터 전체 권한에는 'kubectl create clusterrole'을 사용합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-158",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which RBAC component links a ClusterRole to all authenticated users across the entire Kubernetes cluster?",
      "ko": "ClusterRole을 클러스터 전체의 모든 인증된 사용자에게 연결하는 RBAC 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "ClusterRoleBinding",
        "RoleBinding",
        "ClusterRole",
        "ServiceAccount",
        "GroupBinding"
      ],
      "ko": [
        "ClusterRoleBinding",
        "RoleBinding",
        "ClusterRole",
        "ServiceAccount",
        "GroupBinding"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "ClusterRoleBinding associates ClusterRoles with subjects (users/groups/serviceaccounts) cluster-wide. This is critical for security as it affects all namespaces. Best practice recommends using RoleBinding with namespaced Roles for least-privilege access.",
      "ko": "ClusterRoleBinding은 ClusterRole을 사용자·그룹·ServiceAccount 주체와 클러스터 전체 범위로 연결합니다. 모든 네임스페이스에 영향을 주므로 보안상 중요하며, 최소 권한을 위해 네임스페이스 범위 RoleBinding 사용이 권장됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/rbac-good-practices/"
  },
  {
    "id": "kcsa-mock-160",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the correct command to base64-encode the string 'admin' for Kubernetes Secret creation, including proper newline handling?",
      "ko": "Kubernetes Secret 생성을 위해 문자열 'admin'을 올바른 개행 처리로 base64 인코딩하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "echo -n 'admin' | base64",
        "echo 'admin' | base64",
        "echo 'admin' | base64encode",
        "base64 'admin'",
        "encode --base64 'admin'"
      ],
      "ko": [
        "echo -n 'admin' | base64",
        "echo 'admin' | base64",
        "echo 'admin' | base64encode",
        "base64 'admin'",
        "encode --base64 'admin'"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The '-n' flag prevents adding a trailing newline character, which is critical for accurate encoding. Kubernetes Secrets require precise base64 encoding without unexpected characters. The resulting output can be used in Secret manifests' data field.",
      "ko": "'-n' 플래그는 후행 개행 문자를 추가하지 않게 하므로 정확한 인코딩에 중요합니다. Kubernetes Secret에는 예상치 못한 문자가 없는 정확한 base64 인코딩이 필요하며 결과를 Secret 매니페스트의 data 필드에 사용할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "kcsa-mock-161",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Networking",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource provides layer 7 (HTTP/HTTPS) routing rules for external access to cluster services while enabling path-based and host-based routing?",
      "ko": "경로 기반 및 호스트 기반 라우팅을 지원하면서 클러스터 Service에 외부 접근을 위한 계층 7(HTTP/HTTPS) 라우팅 규칙을 제공하는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Ingress",
        "Service",
        "Endpoint",
        "NetworkPolicy",
        "LoadBalancer"
      ],
      "ko": [
        "Ingress",
        "Service",
        "Endpoint",
        "NetworkPolicy",
        "LoadBalancer"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Ingress resources define HTTP/HTTPS routing rules and integrate with Ingress controllers to expose services. Services (ClusterIP, NodePort, LoadBalancer) operate at layer 4, while NetworkPolicy controls network traffic flow. LoadBalancer is a Service type, not a separate resource.",
      "ko": "Ingress 리소스는 HTTP/HTTPS 라우팅 규칙을 정의하고 Ingress controller와 통합해 Service를 노출합니다. Service(ClusterIP, NodePort, LoadBalancer)는 계층 4에서 동작하고 NetworkPolicy는 트래픽 흐름을 제어합니다. LoadBalancer는 별도 리소스가 아니라 Service 유형입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "kcsa-mock-162",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes Secret type is required when configuring TLS termination for an Ingress resource?",
      "ko": "Ingress 리소스에서 TLS 종료를 구성할 때 필요한 Kubernetes Secret 유형은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Opaque",
        "kubernetes.io/tls",
        "Docker Registry",
        "Basic Auth",
        "SSH Key"
      ],
      "ko": [
        "Opaque",
        "kubernetes.io/tls",
        "Docker 레지스트리",
        "기본 인증",
        "SSH 키"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "For configuring TLS termination in an Ingress resource, a Secret of type 'kubernetes.io/tls' is required. This type of Secret must contain 'tls.crt' and 'tls.key' entries with PEM-encoded certificates.",
      "ko": "Ingress의 TLS 종료에는 'kubernetes.io/tls' 유형 Secret이 필요합니다. 이 Secret에는 PEM 인코딩 인증서와 키인 'tls.crt' 및 'tls.key' 항목이 있어야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls"
  },
  {
    "id": "kcsa-mock-163",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command correctly creates a TLS secret named 'tls-secret' using the certificate file 'tls.crt' and the key file 'tls.key'?",
      "ko": "인증서 파일 'tls.crt'와 키 파일 'tls.key'로 'tls-secret'이라는 TLS Secret을 만드는 올바른 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl create secret generic tls-secret --from-file=tls.crt --from-file=tls.key",
        "kubectl create secret tls tls-secret --cert=tls.crt --key=tls.key",
        "kubectl create secret docker-registry tls-secret --docker-server=tls.crt --docker-username=tls.key",
        "kubectl create tls-secret tls-secret --cert=tls.crt --key=tls.key",
        "kubectl create secret tls-secret --type=tls --cert=tls.crt --key=tls.key"
      ],
      "ko": [
        "kubectl create secret generic tls-secret --from-file=tls.crt --from-file=tls.key",
        "kubectl create secret tls tls-secret --cert=tls.crt --key=tls.key",
        "kubectl create secret docker-registry tls-secret --docker-server=tls.crt --docker-username=tls.key",
        "kubectl create tls-secret tls-secret --cert=tls.crt --key=tls.key",
        "kubectl create secret tls-secret --type=tls --cert=tls.crt --key=tls.key"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The correct command to create a TLS secret in Kubernetes is 'kubectl create secret tls' followed by the secret name and the paths to the certificate and key files using the --cert and --key flags.",
      "ko": "Kubernetes TLS Secret은 'kubectl create secret tls' 뒤에 Secret 이름과 --cert, --key 플래그로 인증서·키 파일 경로를 지정해 만듭니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets"
  },
  {
    "id": "kcsa-mock-164",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Controls and Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which tool is specifically designed to perform static security analysis of Kubernetes manifests to identify potential security issues?",
      "ko": "Kubernetes 매니페스트를 정적 보안 분석해 잠재적 보안 문제를 찾도록 특별히 설계된 도구는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-bench",
        "kube-hunter",
        "kube-score",
        "kubectl describe",
        "kubesec"
      ],
      "ko": [
        "kube-bench",
        "kube-hunter",
        "kube-score",
        "kubectl describe",
        "kubesec"
      ]
    },
    "answer": 4,
    "explain": {
      "en": "Kubesec is a static analysis tool that scans Kubernetes manifests for security risks and best practices violations before deployment. 'kube-bench' checks cluster nodes against CIS benchmarks, 'kube-hunter' performs active scanning for vulnerabilities, 'kube-score' provides general manifest validation but is less focused on security, and 'kubectl describe' is a CLI command for inspecting resources.",
      "ko": "Kubesec은 배포 전에 Kubernetes 매니페스트를 스캔해 보안 위험과 모범 사례 위반을 찾는 정적 분석 도구입니다. kube-bench는 CIS 벤치마크를 검사하고, kube-hunter는 능동 스캔을 수행하며, kube-score는 보안보다는 일반 매니페스트 검증에 초점을 둡니다. kubectl describe는 리소스 조회 명령입니다."
    },
    "ref": "https://github.com/controlplaneio/kubesec"
  },
  {
    "id": "kcsa-mock-165",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes Pod specification, which field is used to define Linux capabilities for an individual container?",
      "ko": "Kubernetes Pod 사양에서 개별 컨테이너의 Linux capability를 정의하는 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "securityContext.capabilities",
        "spec.capabilities",
        "container.securityContext.capabilities",
        "podSecurityContext.capabilities",
        "linuxOptions.capabilities"
      ],
      "ko": [
        "securityContext.capabilities",
        "spec.capabilities",
        "container.securityContext.capabilities",
        "podSecurityContext.capabilities",
        "linuxOptions.capabilities"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Linux capabilities for containers are specified under the 'securityContext.capabilities' field within the container's specification. This allows fine-grained control over the capabilities added or dropped for that specific container.",
      "ko": "컨테이너 사양의 'securityContext.capabilities'에 Linux capability를 지정합니다. 이를 통해 해당 컨테이너에 추가하거나 제거할 capability를 세밀하게 제어합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-166",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which configuration in a Kubernetes container's securityContext is used to drop all Linux capabilities, effectively removing extra privileges?",
      "ko": "추가 권한을 제거해 모든 Linux capability를 삭제하는 Kubernetes 컨테이너 securityContext 설정은 무엇입니까?"
    },
    "choices": {
      "en": [
        "capabilities: {drop: ['ALL']}",
        "capabilities: {add: ['NONE']}",
        "privileged: false",
        "allowPrivilegeEscalation: false",
        "runAsNonRoot: true"
      ],
      "ko": [
        "capabilities: {drop: ['ALL']}",
        "capabilities: {add: ['NONE']}",
        "privileged: false",
        "allowPrivilegeEscalation: false",
        "runAsNonRoot: true"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "To remove all Linux capabilities from a container, the 'capabilities' field under the container's securityContext should specify 'drop: ['ALL']'. This explicitly drops all added capabilities, minimizing the container's privileges.",
      "ko": "모든 Linux capability를 제거하려면 컨테이너 securityContext의 'capabilities'에 'drop: ['ALL']'을 지정합니다. 이는 모든 추가 capability를 명시적으로 제거해 컨테이너 권한을 최소화합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container"
  },
  {
    "id": "kcsa-mock-167",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes admission controller specifically restricts kubelets to only modify their own Node API objects and Pod objects bound to their node?",
      "ko": "kubelet이 자신의 Node API 객체와 자신에게 바인딩된 Pod 객체만 수정하도록 제한하는 Kubernetes admission controller는 무엇입니까?"
    },
    "choices": {
      "en": [
        "NodeRestriction",
        "LimitRanger",
        "NamespaceLifecycle",
        "ResourceQuota",
        "PodSecurityPolicy"
      ],
      "ko": [
        "NodeRestriction",
        "LimitRanger",
        "NamespaceLifecycle",
        "ResourceQuota",
        "PodSecurityPolicy"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The NodeRestriction admission controller limits kubelet permissions to prevent node spoofing and privilege escalation. It ensures kubelets can only modify their own Node API object and Pod objects scheduled on their node, while LimitRanger and ResourceQuota manage resource constraints.",
      "ko": "NodeRestriction은 kubelet 권한을 제한해 노드 위장과 권한 상승을 방지합니다. kubelet은 자신의 Node API 객체와 자신의 노드에 스케줄된 Pod 객체만 수정할 수 있으며, LimitRanger와 ResourceQuota는 리소스 제약을 관리합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "kcsa-mock-168",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the role of the 'namespaceSelector' field in a Kubernetes NetworkPolicy?",
      "ko": "Kubernetes NetworkPolicy에서 'namespaceSelector' 필드의 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To select namespaces where the policy is applied",
        "To select Pods in specific namespaces for ingress or egress rules",
        "To label namespaces",
        "To deny traffic to certain namespaces",
        "To enforce policies across all namespaces"
      ],
      "ko": [
        "정책이 적용되는 네임스페이스 선택",
        "ingress 또는 egress 규칙의 특정 네임스페이스에 있는 Pod 선택",
        "네임스페이스에 레이블 지정",
        "특정 네임스페이스로의 트래픽 거부",
        "모든 네임스페이스에 정책 강제"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'namespaceSelector' in a NetworkPolicy is used to select Pods in specific namespaces as sources or destinations for ingress or egress traffic rules. It does not select the namespaces where the policy itself is applied; NetworkPolicies are always applied within the namespace they are defined. It also does not label namespaces, deny traffic directly, or enforce policies cluster-wide.",
      "ko": "'namespaceSelector'는 ingress 또는 egress 규칙의 출발지나 목적지로 특정 네임스페이스에 있는 Pod를 선택합니다. 정책 자체가 적용될 네임스페이스를 선택하지 않습니다. NetworkPolicy는 정의된 네임스페이스에 적용되며 네임스페이스에 레이블을 지정하거나 직접 트래픽을 거부하거나 클러스터 전체에 강제하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource"
  },
  {
    "id": "kcsa-mock-171",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "If Kubernetes audit logs are stored at '/var/log/kubernetes/audit.log', which command can you use to view these logs in real time?",
      "ko": "Kubernetes 감사 로그가 '/var/log/kubernetes/audit.log'에 저장될 때 실시간으로 보는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl logs audit",
        "sudo tail -f /var/log/kubernetes/audit.log",
        "kubectl get events --audit",
        "journalctl -u kube-apiserver",
        "kubectl describe audit-logs"
      ],
      "ko": [
        "kubectl logs audit",
        "sudo tail -f /var/log/kubernetes/audit.log",
        "kubectl get events --audit",
        "journalctl -u kube-apiserver",
        "kubectl describe audit-logs"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Audit logs written to a file such as '/var/log/kubernetes/audit.log' can be viewed in real time using the 'tail -f' command with appropriate permissions, hence 'sudo tail -f /var/log/kubernetes/audit.log'. The 'kubectl logs' command is used for container logs, not audit logs stored on the host. 'kubectl get events --audit' and 'kubectl describe audit-logs' are invalid commands. 'journalctl -u kube-apiserver' shows the kube-apiserver service logs but may not include audit logs if they are configured to a separate file.",
      "ko": "'/var/log/kubernetes/audit.log' 같은 파일에 기록된 감사 로그는 적절한 권한으로 'sudo tail -f /var/log/kubernetes/audit.log'를 실행해 실시간으로 볼 수 있습니다. kubectl logs는 컨테이너 로그용이고 나머지 kubectl 명령은 유효하지 않습니다. 'journalctl -u kube-apiserver'는 서비스 로그를 보여주지만 별도 파일로 설정된 감사 로그를 포함하지 않을 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "kcsa-mock-172",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following are critical security hardening measures for the Kubernetes API server? (Select all that apply)",
      "ko": "Kubernetes API 서버의 중요한 보안 강화 조치는 무엇입니까? (해당하는 것을 모두 선택)"
    },
    "choices": {
      "en": [
        "Disable anonymous authentication",
        "Enable RBAC authorization",
        "Allow all admission controllers",
        "Enable etcd encryption for secrets",
        "Use insecure port for API communication"
      ],
      "ko": [
        "익명 인증 비활성화",
        "RBAC 권한 부여 활성화",
        "모든 admission controller 허용",
        "Secret에 대한 etcd 암호화 활성화",
        "API 통신에 비보안 포트 사용"
      ]
    },
    "answer": [
      0,
      1,
      3
    ],
    "explain": {
      "en": "Disabling anonymous authentication prevents unauthorized access, RBAC enables granular permissions, and etcd encryption protects sensitive data. Allowing all admission controllers (including deprecated ones) and using insecure ports would reduce security. The insecure port (--insecure-port) is deprecated and should be disabled.",
      "ko": "익명 인증 비활성화는 무단 접근을 막고, RBAC는 세밀한 권한을 제공하며, etcd 암호화는 민감한 데이터를 보호합니다. 폐기된 controller를 포함해 모든 admission controller를 허용하는 것과 비보안 포트 사용은 보안을 낮춥니다. 비보안 포트(--insecure-port)는 더 이상 사용되지 않으므로 비활성화해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-173",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Scheduler",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes control plane component is exclusively responsible for evaluating scheduling constraints and binding Pods to appropriate worker nodes?",
      "ko": "스케줄링 제약을 평가하고 Pod를 적절한 워커 노드에 바인딩하는 일만 전담하는 Kubernetes control plane 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-controller-manager",
        "kube-scheduler",
        "kube-apiserver",
        "kubelet",
        "etcd"
      ],
      "ko": [
        "kube-controller-manager",
        "kube-scheduler",
        "kube-apiserver",
        "kubelet",
        "etcd"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The kube-scheduler evaluates Pod specifications against node resources, taints/tolerations, and affinity/anti-affinity rules to select optimal nodes. The kube-controller-manager handles node lifecycle controllers, while kubelets manage Pod execution on worker nodes.",
      "ko": "kube-scheduler는 Pod 사양을 노드 리소스, taint/toleration, affinity/anti-affinity와 비교해 최적 노드를 선택합니다. kube-controller-manager는 노드 수명 주기 controller를 처리하고 kubelet은 워커 노드에서 Pod를 실행합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
  },
  {
    "id": "kcsa-mock-174",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes, which resource allows multiple containers to share the same network stack, enabling them to communicate using 'localhost'?",
      "ko": "여러 컨테이너가 같은 네트워크 스택을 공유해 'localhost'로 통신하도록 하는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Deployment",
        "DaemonSet",
        "Pod",
        "Service",
        "StatefulSet"
      ],
      "ko": [
        "Deployment",
        "DaemonSet",
        "Pod",
        "Service",
        "StatefulSet"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A Pod in Kubernetes is the smallest deployable unit that can host one or more containers. Containers within the same Pod share the same network stack, including the same IP address and port space. This allows them to communicate with each other using 'localhost'. Other resources like Deployment, DaemonSet, Service, and StatefulSet are higher-level abstractions that manage Pods but do not define such shared networking behavior directly.",
      "ko": "Pod는 하나 이상의 컨테이너를 호스팅하는 가장 작은 배포 단위입니다. 같은 Pod의 컨테이너는 같은 IP 주소와 포트 공간을 포함한 네트워크 스택을 공유하므로 'localhost'로 통신할 수 있습니다. Deployment, DaemonSet, Service, StatefulSet은 Pod를 관리하는 상위 추상화이며 이러한 공유 네트워킹 동작을 직접 정의하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/"
  },
  {
    "id": "kcsa-mock-175",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes container's securityContext, which field prevents processes from gaining elevated privileges through privilege escalation?",
      "ko": "Kubernetes 컨테이너 securityContext에서 프로세스가 권한 상승으로 높은 권한을 얻지 못하게 하는 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "runAsUser: 0",
        "privileged: false",
        "allowPrivilegeEscalation: false",
        "runAsNonRoot: false",
        "readOnlyRootFilesystem: true"
      ],
      "ko": [
        "runAsUser: 0",
        "privileged: false",
        "allowPrivilegeEscalation: false",
        "runAsNonRoot: false",
        "readOnlyRootFilesystem: true"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The 'allowPrivilegeEscalation' field, when set to false, prevents a process from gaining more privileges than its parent process, effectively blocking privilege escalation attacks. Setting 'privileged' to false disables privileged mode but does not specifically prevent privilege escalation. 'runAsUser: 0' runs the container as root, which does not prevent privilege escalation. 'runAsNonRoot: false' allows running as root, so it doesn't prevent privilege escalation. 'readOnlyRootFilesystem: true' restricts filesystem writes but does not control privilege escalation.",
      "ko": "'allowPrivilegeEscalation: false'는 프로세스가 부모보다 많은 권한을 얻지 못하게 해 권한 상승 공격을 막습니다. privileged 비활성화는 특정 권한 상승을 직접 제어하지 않고, runAsUser: 0은 root 실행이며, runAsNonRoot: false는 root를 허용합니다. readOnlyRootFilesystem은 파일 쓰기만 제한합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-176",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Auditing",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resources, if compromised, could lead to significant security breaches and should be audited carefully? (Select all that apply)",
      "ko": "손상되면 중대한 보안 침해로 이어질 수 있어 주의 깊게 감사해야 하는 Kubernetes 리소스는 무엇입니까? (해당하는 것을 모두 선택)"
    },
    "choices": {
      "en": [
        "Secrets",
        "ConfigMaps",
        "Pods",
        "ServiceAccounts",
        "PersistentVolumes"
      ],
      "ko": [
        "Secrets",
        "ConfigMaps",
        "Pods",
        "ServiceAccounts",
        "PersistentVolumes"
      ]
    },
    "answer": [
      0,
      3
    ],
    "explain": {
      "en": "Secrets and ServiceAccounts are considered sensitive Kubernetes resources because they often contain confidential information such as credentials, API keys, and tokens. If compromised, these resources can lead to unauthorized access, privilege escalation, or data breaches. ConfigMaps generally contain non-sensitive configuration data and are less critical from a security perspective. While Pods and PersistentVolumes are important, they are not typically audited for sensitive information unless they handle sensitive data explicitly.",
      "ko": "Secrets와 ServiceAccounts는 자격 증명, API 키, 토큰 같은 기밀 정보를 담을 수 있어 민감합니다. 손상되면 무단 접근, 권한 상승, 데이터 침해가 발생할 수 있습니다. ConfigMaps는 일반적으로 비민감 설정이고, Pod와 PersistentVolume은 명시적으로 민감한 데이터를 처리하지 않는 한 보통 민감 정보 감사 대상이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "kcsa-mock-177",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Standards",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes Admission Controller was deprecated and replaced by Pod Security Admission in Kubernetes version 1.25?",
      "ko": "Kubernetes 1.25에서 폐기되고 Pod Security Admission으로 대체된 Kubernetes Admission Controller는 무엇입니까?"
    },
    "choices": {
      "en": [
        "PodSecurityPolicy",
        "NodeRestriction",
        "AlwaysPullImages",
        "NamespaceLifecycle",
        "LimitRanger"
      ],
      "ko": [
        "PodSecurityPolicy",
        "NodeRestriction",
        "AlwaysPullImages",
        "NamespaceLifecycle",
        "LimitRanger"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "PodSecurityPolicy was deprecated in Kubernetes version 1.25 and replaced by the Pod Security Admission (PSA) controller. The PSA controller provides a simpler and more flexible way to enforce pod security standards, aligning with Kubernetes' evolving security model. Other options, such as NodeRestriction, AlwaysPullImages, NamespaceLifecycle, and LimitRanger, are not related to this deprecation.",
      "ko": "PodSecurityPolicy는 Kubernetes 1.25에서 폐기되고 Pod Security Admission(PSA) controller로 대체되었습니다. PSA는 Pod 보안 표준을 강제하는 더 단순하고 유연한 방법을 제공합니다. 나머지는 이 폐기와 관련이 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "kcsa-mock-178",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Select all that apply: Which Kubernetes object(s) allow you to define a set of rules for validating or mutating admission requests?",
      "ko": "해당하는 것을 모두 선택: admission 요청을 검증하거나 변형하는 규칙 집합을 정의할 수 있는 Kubernetes 객체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "ValidatingWebhookConfiguration",
        "MutatingWebhookConfiguration",
        "AdmissionController",
        "CustomResourceDefinition",
        "WebhookPolicy"
      ],
      "ko": [
        "ValidatingWebhookConfiguration",
        "MutatingWebhookConfiguration",
        "AdmissionController",
        "CustomResourceDefinition",
        "WebhookPolicy"
      ]
    },
    "answer": [
      0,
      1
    ],
    "explain": {
      "en": "`ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` are used to integrate admission webhooks that validate or mutate admission requests. Option 2 (`AdmissionController`) is a general term for the mechanism but not a specific Kubernetes object. Option 3 (`CustomResourceDefinition`) is used to define custom resources, and Option 4 (`WebhookPolicy`) is not a valid Kubernetes object.",
      "ko": "ValidatingWebhookConfiguration과 MutatingWebhookConfiguration은 admission 요청을 검증하거나 변형하는 webhook을 통합합니다. 옵션 2의 AdmissionController는 메커니즘의 일반 명칭이지 특정 객체가 아니며, 옵션 3의 CustomResourceDefinition은 사용자 정의 리소스 정의용이고 옵션 4의 WebhookPolicy는 유효한 Kubernetes 객체가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"
  },
  {
    "id": "kcsa-mock-179",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which field in the Pod spec can you use to disable privilege escalation for all containers in the Pod?",
      "ko": "Pod의 모든 컨테이너에 대해 권한 상승을 비활성화하는 데 사용할 수 있는 Pod spec 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "securityContext.allowPrivilegeEscalation: false",
        "spec.containers.securityContext.allowPrivilegeEscalation: false",
        "podSecurityContext.allowPrivilegeEscalation: false",
        "spec.securityContext.allowPrivilegeEscalation: false",
        "metadata.securityContext.allowPrivilegeEscalation: false"
      ],
      "ko": [
        "securityContext.allowPrivilegeEscalation: false",
        "spec.containers.securityContext.allowPrivilegeEscalation: false",
        "podSecurityContext.allowPrivilegeEscalation: false",
        "spec.securityContext.allowPrivilegeEscalation: false",
        "metadata.securityContext.allowPrivilegeEscalation: false"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The correct field to disable privilege escalation for all containers in a Pod is 'spec.containers.securityContext.allowPrivilegeEscalation: false'. This must be set individually for each container within the Pod, as there is no global 'allowPrivilegeEscalation' setting at the Pod level.",
      "ko": "올바른 필드는 'spec.containers.securityContext.allowPrivilegeEscalation: false'입니다. Pod 수준에 전역 allowPrivilegeEscalation 설정은 없으므로 Pod의 각 컨테이너에 개별적으로 설정해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-180",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the correct command to label a Kubernetes namespace named 'production' with the label 'env=prod'?",
      "ko": "'production'이라는 Kubernetes 네임스페이스에 'env=prod' 레이블을 지정하는 올바른 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl label namespace env=prod production",
        "kubectl label namespace production env=prod",
        "kubectl annotate namespace production env=prod",
        "kubectl label namespaces env=prod production",
        "kubectl set label namespace production env=prod"
      ],
      "ko": [
        "kubectl label namespace env=prod production",
        "kubectl label namespace production env=prod",
        "kubectl annotate namespace production env=prod",
        "kubectl label namespaces env=prod production",
        "kubectl set label namespace production env=prod"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "To label a Kubernetes namespace, you use the `kubectl label` command. The correct syntax is `kubectl label namespace <namespace_name> <label_key>=<label_value>`. Therefore, to label the 'production' namespace with 'env=prod', you would use `kubectl label namespace production env=prod`. This command updates the namespace with the specified label, which can be useful for organizing and filtering resources within your cluster.",
      "ko": "네임스페이스 레이블에는 `kubectl label namespace <namespace_name> <label_key>=<label_value>` 구문을 사용합니다. 따라서 `kubectl label namespace production env=prod`가 올바르며, 네임스페이스를 업데이트해 리소스 구성과 필터링에 사용할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/overview/"
  },
  {
    "id": "kcsa-mock-181",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes NetworkPolicy, which selector is used to specify the Pods to which the policy applies?",
      "ko": "Kubernetes NetworkPolicy에서 정책이 적용되는 Pod를 지정하는 selector는 무엇입니까?"
    },
    "choices": {
      "en": [
        "podSelector",
        "namespaceSelector",
        "policySelector",
        "matchLabels",
        "appSelector"
      ],
      "ko": [
        "podSelector",
        "namespaceSelector",
        "policySelector",
        "matchLabels",
        "appSelector"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The 'podSelector' field in a NetworkPolicy defines the set of Pods that the policy applies to by selecting Pods based on labels. 'namespaceSelector' selects namespaces, not Pods. 'policySelector' is not a valid field in NetworkPolicy. 'matchLabels' is a label selector syntax used inside 'podSelector' but is not itself a selector field. 'appSelector' is not a standard Kubernetes selector field.",
      "ko": "NetworkPolicy의 'podSelector'는 레이블에 따라 정책이 적용되는 Pod 집합을 정의합니다. namespaceSelector는 네임스페이스를 선택하고, policySelector와 appSelector는 표준 필드가 아닙니다. matchLabels는 podSelector 내부의 구문이지 자체 selector 필드가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-182",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes NetworkPolicy specification, which field defines the allowed egress destinations for Pods?",
      "ko": "Kubernetes NetworkPolicy 사양에서 Pod에 허용되는 egress 목적지를 정의하는 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "ingress",
        "egress",
        "to",
        "from",
        "destinations"
      ],
      "ko": [
        "ingress",
        "egress",
        "to",
        "from",
        "destinations"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'egress' field in a NetworkPolicy spec specifies the rules that allow outbound traffic from selected Pods to specified destinations. The 'ingress' field defines allowed inbound traffic. 'to' is a subfield inside 'egress' rules specifying destination peers but is not the top-level field defining egress rules. 'from' is used in ingress rules to specify source peers. 'destinations' is not a valid field in NetworkPolicy.",
      "ko": "'egress'는 선택된 Pod에서 지정 목적지로 나가는 트래픽을 허용하는 규칙을 정의합니다. ingress는 인바운드 규칙이고, to는 egress 규칙 내부 목적지 peer의 하위 필드이며, from은 ingress의 출발지입니다. destinations는 유효한 필드가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-183",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following are valid components of a Kubernetes audit policy? (Select all that apply)",
      "ko": "다음 중 Kubernetes 감사 정책의 유효한 구성 요소는 무엇입니까? (해당하는 것을 모두 선택)"
    },
    "choices": {
      "en": [
        "Rules",
        "Levels",
        "Stages",
        "Users",
        "Verbs"
      ],
      "ko": [
        "Rules",
        "Levels",
        "Stages",
        "Users",
        "Verbs"
      ]
    },
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explain": {
      "en": "A Kubernetes audit policy is composed of 'Rules' that define what events to capture. Each rule can specify 'Stages' of the request lifecycle (such as RequestReceived, ResponseStarted). 'Users' can be specified to filter audit events by user identity. 'Verbs' define the types of API operations (e.g., get, create) to audit. 'Levels' is not a component of the policy structure but rather a field inside rules specifying the detail level of logging (e.g., None, Metadata).",
      "ko": "감사 정책은 캡처할 이벤트를 정의하는 Rules로 구성됩니다. 각 규칙은 요청 수명 주기의 Stages를 지정할 수 있고, Users로 사용자별 필터링을 하며, Verbs로 감사할 API 작업을 정의합니다. Levels는 정책 구조의 구성 요소가 아니라 규칙 안에서 None이나 Metadata 같은 로그 상세 수준을 지정하는 필드입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "kcsa-mock-184",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes audit policy, which 'level' setting logs only metadata about requests but excludes the request and response bodies?",
      "ko": "Kubernetes 감사 정책에서 요청 및 응답 본문은 제외하고 요청 메타데이터만 기록하는 'level' 설정은 무엇입니까?"
    },
    "choices": {
      "en": [
        "None",
        "Metadata",
        "Request",
        "RequestResponse",
        "Minimal"
      ],
      "ko": [
        "None",
        "Metadata",
        "Request",
        "RequestResponse",
        "Minimal"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'Metadata' audit level records request metadata such as request method, resource, user, and timestamp but does not log the request or response bodies. 'None' disables logging. 'Request' logs the request body but not the response. 'RequestResponse' logs both request and response bodies. 'Minimal' is not a standard audit level in Kubernetes.",
      "ko": "'Metadata' 수준은 요청 방법, 리소스, 사용자, 타임스탬프 등 요청 메타데이터만 기록하고 본문은 기록하지 않습니다. None은 로깅을 끄고, Request는 요청 본문을, RequestResponse는 요청과 응답 본문을 기록합니다. Minimal은 표준 Kubernetes 감사 수준이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "kcsa-mock-185",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which tool is specifically designed to benchmark a Kubernetes cluster against the Center for Internet Security (CIS) Kubernetes Benchmark best practices?",
      "ko": "Kubernetes 클러스터를 Center for Internet Security(CIS) Kubernetes Benchmark 모범 사례와 비교해 벤치마크하도록 설계된 도구는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-bench",
        "kube-hunter",
        "kubesec",
        "kube-score",
        "kube-linter"
      ],
      "ko": [
        "kube-bench",
        "kube-hunter",
        "kubesec",
        "kube-score",
        "kube-linter"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kube-bench is a tool that runs checks against the CIS Kubernetes Benchmark, which is a set of best practices for securing Kubernetes clusters. It audits cluster components and configuration to identify security issues. Other tools like kube-hunter focus on penetration testing, kubesec and kube-score analyze resource configurations but do not perform CIS benchmark compliance checks, and kube-linter is a static analysis tool for Kubernetes manifests.",
      "ko": "kube-bench는 Kubernetes 클러스터 보안을 위한 모범 사례 집합인 CIS Kubernetes Benchmark에 대해 검사를 실행합니다. 클러스터 구성 요소와 설정을 감사해 보안 문제를 찾습니다. kube-hunter는 침투 테스트, kubesec과 kube-score는 리소스 구성 분석을 수행하지만 CIS 준수 검사는 하지 않으며, kube-linter는 Kubernetes 매니페스트 정적 분석 도구입니다."
    },
    "ref": "https://github.com/aquasecurity/kube-bench"
  },
  {
    "id": "kcsa-mock-186",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource enables automatic horizontal scaling of Pods based on observed CPU utilization?",
      "ko": "관찰된 CPU 사용률을 기준으로 Pod를 자동 수평 확장하는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "HorizontalPodAutoscaler",
        "VerticalPodAutoscaler",
        "ResourceQuota",
        "LimitRange",
        "Deployment"
      ],
      "ko": [
        "HorizontalPodAutoscaler",
        "VerticalPodAutoscaler",
        "ResourceQuota",
        "LimitRange",
        "Deployment"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The HorizontalPodAutoscaler (HPA) automatically adjusts the number of pod replicas in a deployment or replica set based on observed CPU utilization or other select metrics. VerticalPodAutoscaler adjusts resource requests and limits for containers rather than scaling pod count. ResourceQuota and LimitRange control resource usage limits but do not perform scaling. Deployment manages pod lifecycle but does not scale automatically based on CPU.",
      "ko": "HorizontalPodAutoscaler(HPA)는 관찰된 CPU 사용률이나 선택한 지표에 따라 Deployment 또는 ReplicaSet의 Pod replica 수를 자동 조정합니다. VerticalPodAutoscaler는 컨테이너 요청·제한을 조정하고, ResourceQuota와 LimitRange는 사용량 제한을 관리하며, Deployment는 CPU 기반 자동 확장을 하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "kcsa-mock-188",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes, which securityContext setting ensures that a container runs as a non-root user to enhance security?",
      "ko": "컨테이너가 비-root 사용자로 실행되도록 보장하는 Kubernetes securityContext 설정은 무엇입니까?"
    },
    "choices": {
      "en": [
        "runAsUser: 0",
        "runAsNonRoot: true",
        "runAsGroup: 0",
        "allowPrivilegeEscalation: false",
        "privileged: false"
      ],
      "ko": [
        "runAsUser: 0",
        "runAsNonRoot: true",
        "runAsGroup: 0",
        "allowPrivilegeEscalation: false",
        "privileged: false"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'runAsNonRoot: true' setting enforces that the container must run as a non-root user, preventing it from running with UID 0 (root). This enhances security by limiting container privileges. 'runAsUser: 0' explicitly sets the user to root, which is insecure. 'runAsGroup: 0' sets the group ID but doesn't enforce non-root user. 'allowPrivilegeEscalation: false' prevents privilege escalation but does not enforce non-root user. 'privileged: false' disables privileged mode but does not guarantee a non-root user.",
      "ko": "'runAsNonRoot: true'는 컨테이너가 UID 0(root)으로 실행되지 않도록 강제합니다. runAsUser: 0은 root를 지정하고, runAsGroup: 0은 그룹 ID만 설정하며, allowPrivilegeEscalation과 privileged는 비-root 실행을 보장하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-189",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Select all that apply: Which command(s) can be used to list all ServiceAccounts in the 'dev' namespace?",
      "ko": "해당하는 것을 모두 선택: 'dev' 네임스페이스의 모든 ServiceAccount를 나열하는 데 사용할 수 있는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get sa -n dev",
        "kubectl get serviceaccount -A",
        "kubectl get serviceaccounts --namespace=dev",
        "kubectl describe serviceaccounts -n dev",
        "kubectl list sa dev"
      ],
      "ko": [
        "kubectl get sa -n dev",
        "kubectl get serviceaccount -A",
        "kubectl get serviceaccounts --namespace=dev",
        "kubectl describe serviceaccounts -n dev",
        "kubectl list sa dev"
      ]
    },
    "answer": [
      0,
      2,
      3
    ],
    "explain": {
      "en": "The commands `kubectl get sa -n dev`, `kubectl get serviceaccounts --namespace=dev`, and `kubectl describe serviceaccounts -n dev` all list ServiceAccounts in the 'dev' namespace. The first two provide a summary list, while `kubectl describe` provides detailed information about each ServiceAccount. Option 1 (`kubectl get serviceaccount -A`) lists ServiceAccounts across all namespaces, and Option 4 (`kubectl list sa dev`) is not a valid `kubectl` command.",
      "ko": "`kubectl get sa -n dev`, `kubectl get serviceaccounts --namespace=dev`, `kubectl describe serviceaccounts -n dev`는 모두 dev 네임스페이스의 ServiceAccount를 나열합니다. 처음 두 개는 요약 목록을, describe는 각 ServiceAccount의 상세 정보를 제공합니다. `-A`는 모든 네임스페이스를 나열하고 `kubectl list`는 유효하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/overview/"
  },
  {
    "id": "kcsa-mock-190",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authentication",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes Pod specification, which field is used to specify the ServiceAccount under which the Pod should run?",
      "ko": "Pod가 실행될 ServiceAccount를 지정하는 Kubernetes Pod 사양 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "serviceAccount",
        "serviceAccountName",
        "accountName",
        "saName",
        "serviceAccountSpec"
      ],
      "ko": [
        "serviceAccount",
        "serviceAccountName",
        "accountName",
        "saName",
        "serviceAccountSpec"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The correct field is 'serviceAccountName', which defines the name of the ServiceAccount that the Pod uses for authentication and authorization. The other options are incorrect as they are not valid Pod spec fields. 'serviceAccount' and 'accountName' do not exist in the Pod spec. 'saName' and 'serviceAccountSpec' are not recognized fields.",
      "ko": "올바른 필드는 'serviceAccountName'이며, Pod가 인증과 권한 부여에 사용하는 ServiceAccount의 이름을 정의합니다. 다른 선택지는 유효한 Pod spec 필드가 아니므로 틀렸습니다. 'serviceAccount'와 'accountName'은 Pod spec에 존재하지 않으며, 'saName'과 'serviceAccountSpec'은 인식되는 필드가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"
  },
  {
    "id": "kcsa-mock-192",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes object defines cluster-wide permissions and roles that can be assigned to users or service accounts?",
      "ko": "클러스터 전체 권한과 사용자 또는 ServiceAccount에 할당할 수 있는 역할을 정의하는 Kubernetes 객체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Role",
        "ClusterRole",
        "RoleBinding",
        "ClusterRoleBinding",
        "ServiceAccount"
      ],
      "ko": [
        "Role",
        "ClusterRole",
        "RoleBinding",
        "ClusterRoleBinding",
        "ServiceAccount"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "'ClusterRole' defines permissions that apply across the entire Kubernetes cluster, allowing for cluster-wide access control. In contrast, 'Role' defines permissions scoped to a specific namespace. 'RoleBinding' and 'ClusterRoleBinding' are used to assign Roles or ClusterRoles to users or service accounts but do not define permissions themselves. 'ServiceAccount' represents an identity for processes running in Pods, not permissions.",
      "ko": "'ClusterRole'은 클러스터 전체에 적용되는 권한을 정의합니다. Role은 특정 네임스페이스 범위이고, RoleBinding과 ClusterRoleBinding은 권한을 정의하지 않고 Role 또는 ClusterRole을 주체에 할당합니다. ServiceAccount는 Pod 프로세스의 ID이지 권한 자체가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-193",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What command should you use to delete all pods within a Kubernetes namespace named 'test'?",
      "ko": "'test'라는 Kubernetes 네임스페이스 안의 모든 Pod를 삭제하려면 어떤 명령을 사용해야 합니까?"
    },
    "choices": {
      "en": [
        "kubectl delete pods --all -n test",
        "kubectl delete pod -A",
        "kubectl delete pods -n test",
        "kubectl remove pods --namespace=test",
        "kubectl delete pods * -n test"
      ],
      "ko": [
        "kubectl delete pods --all -n test",
        "kubectl delete pod -A",
        "kubectl delete pods -n test",
        "kubectl remove pods --namespace=test",
        "kubectl delete pods * -n test"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "To delete all pods in a specific namespace, you use the `kubectl delete pods` command with the `--all` flag to specify all pods, and the `-n` flag to specify the namespace. The correct command is `kubectl delete pods --all -n test`. This command will delete all pods in the 'test' namespace, which can be useful for cleaning up resources or resetting a namespace.",
      "ko": "특정 네임스페이스의 모든 Pod를 삭제하려면 `kubectl delete pods`에 모든 Pod를 뜻하는 `--all`과 네임스페이스를 뜻하는 `-n`을 함께 사용합니다. 올바른 명령은 `kubectl delete pods --all -n test`이며, 리소스를 정리하거나 네임스페이스를 초기화할 때 유용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/"
  },
  {
    "id": "kcsa-mock-195",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following securityContext fields are commonly applied at the Pod level in Kubernetes? (Select all that apply)",
      "ko": "Kubernetes에서 Pod 수준에 일반적으로 적용되는 securityContext 필드는 무엇입니까? (해당하는 것을 모두 선택)"
    },
    "choices": {
      "en": [
        "runAsUser",
        "fsGroup",
        "privileged",
        "capabilities",
        "seLinuxOptions"
      ],
      "ko": [
        "runAsUser",
        "fsGroup",
        "privileged",
        "capabilities",
        "seLinuxOptions"
      ]
    },
    "answer": [
      0,
      1,
      4
    ],
    "explain": {
      "en": "At the Pod level, 'runAsUser' specifies the user ID for all containers in the Pod, 'fsGroup' sets the group ID for mounted volumes, and 'seLinuxOptions' configures SELinux labels for the Pod. 'privileged' and 'capabilities' are container-level settings and cannot be set at the Pod level. Therefore, only 'runAsUser', 'fsGroup', and 'seLinuxOptions' are valid Pod-level securityContext fields.",
      "ko": "Pod 수준에서 runAsUser는 모든 컨테이너의 사용자 ID, fsGroup은 마운트 볼륨의 그룹 ID, seLinuxOptions는 Pod의 SELinux 레이블을 설정합니다. privileged와 capabilities는 컨테이너 수준 설정이므로 Pod 수준에 지정할 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-196",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command provides detailed information about a specific Kubernetes node, including its status, capacity, and allocated resources?",
      "ko": "상태, 용량, 할당된 리소스 등 특정 Kubernetes 노드의 상세 정보를 제공하는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get node <node-name>",
        "kubectl describe node <node-name>",
        "kubectl inspect node <node-name>",
        "kubectl info node <node-name>",
        "kubectl logs node <node-name>"
      ],
      "ko": [
        "kubectl get node <node-name>",
        "kubectl describe node <node-name>",
        "kubectl inspect node <node-name>",
        "kubectl info node <node-name>",
        "kubectl logs node <node-name>"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The command 'kubectl describe node <node-name>' shows detailed information about the node, such as labels, annotations, resource capacity, allocated resources, conditions, and events. 'kubectl get node' provides a summary list of nodes but not detailed info. 'kubectl inspect' and 'kubectl info' are not valid kubectl commands for nodes. 'kubectl logs' is used for retrieving logs from pods, not nodes.",
      "ko": "'kubectl describe node <node-name>'은 레이블, 어노테이션, 리소스 용량과 할당량, 조건, 이벤트 등 상세 정보를 보여줍니다. get은 요약만 제공하고 inspect와 info는 유효한 노드 명령이 아니며 logs는 Pod 로그용입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/nodes/"
  },
  {
    "id": "kcsa-mock-197",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which flag combination with the 'kubectl run' command generates a Pod manifest in YAML format without actually creating the Pod resource in the cluster?",
      "ko": "'kubectl run'으로 Pod를 실제 생성하지 않고 YAML 형식의 Pod 매니페스트를 생성하는 플래그 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "--dry-run=server",
        "--dry-run=client -o yaml",
        "--output=yaml",
        "--generate-only",
        "--no-create"
      ],
      "ko": [
        "--dry-run=server",
        "--dry-run=client -o yaml",
        "--output=yaml",
        "--generate-only",
        "--no-create"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Using '--dry-run=client -o yaml' with 'kubectl run' simulates the creation of the Pod resource on the client side and outputs the manifest in YAML format without sending it to the API server, thus not creating the resource. '--dry-run=server' validates on the server side but does not output YAML by default. '--output=yaml' alone does not prevent creation. '--generate-only' and '--no-create' are deprecated or invalid flags.",
      "ko": "'kubectl run'에 '--dry-run=client -o yaml'을 사용하면 클라이언트에서 Pod 생성을 시뮬레이션하고 API 서버에 보내지 않은 채 YAML 매니페스트를 출력합니다. server dry-run은 서버 검증용이고 기본적으로 YAML을 출력하지 않으며, output만으로는 생성이 막히지 않습니다. generate-only와 no-create는 폐기되었거나 유효하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run"
  },
  {
    "id": "kcsa-mock-198",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes object is used to persist data across the lifecycle of a pod?",
      "ko": "Pod 수명 주기 전반에서 데이터를 유지하는 데 사용되는 Kubernetes 객체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "PersistentVolume",
        "ConfigMap",
        "Secret",
        "PersistentVolumeClaim",
        "EmptyDir"
      ],
      "ko": [
        "PersistentVolume",
        "ConfigMap",
        "Secret",
        "PersistentVolumeClaim",
        "EmptyDir"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A PersistentVolume (PV) is a Kubernetes resource that provides persistent storage for data that needs to be preserved across pod lifecycles. Unlike data stored in an EmptyDir or other ephemeral storage, data in a PersistentVolume remains available even if the pod is deleted or recreated. PersistentVolumeClaims (PVCs) are used to request storage resources from PersistentVolumes, but the PV itself is the resource that holds the data.",
      "ko": "PersistentVolume(PV)은 Pod 수명 주기 사이에도 보존해야 하는 데이터를 위한 영구 스토리지를 제공합니다. EmptyDir 같은 임시 스토리지와 달리 Pod가 삭제·재생성되어도 데이터가 남습니다. PVC는 PV에서 스토리지를 요청하지만 실제 데이터를 보유하는 리소스는 PV입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
  },
  {
    "id": "kcsa-mock-199",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command is used to apply configuration changes defined in 'deployment.yaml' to a Kubernetes resource?",
      "ko": "'deployment.yaml'에 정의된 구성 변경을 Kubernetes 리소스에 적용하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl create -f deployment.yaml",
        "kubectl apply -f deployment.yaml",
        "kubectl set -f deployment.yaml",
        "kubectl update -f deployment.yaml",
        "kubectl replace -f deployment.yaml"
      ],
      "ko": [
        "kubectl create -f deployment.yaml",
        "kubectl apply -f deployment.yaml",
        "kubectl set -f deployment.yaml",
        "kubectl update -f deployment.yaml",
        "kubectl replace -f deployment.yaml"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'kubectl apply -f deployment.yaml' command applies configuration changes to a Kubernetes resource defined in the YAML file. It uses declarative management, ensuring that the resource's current state matches the desired state specified in the file. Other commands like 'kubectl create' are used for creating resources but do not update existing ones, while 'kubectl replace' replaces the entire resource instead of merging changes.",
      "ko": "'kubectl apply -f deployment.yaml'은 YAML에 정의된 리소스에 구성 변경을 적용합니다. 선언적 관리로 현재 상태를 원하는 상태와 일치시키며, create는 리소스 생성용이라 기존 리소스를 업데이트하지 않고 replace는 변경을 병합하지 않고 전체 리소스를 교체합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#apply"
  },
  {
    "id": "kcsa-mock-200",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes container's securityContext, which field allows you to add specific Linux capabilities to the container?",
      "ko": "Kubernetes 컨테이너 securityContext에서 특정 Linux capability를 컨테이너에 추가할 수 있는 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "addCapabilities",
        "linuxCapabilities",
        "capabilities.add",
        "securityOptions",
        "privilegedCaps"
      ],
      "ko": [
        "addCapabilities",
        "linuxCapabilities",
        "capabilities.add",
        "securityOptions",
        "privilegedCaps"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The correct field is 'capabilities.add', which is a list under the container's securityContext that specifies which Linux capabilities to add to the container's default set. 'addCapabilities' and 'linuxCapabilities' are incorrect field names. 'securityOptions' and 'privilegedCaps' are not valid Kubernetes securityContext fields.",
      "ko": "올바른 필드는 컨테이너 securityContext의 목록인 'capabilities.add'이며 기본 capability 집합에 추가할 Linux capability를 지정합니다. addCapabilities와 linuxCapabilities는 잘못된 필드명이고 securityOptions와 privilegedCaps도 유효한 Kubernetes securityContext 필드가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container"
  },
  {
    "id": "kcsa-mock-202",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "If the Kubernetes API server is not responding, which configuration file should you check for possible misconfigurations?",
      "ko": "Kubernetes API 서버가 응답하지 않을 때, 잘못된 설정 가능성을 확인해야 하는 구성 파일은 무엇입니까?"
    },
    "choices": {
      "en": [
        "/var/log/kube-apiserver.log",
        "/etc/kubernetes/manifests/kube-scheduler.yaml",
        "/etc/kubernetes/manifests/kube-apiserver.yaml",
        "/etc/kubernetes/config/apiserver.conf",
        "/var/lib/kubelet/config.yaml"
      ],
      "ko": [
        "/var/log/kube-apiserver.log",
        "/etc/kubernetes/manifests/kube-scheduler.yaml",
        "/etc/kubernetes/manifests/kube-apiserver.yaml",
        "/etc/kubernetes/config/apiserver.conf",
        "/var/lib/kubelet/config.yaml"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The Kubernetes API server's configuration is typically defined in its static pod manifest, which is usually located at `/etc/kubernetes/manifests/kube-apiserver.yaml`. This file contains the configuration for the API server, including any custom settings or overrides that might be causing issues. Checking this file can help identify misconfigurations that could be preventing the API server from responding.",
      "ko": "Kubernetes API 서버의 설정은 일반적으로 정적 Pod 매니페스트에 정의되며, 이 매니페스트는 보통 `/etc/kubernetes/manifests/kube-apiserver.yaml`에 있습니다. 이 파일에는 문제를 일으킬 수 있는 사용자 지정 설정이나 재정의 항목을 포함한 API 서버 설정이 들어 있습니다. 파일을 확인하면 API 서버가 응답하지 못하게 하는 잘못된 설정을 찾는 데 도움이 됩니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-203",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation Techniques",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes Pod manifest, which annotation is used to specify an AppArmor profile for a container named 'nginx'?",
      "ko": "Kubernetes Pod 매니페스트에서 'nginx'라는 컨테이너의 AppArmor 프로필을 지정하는 주석은 무엇입니까?"
    },
    "choices": {
      "en": [
        "apparmor.security.beta.kubernetes.io/nginx: 'localhost/nginx-profile'",
        "security.alpha.kubernetes.io/apparmor/nginx: 'localhost/nginx-profile'",
        "container.apparmor.security.beta.kubernetes.io/nginx: 'localhost/nginx-profile'",
        "nginx.apparmor.kubernetes.io/profile: 'localhost/nginx-profile'",
        "securityContext.apparmorProfile: 'localhost/nginx-profile'"
      ],
      "ko": [
        "apparmor.security.beta.kubernetes.io/nginx: 'localhost/nginx-profile'",
        "security.alpha.kubernetes.io/apparmor/nginx: 'localhost/nginx-profile'",
        "container.apparmor.security.beta.kubernetes.io/nginx: 'localhost/nginx-profile'",
        "nginx.apparmor.kubernetes.io/profile: 'localhost/nginx-profile'",
        "securityContext.apparmorProfile: 'localhost/nginx-profile'"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The correct annotation format to specify an AppArmor profile for a container named 'nginx' is 'container.apparmor.security.beta.kubernetes.io/nginx: \"localhost/nginx-profile\"'. This annotation applies the profile to the specific container. Other options are either incorrect prefixes, deprecated, or invalid Kubernetes annotation keys.",
      "ko": "'nginx'라는 컨테이너의 AppArmor 프로필을 지정하는 올바른 어노테이션 형식은 'container.apparmor.security.beta.kubernetes.io/nginx: \"localhost/nginx-profile\"'입니다. 이 어노테이션은 해당 컨테이너에 프로필을 적용합니다. 다른 선택지는 접두사가 잘못되었거나, 사용 중단된 형식이거나, 유효하지 않은 Kubernetes 어노테이션 키입니다."
    },
    "ref": "https://kubernetes.io/docs/tutorials/clusters/apparmor/"
  },
  {
    "id": "kcsa-mock-204",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "To enable audit logging in Kubernetes, which flag must be added to the API server configuration to specify the log file path?",
      "ko": "Kubernetes에서 감사 로깅을 활성화하려면 로그 파일 경로를 지정하기 위해 API 서버 구성에 어떤 플래그를 추가해야 합니까?"
    },
    "choices": {
      "en": [
        "--audit-log-path",
        "--audit-policy-file",
        "--enable-audit",
        "--audit-log-maxage",
        "--audit-log-format"
      ],
      "ko": [
        "--audit-log-path",
        "--audit-policy-file",
        "--enable-audit",
        "--audit-log-maxage",
        "--audit-log-format"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The '--audit-log-path' flag is crucial for enabling audit logging by specifying the path where audit logs will be stored. This allows for the collection and analysis of API requests and responses, which is essential for security auditing and compliance.",
      "ko": "'--audit-log-path' 플래그는 감사 로그를 저장할 경로를 지정하여 감사 로깅을 활성화하는 데 핵심적인 역할을 합니다. 이를 통해 API 요청과 응답을 수집하고 분석할 수 있으며, 이는 보안 감사와 규정 준수에 필수적입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-205",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following steps are necessary to enable audit logging in Kubernetes? (Select all that apply)",
      "ko": "Kubernetes에서 감사 로깅을 활성화하는 데 필요한 단계는 무엇입니까? (해당하는 것을 모두 선택)"
    },
    "choices": {
      "en": [
        "Create an audit policy file",
        "Configure the kubelet with audit flags",
        "Add '--audit-policy-file' flag to API server",
        "Restart the kube-controller-manager",
        "Specify '--audit-log-path' in the API server configuration"
      ],
      "ko": [
        "감사 정책 파일 생성",
        "감사 플래그로 kubelet 구성",
        "API 서버에 '--audit-policy-file' 플래그 추가",
        "kube-controller-manager 재시작",
        "API 서버 구성에 '--audit-log-path' 지정"
      ]
    },
    "answer": [
      0,
      2,
      4
    ],
    "explain": {
      "en": "To enable audit logging in Kubernetes, you must create an audit policy file, specify this file using the '--audit-policy-file' flag in the API server configuration, and define the log path using '--audit-log-path'. These steps ensure that audit logs are properly configured and stored.",
      "ko": "Kubernetes에서 감사 로깅을 활성화하려면 감사 정책 파일을 만들고, API 서버 설정의 '--audit-policy-file' 플래그로 이 파일을 지정하며, '--audit-log-path'로 로그 경로를 정의해야 합니다. 이 단계들을 수행하면 감사 로그가 올바르게 구성되고 저장됩니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug-application-cluster/audit/#audit-policy"
  },
  {
    "id": "kcsa-mock-206",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command is used to generate a 2048-bit RSA private key for a new Kubernetes user?",
      "ko": "새 Kubernetes 사용자를 위한 2048비트 RSA 개인 키를 생성하는 데 사용하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "openssl genrsa -out user.key 2048",
        "openssl rsa -in user.key -out user.key",
        "openssl req -newkey rsa:2048 -nodes -keyout user.key -out user.csr",
        "kubectl create secret tls user.key",
        "ssh-keygen -t rsa -b 2048 -f user.key"
      ],
      "ko": [
        "openssl genrsa -out user.key 2048",
        "openssl rsa -in user.key -out user.key",
        "openssl req -newkey rsa:2048 -nodes -keyout user.key -out user.csr",
        "kubectl create secret tls user.key",
        "ssh-keygen -t rsa -b 2048 -f user.key"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command 'openssl genrsa -out user.key 2048' generates a 2048-bit RSA private key and saves it to 'user.key'. The second command attempts to process an existing key but does not generate a new one. The third command generates a new private key and a certificate signing request (CSR), not just the key. 'kubectl create secret tls' is for creating TLS secrets, not generating keys. 'ssh-keygen' generates SSH keys, which are different from the keys used for Kubernetes user certificates.",
      "ko": "'openssl genrsa -out user.key 2048' 명령은 2048비트 RSA 개인 키를 생성하여 'user.key'에 저장합니다. 두 번째 명령은 기존 키를 처리하려고 하지만 새 키를 생성하지는 않습니다. 세 번째 명령은 개인 키뿐 아니라 새 개인 키와 인증서 서명 요청(CSR)을 함께 생성합니다. 'kubectl create secret tls'는 TLS Secret을 만드는 명령이지 키를 생성하는 명령이 아닙니다. 'ssh-keygen'은 SSH 키를 생성하며, 이는 Kubernetes 사용자 인증서에 사용하는 키와 다릅니다."
    },
    "ref": "https://www.openssl.org/docs/man1.1.1/man1/openssl-genrsa.html"
  },
  {
    "id": "kcsa-mock-207",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "After generating a Certificate Signing Request (CSR) and having it signed by the Kubernetes cluster Certificate Authority (CA), how do you configure kubectl to use the new client certificate and key for the user 'alice'?",
      "ko": "Certificate Signing Request(CSR)를 생성하고 Kubernetes 클러스터 CA가 서명한 후, 사용자 'alice'가 새 클라이언트 인증서와 키를 사용하도록 kubectl을 어떻게 구성합니까?"
    },
    "choices": {
      "en": [
        "kubectl config set-credentials alice --client-certificate=alice.crt --client-key=alice.key",
        "kubectl create secret tls alice --cert=alice.crt --key=alice.key",
        "kubectl config set-context alice-context --cluster=kubernetes --user=alice",
        "kubectl apply -f alice.crt",
        "kubectl certificate approve alice"
      ],
      "ko": [
        "kubectl config set-credentials alice --client-certificate=alice.crt --client-key=alice.key",
        "kubectl create secret tls alice --cert=alice.crt --key=alice.key",
        "kubectl config set-context alice-context --cluster=kubernetes --user=alice",
        "kubectl apply -f alice.crt",
        "kubectl certificate approve alice"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "To configure kubectl to use a new client certificate for a user, you use the command 'kubectl config set-credentials' specifying the user name along with the paths to the client certificate and private key files. This updates the kubeconfig file with the user's credentials. The other options do not configure kubectl credentials: 'kubectl create secret tls' creates a TLS secret in Kubernetes but does not affect kubectl client config; 'kubectl config set-context' sets the context but does not set credentials; 'kubectl apply -f' applies Kubernetes resources and is unrelated; 'kubectl certificate approve' approves a CSR but does not configure kubectl.",
      "ko": "사용자의 새 클라이언트 인증서를 사용하도록 kubectl을 설정하려면 'kubectl config set-credentials' 명령에 사용자 이름, 클라이언트 인증서 파일 경로, 개인 키 파일 경로를 지정합니다. 그러면 kubeconfig 파일의 사용자 자격 증명이 갱신됩니다. 다른 선택지는 kubectl 자격 증명을 설정하지 않습니다. 'kubectl create secret tls'는 Kubernetes에 TLS Secret을 만들지만 kubectl 클라이언트 설정에는 영향을 주지 않습니다. 'kubectl config set-context'는 컨텍스트를 설정하지만 자격 증명을 설정하지 않습니다. 'kubectl apply -f'는 Kubernetes 리소스를 적용하는 명령으로 이 작업과 관련이 없습니다. 'kubectl certificate approve'는 CSR을 승인하지만 kubectl을 설정하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"
  },
  {
    "id": "kcsa-mock-208",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "According to the CIS Kubernetes Benchmark, which setting should be disabled on the kube-apiserver for security reasons?",
      "ko": "CIS Kubernetes Benchmark에 따르면 보안상의 이유로 kube-apiserver에서 어떤 설정을 비활성화해야 합니까?"
    },
    "choices": {
      "en": [
        "Anonymous authentication",
        "RBAC authorization",
        "TLS encryption",
        "Admission controllers",
        "Audit logging"
      ],
      "ko": [
        "익명 인증",
        "RBAC 권한 부여",
        "TLS 암호화",
        "Admission controller",
        "감사 로깅"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Anonymous authentication should be disabled on the kube-apiserver to enhance security, as recommended by the CIS Kubernetes Benchmark. Enabling anonymous authentication allows unauthorized access to cluster resources, which is a significant security risk. Disabling it ensures that all interactions with the API server require proper authentication.",
      "ko": "CIS Kubernetes Benchmark의 권고에 따라 보안을 강화하려면 kube-apiserver에서 익명 인증을 비활성화해야 합니다. 익명 인증을 활성화하면 클러스터 리소스에 대한 무단 접근을 허용할 수 있으므로 상당한 보안 위험이 됩니다. 이를 비활성화하면 API 서버와의 모든 상호작용에 적절한 인증을 요구할 수 있습니다."
    },
    "ref": "https://www.cisecurity.org/benchmark/kubernetes/"
  },
  {
    "id": "kcsa-mock-209",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kube-apiserver flag must be configured to disable anonymous authentication and prevent unauthenticated requests to the Kubernetes API?",
      "ko": "익명 요청을 차단하고 Kubernetes API에 대한 인증되지 않은 요청을 방지하려면 어떤 kube-apiserver 플래그를 구성해야 합니까?"
    },
    "choices": {
      "en": [
        "--disable-anonymous-auth",
        "--anonymous-auth=false",
        "--enable-auth=false",
        "--no-anonymous",
        "--deny-anonymous"
      ],
      "ko": [
        "--disable-anonymous-auth",
        "--anonymous-auth=false",
        "--enable-auth=false",
        "--no-anonymous",
        "--deny-anonymous"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The '--anonymous-auth=false' flag explicitly disables anonymous requests to the API server, forcing authentication for all requests. This is critical for production clusters to prevent unauthorized access. The other options are either non-existent flags or use incorrect syntax for authentication configuration.",
      "ko": "'--anonymous-auth=false' 플래그는 API 서버에 대한 익명 요청을 명시적으로 비활성화하여 모든 요청에 인증을 요구합니다. 이는 프로덕션 클러스터에서 무단 접근을 방지하는 데 중요합니다. 다른 선택지는 존재하지 않는 플래그이거나 인증 설정에 잘못된 구문을 사용합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "kcsa-mock-210",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What are the key best practices for hardening container images to enhance security?",
      "ko": "보안을 강화하기 위해 컨테이너 이미지를 강화하는 핵심 모범 사례는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Use a minimal base image to reduce the attack surface.",
        "Run containers as root to simplify privilege management.",
        "Remove unnecessary packages and dependencies to minimize potential vulnerabilities.",
        "Expose all ports for maximum connectivity and flexibility.",
        "Regularly scan images for known vulnerabilities and apply necessary patches."
      ],
      "ko": [
        "공격 표면을 줄이기 위해 최소 베이스 이미지를 사용합니다.",
        "권한 관리를 단순화하기 위해 컨테이너를 root로 실행합니다.",
        "잠재적 취약점을 최소화하기 위해 불필요한 패키지와 의존성을 제거합니다.",
        "최대 연결성과 유연성을 위해 모든 포트를 노출합니다.",
        "이미지에서 알려진 취약점을 정기적으로 검사하고 필요한 패치를 적용합니다."
      ]
    },
    "answer": [
      0,
      2,
      4
    ],
    "explain": {
      "en": "To effectively harden container images, it is crucial to minimize the attack surface and potential vulnerabilities. Using minimal base images ensures that only essential components are included, reducing the number of potential security flaws. Removing unnecessary packages further decreases the likelihood of exploitable vulnerabilities. Regularly scanning images for known vulnerabilities allows for proactive identification and remediation of security risks. Running containers as root is discouraged because it gives the process elevated privileges that it does not need and exposes the host system to vulnerabilities. Exposing all ports creates unnecessary entry points for attackers.",
      "ko": "컨테이너 이미지를 효과적으로 강화하려면 공격 표면과 잠재적인 취약점을 최소화하는 것이 중요합니다. 최소 베이스 이미지를 사용하면 필수 구성 요소만 포함되므로 잠재적인 보안 결함의 수가 줄어듭니다. 불필요한 패키지를 제거하면 악용 가능한 취약점이 존재할 가능성이 더 낮아집니다. 알려진 취약점을 찾기 위해 이미지를 정기적으로 스캔하면 보안 위험을 선제적으로 식별하고 해결할 수 있습니다. 컨테이너를 root로 실행하는 것은 프로세스에 필요하지 않은 높은 권한을 부여하고 호스트 시스템을 취약점에 노출하므로 권장되지 않습니다. 모든 포트를 노출하면 공격자에게 불필요한 진입점을 제공합니다."
    },
    "ref": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-190.pdf"
  },
  {
    "id": "kcsa-mock-211",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload and Application Code Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Dockerfile, which instruction is used to specify that the container should run as a non-root user?",
      "ko": "Dockerfile에서 컨테이너가 비루트 사용자로 실행되어야 함을 지정하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "FROM nonroot",
        "USER nobody",
        "RUN chmod 777 /app",
        "EXPOSE 80",
        "ENTRYPOINT [\"/app\"]"
      ],
      "ko": [
        "FROM nonroot",
        "USER nobody",
        "RUN chmod 777 /app",
        "EXPOSE 80",
        "ENTRYPOINT [\"/app\"]"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'USER' instruction in a Dockerfile sets the user under which the container process runs. Using 'USER nobody' ensures the application runs as a non-root user, enhancing container security. 'FROM nonroot' is not a valid instruction, 'RUN chmod 777 /app' changes permissions but does not change the user, 'EXPOSE' declares ports, and 'ENTRYPOINT' specifies the executable.",
      "ko": "Dockerfile의 'USER' 지시어는 컨테이너 프로세스를 실행할 사용자를 설정합니다. 'USER nobody'를 사용하면 애플리케이션을 root가 아닌 사용자로 실행하여 컨테이너 보안을 강화할 수 있습니다. 'FROM nonroot'는 유효한 지시어가 아니며, 'RUN chmod 777 /app'은 권한을 변경하지만 사용자를 바꾸지는 않습니다. 'EXPOSE'는 포트를 선언하고, 'ENTRYPOINT'는 실행할 프로그램을 지정합니다."
    },
    "ref": "https://docs.docker.com/engine/reference/builder/#user"
  },
  {
    "id": "kcsa-mock-212",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What command is used to scan a Docker image named 'myapp:latest' for HIGH and CRITICAL vulnerabilities using Trivy?",
      "ko": "Trivy를 사용하여 'myapp:latest'라는 Docker 이미지에서 HIGH 및 CRITICAL 취약점을 검사하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "trivy myapp:latest",
        "trivy image --severity HIGH,CRITICAL myapp:latest",
        "trivy scan --critical myapp:latest",
        "trivy image --vulnerabilities HIGH,CRITICAL myapp:latest",
        "trivy inspect myapp:latest"
      ],
      "ko": [
        "trivy myapp:latest",
        "trivy image --severity HIGH,CRITICAL myapp:latest",
        "trivy scan --critical myapp:latest",
        "trivy image --vulnerabilities HIGH,CRITICAL myapp:latest",
        "trivy inspect myapp:latest"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The correct command to scan for HIGH and CRITICAL vulnerabilities is 'trivy image --severity HIGH,CRITICAL myapp:latest'. This command specifically targets vulnerabilities of those severities in the Docker image.",
      "ko": "HIGH와 CRITICAL 등급의 취약점을 스캔하는 올바른 명령은 'trivy image --severity HIGH,CRITICAL myapp:latest'입니다. 이 명령은 Docker 이미지에서 해당 심각도 등급의 취약점만을 구체적으로 대상으로 삼습니다."
    },
    "ref": "https://aquasecurity.github.io/trivy/v0.34/docs/commands/image/"
  },
  {
    "id": "kcsa-mock-213",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Upon identifying a vulnerable Docker image in your Kubernetes cluster, what is the recommended immediate action to mitigate the risk?",
      "ko": "Kubernetes 클러스터에서 취약한 Docker 이미지를 식별했다면 위험을 완화하기 위해 권장되는 즉각적인 조치는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Ignore the vulnerability",
        "Update the image tag to 'latest'",
        "Delete the pod using the vulnerable image",
        "Restart the Kubernetes cluster",
        "Rebuild the image without changes"
      ],
      "ko": [
        "취약점 무시",
        "이미지 태그를 'latest'로 업데이트",
        "취약한 이미지를 사용하는 Pod 삭제",
        "Kubernetes 클러스터 재시작",
        "변경 없이 이미지 재빌드"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The recommended immediate action is to delete the pod running the vulnerable image. This action helps mitigate the risk by removing the vulnerable container from your environment.",
      "ko": "권장되는 즉각적인 조치는 취약한 이미지를 실행하는 Pod를 삭제하는 것입니다. 이 조치는 환경에서 취약한 컨테이너를 제거하여 위험을 완화하는 데 도움이 됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/security-best-practices/"
  },
  {
    "id": "kcsa-mock-214",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource is used to assign permissions within a namespace to a user or group?",
      "ko": "네임스페이스 내에서 사용자 또는 그룹에 권한을 할당하는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "ClusterRole",
        "Role",
        "ClusterRoleBinding",
        "RoleBinding",
        "ServiceAccount"
      ],
      "ko": [
        "ClusterRole",
        "Role",
        "ClusterRoleBinding",
        "RoleBinding",
        "ServiceAccount"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A RoleBinding is used to grant permissions defined in a Role to users or groups within a specific namespace. This is essential for fine-grained access control in Kubernetes.",
      "ko": "RoleBinding은 특정 네임스페이스 안에서 Role에 정의된 권한을 사용자나 그룹에 부여하는 데 사용됩니다. 이는 Kubernetes에서 세밀한 접근 제어를 구현하는 데 필수적입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding"
  },
  {
    "id": "kcsa-mock-215",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the correct 'kind' value for an object that associates a Role with a user or group?",
      "ko": "Role을 사용자 또는 그룹과 연결하는 객체의 올바른 kind 값은 무엇입니까?"
    },
    "choices": {
      "en": [
        "RoleBinding",
        "ClusterRole",
        "User",
        "Group",
        "RoleAssignment"
      ],
      "ko": [
        "RoleBinding",
        "ClusterRole",
        "User",
        "Group",
        "RoleAssignment"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A RoleBinding is the Kubernetes object that binds a Role to a user or group within a namespace, enabling them to perform specific actions.",
      "ko": "RoleBinding은 네임스페이스 안에서 Role을 사용자나 그룹에 연결하여 이들이 특정 작업을 수행할 수 있게 하는 Kubernetes 객체입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding"
  },
  {
    "id": "kcsa-mock-216",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation Techniques",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Docker flag allows a container to share the PID namespace with another container named 'container1'?",
      "ko": "컨테이너가 'container1'이라는 다른 컨테이너와 PID 네임스페이스를 공유하도록 허용하는 Docker 플래그는 무엇입니까?"
    },
    "choices": {
      "en": [
        "--pid=host",
        "--pid=container1",
        "--pid=container:container1",
        "--net=container:container1",
        "--namespace=pid:container1"
      ],
      "ko": [
        "--pid=host",
        "--pid=container1",
        "--pid=container:container1",
        "--net=container:container1",
        "--namespace=pid:container1"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The correct flag to share the PID namespace is '--pid=container:container1'. This allows processes in one container to see and interact with processes in the other container.",
      "ko": "PID 네임스페이스를 공유하는 올바른 플래그는 '--pid=container:container1'입니다. 이를 사용하면 한 컨테이너의 프로세스가 다른 컨테이너의 프로세스를 확인하고 상호작용할 수 있습니다."
    },
    "ref": "https://docs.docker.com/engine/reference/commandline/run/"
  },
  {
    "id": "kcsa-mock-217",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation Techniques",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary effect of sharing the PID namespace between two Docker containers?",
      "ko": "두 Docker 컨테이너 간에 PID 네임스페이스를 공유할 때의 주요 효과는 무엇입니까?"
    },
    "choices": {
      "en": [
        "They share the same network interfaces",
        "They can see and signal each other's processes",
        "They share the same filesystem",
        "They can access each other's environment variables",
        "They share the same memory space"
      ],
      "ko": [
        "동일한 네트워크 인터페이스 공유",
        "서로의 프로세스를 보고 신호를 보낼 수 있음",
        "동일한 파일시스템 공유",
        "서로의 환경 변수에 접근",
        "동일한 메모리 공간 공유"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Sharing the PID namespace allows containers to see and interact with each other's processes. This means they can send signals to processes running in the other container.",
      "ko": "PID 네임스페이스를 공유하면 컨테이너들이 서로의 프로세스를 확인하고 상호작용할 수 있습니다. 따라서 다른 컨테이너에서 실행 중인 프로세스에 시그널을 보낼 수 있습니다."
    },
    "ref": "https://man7.org/linux/man-pages/man7/pid_namespaces.7.html"
  },
  {
    "id": "kcsa-mock-218",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why is it recommended to use image digests instead of tags in Kubernetes manifests?",
      "ko": "Kubernetes 매니페스트에서 태그 대신 이미지 다이제스트를 사용하는 것이 권장되는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Digests are shorter than tags",
        "Tags can be mutable, but digests ensure image immutability",
        "Using digests is required by Kubernetes",
        "Tags are not supported in private registries",
        "Digests allow for automatic updates"
      ],
      "ko": [
        "다이제스트가 태그보다 짧음",
        "태그는 변경될 수 있지만 다이제스트는 이미지 불변성을 보장",
        "다이제스트 사용은 Kubernetes가 요구",
        "프라이빗 레지스트리는 태그를 지원하지 않음",
        "다이제스트가 자동 업데이트를 허용"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Image digests are recommended because they refer to a specific, immutable version of an image. This ensures consistency and predictability in deployments, unlike mutable tags.",
      "ko": "이미지 다이제스트는 이미지의 특정한 불변 버전을 가리키므로 권장됩니다. 변경 가능한 태그와 달리 배포의 일관성과 예측 가능성을 보장합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/#imagepullpolicy"
  },
  {
    "id": "kcsa-mock-219",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you retrieve the digest (content hash) of the Docker image 'nginx:1.19' using the Docker CLI?",
      "ko": "Docker CLI를 사용하여 Docker 이미지 'nginx:1.19'의 다이제스트(콘텐츠 해시)를 어떻게 가져옵니까?"
    },
    "choices": {
      "en": [
        "docker images nginx:1.19 --digests",
        "docker inspect nginx:1.19 --format='{{.Id}}'",
        "docker pull nginx@sha256",
        "docker inspect --format='{{index .RepoDigests 0}}' nginx:1.19",
        "docker tag nginx:1.19 nginx:sha256"
      ],
      "ko": [
        "docker images nginx:1.19 --digests",
        "docker inspect nginx:1.19 --format='{{.Id}}'",
        "docker pull nginx@sha256",
        "docker inspect --format='{{index .RepoDigests 0}}' nginx:1.19",
        "docker tag nginx:1.19 nginx:sha256"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The command 'docker inspect --format='{{index .RepoDigests 0}}' nginx:1.19' extracts the image digest from the image's metadata, showing the content-addressable identifier (digest) of the image. Option 1 lists digests for all images but may not show the specific digest for the tag. Option 2 shows the image ID, which is different from the digest. Option 3 is incomplete and incorrect syntax. Option 5 is unrelated to obtaining the digest, as it tags images but does not display digests.",
      "ko": "'docker inspect --format='{{index .RepoDigests 0}}' nginx:1.19' 명령은 이미지 메타데이터에서 이미지 다이제스트를 추출하여 이미지의 콘텐츠 주소 기반 식별자(다이제스트)를 보여 줍니다. 선택지 1은 모든 이미지의 다이제스트를 나열하지만 해당 태그의 구체적인 다이제스트를 보여 주지 않을 수 있습니다. 선택지 2는 다이제스트와 다른 값인 이미지 ID를 보여 줍니다. 선택지 3은 불완전하고 구문이 잘못되었습니다. 선택지 5는 이미지에 태그를 붙일 뿐 다이제스트를 표시하지 않으므로 다이제스트를 얻는 작업과 관련이 없습니다."
    },
    "ref": "https://docs.docker.com/engine/reference/commandline/inspect/"
  },
  {
    "id": "kcsa-mock-220",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which securityContext field makes a container's root filesystem read-only to prevent modifications?",
      "ko": "컨테이너의 루트 파일시스템을 읽기 전용으로 만들어 수정을 방지하는 securityContext 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "readOnlyFileSystem",
        "readOnlyRootFilesystem",
        "immutableRoot",
        "filesystemReadonly",
        "noWriteFilesystem"
      ],
      "ko": [
        "readOnlyFileSystem",
        "readOnlyRootFilesystem",
        "immutableRoot",
        "filesystemReadonly",
        "noWriteFilesystem"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'readOnlyRootFilesystem' field in a container's securityContext makes the root filesystem read-only, preventing any modifications and enhancing container security.",
      "ko": "컨테이너의 securityContext에서 'readOnlyRootFilesystem' 필드를 설정하면 루트 파일시스템을 읽기 전용으로 만들어 변경을 방지하고 컨테이너 보안을 강화합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-221",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes security best practices, what is the primary security benefit of configuring a container's root filesystem as read-only?",
      "ko": "Kubernetes 보안 모범 사례에서 컨테이너의 루트 파일시스템을 읽기 전용으로 구성할 때의 주요 보안 이점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Improved container startup performance",
        "Reduced container image storage requirements",
        "Enhanced security by preventing malicious filesystem modifications",
        "Enables cross-container file sharing capabilities",
        "Simplifies rolling updates for containerized applications"
      ],
      "ko": [
        "컨테이너 시작 성능 향상",
        "컨테이너 이미지 저장 요구 사항 감소",
        "악성 파일시스템 수정을 방지하여 보안 향상",
        "컨테이너 간 파일 공유 기능 활성화",
        "컨테이너 애플리케이션의 롤링 업데이트 단순화"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A read-only root filesystem (configured via securityContext.readOnlyRootFilesystem) prevents attackers from modifying system files, installing malware, or writing to sensitive directories, even if they gain shell access. This security hardening measure is recommended by CIS Kubernetes Benchmarks and Kubernetes security best practices.",
      "ko": "읽기 전용 루트 파일시스템은 securityContext.readOnlyRootFilesystem으로 설정하며, 공격자가 셸 접근 권한을 얻더라도 시스템 파일을 수정하거나, 악성 소프트웨어를 설치하거나, 민감한 디렉터리에 데이터를 쓰는 것을 방지합니다. 이 보안 강화 조치는 CIS Kubernetes Benchmarks와 Kubernetes 보안 모범 사례에서 권장됩니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-222",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which commands can be used to list all loaded AppArmor profiles on a Linux node?",
      "ko": "Linux 노드에서 현재 로드된 모든 AppArmor 프로필을 나열하는 데 사용할 수 있는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "sudo apparmor_status",
        "sudo aa-enforce",
        "sudo apparmor_parser -L",
        "sudo aa-status",
        "sudo systemctl status apparmor"
      ],
      "ko": [
        "sudo apparmor_status",
        "sudo aa-enforce",
        "sudo apparmor_parser -L",
        "sudo aa-status",
        "sudo systemctl status apparmor"
      ]
    },
    "answer": [
      0,
      3
    ],
    "explain": {
      "en": "Both `sudo apparmor_status` and `sudo aa-status` can be used to list all loaded AppArmor profiles on a Linux node. These commands provide detailed information about AppArmor, including the number of loaded profiles, their modes (enforce or complain), and any unconfined processes.\n\nOther options are incorrect for the following reasons:\n\n1. `sudo aa-enforce`: This command is used to set an AppArmor profile to enforce mode, not to list profiles.\n2. `sudo apparmor_parser -L`: This command is used for loading AppArmor profiles but does not list them.\n3. `sudo systemctl status apparmor`: This command checks the status of the AppArmor service but does not provide a list of loaded profiles.\n\nUsing either `sudo apparmor_status` or `sudo aa-status` ensures you can monitor and manage AppArmor profiles effectively.",
      "ko": "`sudo apparmor_status`와 `sudo aa-status`는 모두 Linux 노드에 로드된 모든 AppArmor 프로필을 나열하는 데 사용할 수 있습니다. 이 명령들은 로드된 프로필의 수, 각 프로필의 모드(enforce 또는 complain), 제한되지 않은 프로세스 등 AppArmor에 관한 자세한 정보를 제공합니다.\n\n다른 선택지가 틀린 이유는 다음과 같습니다.\n1. `sudo aa-enforce`는 AppArmor 프로필을 enforce 모드로 설정하는 명령이지 프로필을 나열하는 명령이 아닙니다.\n2. `sudo apparmor_parser -L`은 AppArmor 프로필을 로드하는 명령이며 프로필을 나열하지 않습니다.\n3. `sudo systemctl status apparmor`는 AppArmor 서비스의 상태를 확인하지만 로드된 프로필 목록을 제공하지 않습니다.\n\n`sudo apparmor_status` 또는 `sudo aa-status`를 사용하면 AppArmor 프로필을 효과적으로 모니터링하고 관리할 수 있습니다."
    },
    "ref": "https://ubuntu.com/server/docs/security-apparmor"
  },
  {
    "id": "kcsa-mock-223",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes, how can you apply an AppArmor profile to all containers within a Pod?",
      "ko": "Kubernetes에서 Pod 안의 모든 컨테이너에 AppArmor 프로필을 적용하려면 어떻게 해야 합니까?"
    },
    "choices": {
      "en": [
        "Set the profile in the Pod's securityContext",
        "Annotate each container with the AppArmor profile",
        "Use the 'appArmorProfile' field in the container spec",
        "Specify the profile in the Deployment's metadata",
        "Set the profile in the node's AppArmor configuration"
      ],
      "ko": [
        "Pod의 securityContext에 프로필 설정",
        "각 컨테이너에 AppArmor 프로필 annotation 지정",
        "컨테이너 사양에서 'appArmorProfile' 필드 사용",
        "Deployment 메타데이터에 프로필 지정",
        "노드의 AppArmor 구성에 프로필 설정"
      ]
    },
    "answer": [
      1,
      2
    ],
    "explain": {
      "en": "To apply an AppArmor profile to all containers in a Pod, you can use one of two methods:\n\n1. **Annotations**: Use the annotation `container.apparmor.security.beta.kubernetes.io/<container_name>: <profile_ref>` for each container in the Pod. This method has been traditionally used and is backward-compatible.\n\n2. **`appArmorProfile` field in `securityContext`**: Starting with Kubernetes v1.30, you can specify the AppArmor profile directly in the `securityContext` of a container using the `appArmorProfile` field. This method is more intuitive and avoids relying on annotations.\n\nOther options, such as setting it in the Deployment metadata or node-level configuration, are not valid methods for applying AppArmor profiles to specific containers.",
      "ko": "Pod의 모든 컨테이너에 AppArmor 프로필을 적용하려면 두 가지 방법 중 하나를 사용할 수 있습니다.\n\n1. 어노테이션: Pod의 각 컨테이너에 `container.apparmor.security.beta.kubernetes.io/<container_name>: <profile_ref>` 어노테이션을 사용합니다. 이 방법은 전통적으로 사용되어 왔으며 하위 호환성을 제공합니다.\n\n2. securityContext의 `appArmorProfile` 필드: Kubernetes v1.30부터 컨테이너의 securityContext에 있는 `appArmorProfile` 필드를 사용하여 AppArmor 프로필을 직접 지정할 수 있습니다. 이 방법은 더 직관적이며 어노테이션에 의존하지 않습니다.\n\nDeployment 메타데이터나 노드 수준 설정에 지정하는 것과 같은 다른 선택지는 특정 컨테이너에 AppArmor 프로필을 적용하는 유효한 방법이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tutorials/clusters/apparmor/"
  },
  {
    "id": "kcsa-mock-224",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "When creating a NetworkPolicy to implement default deny egress traffic for Kubernetes pods, which policyTypes value must be specified?",
      "ko": "Kubernetes Pod에 대한 기본 거부 egress 트래픽을 구현하는 NetworkPolicy를 만들 때 어떤 policyTypes 값을 지정해야 합니까?"
    },
    "choices": {
      "en": [
        "Ingress only",
        "Egress only",
        "Both Ingress and Egress",
        "DenyAll policy type",
        "Egress with explicit deny rules"
      ],
      "ko": [
        "Ingress만",
        "Egress만",
        "Ingress와 Egress 모두",
        "DenyAll 정책 유형",
        "명시적 거부 규칙이 있는 Egress"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "To create default deny egress, policyTypes must include Egress, and no egress rules should be defined. This combination blocks all outgoing traffic while allowing explicit exceptions through subsequent allow rules. The Kubernetes NetworkPolicy documentation emphasizes this pattern for implementing zero-trust network policies.",
      "ko": "기본적으로 모든 송신 트래픽을 거부하려면 policyTypes에 Egress를 포함하고 egress 규칙을 정의하지 않아야 합니다. 이 조합은 모든 송신 트래픽을 차단하면서 이후의 허용 규칙으로 명시적인 예외를 허용할 수 있게 합니다. Kubernetes NetworkPolicy 문서는 제로 트러스트 네트워크 정책을 구현하는 이 패턴을 강조합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-225",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes NetworkPolicy configuration, what podSelector configuration creates a default-deny-all policy that applies to all pods in a namespace?",
      "ko": "Kubernetes NetworkPolicy 구성에서 네임스페이스의 모든 Pod에 적용되는 기본 거부 전체 정책을 만드는 podSelector 구성은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Empty selector: {}",
        "Wildcard selector: '*'",
        "Omitted podSelector field",
        "Null value: podSelector: null",
        "Label-based exclusion selector"
      ],
      "ko": [
        "빈 selector: {}",
        "와일드카드 selector: '*'",
        "podSelector 필드 생략",
        "null 값: podSelector: null",
        "레이블 기반 제외 selector"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "An empty podSelector ({}) matches all pods in the namespace, while omitting the field would make the policy ineffective. This configuration is critical for implementing namespace-wide default-deny policies, as documented in Kubernetes network policy best practices and the CIS Kubernetes Benchmark.",
      "ko": "빈 podSelector({})는 네임스페이스의 모든 Pod와 일치하며, 이 필드를 생략하면 정책이 효과를 내지 못합니다. 이 설정은 네임스페이스 전체에 기본 거부 정책을 구현하는 데 중요하며, Kubernetes 네트워크 정책 모범 사례와 CIS Kubernetes Benchmark에 문서화되어 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-and-all-egress-traffic"
  },
  {
    "id": "kcsa-mock-226",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which securityContext configuration field enables privileged container mode in Kubernetes pods?",
      "ko": "Kubernetes Pod에서 권한 있는 컨테이너 모드를 활성화하는 securityContext 구성 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "allowPrivilegeEscalation: true",
        "runAsPrivileged: true",
        "privileged: true",
        "capabilities.add: [\"ALL\"]",
        "securityContext.privilegedMode: enabled"
      ],
      "ko": [
        "allowPrivilegeEscalation: true",
        "runAsPrivileged: true",
        "privileged: true",
        "capabilities.add: [\"ALL\"]",
        "securityContext.privilegedMode: enabled"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The privileged: true setting gives the container full access to host devices and capabilities, equivalent to root privileges on the host. This dangerous configuration should be avoided in production, as emphasized in Kubernetes security documentation and CIS Benchmarks. Privileged containers bypass most security controls and namespace restrictions.",
      "ko": "privileged: true 설정은 컨테이너에 호스트의 모든 장치와 capability에 대한 접근을 부여하며, 이는 호스트의 root 권한과 동등합니다. Kubernetes 보안 문서와 CIS Benchmarks에서 강조하듯이 이 위험한 설정은 프로덕션에서 피해야 합니다. 특권 컨테이너는 대부분의 보안 제어와 네임스페이스 제한을 우회합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-227",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Privilege Escalation",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a primary security risk associated with running a container in privileged mode?",
      "ko": "컨테이너를 권한 있는 모드로 실행할 때의 주요 보안 위험은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Increased memory usage",
        "Limited network access",
        "Container gaining unrestricted access to host resources, posing security risks",
        "Reduced application performance",
        "Inability to use persistent volumes"
      ],
      "ko": [
        "메모리 사용량 증가",
        "네트워크 접근 제한",
        "컨테이너가 호스트 리소스에 제한 없이 접근하여 보안 위험 발생",
        "애플리케이션 성능 저하",
        "영구 볼륨 사용 불가"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Running a container in privileged mode grants it almost the same access to the host as the root user, including direct access to host devices and kernel capabilities. This significantly increases the risk of container breakout and host compromise. The other options, such as increased memory usage or reduced performance, are not typical consequences of privileged mode, and privileged containers can still use persistent volumes and network access normally.",
      "ko": "컨테이너를 특권 모드로 실행하면 호스트 장치와 커널 capability에 대한 직접 접근을 포함하여 호스트의 root 사용자와 거의 같은 접근 권한을 부여합니다. 이는 컨테이너 탈출과 호스트 침해의 위험을 크게 높입니다. 메모리 사용량 증가나 성능 저하와 같은 다른 선택지는 특권 모드의 일반적인 결과가 아니며, 특권 컨테이너도 영구 볼륨과 네트워크 접근을 정상적으로 사용할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-228",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes pod specification field prevents automatic mounting of the default ServiceAccount token?",
      "ko": "기본 ServiceAccount 토큰의 자동 마운트를 방지하는 Kubernetes Pod 사양 필드는 무엇입니까?"
    },
    "choices": {
      "en": [
        "mountServiceAccountToken: false",
        "automountServiceAccountToken: false",
        "serviceAccountToken: disabled",
        "disableServiceAccountMount: true",
        "serviceAccountMountPolicy: none"
      ],
      "ko": [
        "mountServiceAccountToken: false",
        "automountServiceAccountToken: false",
        "serviceAccountToken: disabled",
        "disableServiceAccountMount: true",
        "serviceAccountMountPolicy: none"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "automountServiceAccountToken: false in the pod spec prevents automatic mounting of the service account token, reducing attack surface. This security hardening measure is recommended when pods don't need Kubernetes API access, as noted in the Kubernetes service account documentation and security best practices guides.",
      "ko": "Pod spec의 automountServiceAccountToken: false는 ServiceAccount 토큰의 자동 마운트를 방지하여 공격 표면을 줄입니다. Kubernetes ServiceAccount 문서와 보안 모범 사례 가이드에 명시되어 있듯이, Pod가 Kubernetes API 접근을 필요로 하지 않는 경우 이 보안 강화 조치가 권장됩니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"
  },
  {
    "id": "kcsa-mock-229",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why would you disable automounting of ServiceAccount tokens in a Kubernetes Pod?",
      "ko": "Kubernetes Pod에서 ServiceAccount 토큰의 자동 마운트를 비활성화하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "To reduce memory usage of the Pod",
        "To prevent the Pod from having unnecessary or unauthorized access to the Kubernetes API",
        "To improve the application's runtime performance",
        "To enable network policies enforcement",
        "To allow the Pod to use multiple ServiceAccounts simultaneously"
      ],
      "ko": [
        "Pod의 메모리 사용량 감소",
        "Pod의 불필요하거나 권한 없는 Kubernetes API 접근 방지",
        "애플리케이션의 런타임 성능 향상",
        "네트워크 정책 강제 활성화",
        "Pod가 여러 ServiceAccount를 동시에 사용하도록 허용"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Disabling automounting of ServiceAccount tokens prevents the Pod from automatically receiving credentials that grant access to the Kubernetes API. This reduces the attack surface by limiting the Pod's ability to interact with the cluster unless explicitly required. The other options are incorrect because automounting tokens does not significantly affect memory usage or application performance, does not directly enable network policies, and Pods cannot use multiple ServiceAccounts simultaneously.",
      "ko": "ServiceAccount 토큰의 자동 마운트를 비활성화하면 Pod가 Kubernetes API 접근을 허용하는 자격 증명을 자동으로 받지 않습니다. 따라서 명시적으로 필요한 경우를 제외하고 Pod의 클러스터 상호작용 능력을 제한하여 공격 표면을 줄입니다. 다른 선택지는 틀렸습니다. 토큰 자동 마운트는 메모리 사용량이나 애플리케이션 성능에 큰 영향을 주지 않으며, 네트워크 정책을 직접 활성화하지도 않습니다. 또한 Pod는 여러 ServiceAccount를 동시에 사용할 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"
  },
  {
    "id": "kcsa-mock-230",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kube-apiserver configuration flag properly enables the ImagePolicyWebhook admission controller in modern Kubernetes versions (v1.10+)?",
      "ko": "최신 Kubernetes 버전(v1.10+)에서 ImagePolicyWebhook admission controller를 올바르게 활성화하는 kube-apiserver 구성 플래그는 무엇입니까?"
    },
    "choices": {
      "en": [
        "--enable-admission-plugins=ImagePolicyWebhook",
        "--admission-control=ImagePolicyWebhook",
        "--admission-plugins=ImagePolicyWebhook",
        "--enable-image-policy",
        "--image-policy-webhook=true"
      ],
      "ko": [
        "--enable-admission-plugins=ImagePolicyWebhook",
        "--admission-control=ImagePolicyWebhook",
        "--admission-plugins=ImagePolicyWebhook",
        "--enable-image-policy",
        "--image-policy-webhook=true"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "In Kubernetes v1.10+, admission controllers are enabled using '--enable-admission-plugins'. The '--admission-control' flag was deprecated in favor of this new syntax. The ImagePolicyWebhook controller enables image verification through external webhooks, crucial for enforcing image registry policies.",
      "ko": "Kubernetes v1.10 이상에서는 '--enable-admission-plugins'로 어드미션 컨트롤러를 활성화합니다. '--admission-control' 플래그는 이 새 구문으로 대체되면서 사용 중단되었습니다. ImagePolicyWebhook 컨트롤러는 외부 웹훅을 통한 이미지 검증을 지원하며, 이는 이미지 레지스트리 정책을 강제하는 데 중요합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "kcsa-mock-231",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of the ImagePolicyWebhook admission controller in Kubernetes?",
      "ko": "Kubernetes에서 ImagePolicyWebhook admission controller의 주요 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To scan container images for vulnerabilities during runtime",
        "To enforce custom policies on container images during admission to the cluster",
        "To cache container images locally for faster deployment",
        "To automatically update container images to the latest version",
        "To log all image pull requests for auditing purposes"
      ],
      "ko": [
        "런타임 중 컨테이너 이미지 취약점 검사",
        "클러스터 admission 중 컨테이너 이미지에 사용자 지정 정책 강제",
        "더 빠른 배포를 위해 컨테이너 이미지를 로컬에 캐시",
        "컨테이너 이미지를 최신 버전으로 자동 업데이트",
        "감사를 위해 모든 이미지 pull 요청 기록"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The ImagePolicyWebhook admission controller intercepts Pod creation requests and enforces policies on container images before they are admitted into the cluster, such as validating image signatures or restricting images from untrusted registries. It does not perform runtime vulnerability scanning, caching, automatic updates, or logging image pulls, which are handled by other tools or controllers.",
      "ko": "ImagePolicyWebhook 어드미션 컨트롤러는 Pod 생성 요청을 가로채고, 컨테이너 이미지가 클러스터에 허용되기 전에 이미지 서명을 검증하거나 신뢰하지 않는 레지스트리의 이미지를 제한하는 등의 정책을 강제합니다. 런타임 취약점 스캔, 캐싱, 자동 업데이트, 이미지 풀 로깅은 수행하지 않으며, 이러한 작업은 다른 도구나 컨트롤러가 담당합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook"
  },
  {
    "id": "kcsa-mock-232",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes audit policy, which log level should be set to capture the full content of both requests and responses?",
      "ko": "요청과 응답의 전체 내용을 모두 기록하려면 Kubernetes 감사 정책에서 어떤 로그 수준을 설정해야 합니까?"
    },
    "choices": {
      "en": [
        "None",
        "Metadata",
        "Request",
        "RequestResponse",
        "Content"
      ],
      "ko": [
        "없음",
        "메타데이터",
        "Request",
        "RequestResponse",
        "Content"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The 'RequestResponse' audit log level records both the metadata and the full content of requests and responses, providing comprehensive audit information. 'None' disables logging, 'Metadata' logs only metadata without content, 'Request' logs request content but not responses, and 'Content' is not a valid audit log level in Kubernetes.",
      "ko": "'RequestResponse' 감사 로그 수준은 요청과 응답의 메타데이터 및 전체 내용을 모두 기록하여 포괄적인 감사 정보를 제공합니다. 'None'은 로깅을 비활성화하고, 'Metadata'는 내용 없이 메타데이터만 기록하며, 'Request'는 요청 내용은 기록하지만 응답은 기록하지 않습니다. 'Content'는 Kubernetes에서 유효한 감사 로그 수준이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "kcsa-mock-233",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do you configure a Kubernetes audit policy rule to log events for all resources within a specific namespace?",
      "ko": "특정 네임스페이스 안의 모든 리소스에 대한 이벤트를 기록하도록 Kubernetes 감사 정책 규칙을 어떻게 구성합니까?"
    },
    "choices": {
      "en": [
        "Set 'namespace: <namespace>' in the policy rule",
        "Use 'namespaces: [\"<namespace>\"]' under the rule's 'namespaces' field",
        "Add 'resourceNames: [\"<namespace>\"]' to the rule",
        "Set 'level: Namespace' in the policy",
        "Specify 'namespaceSelector: {matchNames: [\"<namespace>\"]}'"
      ],
      "ko": [
        "정책 규칙에 'namespace: <namespace>' 설정",
        "Use 'namespaces: [\"<namespace>\"]' under the rule's 'namespaces' field",
        "Add 'resourceNames: [\"<namespace>\"]' to the rule",
        "정책에 'level: Namespace' 설정",
        "Specify 'namespaceSelector: {matchNames: [\"<namespace>\"]}'"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "In Kubernetes audit policies, the 'namespaces' field in a rule specifies the namespaces to which the rule applies, allowing you to log events for all resources within those namespaces. The other options are incorrect because 'namespace' is not a valid field, 'resourceNames' filters specific resource names rather than namespaces, 'level' defines log verbosity not scope, and 'namespaceSelector' is not used in audit policies.",
      "ko": "Kubernetes 감사 정책에서 규칙의 'namespaces' 필드는 규칙을 적용할 네임스페이스를 지정하여 해당 네임스페이스의 모든 리소스에 대한 이벤트를 기록할 수 있게 합니다. 다른 선택지는 틀렸습니다. 'namespace'는 유효한 필드가 아니며, 'resourceNames'는 네임스페이스가 아니라 특정 리소스 이름으로 필터링합니다. 'level'은 범위가 아니라 로그의 상세 수준을 정의하고, 'namespaceSelector'는 감사 정책에서 사용하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-policy"
  },
  {
    "id": "kcsa-mock-234",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which kubectl command correctly creates a generic secret named 'db-secret' with a key 'password' and the value 'S3cr3t!'?",
      "ko": "키 'password'와 값 'S3cr3t!'를 가진 'db-secret'이라는 generic secret을 올바르게 만드는 kubectl 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl create secret generic db-secret --password='S3cr3t!'",
        "kubectl create secret db-secret --from-literal='password=S3cr3t!'",
        "kubectl create secret generic db-secret --from-literal=password=S3cr3t!",
        "kubectl create secret tls db-secret --key='S3cr3t!'",
        "kubectl create secret docker-registry db-secret --password='S3cr3t!'"
      ],
      "ko": [
        "kubectl create secret generic db-secret --password='S3cr3t!'",
        "kubectl create secret db-secret --from-literal='password=S3cr3t!'",
        "kubectl create secret generic db-secret --from-literal=password=S3cr3t!",
        "kubectl create secret tls db-secret --key='S3cr3t!'",
        "kubectl create secret docker-registry db-secret --password='S3cr3t!'"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The correct command uses 'kubectl create secret generic' with the '--from-literal' flag to specify a key-value pair for the secret. The syntax is: kubectl create secret generic db-secret --from-literal=password=S3cr3t!. The other options are incorrect because '--password' is not a valid flag for generic secrets, 'kubectl create secret' without 'generic' is incomplete, 'tls' secrets require certificate and key files, and 'docker-registry' secrets are for Docker credentials, not arbitrary key-value pairs.",
      "ko": "올바른 명령은 'kubectl create secret generic'과 '--from-literal' 플래그를 사용하여 Secret의 키-값 쌍을 지정합니다. 구문은 kubectl create secret generic db-secret --from-literal=password=S3cr3t!입니다. 다른 선택지는 틀렸습니다. '--password'는 generic Secret의 유효한 플래그가 아니며, 'generic' 없이 'kubectl create secret'만 사용하는 것은 불완전합니다. 'tls' Secret에는 인증서와 키 파일이 필요하며, 'docker-registry' Secret은 임의의 키-값 쌍이 아니라 Docker 자격 증명을 위한 것입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually"
  },
  {
    "id": "kcsa-mock-235",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How can you retrieve the value of a secret key 'username' from the secret 'db-secret' in the namespace 'prod'?",
      "ko": "네임스페이스 'prod'의 'db-secret'에서 secret 키 'username'의 값을 어떻게 가져옵니까?"
    },
    "choices": {
      "en": [
        "kubectl get secret db-secret -n prod -o jsonpath='{.data.username}' | base64 --decode",
        "kubectl describe secret db-secret -n prod",
        "kubectl get secret db-secret -n prod -o yaml",
        "kubectl read secret db-secret -n prod --key=username",
        "kubectl decode secret db-secret -n prod --field=username"
      ],
      "ko": [
        "kubectl get secret db-secret -n prod -o jsonpath='{.data.username}' | base64 --decode",
        "kubectl describe secret db-secret -n prod",
        "kubectl get secret db-secret -n prod -o yaml",
        "kubectl read secret db-secret -n prod --key=username",
        "kubectl decode secret db-secret -n prod --field=username"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "To extract and decode the secret value, you use `kubectl get` with `jsonpath` to specify the key and then decode the base64 encoded value. This method is efficient for retrieving specific secret values.",
      "ko": "Secret 값을 추출하고 디코딩하려면 `kubectl get`과 `jsonpath`를 사용하여 키를 지정한 다음 base64로 인코딩된 값을 디코딩합니다. 이 방법은 특정 Secret 값을 효율적으로 가져오는 데 유용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "kcsa-mock-236",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource object is used to request a certificate signing operation via the Kubernetes API?",
      "ko": "Kubernetes API를 통해 인증서 서명 작업을 요청하는 데 사용하는 Kubernetes 리소스 객체는 무엇입니까?"
    },
    "choices": {
      "en": [
        "CertificateRequest",
        "CertificateSigningRequest",
        "CertificateApproval",
        "CertificateSigning",
        "Certificate"
      ],
      "ko": [
        "CertificateRequest",
        "CertificateSigningRequest",
        "CertificateApproval",
        "CertificateSigning",
        "Certificate"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The Kubernetes resource 'CertificateSigningRequest' (CSR) is the official API object used to request a certificate signing operation. Users or components create a CSR object containing a public key and metadata; cluster administrators or automated controllers then approve and sign it. The other options are not valid Kubernetes resource kinds: 'CertificateRequest' and 'CertificateSigning' do not exist as Kubernetes resources; 'CertificateApproval' is not a resource but an action; 'Certificate' is not a Kubernetes resource for CSRs.",
      "ko": "Kubernetes 리소스 'CertificateSigningRequest'(CSR)는 인증서 서명 작업을 요청하는 공식 API 객체입니다. 사용자나 구성 요소가 공개 키와 메타데이터를 포함한 CSR 객체를 만들면 클러스터 관리자나 자동화된 컨트롤러가 이를 승인하고 서명합니다. 다른 선택지는 유효한 Kubernetes 리소스 종류가 아닙니다. 'CertificateRequest'와 'CertificateSigning'은 Kubernetes 리소스로 존재하지 않으며, 'CertificateApproval'은 리소스가 아니라 작업입니다. 'Certificate'는 CSR을 위한 Kubernetes 리소스가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/"
  },
  {
    "id": "kcsa-mock-237",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command is used to approve a CertificateSigningRequest (CSR) in Kubernetes?",
      "ko": "Kubernetes에서 CertificateSigningRequest(CSR)를 승인하는 데 사용하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl sign csr <csr-name>",
        "kubectl create csr <csr-name>",
        "kubectl certificate approve <csr-name>",
        "kubectl approve csr <csr-name>",
        "kubectl csr approve <csr-name>"
      ],
      "ko": [
        "kubectl sign csr <csr-name>",
        "kubectl create csr <csr-name>",
        "kubectl certificate approve <csr-name>",
        "kubectl approve csr <csr-name>",
        "kubectl csr approve <csr-name>"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The correct command to approve a CertificateSigningRequest (CSR) in Kubernetes is 'kubectl certificate approve <csr-name>'. This command instructs the certificate signing controller to approve the CSR, allowing the requested certificate to be issued. Other options like 'kubectl create' are used for creating resources, while 'kubectl sign', 'kubectl approve csr', and 'kubectl csr approve' are invalid commands.",
      "ko": "Kubernetes에서 CertificateSigningRequest(CSR)를 승인하는 올바른 명령은 'kubectl certificate approve <csr-name>'입니다. 이 명령은 인증서 서명 컨트롤러에 CSR 승인을 지시하여 요청한 인증서를 발급할 수 있게 합니다. 'kubectl create'와 같은 다른 선택지는 리소스를 생성하는 데 사용되며, 'kubectl sign', 'kubectl approve csr', 'kubectl csr approve'는 유효하지 않은 명령입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/"
  },
  {
    "id": "kcsa-mock-238",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Runtime",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource type allows cluster administrators to define and enforce the use of specific container runtimes like gVisor or Kata Containers?",
      "ko": "gVisor 또는 Kata Containers와 같은 특정 컨테이너 런타임의 사용을 클러스터 관리자가 정의하고 강제할 수 있게 하는 Kubernetes 리소스 유형은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Runtime",
        "RuntimeClass",
        "PodSecurityPolicy",
        "SecurityContext",
        "ContainerRuntime"
      ],
      "ko": [
        "Runtime",
        "RuntimeClass",
        "PodSecurityPolicy",
        "SecurityContext",
        "ContainerRuntime"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "RuntimeClass is a first-class Kubernetes resource that specifies container runtime configurations. It enables security-conscious runtime selection (like gVisor's sandboxed environment) while maintaining portability across different container runtimes. PodSecurityPolicy (deprecated in v1.21) handled security policies but not runtime selection.",
      "ko": "RuntimeClass는 컨테이너 런타임 설정을 지정하는 Kubernetes의 기본 리소스입니다. 서로 다른 컨테이너 런타임 사이의 이식성을 유지하면서 gVisor의 샌드박스 환경과 같은 보안 중심 런타임을 선택할 수 있게 합니다. Kubernetes v1.21에서 사용 중단된 PodSecurityPolicy는 보안 정책을 처리했지만 런타임 선택을 담당하지는 않았습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/runtime-class/"
  },
  {
    "id": "kcsa-mock-239",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container Runtime",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Where in a Pod specification should you declare the use of a gVisor RuntimeClass to ensure all containers in the Pod use this secure runtime environment?",
      "ko": "Pod의 모든 컨테이너가 이 보안 런타임 환경을 사용하도록 gVisor RuntimeClass 사용을 Pod 사양의 어디에 선언해야 합니까?"
    },
    "choices": {
      "en": [
        "Set 'runtime: gvisor'",
        "Set 'securityContext: {runtimeClassName: \"gvisor\"}'",
        "Set 'runtimeClassName: \"gvisor\"' at the Pod spec level",
        "Set 'containerRuntime: \"gvisor\"' in the container spec",
        "Annotate the Pod with 'runtimeClass: gvisor'"
      ],
      "ko": [
        "Set 'runtime: gvisor'",
        "Set 'securityContext: {runtimeClassName: \"gvisor\"}'",
        "Set 'runtimeClassName: \"gvisor\"' at the Pod spec level",
        "Set 'containerRuntime: \"gvisor\"' in the container spec",
        "Annotate the Pod with 'runtimeClass: gvisor'"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The 'runtimeClassName' field must be specified directly in the Pod's spec section (pod.spec.runtimeClassName). This ensures all containers in the Pod use the specified runtime. SecurityContext handles security parameters but not runtime selection, and container-level runtime configuration isn't supported in this manner.",
      "ko": "'runtimeClassName' 필드는 Pod의 spec 섹션에 직접 지정해야 합니다(pod.spec.runtimeClassName). 그러면 Pod의 모든 컨테이너가 지정된 런타임을 사용합니다. SecurityContext는 보안 매개변수를 처리하지만 런타임 선택을 처리하지 않으며, 이와 같은 방식의 컨테이너 수준 런타임 설정은 지원되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/"
  },
  {
    "id": "kcsa-mock-240",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Connectivity",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command lists all processes currently listening on TCP and UDP ports on a Linux system, including the associated process IDs?",
      "ko": "연결된 프로세스 ID를 포함하여 Linux 시스템에서 현재 TCP 및 UDP 포트에 수신 대기 중인 모든 프로세스를 나열하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "sudo netstat -tulpn",
        "sudo lsof -i",
        "sudo ss -tulw",
        "sudo ps aux | grep LISTEN",
        "sudo netstat -an"
      ],
      "ko": [
        "sudo netstat -tulpn",
        "sudo lsof -i",
        "sudo ss -tulw",
        "sudo ps aux | grep LISTEN",
        "sudo netstat -an"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command 'sudo netstat -tulpn' lists all listening TCP and UDP ports along with the process IDs and names that are using those ports. The flags mean: '-t' for TCP, '-u' for UDP, '-l' for listening sockets, '-p' to show process info, and '-n' to show numeric addresses. 'sudo lsof -i' also shows network connections but is less focused on listening ports specifically. 'sudo ss -tulw' shows listening sockets but may omit process names without additional flags. 'sudo ps aux | grep LISTEN' is incorrect because 'LISTEN' is not a process name but a socket state. 'sudo netstat -an' shows all connections but does not include process information.",
      "ko": "'sudo netstat -tulpn' 명령은 수신 대기 중인 모든 TCP 및 UDP 포트와 함께 해당 포트를 사용하는 프로세스 ID와 이름을 나열합니다. 각 플래그는 '-t'가 TCP, '-u'가 UDP, '-l'이 수신 대기 소켓, '-p'가 프로세스 정보 표시, '-n'이 숫자 주소 표시를 뜻합니다. 'sudo lsof -i'도 네트워크 연결을 보여 주지만 수신 대기 포트에 특화되어 있지는 않습니다. 'sudo ss -tulw'는 수신 대기 소켓을 보여 주지만 추가 플래그가 없으면 프로세스 이름을 생략할 수 있습니다. 'sudo ps aux | grep LISTEN'은 LISTEN이 프로세스 이름이 아니라 소켓 상태이므로 틀렸습니다. 'sudo netstat -an'은 모든 연결을 보여 주지만 프로세스 정보는 포함하지 않습니다."
    },
    "ref": "https://man7.org/linux/man-pages/man8/netstat.8.html"
  },
  {
    "id": "kcsa-mock-241",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Connectivity",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "After identifying an unwanted process listening on a network port, which command can you use to terminate that process by its process ID (PID)?",
      "ko": "네트워크 포트에서 원치 않는 프로세스를 식별한 뒤 PID로 해당 프로세스를 종료하는 데 사용할 수 있는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "killall <process-name>",
        "sudo stop <process-name>",
        "sudo systemctl disable <process-name>",
        "sudo kill <pid>",
        "sudo service <process-name> remove"
      ],
      "ko": [
        "killall <process-name>",
        "sudo stop <process-name>",
        "sudo systemctl disable <process-name>",
        "sudo kill <pid>",
        "sudo service <process-name> remove"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The command 'sudo kill <pid>' sends a termination signal to the process with the specified PID, effectively stopping it. 'killall <process-name>' kills all processes matching the name but requires the exact process name and may affect multiple processes. 'sudo stop <process-name>' is used to stop services managed by Upstart, which is less common now. 'sudo systemctl disable <process-name>' disables a systemd service from starting on boot but does not stop a running process immediately. 'sudo service <process-name> remove' is not a valid command to stop processes.",
      "ko": "'sudo kill <pid>' 명령은 지정한 PID의 프로세스에 종료 시그널을 보내어 해당 프로세스를 중지합니다. 'killall <process-name>'은 이름이 일치하는 모든 프로세스를 종료하지만 정확한 프로세스 이름이 필요하며 여러 프로세스에 영향을 줄 수 있습니다. 'sudo stop <process-name>'은 현재는 사용이 덜 흔한 Upstart가 관리하는 서비스를 중지합니다. 'sudo systemctl disable <process-name>'은 systemd 서비스가 부팅 시 시작하지 않게 하지만 실행 중인 프로세스를 즉시 중지하지는 않습니다. 'sudo service <process-name> remove'는 프로세스를 중지하는 유효한 명령이 아닙니다."
    },
    "ref": "https://man7.org/linux/man-pages/man1/kill.1.html"
  },
  {
    "id": "kcsa-mock-242",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Supply Chain Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command is used to remove the 'apache2' package from a Debian-based Linux system?",
      "ko": "Debian 기반 Linux 시스템에서 'apache2' 패키지를 제거하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "sudo apt-get install apache2",
        "sudo yum remove apache2",
        "sudo apt-get remove apache2",
        "sudo rpm -e apache2",
        "sudo dnf erase apache2"
      ],
      "ko": [
        "sudo apt-get install apache2",
        "sudo yum remove apache2",
        "sudo apt-get remove apache2",
        "sudo rpm -e apache2",
        "sudo dnf erase apache2"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "On Debian-based systems (such as Ubuntu), the package manager 'apt-get' is used to manage packages. The command 'sudo apt-get remove apache2' uninstalls the 'apache2' package but retains configuration files. 'sudo apt-get install apache2' installs the package. 'sudo yum remove apache2' and 'sudo dnf erase apache2' are used on Red Hat-based systems, not Debian-based. 'sudo rpm -e apache2' is also for RPM-based distributions and not applicable to Debian-based systems.",
      "ko": "Ubuntu와 같은 Debian 기반 시스템에서는 'apt-get' 패키지 관리자로 패키지를 관리합니다. 'sudo apt-get remove apache2' 명령은 'apache2' 패키지를 제거하지만 설정 파일은 남깁니다. 'sudo apt-get install apache2'는 패키지를 설치합니다. 'sudo yum remove apache2'와 'sudo dnf erase apache2'는 Debian 기반이 아니라 Red Hat 기반 시스템에서 사용됩니다. 'sudo rpm -e apache2' 역시 RPM 기반 배포판을 위한 명령으로 Debian 기반 시스템에는 적용되지 않습니다."
    },
    "ref": "https://wiki.debian.org/Apt"
  },
  {
    "id": "kcsa-mock-243",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Supply Chain Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command lists all installed packages on a Debian-based Linux system using the apt package manager?",
      "ko": "apt 패키지 관리자를 사용하여 Debian 기반 Linux 시스템에 설치된 모든 패키지를 나열하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "apt list --installed",
        "dpkg -l",
        "rpm -qa",
        "yum list installed",
        "pkg info"
      ],
      "ko": [
        "apt list --installed",
        "dpkg -l",
        "rpm -qa",
        "yum list installed",
        "pkg info"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command 'apt list --installed' displays all packages installed via the apt package manager on Debian-based systems. While 'dpkg -l' also lists installed packages, it shows lower-level package information and is not specific to apt. 'rpm -qa' and 'yum list installed' are commands used on RPM-based systems like Red Hat or CentOS, and 'pkg info' is used in BSD-based systems, making them incorrect for Debian-based systems.",
      "ko": "'apt list --installed' 명령은 Debian 기반 시스템에서 apt 패키지 관리자를 통해 설치된 모든 패키지를 표시합니다. 'dpkg -l'도 설치된 패키지를 나열하지만 더 낮은 수준의 패키지 정보를 보여 주며 apt에 특화되어 있지는 않습니다. 'rpm -qa'와 'yum list installed'는 Red Hat이나 CentOS 같은 RPM 기반 시스템에서 사용하는 명령이며, 'pkg info'는 BSD 기반 시스템에서 사용되므로 Debian 기반 시스템에 대한 정답이 아닙니다."
    },
    "ref": "https://wiki.debian.org/Apt"
  },
  {
    "id": "kcsa-mock-244",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which strace command-line option provides a summary of the time spent in each system call during program execution?",
      "ko": "프로그램 실행 중 각 시스템 호출에 소요된 시간을 요약해 주는 strace 명령줄 옵션은 무엇입니까?"
    },
    "choices": {
      "en": [
        "-c",
        "-p",
        "-t",
        "-e trace=%time",
        "-s"
      ],
      "ko": [
        "-c",
        "-p",
        "-t",
        "-e trace=%time",
        "-s"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The '-c' option in strace outputs a summary report showing the count, total time, and average time spent in each system call, helping analyze performance bottlenecks. The '-p' option attaches strace to an existing process by PID, '-t' prefixes each line with a timestamp, '-e trace=%time' is not a valid option, and '-s' sets the maximum string size to print, so they do not provide a time summary.",
      "ko": "strace의 '-c' 옵션은 각 시스템 호출의 횟수, 총 소요 시간, 평균 소요 시간을 보여 주는 요약 보고서를 출력하여 성능 병목을 분석하는 데 도움이 됩니다. '-p'는 PID를 사용하여 strace를 기존 프로세스에 연결하고, '-t'는 각 줄 앞에 타임스탬프를 붙입니다. '-e trace=%time'은 유효한 옵션이 아니며, '-s'는 출력할 문자열의 최대 크기를 설정하므로 이 선택지들은 시간 요약을 제공하지 않습니다."
    },
    "ref": "https://man7.org/linux/man-pages/man1/strace.1.html"
  },
  {
    "id": "kcsa-mock-245",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Observability",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which strace command attaches to an already running process with PID 1234 to trace its system calls?",
      "ko": "PID 1234로 이미 실행 중인 프로세스에 연결하여 시스템 호출을 추적하는 strace 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "strace 1234",
        "strace -p 1234",
        "strace -c 1234",
        "sudo trace -pid 1234",
        "strace --process 1234"
      ],
      "ko": [
        "strace 1234",
        "strace -p 1234",
        "strace -c 1234",
        "sudo trace -pid 1234",
        "strace --process 1234"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The correct command to attach strace to a running process with PID 1234 is 'strace -p 1234'. The '-p' option specifies the process ID to attach to. 'strace 1234' attempts to run a new process named '1234', which is invalid. 'strace -c 1234' runs strace with summary statistics on a new process named '1234'. 'sudo trace -pid 1234' is not a valid command, and 'strace --process 1234' is not a recognized option.",
      "ko": "PID가 1234인 실행 중인 프로세스에 strace를 연결하는 올바른 명령은 'strace -p 1234'입니다. '-p' 옵션은 연결할 프로세스 ID를 지정합니다. 'strace 1234'는 '1234'라는 새 프로세스를 실행하려고 하므로 유효하지 않습니다. 'strace -c 1234'는 '1234'라는 새 프로세스에 대해 요약 통계를 사용하여 strace를 실행합니다. 'sudo trace -pid 1234'는 유효한 명령이 아니며, 'strace --process 1234'는 인식되는 옵션이 아닙니다."
    },
    "ref": "https://man7.org/linux/man-pages/man1/strace.1.html"
  },
  {
    "id": "kcsa-mock-246",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which command calculates the SHA256 checksum of the file '/usr/bin/kubelet' on a Linux system?",
      "ko": "Linux 시스템에서 '/usr/bin/kubelet' 파일의 SHA256 체크섬을 계산하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "sha1sum /usr/bin/kubelet",
        "md5sum /usr/bin/kubelet",
        "checksum -sha256 /usr/bin/kubelet",
        "sha256sum /usr/bin/kubelet",
        "hash -a sha256 /usr/bin/kubelet"
      ],
      "ko": [
        "sha1sum /usr/bin/kubelet",
        "md5sum /usr/bin/kubelet",
        "checksum -sha256 /usr/bin/kubelet",
        "sha256sum /usr/bin/kubelet",
        "hash -a sha256 /usr/bin/kubelet"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The command 'sha256sum /usr/bin/kubelet' computes the SHA256 checksum of the specified file, which is commonly used to verify file integrity. 'sha1sum' and 'md5sum' calculate different hash algorithms (SHA1 and MD5 respectively). 'checksum -sha256' and 'hash -a sha256' are not standard Linux commands for checksum calculation.",
      "ko": "'sha256sum /usr/bin/kubelet' 명령은 지정한 파일의 SHA256 체크섬을 계산하며, 이는 일반적으로 파일 무결성을 검증하는 데 사용됩니다. 'sha1sum'과 'md5sum'은 각각 SHA1과 MD5라는 다른 해시 알고리즘의 값을 계산합니다. 'checksum -sha256'과 'hash -a sha256'은 체크섬 계산을 위한 표준 Linux 명령이 아닙니다."
    },
    "ref": "https://www.gnu.org/software/coreutils/manual/html_node/sha256sum-invocation.html"
  },
  {
    "id": "kcsa-mock-247",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why is it critical to verify the checksums of Kubernetes binaries after downloading them?",
      "ko": "Kubernetes 바이너리를 다운로드한 후 체크섬을 검증하는 것이 중요한 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "To ensure they are the latest version",
        "To verify the integrity and authenticity of the binaries",
        "To improve their performance",
        "To check for syntax errors",
        "To enable automatic updates"
      ],
      "ko": [
        "최신 버전인지 확인",
        "바이너리의 무결성과 진위성 검증",
        "성능 향상",
        "문법 오류 확인",
        "자동 업데이트 활성화"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Verifying the checksums of Kubernetes binaries ensures that the files have not been tampered with or corrupted during download, confirming their integrity and authenticity. This protects against malicious modifications or accidental corruption. Checking for the latest version, performance improvements, syntax errors, or enabling automatic updates are unrelated to checksum verification.",
      "ko": "Kubernetes 바이너리의 체크섬을 검증하면 다운로드 중 파일이 변조되거나 손상되지 않았음을 확인하여 무결성과 진위를 확인할 수 있습니다. 이는 악의적인 수정이나 우발적인 손상으로부터 보호합니다. 최신 버전인지 확인하거나, 성능을 개선하거나, 구문 오류를 찾거나, 자동 업데이트를 활성화하는 것은 체크섬 검증과 관련이 없습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/tools/install-kubectl/#verifying-the-kubectl-binary"
  },
  {
    "id": "kcsa-mock-248",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a significant security risk associated with using an insecure container registry?",
      "ko": "안전하지 않은 컨테이너 레지스트리를 사용할 때 발생하는 중요한 보안 위험은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Faster image downloads",
        "Increased image caching",
        "Man-in-the-middle attacks leading to compromised images",
        "Improved image availability",
        "Automatic image updates"
      ],
      "ko": [
        "더 빠른 이미지 다운로드",
        "이미지 캐싱 증가",
        "이미지 손상으로 이어지는 중간자 공격",
        "이미지 가용성 향상",
        "이미지 자동 업데이트"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Using an insecure container registry exposes images to interception and tampering during transit, enabling man-in-the-middle attacks that can compromise container images. This can lead to running malicious or altered images in production. The other options describe benefits or neutral effects unrelated to security risks.",
      "ko": "안전하지 않은 컨테이너 레지스트리를 사용하면 전송 중 이미지가 가로채기와 변조에 노출되며, 컨테이너 이미지를 침해할 수 있는 중간자 공격이 가능해집니다. 이로 인해 프로덕션에서 악성 이미지나 변조된 이미지를 실행할 수 있습니다. 다른 선택지는 보안 위험과 관련이 없는 이점이나 중립적인 효과를 설명합니다."
    },
    "ref": "https://github.com/cncf/tag-security/blob/main/security-whitepaper/container-registry-security.md"
  },
  {
    "id": "kcsa-mock-249",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact Repository and Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following is a recommended best practice when configuring container registries to ensure security?",
      "ko": "보안을 보장하도록 컨테이너 레지스트리를 구성할 때 권장되는 모범 사례는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Use HTTP instead of HTTPS for performance",
        "Allow anonymous access",
        "Use authenticated and encrypted connections (HTTPS)",
        "Disable TLS verification",
        "Expose the registry publicly without restrictions"
      ],
      "ko": [
        "성능을 위해 HTTPS 대신 HTTP 사용",
        "익명 접근 허용",
        "인증되고 암호화된 연결(HTTPS) 사용",
        "TLS 검증 비활성화",
        "제한 없이 레지스트리를 공개적으로 노출"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Using HTTPS with authentication ensures that communication with the container registry is encrypted and access is controlled, preventing unauthorized access and tampering. Using HTTP or disabling TLS verification exposes the registry to interception and attacks. Allowing anonymous or unrestricted public access increases the risk of unauthorized image uploads or downloads.",
      "ko": "인증과 함께 HTTPS를 사용하면 컨테이너 레지스트리와의 통신을 암호화하고 접근을 제어하여 무단 접근과 변조를 방지합니다. HTTP를 사용하거나 TLS 검증을 비활성화하면 레지스트리가 가로채기와 공격에 노출됩니다. 익명 접근이나 제한 없는 공개 접근을 허용하면 허가되지 않은 이미지 업로드나 다운로드의 위험이 커집니다."
    },
    "ref": "https://docs.docker.com/registry/security/"
  },
  {
    "id": "kcsa-mock-250",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource is used to enforce Pod Security Standards within a namespace?",
      "ko": "네임스페이스 내에서 Pod Security Standards를 강제하는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "PodSecurityPolicy",
        "NetworkPolicy",
        "LimitRange",
        "ResourceQuota",
        "Pod Security Admission Controller"
      ],
      "ko": [
        "PodSecurityPolicy",
        "NetworkPolicy",
        "LimitRange",
        "ResourceQuota",
        "Pod Security Admission Controller"
      ]
    },
    "answer": 4,
    "explain": {
      "en": "The Pod Security Admission Controller is responsible for enforcing Pod Security Standards in Kubernetes. It ensures that pods comply with predefined security policies, enhancing cluster security.",
      "ko": "Pod Security Admission Controller는 Kubernetes에서 Pod Security Standards를 강제하는 역할을 담당합니다. Pod가 미리 정의된 보안 정책을 준수하도록 하여 클러스터 보안을 강화합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-251",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Kubernetes Trust Boundaries and Data Flow",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In the STRIDE threat modeling framework, what does the letter 'S' represent?",
      "ko": "STRIDE 위협 모델링 프레임워크에서 문자 'S'는 무엇을 의미합니까?"
    },
    "choices": {
      "en": [
        "Spoofing",
        "Scanning",
        "Snooping",
        "Spamming",
        "Sniffing"
      ],
      "ko": [
        "Spoofing",
        "Scanning",
        "Snooping",
        "Spamming",
        "Sniffing"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "In STRIDE, a widely used threat modeling framework, 'S' stands for Spoofing, which refers to an attacker pretending to be someone or something else to gain unauthorized access. The other options like scanning, snooping, spamming, and sniffing are related to security but are not part of the STRIDE categories.",
      "ko": "널리 사용되는 위협 모델링 프레임워크인 STRIDE에서 'S'는 Spoofing을 뜻합니다. 이는 공격자가 무단 접근을 얻기 위해 다른 사람이나 다른 대상을 가장하는 것을 의미합니다. 스캐닝, 엿보기, 스팸 전송, 스니핑과 같은 다른 선택지는 보안과 관련이 있지만 STRIDE 범주에는 포함되지 않습니다."
    },
    "ref": "https://learn.microsoft.com/en-us/security/engineering/stride-threat-model"
  },
  {
    "id": "kcsa-mock-252",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Malicious Code Execution and Compromised Applications in Containers",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which STRIDE threat category primarily addresses threats related to data integrity?",
      "ko": "어떤 STRIDE 위협 범주가 데이터 무결성과 관련된 위협을 주로 다룹니까?"
    },
    "choices": {
      "en": [
        "Spoofing",
        "Tampering",
        "Repudiation",
        "Information Disclosure",
        "Denial of Service"
      ],
      "ko": [
        "Spoofing",
        "Tampering",
        "Repudiation",
        "정보 공개",
        "서비스 거부"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The 'Tampering' category in STRIDE focuses on threats that compromise data integrity by unauthorized modification of data. Spoofing relates to identity, repudiation to denial of actions, information disclosure to confidentiality breaches, and denial of service to availability issues.",
      "ko": "STRIDE의 Tampering 범주는 데이터의 무단 수정으로 무결성을 훼손하는 위협에 초점을 둡니다. Spoofing은 신원과 관련되고, Repudiation은 행위를 부인하는 것과 관련되며, Information Disclosure는 기밀성 침해, Denial of Service는 가용성 문제와 관련됩니다."
    },
    "ref": "https://learn.microsoft.com/en-us/security/engineering/stride-threat-model"
  },
  {
    "id": "kcsa-mock-253",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Kubernetes Trust Boundaries and Data Flow",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In the STRIDE threat modeling framework, what does 'Repudiation' refer to?",
      "ko": "STRIDE 위협 모델에서 'Repudiation'은 무엇을 의미합니까?"
    },
    "choices": {
      "en": [
        "Unauthorized access",
        "Denial of an action or event",
        "Data leakage",
        "Service unavailability",
        "Privilege escalation"
      ],
      "ko": [
        "무단 접근",
        "작업 또는 이벤트를 부인함",
        "데이터 유출",
        "서비스 사용 불가",
        "권한 상승"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "'Repudiation' in STRIDE refers to the ability of an attacker or user to deny having performed an action or event, which can hinder accountability and auditing. It is distinct from unauthorized access (spoofing), data leakage (information disclosure), service unavailability (denial of service), and privilege escalation.",
      "ko": "STRIDE의 Repudiation은 공격자나 사용자가 어떤 작업이나 이벤트를 수행했다는 사실을 부인할 수 있는 것을 뜻하며, 이는 책임 추적과 감사를 방해할 수 있습니다. 이는 무단 접근(Spoofing), 데이터 유출(Information Disclosure), 서비스 이용 불가(Denial of Service), 권한 상승과 구별됩니다."
    },
    "ref": "https://learn.microsoft.com/en-us/security/engineering/stride-threat-model"
  },
  {
    "id": "kcsa-mock-254",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Access to Sensitive Data",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is an example of 'Information Disclosure' under the STRIDE threat model?",
      "ko": "STRIDE 위협 모델에서 'Information Disclosure'의 예는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A user deletes all records from a database",
        "A user reads sensitive data in a database without authorization",
        "A user denies performing a destructive action",
        "A user overflows a buffer to gain root access",
        "A user floods a network to make services unavailable"
      ],
      "ko": [
        "사용자가 데이터베이스의 모든 레코드를 삭제함",
        "사용자가 권한 없이 데이터베이스의 민감한 데이터를 읽음",
        "사용자가 파괴적 작업을 수행했다는 사실을 부인함",
        "사용자가 root 접근을 얻기 위해 버퍼를 오버플로함",
        "사용자가 서비스를 사용할 수 없게 하려고 네트워크를 플러딩함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Information Disclosure refers to unauthorized access to sensitive data. This can occur when a user reads confidential information without proper authorization. Other options do not fit this category because they involve different types of threats: data deletion (Tampering), denial of actions (Repudiation), privilege escalation (Elevation of Privileges), and network disruption (Denial of Service).",
      "ko": "Information Disclosure는 민감한 데이터에 대한 무단 접근을 의미합니다. 사용자가 적절한 권한 없이 기밀 정보를 읽을 때 발생할 수 있습니다. 다른 선택지는 서로 다른 종류의 위협이므로 이 범주에 해당하지 않습니다. 데이터 삭제는 Tampering, 행위 부인은 Repudiation, 권한 상승은 Elevation of Privileges, 네트워크 장애는 Denial of Service에 해당합니다."
    },
    "ref": "https://docs.microsoft.com/en-us/archive/blogs/azuresecurity/threat-modeling-stride"
  },
  {
    "id": "kcsa-mock-255",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Privilege Escalation",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What does 'Elevation of Privileges' mean in the context of STRIDE?",
      "ko": "STRIDE 맥락에서 'Elevation of Privileges'는 무엇을 의미합니까?"
    },
    "choices": {
      "en": [
        "Gaining access to resources by posing as someone else",
        "Modifying data in transit",
        "Gaining unauthorized access rights that one should not have",
        "Denial of actions performed",
        "Accessing services during downtime"
      ],
      "ko": [
        "다른 사람인 것처럼 가장하여 리소스에 접근",
        "전송 중 데이터 수정",
        "가져서는 안 되는 접근 권한을 무단으로 획득",
        "수행한 작업을 부인",
        "다운타임 중 서비스 접근"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Elevation of Privileges refers to the unauthorized acquisition of higher access rights than those originally granted. This can lead to increased capabilities to perform actions that were previously restricted. The other options describe different threats: impersonation (Spoofing), data tampering (Tampering), denial of actions (Repudiation), and accessing services during maintenance (not a specific STRIDE category).",
      "ko": "Elevation of Privileges는 원래 부여된 것보다 더 높은 접근 권한을 무단으로 획득하는 것을 의미합니다. 이로 인해 이전에는 제한되어 있던 작업을 수행할 수 있는 능력이 커집니다. 다른 선택지는 서로 다른 위협을 설명합니다. 가장은 Spoofing, 데이터 변조는 Tampering, 행위 부인은 Repudiation에 해당하며, 유지보수 중 서비스에 접근하는 것은 특정 STRIDE 범주가 아닙니다."
    },
    "ref": "https://docs.microsoft.com/en-us/archive/blogs/azuresecurity/threat-modeling-stride"
  },
  {
    "id": "kcsa-mock-256",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Kubernetes Trust Boundaries and Data Flow",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a common mitigation strategy for 'Spoofing' threats?",
      "ko": "'Spoofing' 위협의 일반적인 완화 전략은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Implementing proper authentication mechanisms",
        "Using encryption for data at rest",
        "Implementing audit logging",
        "Applying rate limiting",
        "Running processes as root"
      ],
      "ko": [
        "적절한 인증 메커니즘 구현",
        "저장 데이터 암호화 사용",
        "감사 로깅 구현",
        "요청 속도 제한 적용",
        "프로세스를 root로 실행"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Spoofing threats can be mitigated by implementing robust authentication mechanisms. These mechanisms help verify the identity of users or systems, reducing the risk of impersonation. While encryption (option 2) and audit logging (option 3) are important security practices, they do not directly address spoofing. Rate limiting (option 4) is more relevant to Denial of Service attacks, and running processes as root (option 5) increases security risks.",
      "ko": "강력한 인증 메커니즘을 구현하면 Spoofing 위협을 완화할 수 있습니다. 이러한 메커니즘은 사용자나 시스템의 신원을 검증하여 가장의 위험을 줄이는 데 도움이 됩니다. 암호화(선택지 2)와 감사 로깅(선택지 3)은 중요한 보안 관행이지만 Spoofing에 직접 대응하지는 않습니다. 요청 속도 제한(선택지 4)은 Denial of Service 공격과 더 관련이 있으며, 프로세스를 root로 실행하는 것(선택지 5)은 보안 위험을 높입니다."
    },
    "ref": "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
  },
  {
    "id": "kcsa-mock-257",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Denial of Service",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which STRIDE category is primarily concerned with service availability?",
      "ko": "서비스 가용성과 주로 관련된 STRIDE 범주는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Spoofing",
        "Tampering",
        "Denial of Service",
        "Information Disclosure",
        "Elevation of Privileges"
      ],
      "ko": [
        "Spoofing",
        "Tampering",
        "서비스 거부",
        "정보 공개",
        "권한 상승"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Denial of Service (DoS) is the STRIDE category focused on making services unavailable. This can be achieved through various means, such as overwhelming a system with requests or disrupting network connectivity. The other options involve different types of threats: impersonation (Spoofing), data modification (Tampering), unauthorized data access (Information Disclosure), and unauthorized privilege escalation (Elevation of Privileges).",
      "ko": "Denial of Service(DoS)는 서비스를 사용할 수 없게 만드는 데 초점을 둔 STRIDE 범주입니다. 시스템에 과도한 요청을 보내거나 네트워크 연결을 방해하는 등의 다양한 방법으로 발생시킬 수 있습니다. 다른 선택지는 가장(Spoofing), 데이터 수정(Tampering), 데이터에 대한 무단 접근(Information Disclosure), 무단 권한 상승(Elevation of Privileges)이라는 다른 종류의 위협을 설명합니다."
    },
    "ref": "https://docs.microsoft.com/en-us/archive/blogs/azuresecurity/threat-modeling-stride"
  },
  {
    "id": "kcsa-mock-258",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Kubernetes Trust Boundaries and Data Flow",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is 'Threat Modeling' in the context of security?",
      "ko": "보안 맥락에서 ‘Threat Modeling’이란 무엇입니까?"
    },
    "choices": {
      "en": [
        "A systematic process to identify and mitigate security risks",
        "A method to design software architectures",
        "A technique to improve application performance",
        "A strategy for marketing products",
        "An approach to project management"
      ],
      "ko": [
        "보안 위험을 식별하고 완화하는 체계적 프로세스",
        "소프트웨어 아키텍처 설계 방법",
        "애플리케이션 성능 개선 기법",
        "제품 마케팅 전략",
        "프로젝트 관리 접근법"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Threat Modeling is a structured approach to identifying and mitigating potential security threats. It involves analyzing systems to uncover vulnerabilities and developing strategies to address them. This process is crucial for ensuring the security and integrity of systems. The other options describe unrelated activities: software design, performance optimization, marketing, and project management.",
      "ko": "위협 모델링은 잠재적인 보안 위협을 식별하고 완화하는 체계적인 접근법입니다. 시스템을 분석하여 취약점을 발견하고 이에 대응할 전략을 개발하는 과정이 포함됩니다. 이 과정은 시스템의 보안과 무결성을 보장하는 데 중요합니다. 다른 선택지는 소프트웨어 설계, 성능 최적화, 마케팅, 프로젝트 관리라는 관련 없는 활동을 설명합니다."
    },
    "ref": "https://docs.microsoft.com/en-us/archive/blogs/azuresecurity/threat-modeling-stride"
  },
  {
    "id": "kcsa-mock-259",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Privilege Escalation",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In the STRIDE threat model, which category best describes an attacker exploiting a buffer overflow to gain root access?",
      "ko": "STRIDE 위협 모델에서 버퍼 오버플로를 악용해 root 권한을 얻는 공격자를 가장 잘 설명하는 범주는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Spoofing",
        "Tampering",
        "Repudiation",
        "Information Disclosure",
        "Elevation of Privileges"
      ],
      "ko": [
        "Spoofing",
        "Tampering",
        "Repudiation",
        "정보 공개",
        "권한 상승"
      ]
    },
    "answer": 4,
    "explain": {
      "en": "Exploiting a buffer overflow to gain root access is classified as an Elevation of Privileges threat because it involves escalating an attacker's privileges to access sensitive resources. This is a critical threat as it can lead to full system compromise.",
      "ko": "버퍼 오버플로를 악용하여 root 접근 권한을 얻는 것은 공격자의 권한을 높여 민감한 리소스에 접근하는 행위이므로 Elevation of Privileges 위협으로 분류됩니다. 전체 시스템 침해로 이어질 수 있으므로 중대한 위협입니다."
    },
    "ref": "https://docs.microsoft.com/en-us/archive/blogs/secdev/stride-a-threat-modeling-tool"
  },
  {
    "id": "kcsa-mock-260",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Kubernetes Trust Boundaries and Data Flow",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following options is NOT a category in the STRIDE threat model?",
      "ko": "다음 중 STRIDE 위협 모델의 범주가 아닌 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Spoofing",
        "Tampering",
        "Replication",
        "Information Disclosure",
        "Denial of Service"
      ],
      "ko": [
        "Spoofing",
        "Tampering",
        "Replication",
        "정보 공개",
        "서비스 거부"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Replication is not one of the categories in the STRIDE threat model. The STRIDE model includes Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privileges.",
      "ko": "Replication은 STRIDE 위협 모델의 범주에 포함되지 않습니다. STRIDE 모델은 Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privileges로 구성됩니다."
    },
    "ref": "https://docs.microsoft.com/en-us/archive/blogs/secdev/stride-a-threat-modeling-tool"
  },
  {
    "id": "kcsa-mock-261",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Access to Sensitive Data",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is an effective mitigation technique for 'Information Disclosure' threats in a Kubernetes environment?",
      "ko": "Kubernetes 환경에서 Information Disclosure 위협에 대한 효과적인 완화 기법은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Implementing audit logging",
        "Encrypting data at rest and in transit",
        "Using rate limiting",
        "Implementing CAPTCHA",
        "Using prepared SQL statements"
      ],
      "ko": [
        "감사 로깅 구현",
        "저장 중 및 전송 중 데이터 암호화",
        "요청 속도 제한 사용",
        "CAPTCHA 구현",
        "준비된 SQL 문 사용"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Encrypting data at rest and in transit is crucial for protecting against Information Disclosure threats. This ensures that even if unauthorized access occurs, the data remains confidential and unreadable.",
      "ko": "저장 중인 데이터와 전송 중인 데이터를 암호화하는 것은 Information Disclosure 위협으로부터 보호하는 데 중요합니다. 무단 접근이 발생하더라도 데이터가 기밀성을 유지하며 읽을 수 없는 상태가 되게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/security-best-practices/"
  },
  {
    "id": "kcsa-mock-262",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Malicious Code Execution and Compromised Applications in Containers",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a common mitigation strategy for 'Tampering' threats in Kubernetes?",
      "ko": "Kubernetes에서 Tampering 위협에 대한 일반적인 완화 전략은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Implementing strong authentication",
        "Using digital signatures and checksums",
        "Applying redundant servers",
        "Implementing multi-factor authentication",
        "Enforcing password complexity"
      ],
      "ko": [
        "강력한 인증 구현",
        "디지털 서명과 체크섬 사용",
        "중복 서버 적용",
        "다중 인증 구현",
        "비밀번호 복잡성 강제"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Using digital signatures and checksums is an effective way to mitigate Tampering threats. These mechanisms ensure data integrity by verifying that data has not been altered during transmission or storage.",
      "ko": "디지털 서명과 체크섬을 사용하는 것은 Tampering 위협을 완화하는 효과적인 방법입니다. 이러한 메커니즘은 전송이나 저장 중 데이터가 변경되지 않았음을 검증하여 데이터 무결성을 보장합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/security-best-practices/"
  },
  {
    "id": "kcsa-mock-263",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component is responsible for securely storing and managing all cluster data, including Secrets, ConfigMaps, and cluster state?",
      "ko": "Secrets, ConfigMaps 및 클러스터 상태를 포함한 모든 클러스터 데이터를 안전하게 저장하고 관리하는 Kubernetes 컴포넌트는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-apiserver",
        "kube-scheduler",
        "kubelet",
        "etcd",
        "kube-controller-manager"
      ],
      "ko": [
        "kube-apiserver",
        "kube-scheduler",
        "kubelet",
        "etcd",
        "kube-controller-manager"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "etcd is the distributed key-value store that serves as Kubernetes' primary data store. It maintains the cluster's state, configuration data, and Secrets. While the kube-apiserver interacts with etcd, it doesn't store data directly. Proper etcd configuration (encryption, access controls, backups) is critical for cluster security.",
      "ko": "etcd는 Kubernetes의 기본 데이터 저장소 역할을 하는 분산 키-값 저장소입니다. 클러스터의 상태, 설정 데이터, Secret을 보관합니다. kube-apiserver는 etcd와 상호작용하지만 데이터를 직접 저장하지는 않습니다. 암호화, 접근 제어, 백업을 포함한 올바른 etcd 설정은 클러스터 보안에 중요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/components/#etcd"
  },
  {
    "id": "kcsa-mock-264",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Access to Sensitive Data",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why is it crucial to restrict access to etcd in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 etcd에 대한 접근을 제한하는 것이 왜 중요한가?"
    },
    "choices": {
      "en": [
        "Because etcd stores logs that can be tampered with",
        "Because etcd contains all cluster data, including secrets, and access can lead to cluster compromise",
        "Because etcd runs the application code",
        "Because etcd controls network policies",
        "Because etcd is not important and can be ignored"
      ],
      "ko": [
        "etcd는 변조될 수 있는 로그를 저장하기 때문에",
        "etcd에는 시크릿을 포함한 모든 클러스터 데이터가 들어 있으며 접근하면 클러스터가 침해될 수 있기 때문에",
        "etcd가 애플리케이션 코드를 실행하기 때문에",
        "etcd가 네트워크 정책을 제어하기 때문에",
        "etcd는 중요하지 않아 무시할 수 있기 때문에"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Restricting access to etcd is vital because it stores sensitive data, including cluster secrets. Unauthorized access to etcd can compromise the entire Kubernetes cluster.",
      "ko": "etcd에는 클러스터 시크릿을 포함한 민감한 데이터가 저장되므로 접근 제한이 필수다. 무단 접근은 전체 Kubernetes 클러스터를 침해할 수 있다."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/securing-etcd/"
  },
  {
    "id": "kcsa-mock-265",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Kubernetes Trust Boundaries and Data Flow",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component serves as the entry point for the control plane and exposes the Kubernetes API?",
      "ko": "컨트롤 플레인의 진입점이자 Kubernetes API를 노출하는 Kubernetes 구성 요소는 무엇인가?"
    },
    "choices": {
      "en": [
        "kubelet",
        "kube-scheduler",
        "kube-apiserver",
        "kube-proxy",
        "etcd"
      ],
      "ko": [
        "kubelet",
        "kube-scheduler",
        "kube-apiserver",
        "kube-proxy",
        "etcd"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The kube-apiserver acts as the front end of the control plane, handling incoming API requests and serving as the primary interface for Kubernetes cluster management. It is responsible for authenticating and authorizing all requests to the API server, ensuring secure access to cluster resources. For more information, refer to the official Kubernetes documentation on components and architecture[1][3].",
      "ko": "kube-apiserver는 컨트롤 플레인의 프런트엔드로서 들어오는 API 요청을 처리하고 클러스터 관리의 기본 인터페이스가 된다. API에 대한 모든 요청을 인증하고 인가해 안전한 리소스 접근을 보장한다. 자세한 내용은 구성 요소 및 아키텍처에 관한 공식 Kubernetes 문서를 참조한다[1][3]."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/components/"
  },
  {
    "id": "kcsa-mock-266",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Attacker on the Network",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the recommended approach to secure the Kubernetes Dashboard?",
      "ko": "Kubernetes Dashboard를 보호하기 위해 권장되는 방법은 무엇인가?"
    },
    "choices": {
      "en": [
        "Expose it publicly without authentication",
        "Use Role-Based Access Control (RBAC) and restrict access",
        "Grant it cluster-admin privileges",
        "Disable it entirely",
        "Run it as a privileged container"
      ],
      "ko": [
        "인증 없이 공개적으로 노출한다",
        "RBAC(Role-Based Access Control)을 사용하고 접근을 제한한다",
        "cluster-admin 권한을 부여한다",
        "완전히 비활성화한다",
        "권한 있는 컨테이너로 실행한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Securing the Kubernetes Dashboard with Role-Based Access Control (RBAC) is crucial to limit exposure and ensure that only authorized users can access and manage cluster resources. This approach helps prevent unauthorized access and reduces the attack surface by enforcing strict access controls. For guidance on securing the Dashboard, refer to Kubernetes security best practices and RBAC documentation[1][3].",
      "ko": "RBAC으로 Dashboard를 보호하면 노출을 제한하고 승인된 사용자만 클러스터 리소스에 접근·관리하게 할 수 있다. 엄격한 접근 제어로 무단 접근과 공격 표면을 줄인다. Dashboard 보안 지침은 Kubernetes 보안 모범 사례와 RBAC 문서를 참조한다[1][3]."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "kcsa-mock-267",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authentication",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which built-in Kubernetes authentication method is generally not recommended for production environments?",
      "ko": "일반적으로 프로덕션 환경에 권장되지 않는 내장 Kubernetes 인증 방식은 무엇인가?"
    },
    "choices": {
      "en": [
        "Static Token File",
        "OpenID Connect (OIDC)",
        "Service Accounts",
        "Client Certificates",
        "Integrating with cloud provider IAM"
      ],
      "ko": [
        "Static Token File",
        "OpenID Connect (OIDC)",
        "Service Accounts",
        "Client Certificates",
        "클라우드 제공자 IAM 통합"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Static Token File authentication is not recommended for production due to security concerns. It lacks the robustness and flexibility of other methods like OIDC or Service Accounts.",
      "ko": "Static Token File 인증은 보안상 우려가 있어 프로덕션에 권장되지 않는다. OIDC나 Service Accounts 같은 방식보다 견고성과 유연성이 부족하다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/authentication/"
  },
  {
    "id": "kcsa-mock-268",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource defines permissions within a specific namespace?",
      "ko": "특정 네임스페이스 안의 권한을 정의하는 Kubernetes 리소스는 무엇인가?"
    },
    "choices": {
      "en": [
        "ClusterRole",
        "ClusterRoleBinding",
        "Role",
        "RoleBinding",
        "ServiceAccount"
      ],
      "ko": [
        "ClusterRole",
        "ClusterRoleBinding",
        "Role",
        "RoleBinding",
        "ServiceAccount"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A Role in Kubernetes defines permissions within a namespace. It specifies what actions can be performed by users or service accounts within that namespace.",
      "ko": "Role은 네임스페이스 안의 권한을 정의하고 해당 네임스페이스의 사용자나 서비스 계정이 수행할 수 있는 작업을 지정한다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"
  },
  {
    "id": "kcsa-mock-269",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of a 'RoleBinding' in Kubernetes RBAC?",
      "ko": "Kubernetes RBAC에서 RoleBinding의 주된 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "Defines cluster-wide permissions",
        "Binds a ClusterRole to a namespace",
        "Binds a Role to users or groups within a namespace",
        "Creates a new ServiceAccount",
        "Defines network policies"
      ],
      "ko": [
        "클러스터 전체 권한을 정의한다",
        "ClusterRole을 네임스페이스에 바인딩한다",
        "네임스페이스 안의 사용자나 그룹에 Role을 바인딩한다",
        "새 ServiceAccount를 만든다",
        "네트워크 정책을 정의한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A RoleBinding in Kubernetes assigns a Role to specific users or groups within a namespace, granting them the permissions defined by that Role.",
      "ko": "RoleBinding은 네임스페이스 안의 특정 사용자나 그룹에 Role을 할당하여 Role에 정의된 권한을 부여한다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding"
  },
  {
    "id": "kcsa-mock-271",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What admission controller should be used to enforce Pod Security Standards in Kubernetes versions 1.25 and later?",
      "ko": "Kubernetes 1.25 이상에서 Pod Security Standards를 강제하려면 어떤 admission 컨트롤러를 사용해야 하는가?"
    },
    "choices": {
      "en": [
        "PodSecurityPolicy",
        "Pod Security Admission Controller",
        "NodeRestriction",
        "ResourceQuota",
        "LimitRanger"
      ],
      "ko": [
        "PodSecurityPolicy",
        "Pod Security Admission Controller",
        "NodeRestriction",
        "ResourceQuota",
        "LimitRanger"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The Pod Security Admission Controller is the recommended method for enforcing Pod Security Standards in Kubernetes versions 1.25 and above. This controller replaces the deprecated PodSecurityPolicy and provides a more flexible and efficient way to manage pod security.",
      "ko": "Pod Security Admission Controller는 1.25 이상에서 Pod Security Standards를 강제하는 권장 방법이다. 폐기된 PodSecurityPolicy를 대체하며 더 유연하고 효율적으로 Pod 보안을 관리한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "kcsa-mock-272",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Resource Management and Isolation",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes, what is the main reason for using namespaces?",
      "ko": "Kubernetes에서 네임스페이스를 사용하는 주된 이유는 무엇인가?"
    },
    "choices": {
      "en": [
        "To provide network isolation between different applications.",
        "To group and logically isolate resources such as deployments, services, and pods.",
        "To enforce security policies across the entire cluster.",
        "To manage the lifecycle of persistent storage volumes.",
        "To monitor the overall health and performance of the Kubernetes cluster."
      ],
      "ko": [
        "서로 다른 애플리케이션 사이에 네트워크 격리를 제공하기 위해",
        "Deployment, Service, Pod 같은 리소스를 그룹화하고 논리적으로 격리하기 위해",
        "클러스터 전체에 보안 정책을 강제하기 위해",
        "영구 스토리지 볼륨의 수명 주기를 관리하기 위해",
        "Kubernetes 클러스터의 전체 상태와 성능을 모니터링하기 위해"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Namespaces in Kubernetes are primarily used to logically divide a cluster into multiple virtual clusters. This allows teams or projects to operate in isolation from one another within the same physical cluster. While namespaces can be used in conjunction with network policies to provide network isolation, their primary purpose is logical grouping and isolation of Kubernetes resources like pods, services, and deployments. They do not inherently enforce security policies or manage storage volumes directly, nor are they primarily for monitoring cluster health.",
      "ko": "네임스페이스는 클러스터를 여러 가상 클러스터로 논리적으로 나누어 팀이나 프로젝트가 같은 물리 클러스터에서 서로 격리되어 운영하게 한다. NetworkPolicy와 함께 네트워크 격리에 쓰일 수 있지만 주목적은 Pod·Service·Deployment 같은 리소스의 논리적 그룹화와 격리다. 보안 정책을 본질적으로 강제하거나 스토리지를 직접 관리하거나 클러스터 모니터링을 하는 기능은 아니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "kcsa-mock-273",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload and Application Code Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "During the build phase of a Kubernetes application, which practices are most effective for ensuring security?",
      "ko": "Kubernetes 애플리케이션의 빌드 단계에서 보안을 보장하는 데 가장 효과적인 방법은 무엇인가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "Use minimal base images to reduce the attack surface.",
        "Run containers as root to simplify privilege management.",
        "Scan images for vulnerabilities to identify and remediate potential security flaws.",
        "Include unnecessary packages to provide additional functionality.",
        "Use only authorized images from trusted registries to prevent the introduction of malicious code."
      ],
      "ko": [
        "공격 표면을 줄이기 위해 최소한의 기본 이미지를 사용한다",
        "권한 관리를 단순화하려고 컨테이너를 root로 실행한다",
        "취약점을 찾아 수정하기 위해 이미지를 스캔한다",
        "추가 기능을 위해 불필요한 패키지를 포함한다",
        "악성 코드 유입을 막도록 신뢰할 수 있는 레지스트리의 승인된 이미지만 사용한다"
      ]
    },
    "answer": [
      0,
      2,
      4
    ],
    "explain": {
      "en": "In the build phase, security is best ensured by minimizing the image footprint with minimal base images, regularly scanning for vulnerabilities to catch issues early, and using only authorized images from trusted sources.  Minimal base images reduce the attack surface.  Vulnerability scanning identifies and allows remediation of security flaws before deployment. Using authorized images prevents the introduction of untrusted or malicious code. Running containers as root is a security risk, and including unnecessary packages increases the potential attack surface.",
      "ko": "빌드 단계에서는 최소 기본 이미지로 이미지 크기를 줄이고, 정기적인 취약점 스캔으로 문제를 조기에 찾아 수정하며, 신뢰할 수 있는 출처의 승인 이미지만 사용해야 한다. 최소 이미지는 공격 표면을 줄이고, 취약점 스캔은 배포 전 보안 결함 수정을 가능하게 하며, 승인 이미지는 악성·비신뢰 코드 유입을 막는다. root 실행은 위험하고 불필요한 패키지는 공격 표면을 넓힌다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/best-practices/"
  },
  {
    "id": "kcsa-mock-274",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secrets",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the recommended method for storing sensitive data, such as passwords or tokens, in a Kubernetes environment?",
      "ko": "Kubernetes 환경에서 비밀번호나 토큰 같은 민감한 데이터를 저장하는 권장 방법은 무엇인가?"
    },
    "choices": {
      "en": [
        "Hardcode them in application code",
        "Store them in ConfigMaps",
        "Use Kubernetes Secrets",
        "Store them in environment variables",
        "Include them in container images"
      ],
      "ko": [
        "애플리케이션 코드에 하드코딩한다",
        "ConfigMap에 저장한다",
        "Kubernetes Secrets를 사용한다",
        "환경 변수에 저장한다",
        "컨테이너 이미지에 포함한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Kubernetes Secrets are specifically designed to securely store sensitive data. They provide a secure way to manage and distribute sensitive information to pods, reducing the risk of data exposure compared to other methods like hardcoding or using environment variables.",
      "ko": "Kubernetes Secrets는 민감한 데이터를 안전하게 저장하도록 설계되었다. Pod에 민감한 정보를 관리·배포하며 하드코딩이나 환경 변수보다 노출 위험을 줄인다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "kcsa-mock-275",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource is used to enforce network segmentation between pods?",
      "ko": "Pod 사이의 네트워크 세분화를 강제하는 Kubernetes 리소스는 무엇인가?"
    },
    "choices": {
      "en": [
        "NetworkPolicy",
        "PodSecurityPolicy",
        "ResourceQuota",
        "LimitRange",
        "Ingress"
      ],
      "ko": [
        "NetworkPolicy",
        "PodSecurityPolicy",
        "ResourceQuota",
        "LimitRange",
        "Ingress"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "NetworkPolicy defines rules that segment network traffic between pods, allowing you to control the flow of traffic and isolate pods from each other. This is essential for securing communication within a Kubernetes cluster.",
      "ko": "NetworkPolicy는 Pod 사이의 네트워크 트래픽을 분할하는 규칙을 정의하고 흐름을 제어해 Pod를 격리한다. 이는 클러스터 내부 통신 보안에 필수적이다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-276",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why is it advisable to avoid running containers with root privileges in a Kubernetes environment?",
      "ko": "Kubernetes에서 root 권한으로 컨테이너를 실행하지 않는 것이 권장되는 이유는 무엇인가?"
    },
    "choices": {
      "en": [
        "It increases resource consumption",
        "It can lead to security risks by granting unnecessary permissions",
        "It reduces application performance",
        "It prevents containers from accessing the network",
        "It is required by Kubernetes policies"
      ],
      "ko": [
        "리소스 소비가 증가하기 때문에",
        "불필요한 권한을 부여해 보안 위험이 생길 수 있기 때문에",
        "애플리케이션 성능이 낮아지기 때문에",
        "컨테이너의 네트워크 접근을 막기 때문에",
        "Kubernetes 정책이 요구하기 때문에"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Running containers as root increases the risk of privilege escalation and other security attacks. By running containers as non-root users, you reduce the attack surface and improve the overall security posture of your Kubernetes environment.",
      "ko": "root 실행은 권한 상승과 기타 보안 공격 위험을 높인다. non-root 사용자로 실행하면 공격 표면을 줄이고 Kubernetes 환경의 전반적인 보안 상태를 개선한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-277",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which security context setting ensures that a container runs as a non-root user in Kubernetes?",
      "ko": "Kubernetes에서 컨테이너가 non-root 사용자로 실행되도록 보장하는 security context 설정은 무엇인가?"
    },
    "choices": {
      "en": [
        "privileged: false",
        "allowPrivilegeEscalation: false",
        "runAsNonRoot: true",
        "readOnlyRootFilesystem: true",
        "capabilities: []"
      ],
      "ko": [
        "privileged: false",
        "allowPrivilegeEscalation: false",
        "runAsNonRoot: true",
        "readOnlyRootFilesystem: true",
        "capabilities: []"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Setting 'runAsNonRoot: true' in a pod's security context ensures that the container is not run as the root user. This setting helps prevent unnecessary privilege escalation and improves container security.",
      "ko": "Pod의 security context에 runAsNonRoot: true를 설정하면 컨테이너가 root 사용자로 실행되지 않는다. 불필요한 권한 상승을 막아 컨테이너 보안을 높인다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-278",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes security contexts, what specific security benefit does configuring 'readOnlyRootFilesystem: true' provide to containers?",
      "ko": "Kubernetes security context에서 readOnlyRootFilesystem: true를 설정하면 컨테이너에 어떤 구체적인 보안 이점이 있는가?"
    },
    "choices": {
      "en": [
        "Prevents container processes from modifying host network configurations",
        "Enables root user privileges for container operations",
        "Restricts container processes from writing to the root filesystem",
        "Allows containers to bypass filesystem permission checks",
        "Disables container logging capabilities"
      ],
      "ko": [
        "컨테이너 프로세스가 호스트 네트워크 설정을 수정하지 못하게 한다",
        "컨테이너 작업에 root 권한을 활성화한다",
        "컨테이너 프로세스가 root 파일시스템에 쓰지 못하게 제한한다",
        "컨테이너가 파일시스템 권한 검사를 우회하게 한다",
        "컨테이너 로깅 기능을 비활성화한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Setting readOnlyRootFilesystem to true mounts the container's root filesystem as read-only, preventing malicious processes from writing to or modifying system files. This hardening measure significantly reduces attack surfaces by blocking persistence mechanisms and limiting damage from container escapes. Other options describe unrelated security mechanisms: network restrictions (option 1), privilege escalation (option 2/4), and logging (option 5) require separate configurations.",
      "ko": "readOnlyRootFilesystem을 true로 설정하면 root 파일시스템이 읽기 전용으로 마운트되어 악성 프로세스가 시스템 파일을 쓰거나 수정하지 못한다. 지속성 메커니즘을 막고 컨테이너 탈출의 피해를 제한해 공격 표면을 줄인다. 네트워크 제한, 권한 상승, 로깅은 별도 설정이 필요한 무관한 기능이다. 다른 선택지는 각각 네트워크 제한(옵션 1), 권한 상승(옵션 2와 4), 로깅(옵션 5)에 관한 별도 설정을 설명한다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "kcsa-mock-280",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API Server",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What command is used to create a Kubernetes namespace named 'production'?",
      "ko": "production이라는 이름의 Kubernetes 네임스페이스를 만드는 명령은 무엇인가?"
    },
    "choices": {
      "en": [
        "kubectl create namespace production",
        "kubectl new namespace production",
        "kubectl apply namespace production",
        "kubectl init namespace production",
        "kubectl generate namespace production"
      ],
      "ko": [
        "kubectl create namespace production",
        "kubectl new namespace production",
        "kubectl apply namespace production",
        "kubectl init namespace production",
        "kubectl generate namespace production"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command 'kubectl create namespace production' is used to create a new namespace in a Kubernetes cluster. Namespaces provide a way to divide cluster resources between multiple applications or teams. They are essential for organizing and isolating resources within a cluster.",
      "ko": "kubectl create namespace production 명령으로 새 네임스페이스를 만든다. 네임스페이스는 여러 애플리케이션이나 팀 사이에서 클러스터 리소스를 나누고 구성·격리한다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create"
  },
  {
    "id": "kcsa-mock-281",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "When implementing Kubernetes NetworkPolicies, what security implication should administrators consider when using an empty podSelector field?",
      "ko": "Kubernetes NetworkPolicy에서 빈 podSelector 필드를 사용할 때 관리자가 고려할 보안 영향은 무엇인가?"
    },
    "choices": {
      "en": [
        "Creates a default-allow-all traffic pattern within the namespace",
        "Applies the policy to all pods in the specified namespace",
        "Generates validation errors in the policy controller",
        "Only affects newly created pods in the namespace",
        "Enforces cross-namespace communication rules"
      ],
      "ko": [
        "네임스페이스 안에서 모든 트래픽을 허용하는 기본 패턴을 만든다",
        "지정된 네임스페이스의 모든 Pod에 정책을 적용한다",
        "정책 컨트롤러에서 검증 오류를 만든다",
        "네임스페이스에서 새로 생성된 Pod에만 영향을 준다",
        "네임스페이스 간 통신 규칙을 강제한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "An empty podSelector in a NetworkPolicy selects all pods in the namespace, meaning the policy applies to all pods in that namespace. The effect on traffic depends on the policy's ingress and egress rules; it does not by itself create a default-allow or default-deny behavior. Administrators should carefully design policies with empty podSelectors to avoid unintended broad application. Other options misrepresent NetworkPolicy mechanics: validation errors (option 3) do not occur due to empty selectors, scope is not limited to new pods (option 4), and cross-namespace communication (option 5) requires explicit policy rules.",
      "ko": "빈 podSelector는 해당 네임스페이스의 모든 Pod를 선택하므로 정책이 모두에 적용된다. 트래픽 효과는 ingress·egress 규칙에 달려 있으며 그 자체로 전체 허용이나 전체 거부가 되지 않는다. 넓은 적용을 피하도록 신중히 설계해야 한다. 빈 selector 때문에 검증 오류가 나거나 새 Pod에만 적용되는 것은 아니며, 네임스페이스 간 통신은 명시적 규칙이 필요하다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-282",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Scheduler",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes cluster, which component is responsible for assigning pods to specific nodes based on resource requirements and constraints?",
      "ko": "Kubernetes 클러스터에서 리소스 요구 사항과 제약에 따라 Pod를 특정 노드에 할당하는 구성 요소는 무엇인가?"
    },
    "choices": {
      "en": [
        "kube-apiserver",
        "kube-scheduler",
        "kubelet",
        "kube-controller-manager",
        "etcd"
      ],
      "ko": [
        "kube-apiserver",
        "kube-scheduler",
        "kubelet",
        "kube-controller-manager",
        "etcd"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The kube-scheduler is the component in Kubernetes responsible for scheduling pods onto nodes. It evaluates the resource requirements of the pods (e.g., CPU, memory) and matches them with the available resources on nodes. Other components, such as kube-apiserver, handle API requests; kubelet manages node-level operations; kube-controller-manager handles controllers; and etcd is the key-value store for cluster data.",
      "ko": "kube-scheduler는 Pod를 노드에 스케줄링하며 CPU·메모리 같은 요구 사항을 노드의 가용 리소스와 비교한다. kube-apiserver는 API 요청, kubelet은 노드 작업, 컨트롤러 관리자는 컨트롤러, etcd는 클러스터 데이터 저장을 담당한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
  },
  {
    "id": "kcsa-mock-284",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Controls and Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following are Kubernetes security best practices to follow during the Deploy phase? (Select all that apply)",
      "ko": "배포 단계에서 따라야 할 Kubernetes 보안 모범 사례는 무엇인가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "Implement network policies",
        "Run containers as root",
        "Use image tags like 'latest'",
        "Use the ImagePolicyWebhook admission controller",
        "Apply security contexts to pods and containers"
      ],
      "ko": [
        "네트워크 정책을 구현한다",
        "컨테이너를 root로 실행한다",
        "latest 같은 이미지 태그를 사용한다",
        "ImagePolicyWebhook admission controller를 사용한다",
        "Pod와 컨테이너에 security context를 적용한다"
      ]
    },
    "answer": [
      0,
      3,
      4
    ],
    "explain": {
      "en": "During deployment, implementing network policies restricts pod communication to only necessary traffic, reducing attack surfaces. The ImagePolicyWebhook admission controller enforces image security policies to prevent untrusted images from running. Applying security contexts defines permissions and restrictions for pods and containers, enhancing security. Running containers as root and using mutable tags like 'latest' are discouraged as they increase security risks and reduce traceability.",
      "ko": "배포 시 NetworkPolicy는 필요한 통신만 허용해 공격 표면을 줄이고, ImagePolicyWebhook은 신뢰할 수 없는 이미지 실행을 막는 정책을 강제한다. security context는 Pod·컨테이너의 권한과 제한을 정의한다. root 실행과 latest 같은 변경 가능한 태그는 위험과 추적성 저하 때문에 피한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "kcsa-mock-285",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of the Kubernetes 'LimitRange' resource?",
      "ko": "Kubernetes LimitRange 리소스의 주된 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "To limit the number of namespaces",
        "To set default resource requests and limits for pods in a namespace",
        "To restrict network access between pods",
        "To control access to the Kubernetes API",
        "To define storage classes"
      ],
      "ko": [
        "네임스페이스 수를 제한한다",
        "네임스페이스의 Pod에 기본 리소스 요청량과 제한값를 설정한다",
        "Pod 간 네트워크 접근을 제한한다",
        "Kubernetes API 접근을 제어한다",
        "스토리지 클래스를 정의한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A LimitRange in Kubernetes is used to enforce constraints on resource usage within a namespace. It sets default resource requests and limits for pods, ensuring that they do not exceed specified thresholds. This helps in preventing resource over-allocation and maintaining cluster stability.",
      "ko": "LimitRange는 네임스페이스의 리소스 사용 제약을 강제하고 Pod의 기본 requests·limits를 정해 지정된 한도를 넘지 않게 한다. 리소스 과다 할당을 막고 클러스터 안정성을 유지한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/policy/limit-range/"
  },
  {
    "id": "kcsa-mock-286",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Image Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What critical security objectives are achieved through regular vulnerability scanning of container images in Kubernetes environments?",
      "ko": "Kubernetes 환경에서 컨테이너 이미지를 정기적으로 취약점 스캔하면 어떤 핵심 보안 목표를 달성하는가?"
    },
    "choices": {
      "en": [
        "Optimizes container runtime performance metrics",
        "Reduces container image layer count",
        "Identifies and remediates known software vulnerabilities",
        "Ensures compliance with open-source licensing",
        "Accelerates container deployment pipelines"
      ],
      "ko": [
        "컨테이너 런타임 성능 지표를 최적화한다",
        "컨테이너 이미지 레이어 수를 줄인다",
        "알려진 소프트웨어 취약점을 식별하고 수정한다",
        "오픈 소스 라이선스 준수를 보장한다",
        "컨테이너 배포 파이프라인을 가속한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Regular image scanning detects vulnerabilities in base images and dependencies, enabling remediation before deployment. This practice addresses CVE management and reduces attack surfaces, forming a crucial part of DevSecOps pipelines. Other options describe unrelated benefits: performance (option 1), licensing (option 4), and deployment speed (option 5) require different tooling and processes.",
      "ko": "정기적인 이미지 스캔은 base image와 의존성의 취약점을 탐지해 배포 전에 수정할 수 있게 한다. 이 관행은 CVE 관리와 공격 표면 감소를 다루며 DevSecOps 파이프라인의 핵심 부분이다. 다른 선택지는 관련 없는 이점이다. 성능(옵션 1), 라이선스(옵션 4), 배포 속도(옵션 5)는 각각 다른 도구와 프로세스가 필요하다."
    },
    "ref": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-190.pdf"
  },
  {
    "id": "kcsa-mock-287",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Controls and Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which open-source tool specializes in static security analysis of Kubernetes manifests through vulnerability scanning and policy checks?",
      "ko": "취약점 스캔과 정책 검사를 통해 Kubernetes 매니페스트를 정적 보안 분석하는 오픈 소스 도구는 무엇인가?"
    },
    "choices": {
      "en": [
        "kube-hunter (penetration testing tool)",
        "kubesec (security risk analysis)",
        "kubectl (cluster management CLI)",
        "kubelet (node agent)",
        "etcdctl (key-value store client)"
      ],
      "ko": [
        "kube-hunter (침투 테스트 도구)",
        "kubesec (보안 위험 분석)",
        "kubectl (클러스터 관리 CLI)",
        "kubelet (노드 에이전트)",
        "etcdctl (키-값 저장소 클라이언트)"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubesec analyzes Kubernetes manifests for security misconfigurations, providing risk scores and remediation guidance. It checks for common issues like privileged containers, missing security contexts, and insecure capabilities. Other tools serve different purposes: kube-hunter (option 1) tests live clusters, kubectl (option 3) manages resources, kubelet (option 4) runs pods, and etcdctl (option 5) interacts with etcd.",
      "ko": "Kubesec은 Kubernetes 매니페스트의 보안 설정 오류를 분석하고 위험 점수와 수정 지침을 제공한다. 권한 있는 컨테이너, 누락된 security context, 안전하지 않은 capability 등을 검사한다. 다른 도구는 목적이 다르다. kube-hunter(옵션 1)는 실행 중인 클러스터를 테스트하고, kubectl(옵션 3)은 리소스를 관리하며, kubelet(옵션 4)은 Pod를 실행하고, etcdctl(옵션 5)은 etcd와 상호작용한다."
    },
    "ref": "https://github.com/controlplaneio/kubesec"
  },
  {
    "id": "kcsa-mock-288",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload and Application Code Security",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why are 'distroless' container images recommended for use in production environments?",
      "ko": "distroless 컨테이너 이미지가 프로덕션 사용에 권장되는 이유는 무엇인가?"
    },
    "choices": {
      "en": [
        "They include a shell for debugging",
        "They have a larger attack surface",
        "They are minimal images that reduce vulnerabilities",
        "They support all Linux distributions",
        "They are required by Kubernetes"
      ],
      "ko": [
        "디버깅용 셸을 포함한다",
        "더 넓은 공격 표면을 가진다",
        "취약점을 줄이는 최소 이미지다",
        "모든 Linux 배포판을 지원한다",
        "Kubernetes가 요구한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "'Distroless' images contain only the application and its runtime dependencies, excluding package managers, shells, and other unnecessary tools. This minimalism reduces the attack surface and potential vulnerabilities. They do not include shells, which can make debugging harder but improves security. They are not required by Kubernetes and do not inherently support all Linux distributions.",
      "ko": "distroless 이미지는 애플리케이션과 런타임 의존성만 포함하고 package manager, 셸 및 불필요한 도구를 제외한다. 이 최소화가 공격 표면과 잠재적 취약점을 줄인다. 셸이 없어 디버깅은 어려워질 수 있지만 보안은 향상된다. 다른 선택지는 관련 없는 설명이다. 셸 포함(옵션 1), 더 넓은 공격 표면(옵션 2), 모든 Linux 배포판 지원(옵션 4), Kubernetes의 필수 요구(옵션 5)는 distroless 이미지의 특성이 아니다."
    },
    "ref": "https://github.com/GoogleContainerTools/distroless"
  },
  {
    "id": "kcsa-mock-289",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Service Mesh",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of a Service Mesh in Kubernetes architecture?",
      "ko": "Kubernetes 아키텍처에서 서비스 메시의 주된 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "A network overlay for pod communication",
        "An infrastructure layer for handling service-to-service communication",
        "A type of storage solution",
        "A container runtime interface",
        "A logging mechanism"
      ],
      "ko": [
        "Pod 통신을 위한 네트워크 오버레이",
        "서비스 간 통신을 처리하는 인프라 계층",
        "스토리지 솔루션의 한 종류",
        "컨테이너 런타임 인터페이스",
        "로깅 메커니즘"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Service Mesh is a dedicated infrastructure layer that manages service-to-service communication through sidecar proxies, providing features like traffic management, service discovery, and security policies without requiring application code changes. While pod communication occurs through the mesh, it's not merely a network overlay but rather a comprehensive communication management layer.",
      "ko": "서비스 메시지는 sidecar proxy를 통해 서비스 간 통신을 관리하는 전용 인프라 계층이다. 애플리케이션 코드를 변경하지 않고 트래픽 관리, 서비스 디스커버리, 보안 정책 같은 기능을 제공한다. Pod 통신이 메시를 통해 이루어지더라도 단순한 네트워크 오버레이가 아니라 포괄적인 통신 관리 계층이다."
    },
    "ref": "https://istio.io/latest/docs/concepts/what-is-istio/"
  },
  {
    "id": "kcsa-mock-290",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Service Mesh",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following are key advantages of implementing a Service Mesh in Kubernetes? (Select all that apply)",
      "ko": "Kubernetes에 서비스 메시를 구현하는 주요 이점은 무엇인가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "Built-in observability through metrics, logs, and traces",
        "Simplifies application code by offloading cross-cutting concerns",
        "Enhanced security through mutual TLS encryption",
        "Adds significant latency to all communications",
        "Requires minimal operational expertise to implement"
      ],
      "ko": [
        "metric·log·trace를 통한 내장 관측 가능성",
        "횡단 관심사를 위임해 애플리케이션 코드를 단순화한다",
        "mutual TLS 암호화를 통한 보안 강화",
        "모든 통신에 상당한 지연을 추가한다",
        "구현에 최소한의 운영 전문 지식만 필요하다"
      ]
    },
    "answer": [
      0,
      1,
      2
    ],
    "explain": {
      "en": "Service Meshes provide three primary benefits: 1) Comprehensive observability through automatic collection of communication metrics and distributed tracing. 2) Offloading of cross-cutting concerns like retries, timeouts, and circuit breaking from application code. 3) Security enhancements through automatic mutual TLS and fine-grained access controls. While they add some overhead, modern implementations minimize latency impact through optimized data planes.",
      "ko": "서비스 메시의 세 이점은 통신 metric과 분산 추적의 자동 수집, 재시도·시간 초과·회로 차단 같은 횡단 관심사의 애플리케이션 코드 위임, 자동 mutual TLS와 세밀한 접근 제어를 통한 보안 강화다. 오버헤드는 있지만 현대 구현은 최적화된 데이터 플레인으로 지연 영향을 최소화한다."
    },
    "ref": "https://www.cncf.io/blog/2020/10/06/service-mesh-a-cncf-white-paper/"
  },
  {
    "id": "kcsa-mock-291",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource is used to request persistent storage for a Pod?",
      "ko": "Pod의 영구 스토리지를 요청하는 Kubernetes 리소스는 무엇인가?"
    },
    "choices": {
      "en": [
        "PersistentVolume",
        "PersistentVolumeClaim",
        "StorageClass",
        "VolumeMount",
        "ConfigMap"
      ],
      "ko": [
        "PersistentVolume",
        "PersistentVolumeClaim",
        "StorageClass",
        "VolumeMount",
        "ConfigMap"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A PersistentVolumeClaim (PVC) is used by a Pod to request persistent storage resources. The PVC is matched with a PersistentVolume (PV), which provides the actual storage. StorageClasses are used to dynamically provision PersistentVolumes.",
      "ko": "PersistentVolumeClaim(PVC)은 Pod가 영구 스토리지 리소스를 요청할 때 사용한다. PVC는 실제 스토리지를 제공하는 PersistentVolume(PV)에 매칭되며 StorageClass는 PV를 동적으로 프로비저닝한다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
  },
  {
    "id": "kcsa-mock-292",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Policy",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How do Kubernetes NetworkPolicies enhance cluster security when properly configured?",
      "ko": "올바르게 구성된 Kubernetes NetworkPolicy는 클러스터 보안을 어떻게 높이는가?"
    },
    "choices": {
      "en": [
        "Enable automatic TLS certificate rotation",
        "Enforce least-privilege communication between pods",
        "Manage persistent volume encryption",
        "Provide application auto-scaling capabilities",
        "Enable cluster-wide logging aggregation"
      ],
      "ko": [
        "TLS 인증서 자동 순환을 활성화한다",
        "Pod 간 최소 권한 통신을 강제한다",
        "PersistentVolume 암호화를 관리한다",
        "애플리케이션 자동 스케일링을 제공한다",
        "클러스터 전체 로그 집계를 활성화한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "NetworkPolicies implement microsegmentation by controlling pod-to-pod communication through label selectors, effectively enforcing zero-trust networking principles. They prevent lateral movement attacks by restricting traffic flows between services. Other options describe unrelated features: TLS (option 1), storage (option 3), scaling (option 4), and logging (option 5) require different configurations.",
      "ko": "NetworkPolicy는 label selector로 Pod 간 통신을 제어하는 마이크로세분화를 구현해 제로 트러스트 네트워킹 원칙을 효과적으로 강제한다. 서비스 간 트래픽 흐름을 제한해 lateral movement 공격을 막는다. TLS(옵션 1), 스토리지(옵션 3), 스케일링(옵션 4), 로깅(옵션 5)은 각각 다른 설정이 제공하는 무관한 기능이다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/#best-practices"
  },
  {
    "id": "kcsa-mock-293",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of audit logging in Kubernetes?",
      "ko": "Kubernetes에서 감사 로깅의 주된 목적은 무엇인가?"
    },
    "choices": {
      "en": [
        "To monitor application performance",
        "To track and record API server requests for security and compliance auditing",
        "To manage network policies",
        "To automatically scale applications based on load",
        "To store container images"
      ],
      "ko": [
        "애플리케이션 성능을 모니터링한다",
        "보안·준수 감사를 위해 API server 요청을 추적하고 기록한다",
        "네트워크 정책을 관리한다",
        "부하에 따라 애플리케이션을 자동 스케일링한다",
        "컨테이너 이미지를 저장한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Audit logging in Kubernetes is designed to record all requests made to the API server, capturing details about who did what and when. This information is crucial for security auditing, compliance monitoring, and forensic analysis. It is not intended for monitoring application performance, managing network policies, scaling applications, or storing container images, which are handled by other Kubernetes components or tools.",
      "ko": "Kubernetes 감사 로깅은 API server에 대한 모든 요청을 기록하도록 설계되어 누가 무엇을 언제 했는지에 대한 세부 정보를 남긴다. 이 정보는 보안 감사, 준수 모니터링, 포렌식 분석에 중요하다. 애플리케이션 성능 모니터링, 네트워크 정책 관리, 애플리케이션 스케일링, 컨테이너 이미지 저장을 위한 기능은 아니며, 그런 작업은 다른 Kubernetes 구성 요소나 도구가 처리한다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "kcsa-mock-294",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit Logging",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which API server flag is used to specify the audit policy file that defines what events are recorded in Kubernetes audit logs?",
      "ko": "Kubernetes 감사 로그에 기록할 이벤트를 정의하는 감사 정책 파일을 지정하는 API server 플래그는 무엇인가?"
    },
    "choices": {
      "en": [
        "--audit-log-path",
        "--audit-policy-file",
        "--enable-audit",
        "--audit-log-maxage",
        "--audit-log-format"
      ],
      "ko": [
        "--audit-log-path",
        "--audit-policy-file",
        "--enable-audit",
        "--audit-log-maxage",
        "--audit-log-format"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The '--audit-policy-file' flag is used to specify the path to the audit policy file, which controls the granularity and types of events that are logged by the Kubernetes API server. Other flags like '--audit-log-path' specify where to write the logs, '--audit-log-maxage' controls log retention, and '--audit-log-format' defines the log format. There is no '--enable-audit' flag; audit logging is enabled by configuring these flags properly.",
      "ko": "--audit-policy-file은 API server가 기록할 이벤트의 종류와 세밀도를 제어하는 정책 파일 경로를 지정한다. --audit-log-path는 로그 위치, --audit-log-maxage는 보존 기간, --audit-log-format은 형식을 정한다. --enable-audit 플래그는 없으며 이 플래그들을 올바르게 설정해 감사를 활성화한다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-policy"
  },
  {
    "id": "kcsa-mock-295",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Standards",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In Kubernetes, what is the purpose of the Pod Security Standards?",
      "ko": "Kubernetes에서 Pod Security Standards의 목적은 무엇인가?"
    },
    "choices": {
      "en": [
        "A deprecated feature replaced by PodSecurityPolicy",
        "A set of built-in policies that enforce best practices for pod security",
        "A configuration for network policies",
        "A type of storage class for pods",
        "An admission controller for scheduling pods"
      ],
      "ko": [
        "PodSecurityPolicy로 대체된 폐기 기능",
        "Pod 보안 모범 사례를 강제하는 내장 정책 집합",
        "네트워크 정책 설정",
        "Pod용 스토리지 클래스",
        "Pod 스케줄링용 admission 컨트롤러"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Pod Security Standards (PSS) are predefined policy levels provided by Kubernetes to enforce security best practices for pods. They replace the deprecated PodSecurityPolicy and provide three levels—Privileged, Baseline, and Restricted—to control pod permissions and capabilities. They are not related to network policies, storage classes, or pod scheduling admission controllers.",
      "ko": "PSS는 Pod 보안 모범 사례를 강제하는 사전 정의 정책 수준이다. 폐기된 PodSecurityPolicy를 대체하며 Privileged·Baseline·Restricted 세 수준으로 권한과 capability를 제어한다. 네트워크·스토리지·스케줄링과는 무관하다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-296",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Standards",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following are the recognized Pod Security Standard levels in Kubernetes? (Select all that apply)",
      "ko": "Kubernetes에서 인정되는 Pod Security Standard 수준은 무엇인가? (해당하는 항목을 모두 선택)"
    },
    "choices": {
      "en": [
        "Privileged",
        "Baseline",
        "Restricted",
        "Unrestricted",
        "Default"
      ],
      "ko": [
        "Privileged",
        "Baseline",
        "Restricted",
        "Unrestricted",
        "Default"
      ]
    },
    "answer": [
      0,
      1,
      2
    ],
    "explain": {
      "en": "The Pod Security Standards define three levels of security enforcement for pods: Privileged, Baseline, and Restricted. 'Privileged' allows the most permissions, 'Baseline' enforces a moderate security posture suitable for most applications, and 'Restricted' enforces the strictest security controls. 'Unrestricted' and 'Default' are not recognized Pod Security Standard levels.",
      "ko": "PSS에는 Privileged, Baseline, Restricted 세 수준이 있다. Privileged는 가장 많은 권한, Baseline은 중간 보안, Restricted는 가장 엄격한 제어를 허용한다. Unrestricted와 Default는 인정된 수준이 아니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "kcsa-mock-297",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource is commonly used to integrate Open Policy Agent (OPA) for policy enforcement through admission control?",
      "ko": "admission 제어를 통해 OPA를 정책 강제에 통합할 때 일반적으로 사용하는 Kubernetes 리소스는 무엇인가?"
    },
    "choices": {
      "en": [
        "ValidatingWebhookConfiguration",
        "MutatingWebhookConfiguration",
        "AdmissionController",
        "CustomResourceDefinition",
        "PolicyController"
      ],
      "ko": [
        "ValidatingWebhookConfiguration",
        "MutatingWebhookConfiguration",
        "AdmissionController",
        "CustomResourceDefinition",
        "PolicyController"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The 'ValidatingWebhookConfiguration' resource is used to register admission webhooks that validate requests to the Kubernetes API server. Open Policy Agent (OPA) leverages this mechanism to enforce custom policies by intercepting and validating API requests. 'MutatingWebhookConfiguration' is used for modifying requests, 'AdmissionController' is a general concept, 'CustomResourceDefinition' defines new resource types, and 'PolicyController' is not a standard Kubernetes resource.",
      "ko": "ValidatingWebhookConfiguration은 API server 요청을 검증하는 admission 웹훅을 등록한다. OPA는 이를 사용해 요청을 가로채고 사용자 정의 정책을 강제한다. MutatingWebhookConfiguration은 요청 수정에 사용되고, AdmissionController는 일반적인 개념이며, CRD는 새 리소스 유형을 정의하고, PolicyController는 표준 Kubernetes 리소스가 아니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "kcsa-mock-298",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admissions",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of Open Policy Agent (OPA) in Kubernetes?",
      "ko": "Kubernetes에서 Open Policy Agent(OPA)의 주된 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "To serve as a container runtime",
        "To enforce policies and make authorization decisions",
        "To provide logging and monitoring capabilities",
        "To manage network routing",
        "To handle storage management"
      ],
      "ko": [
        "컨테이너 런타임 역할",
        "정책을 강제하고 인가 결정을 내리는 역할",
        "로깅·모니터링 제공",
        "네트워크 라우팅 관리",
        "스토리지 관리"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Open Policy Agent (OPA) is a general-purpose policy engine that evaluates inputs against defined policies to make authorization decisions. In Kubernetes, OPA is commonly used to enforce security and compliance policies on cluster resources. Incorrect options, such as serving as a container runtime, logging, or network management, describe functionalities unrelated to OPA's role.",
      "ko": "OPA는 입력을 정의된 정책과 대조해 평가하고 인가 결정을 내리는 범용 정책 엔진이다. Kubernetes에서는 클러스터 리소스에 보안·준수 정책을 강제하는 데 흔히 사용된다. 컨테이너 런타임 역할, 로깅, 네트워크 관리 같은 오답은 OPA의 역할과 무관한 기능을 설명한다."
    },
    "ref": "https://www.cncf.io/blog/2023/10/09/secure-your-kubernetes-environment-with-opa-and-gatekeeper/"
  },
  {
    "id": "kcsa-mock-299",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Network Isolation and Segmentation",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a primary benefit of using Namespaces in Kubernetes?",
      "ko": "Kubernetes에서 Namespaces 사용의 주요 이점은 무엇인가?"
    },
    "choices": {
      "en": [
        "Improves application performance",
        "Provides a mechanism for resource isolation and organization",
        "Simplifies container image management",
        "Automatically scales applications based on load",
        "Eliminates the need for Pods"
      ],
      "ko": [
        "애플리케이션 성능 향상",
        "리소스 격리와 구성을 위한 메커니즘 제공",
        "컨테이너 이미지 관리 단순화",
        "부하에 따른 자동 스케일링",
        "Pod 필요성 제거"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Namespaces in Kubernetes provide a way to logically separate and isolate resources within a cluster, enabling multiple teams or projects to share the same cluster without resource conflicts. They help organize cluster resources and apply resource quotas or policies per namespace. Namespaces do not directly improve application performance, simplify container images, automatically scale applications, or replace Pods, which are fundamental units of deployment in Kubernetes.",
      "ko": "네임스페이스는 클러스터 안의 리소스를 논리적으로 분리하고 격리하는 방법을 제공하므로 여러 팀이나 프로젝트가 리소스 충돌 없이 같은 클러스터를 공유할 수 있다. 클러스터 리소스를 구성하고 네임스페이스별 리소스 쿼터나 정책을 적용하는 데 도움을 준다. 애플리케이션 성능을 직접 향상하거나 컨테이너 이미지를 단순화하거나 애플리케이션을 자동 스케일링하거나 Pod를 대체하지 않는다. Pod는 Kubernetes 배포의 기본 단위다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "kcsa-mock-300",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Kubernetes Configuration",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the correct kubectl command to set the default namespace for all subsequent operations in the current context?",
      "ko": "현재 컨텍스트에서 이후 모든 작업의 기본 namespace를 설정하는 올바른 kubectl 명령은 무엇인가?"
    },
    "choices": {
      "en": [
        "kubectl config use-context <namespace>",
        "kubectl set namespace <namespace>",
        "kubectl config set-context --current --namespace=<namespace>",
        "kubectl namespace set <namespace>",
        "kubectl switch namespace <namespace>"
      ],
      "ko": [
        "kubectl config use-컨텍스트 <namespace>",
        "kubectl set namespace <namespace>",
        "kubectl config set-컨텍스트 --current --namespace=<namespace>",
        "kubectl namespace set <namespace>",
        "kubectl switch namespace <namespace>"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The command 'kubectl config set-context --current --namespace=<namespace>' modifies the current context's namespace setting persistently. This differs from temporary namespace overrides using '-n' flag, and ensures all subsequent commands use the specified namespace by default. Other options either use incorrect syntax or modify different configuration aspects.",
      "ko": "kubectl config set-컨텍스트 --current --namespace=<namespace>는 현재 컨텍스트의 namespace 설정을 지속적으로 변경한다. -n을 이용한 임시 재정의와 달리 이후 명령의 기본 namespace가 된다."
    },
    "ref": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#config"
  },
  {
    "id": "kcsa-mock-301",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of the NIST Cybersecurity Framework (CSF)?",
      "ko": "NIST Cybersecurity Framework(CSF)의 주된 목적은 무엇인가?"
    },
    "choices": {
      "en": [
        "A universal law for international data privacy",
        "A set of risk management guidelines to identify, protect, detect, respond to, and recover from cyber threats",
        "A standard for container registry licensing",
        "A government mandate exclusively for financial institutions",
        "A platform for automating software supply chain security"
      ],
      "ko": [
        "국제 데이터 개인정보 보호를 위한 보편적 법률",
        "사이버 위협을 식별·보호·탐지·대응·복구하기 위한 위험 관리 지침",
        "컨테이너 레지스트리 라이선스 표준",
        "금융 기관에만 적용되는 정부 명령",
        "소프트웨어 공급망 보안 자동화 플랫폼"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The NIST Cybersecurity Framework (CSF) is designed as a voluntary framework to help organizations manage and reduce cybersecurity risk. It provides a comprehensive set of guidelines and best practices structured around five core functions: Identify, Protect, Detect, Respond, and Recover. This framework is not a law or mandate but a flexible tool to improve cybersecurity posture across industries. The other options are incorrect because they either misrepresent the framework's scope or confuse it with unrelated standards or platforms.",
      "ko": "NIST CSF는 조직의 사이버보안 위험을 관리·감소시키는 자발적 프레임워크다. Identify, Protect, Detect, Respond, Recover 다섯 핵심 기능을 중심으로 포괄적인 지침과 모범 사례를 제공한다. 법률이나 의무 명령이 아니라 산업 전반의 보안 상태를 개선하는 유연한 도구다. 다른 선택지는 보편적 법률, 컨테이너 레지스트리 라이선스 표준, 금융 기관 전용 정부 명령, 소프트웨어 공급망 보안 플랫폼으로서 CSF의 범위를 잘못 설명한다."
    },
    "ref": "https://www.nist.gov/cyberframework"
  },
  {
    "id": "kcsa-mock-302",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which statement best describes the purpose of the CIS Kubernetes Benchmark?",
      "ko": "CIS Kubernetes Benchmark의 목적을 가장 잘 설명한 것은 무엇인가?"
    },
    "choices": {
      "en": [
        "It is a proprietary software suite for securing virtual machines",
        "It offers prescriptive configuration guidelines for hardening Kubernetes clusters",
        "It focuses solely on threat modelling for Kubernetes",
        "It is primarily used for scanning container images for malware",
        "It provides guidelines for zero-trust network architecture"
      ],
      "ko": [
        "가상 머신 보안을 위한 독점 소프트웨어 제품군",
        "Kubernetes 클러스터 강화에 대한 처방적 구성 지침 제공",
        "Kubernetes 위협 모델링만 중점적으로 다룸",
        "컨테이너 이미지 악성코드 스캔이 주 목적",
        "제로 트러스트 네트워크 아키텍처 지침 제공"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The CIS Kubernetes Benchmark provides detailed, consensus-based best practices for securely configuring Kubernetes clusters. It focuses on hardening the cluster components and configurations to reduce security risks. It is not a software tool, nor does it focus exclusively on threat modeling or container image scanning. While zero-trust principles may be relevant to Kubernetes security, the benchmark itself specifically addresses configuration hardening.",
      "ko": "CIS Kubernetes Benchmark는 Kubernetes 클러스터를 안전하게 구성하기 위한 합의 기반 모범 사례와 상세 지침을 제공한다. 클러스터 구성 요소를 강화하는 데 초점을 두며 소프트웨어 도구나 위협 모델링·이미지 스캔 전용이 아니다. 제로 트러스트 원칙과 관련될 수 있지만 벤치마크 자체는 구성 강화에 집중한다."
    },
    "ref": "https://www.cisecurity.org/benchmark/kubernetes/"
  },
  {
    "id": "kcsa-mock-304",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat Modelling Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the main objective of Microsoft's Security Development Lifecycle (SDL)?",
      "ko": "Microsoft Security Development Lifecycle(SDL)의 주요 목표는 무엇인가?"
    },
    "choices": {
      "en": [
        "To provide a compliance checklist for healthcare data",
        "To outline an encryption standard for IoT devices",
        "To incorporate threat modeling and mitigation throughout the software development process",
        "To define data storage formats for container logs",
        "To guide zero-downtime deployment strategies"
      ],
      "ko": [
        "의료 데이터 준수 체크리스트 제공",
        "IoT 기기 암호화 표준 규정",
        "소프트웨어 개발 전 과정에 위협 모델링과 완화를 통합",
        "컨테이너 로그 데이터 저장 형식 정의",
        "무중단 배포 전략 안내"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Microsoft's Security Development Lifecycle (SDL) is a comprehensive process that integrates security and privacy best practices into every phase of software development. Its primary focus is on identifying potential threats early through threat modeling and implementing mitigations to reduce vulnerabilities. It is not a compliance checklist, encryption standard, logging format, or deployment strategy guide.",
      "ko": "Microsoft SDL은 소프트웨어 개발의 모든 단계에 보안과 개인정보 보호 모범 사례를 통합하는 포괄적인 프로세스다. 주된 초점은 위협 모델링으로 잠재적 위협을 조기에 식별하고 취약점을 줄이는 완화책을 구현하는 것이다. 이는 준수 체크리스트, 암호화 표준, 로그 형식 또는 배포 전략 안내가 아니다."
    },
    "ref": "https://www.microsoft.com/en-us/securityengineering/sdl/"
  },
  {
    "id": "kcsa-mock-305",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat Modelling Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "In threat modeling using Data Flow Diagrams (DFDs), what key aspects of a system are primarily visualized?",
      "ko": "Data Flow Diagram(DFD)을 이용한 위협 모델링에서 주로 시각화하는 시스템의 핵심 요소는 무엇인가?"
    },
    "choices": {
      "en": [
        "Financial transaction records across global markets",
        "Network latency metrics in high-availability clusters",
        "Entry points, exit points, data flows, and potential threat vectors within the system",
        "Container orchestration for microservices deployment",
        "Source code management for Git-based repositories"
      ],
      "ko": [
        "전 세계 시장의 금융 거래 기록",
        "고가용성 클러스터의 네트워크 지연 지표",
        "시스템 내부의 진입점·출구점·데이터 흐름·잠재적 위협 벡터",
        "마이크로서비스 배포를 위한 컨테이너 오케스트레이션",
        "Git 기반 저장소의 소스 코드 관리"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Data Flow Diagrams (DFDs) are used in threat modeling to visually represent how data moves through a system, highlighting entry and exit points, data stores, processes, and trust boundaries. This visualization helps identify where threats could occur. The other options describe unrelated concepts such as financial data, network performance, container orchestration, or source code management, which are not the focus of DFDs in threat modeling.",
      "ko": "DFD는 위협 모델링에서 데이터가 시스템을 어떻게 이동하는지 시각적으로 표현하며, 진입점과 출구점, 데이터 저장소, 프로세스, 신뢰 경계를 강조한다. 이 시각화는 위협이 발생할 수 있는 위치를 식별하는 데 도움을 준다. 금융 데이터, 네트워크 성능, 컨테이너 오케스트레이션, 소스 코드 관리는 DFD 위협 모델링의 초점이 아니다."
    },
    "ref": "https://owasp.org/www-community/Threat_Modeling"
  },
  {
    "id": "kcsa-mock-306",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which best defines PCI DSS in a containerized environment?",
      "ko": "컨테이너 환경에서 PCI DSS를 가장 잘 정의한 것은 무엇인가?"
    },
    "choices": {
      "en": [
        "A software license for open-source container platforms",
        "A set of security standards for systems handling cardholder data, applicable to container-based workflows",
        "A Kubernetes admission controller for preventing configuration drift",
        "A recommended approach to container performance tuning",
        "A zero-trust compliance framework for data science workloads"
      ],
      "ko": [
        "오픈 소스 컨테이너 플랫폼용 소프트웨어 라이선스",
        "카드 소유자 데이터를 처리하는 시스템을 위한 보안 표준 집합으로 컨테이너 워크플로에도 적용됨",
        "설정 드리프트 방지용 Kubernetes admission 컨트롤러",
        "컨테이너 성능 튜닝 권장 방식",
        "데이터 과학 워크로드용 제로 트러스트 준수 프레임워크"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "PCI DSS in a containerized environment refers to the application of its security standards to workflows that handle cardholder data within containers. This includes ensuring compliance with requirements such as network segmentation, access control, and real-time monitoring. Other options are incorrect because they either mischaracterize PCI DSS or describe unrelated concepts like software licenses or Kubernetes-specific tools.",
      "ko": "컨테이너 환경의 PCI DSS는 컨테이너 안에서 카드 소유자 데이터를 처리하는 워크플로에 PCI DSS 보안 표준을 적용하는 것을 뜻한다. 여기에는 네트워크 분할, 접근 제어, 실시간 모니터링 같은 요구 사항의 준수가 포함된다. 다른 선택지는 PCI DSS를 잘못 설명하거나 소프트웨어 라이선스·Kubernetes 전용 도구 같은 무관한 개념을 설명한다."
    },
    "ref": "https://sysdig.com/blog/container-pci-compliance/"
  },
  {
    "id": "kcsa-mock-307",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Supply Chain Compliance",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why is integrating TLS certificates critical for supply chain security in Kubernetes environments?",
      "ko": "Kubernetes 환경의 공급망 보안에서 TLS 인증서 통합이 중요한 이유는 무엇인가?"
    },
    "choices": {
      "en": [
        "It ensures faster application deployment via automation",
        "It facilitates multi-cloud resource allocation",
        "It secures communication between admission controllers and the API server, preventing man-in-the-middle attacks",
        "It helps in container orchestration on legacy systems",
        "It extends the cluster’s node pool automatically"
      ],
      "ko": [
        "자동화로 애플리케이션 배포를 빠르게 한다",
        "멀티클라우드 리소스 할당을 돕는다",
        "admission 컨트롤러와 API server 간 통신을 보호해 중간자 공격을 막는다",
        "레거시 시스템의 컨테이너 오케스트레이션을 돕는다",
        "클러스터 노드 풀을 자동 확장한다"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "TLS certificate integration is essential in Kubernetes supply chain security because it encrypts and authenticates communication between components such as admission controllers and the API server. This prevents attackers from intercepting or tampering with requests, thereby mitigating man-in-the-middle attacks and ensuring the integrity of the supply chain. The other options do not relate to TLS's role in securing communication or supply chain integrity.",
      "ko": "TLS 인증서 통합은 admission controller와 API server 같은 구성 요소 사이의 통신을 암호화하고 인증하므로 Kubernetes 공급망 보안에 필수적이다. 공격자가 요청을 가로채거나 변조하지 못하게 하여 중간자 공격을 완화하고 공급망 무결성을 보장한다. 다른 선택지는 통신 보안이나 공급망 무결성에서 TLS가 하는 역할과 관련이 없다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "kcsa-mock-308",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which tool is widely used to automate compliance checks against the CIS Kubernetes Benchmark?",
      "ko": "CIS Kubernetes Benchmark에 대한 준수 검사를 자동화하는 데 널리 사용되는 도구는 무엇인가?"
    },
    "choices": {
      "en": [
        "Nmap",
        "Kube-bench",
        "Grafana",
        "syslog-ng",
        "Bash scripts in CronJobs"
      ],
      "ko": [
        "Nmap",
        "Kube-bench",
        "Grafana",
        "syslog-ng",
        "CronJob의 Bash 스크립트"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kube-bench is a specialized open-source tool designed to automate the assessment of Kubernetes clusters against the CIS Kubernetes Benchmark, which defines security best practices. Unlike generic tools such as Nmap or Grafana, Kube-bench runs checks that correspond directly to the CIS controls, providing detailed reports on compliance status. While Bash scripts can be used for automation, they lack the comprehensive and standardized checks that Kube-bench provides. Syslog-ng is a logging tool and unrelated to compliance scanning.",
      "ko": "Kube-bench는 CIS Kubernetes Benchmark에 따라 클러스터를 평가하는 오픈 소스 도구다. CIS 제어 항목에 직접 대응하는 검사를 수행해 준수 보고서를 제공하며 Nmap·Grafana는 일반 도구이고 Bash 스크립트는 표준화된 포괄 검사가 부족하다. syslog-ng는 로깅 도구다."
    },
    "ref": "https://www.cisecurity.org/benchmark/kubernetes/"
  },
  {
    "id": "kcsa-mock-309",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of Open Policy Agent (OPA) Gatekeeper in Kubernetes?",
      "ko": "Kubernetes에서 OPA Gatekeeper의 주된 목적은 무엇인가?"
    },
    "choices": {
      "en": [
        "To manage node scaling based on CPU usage",
        "To provide an integrated container registry",
        "To enforce policy-as-code by validating configurations during admission",
        "To offer a threat feed for container vulnerabilities",
        "To install an alternative container runtime in Kubernetes"
      ],
      "ko": [
        "CPU 사용량에 따른 노드 스케일링 관리",
        "통합 컨테이너 레지스트리 제공",
        "admission 과정에서 구성을 검증해 정책 코드화를 강제",
        "컨테이너 취약점 위협 피드 제공",
        "대체 컨테이너 런타임 설치"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "OPA Gatekeeper is a validating admission controller that enforces policies defined as code during resource creation or updates in Kubernetes. It ensures compliance by preventing non-compliant resources from being admitted to the cluster. Incorrect options, such as managing node scaling or providing a container registry, are unrelated to OPA Gatekeeper's functionality. Similarly, it does not handle threat feeds or runtime installation.",
      "ko": "OPA Gatekeeper는 Kubernetes에서 리소스를 생성하거나 업데이트하는 동안 코드로 정의된 정책을 강제하는 검증 admission controller다. 비준수 리소스가 클러스터에 admission되는 것을 막아 준수를 보장한다. 노드 스케일링, 컨테이너 레지스트리 제공, 위협 피드 처리, 런타임 설치는 OPA Gatekeeper와 무관하다."
    },
    "ref": "https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies-with-gatekeeper"
  },
  {
    "id": "kcsa-mock-310",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is Kyverno's primary function in a Kubernetes environment?",
      "ko": "Kubernetes 환경에서 Kyverno의 주된 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "A container scanning tool for malware detection",
        "A platform for automating cost optimizations",
        "An admission controller that enables writing and enforcing policies as Kubernetes resources",
        "An event streaming system for logs",
        "A vulnerability database maintained by CIS"
      ],
      "ko": [
        "악성코드 탐지용 컨테이너 스캔 도구",
        "비용 최적화 자동화 플랫폼",
        "Kubernetes 리소스로 정책을 작성·강제하는 admission 컨트롤러",
        "로그용 이벤트 스트리밍 시스템",
        "CIS가 관리하는 취약점 데이터베이스"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Kyverno is a Kubernetes-native policy engine that functions as an admission controller. It allows administrators to define, validate, and enforce policies using Kubernetes Custom Resource Definitions (CRDs), making policy management declarative and integrated into the Kubernetes API. It is not a container scanning tool, cost optimization platform, log streaming system, or a vulnerability database. Its design simplifies policy enforcement without requiring external policy languages or frameworks.",
      "ko": "Kyverno는 admission controller로 기능하는 Kubernetes 네이티브 정책 엔진이다. Kubernetes Custom Resource Definition(CRD)을 사용해 정책을 정의하고 검증하고 강제하므로 정책 관리가 선언적이며 Kubernetes API에 통합된다. 컨테이너 스캔 도구, 비용 최적화 플랫폼, 로그 스트리밍 시스템, 취약점 데이터베이스가 아니며, 외부 정책 언어나 프레임워크 없이 정책을 단순하게 강제하도록 설계되었다."
    },
    "ref": "https://kyverno.io/docs/"
  },
  {
    "id": "kcsa-mock-311",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Supply Chain Compliance",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which statement best describes the role of container scanning tools like Aqua Security or Clair?",
      "ko": "Aqua Security나 Clair 같은 컨테이너 스캔 도구의 역할을 가장 잘 설명한 것은 무엇인가?"
    },
    "choices": {
      "en": [
        "They manage multi-cluster ingress controllers",
        "They automate vulnerability detection in container images, typically before deployment",
        "They provide a database of open-source container licenses",
        "They specialize in high-availability cluster provisioning",
        "They replace Kubernetes’ default scheduler"
      ],
      "ko": [
        "멀티클러스터 ingress 컨트롤러 관리",
        "배포 전에 일반적으로 컨테이너 이미지의 취약점 탐지를 자동화",
        "오픈 소스 컨테이너 라이선스 데이터베이스 제공",
        "고가용성 클러스터 프로비저닝 전문",
        "Kubernetes 기본 스케줄러 대체"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Container scanning tools such as Aqua Security and Clair analyze container images to identify known security vulnerabilities before these images are deployed. This process is a critical part of securing the container supply chain. They do not manage ingress controllers, provide license databases, handle cluster provisioning, or replace Kubernetes schedulers. Their focus is on vulnerability assessment to prevent deploying insecure containers.",
      "ko": "Aqua Security와 Clair 같은 컨테이너 스캔 도구는 컨테이너 이미지를 분석해 배포 전에 알려진 보안 취약점을 식별한다. 이는 컨테이너 공급망 보안의 중요한 과정이다. 이 도구들은 ingress controller 관리, 라이선스 데이터베이스 제공, 클러스터 프로비저닝, Kubernetes scheduler 대체를 하지 않는다. 초점은 안전하지 않은 컨테이너의 배포를 막기 위한 취약점 평가다."
    },
    "ref": "https://www.aquasec.com/products/container-security/"
  },
  {
    "id": "kcsa-mock-312",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which of the following lists the five core functions of the NIST Cybersecurity Framework?",
      "ko": "NIST Cybersecurity Framework의 다섯 핵심 기능을 나열한 것은 무엇인가?"
    },
    "choices": {
      "en": [
        "Monitor, Map, Maintain, Minimise, and Mutate",
        "Identify, Protect, Detect, Respond, and Recover",
        "Review, Replace, Retract, Renew, and Reserve",
        "Discover, Compare, Archive, Document, and Renew",
        "Encrypt, Store, Backup, Alert, and Evaluate"
      ],
      "ko": [
        "Monitor, Map, Maintain, Minimise, Mutate",
        "Identify, Protect, Detect, Respond, Recover",
        "Review, Replace, Retract, Renew, Reserve",
        "Discover, Compare, Archive, Document, Renew",
        "Encrypt, Store, Backup, Alert, Evaluate"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The NIST Cybersecurity Framework (CSF) is structured around five core functions: Identify, Protect, Detect, Respond, and Recover. These functions provide a high-level, strategic view of the lifecycle of managing cybersecurity risk. The other options list unrelated or incorrect terms that do not correspond to the NIST CSF core functions.",
      "ko": "NIST CSF는 Identify, Protect, Detect, Respond, Recover 다섯 기능으로 구성되어 사이버보안 위험 관리 수명주기를 전략적으로 보여준다. 나머지는 CSF 핵심 기능이 아니다."
    },
    "ref": "https://www.nist.gov/cyberframework"
  },
  {
    "id": "kcsa-mock-313",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary purpose of Botkube in a Kubernetes environment?",
      "ko": "Kubernetes 환경에서 Botkube의 주된 목적은 무엇인가?"
    },
    "choices": {
      "en": [
        "To provide an integrated container build system",
        "To automate Slack-based alerts for compliance and security events",
        "To serve as an API gateway for microservices",
        "To orchestrate container autoscaling across clusters",
        "To replace kubelet on worker nodes"
      ],
      "ko": [
        "통합 컨테이너 빌드 시스템 제공",
        "컴플라이언스·보안 이벤트에 대한 Slack 기반 알림 자동화",
        "마이크로서비스용 API 게이트웨이",
        "클러스터 간 컨테이너 자동 스케일링 오케스트레이션",
        "워커 노드에서 kubelet 대체"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Botkube is a Kubernetes monitoring tool that integrates with messaging platforms like Slack, Microsoft Teams, or Mattermost to send real-time alerts about cluster events, compliance issues, and security incidents. It helps teams stay informed without constantly monitoring dashboards. It is not a container build system, API gateway, autoscaling orchestrator, or a replacement for kubelet.",
      "ko": "Botkube는 Slack·Microsoft Teams·Mattermost 같은 메시징 플랫폼과 통합해 클러스터 이벤트, 준수 문제, 보안 사고를 실시간 알림으로 보낸다. 빌드 시스템·API 게이트웨이·자동 스케일링·kubelet 대체가 아니다."
    },
    "ref": "https://botkube.io/docs/"
  },
  {
    "id": "kcsa-mock-314",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat Modelling Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which security development framework explicitly incorporates threat modeling and validation phases to ensure secure software development?",
      "ko": "안전한 소프트웨어 개발을 위해 위협 모델링과 검증 단계를 명시적으로 포함하는 보안 개발 프레임워크는 무엇인가?"
    },
    "choices": {
      "en": [
        "Microsoft Security Development Lifecycle (SDL)",
        "Open Container Initiative (OCI) Standard",
        "JWT Token Compliance Framework",
        "HTTP Strict Transport Security (HSTS)",
        "NIST Special Publication 800-63"
      ],
      "ko": [
        "Microsoft Security Development Lifecycle (SDL)",
        "Open Container Initiative (OCI) Standard",
        "JWT Token Compliance Framework",
        "HTTP Strict Transport Security (HSTS)",
        "NIST Special Publication 800-63"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The Microsoft Security Development Lifecycle (SDL) is a comprehensive framework that integrates security at every phase of software development, including explicit phases for requirements definition, threat modeling, mitigation strategies, and validation. This approach helps identify and address security risks early. Other options either focus on standards for container formats (OCI), token compliance, transport security policies (HSTS), or identity proofing guidelines (NIST SP 800-63), which do not specifically include threat modeling and validation phases within software development.",
      "ko": "Microsoft SDL은 요구 사항 정의, 위협 모델링, 완화 전략, 검증을 포함한 명시적 단계를 두고 소프트웨어 개발의 모든 단계에 보안을 통합하는 포괄적인 프레임워크다. 이 접근법은 보안 위험을 조기에 식별하고 해결하는 데 도움을 준다. OCI는 컨테이너 형식 표준, JWT Token Compliance Framework는 토큰 준수, HSTS는 전송 보안 정책, NIST SP 800-63은 신원 확인 지침에 초점을 두며, 이들 프레임워크는 소프트웨어 개발 과정에 위협 모델링과 검증 단계를 구체적으로 포함하지 않는다."
    },
    "ref": "https://learn.microsoft.com/en-us/security/develop/security-development-lifecycle"
  },
  {
    "id": "kcsa-mock-315",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which compliance framework is primarily recognized for emphasizing continuous policy review and network traffic monitoring to enhance security in cloud environments?",
      "ko": "클라우드 환경 보안을 위해 지속적인 정책 검토와 네트워크 트래픽 모니터링을 강조하는 것으로 주로 인정되는 준수 프레임워크는 무엇인가?"
    },
    "choices": {
      "en": [
        "NIST Cybersecurity Framework",
        "SOC 1 Type II",
        "ISO/IEC 27017",
        "FedRAMP",
        "COBIT"
      ],
      "ko": [
        "NIST Cybersecurity Framework",
        "SOC 1 Type II",
        "ISO/IEC 27017",
        "FedRAMP",
        "COBIT"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The NIST Cybersecurity Framework is widely adopted for managing cybersecurity risks and emphasizes continuous monitoring, including ongoing policy review and network traffic analysis, to effectively manage and mitigate risks in cloud and other environments. SOC 1 Type II focuses on financial controls, ISO/IEC 27017 provides guidelines for cloud security controls but does not emphasize continuous monitoring to the same extent, FedRAMP is a U.S. government program for cloud security authorization, and COBIT is a governance framework for IT management rather than specific continuous monitoring practices.",
      "ko": "NIST CSF는 사이버 위험 관리를 위해 지속적인 모니터링, 정책 검토, 네트워크 트래픽 분석을 강조한다. SOC 1은 재무 통제, ISO/IEC 27017은 클라우드 보안 통제 지침을 제공하지만 같은 정도로 지속적 모니터링을 강조하지 않으며, FedRAMP는 미국 정부 승인 프로그램, COBIT은 특정 지속적 모니터링 관행이 아닌 IT 거버넌스 프레임워크다."
    },
    "ref": "https://www.nist.gov/cyberframework"
  },
  {
    "id": "kcsa-mock-316",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat Modelling Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary objective of threat modeling in the context of Kubernetes security?",
      "ko": "Kubernetes 보안에서 위협 모델링의 주된 목적은 무엇인가?"
    },
    "choices": {
      "en": [
        "To define default CPU and memory limits for all workloads",
        "To visualize data flows and identify potential attack vectors within cluster configurations",
        "To enforce container image scanning during runtime",
        "To conduct load testing on container orchestration systems",
        "To accelerate pipeline deployments in CI/CD"
      ],
      "ko": [
        "모든 워크로드의 기본 CPU·메모리 한도 정의",
        "데이터 흐름을 시각화하고 클러스터 구성의 잠재적 공격 벡터를 식별",
        "런타임에 컨테이너 이미지 스캔 강제",
        "컨테이너 오케스트레이션 시스템 부하 테스트",
        "CI/CD 파이프라인 배포 가속"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Threat modeling in Kubernetes security involves creating a detailed representation of data flows and system components to identify potential vulnerabilities and attack vectors within cluster configurations. This proactive approach helps security teams anticipate and mitigate risks before exploitation. Defining resource limits, enforcing image scanning, load testing, or accelerating CI/CD pipelines are important operational tasks but do not constitute the core purpose of threat modeling.",
      "ko": "Kubernetes 보안의 위협 모델링은 데이터 흐름과 시스템 구성 요소를 상세히 표현해 클러스터 구성 안의 잠재적 취약점과 공격 벡터를 식별하는 작업이다. 이 사전 예방적 접근은 보안 팀이 악용되기 전에 위험을 예상하고 완화하게 한다. 리소스 한도 정의, 이미지 스캔 강제, 부하 테스트, CI/CD 파이프라인 배포 가속은 중요한 운영 작업일 수 있지만 위협 모델링의 핵심 목적은 아니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/#threat-modeling"
  },
  {
    "id": "kcsa-mock-317",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary function of Kubernetes admission controllers in enforcing compliance within a cluster?",
      "ko": "Kubernetes admission 컨트롤러가 클러스터 준수를 강제하는 주된 기능은 무엇인가?"
    },
    "choices": {
      "en": [
        "Scheduling pods onto nodes based on resource requirements",
        "Managing persistent storage volumes for stateful applications",
        "Intercepting API requests to validate and enforce policies before object creation or modification",
        "Acting as a certificate authority for cluster nodes",
        "Providing a graphical user interface for cluster configuration"
      ],
      "ko": [
        "리소스 요구에 따라 Pod를 노드에 스케줄링",
        "stateful 애플리케이션의 영구 스토리지 관리",
        "객체 생성·수정 전에 API 요청을 가로채 정책을 검증하고 강제",
        "클러스터 노드의 인증 기관 역할",
        "클러스터 구성을 위한 GUI 제공"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Kubernetes admission controllers are plugins that intercept API requests to the Kubernetes API server before objects are persisted. They validate and enforce policies such as security, resource quotas, and compliance rules, ensuring that only compliant configurations are admitted into the cluster. Scheduling pods, managing storage, acting as a certificate authority, or providing GUIs are handled by other Kubernetes components and tools.",
      "ko": "Kubernetes admission controller는 객체가 저장되기 전에 Kubernetes API server에 대한 API 요청을 가로채는 플러그인이다. 보안, 리소스 쿼터, 준수 규칙 같은 정책을 검증하고 강제해 준수하는 구성만 클러스터에 admission되도록 한다. Pod 스케줄링, 스토리지 관리, 인증 기관 역할, GUI 제공은 다른 Kubernetes 구성 요소나 도구가 담당한다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "kcsa-mock-318",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which guidance document provides best practices for mitigating supply chain risks in Kubernetes environments?",
      "ko": "Kubernetes 환경의 공급망 위험 완화 모범 사례를 제공하는 지침 문서는 무엇인가?"
    },
    "choices": {
      "en": [
        "TOGAF Enterprise Architecture Framework",
        "OWASP Top 10 Security Risks",
        "NSA/CISA Kubernetes Hardening Guidance",
        "ITIL Service Management Framework",
        "SRE (Site Reliability Engineering) Handbook"
      ],
      "ko": [
        "TOGAF Enterprise Architecture Framework",
        "OWASP Top 10 Security Risks",
        "NSA/CISA Kubernetes Hardening Guidance",
        "ITIL Service Management Framework",
        "SRE Handbook"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The NSA/CISA Kubernetes Hardening Guidance outlines strategies to mitigate supply chain risks in Kubernetes environments. It includes recommendations for securing container images, implementing role-based access control (RBAC), and ensuring secure configurations for clusters.",
      "ko": "NSA/CISA Kubernetes Hardening Guidance는 컨테이너 이미지 보안, RBAC 구현, 클러스터 안전 구성을 포함해 Kubernetes 공급망 위험 완화 전략을 제시한다."
    },
    "ref": "https://media.defense.gov/2021/Aug/03/2002820346/-1/-1/0/ESF_KUBERNETES_HARDENING_GUIDANCE.PDF"
  },
  {
    "id": "kcsa-mock-319",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Why is Infrastructure as Code (IaC) important for maintaining compliance in Kubernetes environments?",
      "ko": "Kubernetes 환경에서 준수를 유지하는 데 Infrastructure as Code(IaC)가 중요한 이유는 무엇인가?"
    },
    "choices": {
      "en": [
        "It replaces the need for container registries",
        "It enables the manual application of security patches",
        "It provides a script-free approach to deployment",
        "It ensures repeatable and auditable deployments aligned with security best practices",
        "It automatically detects vulnerabilities without scanning"
      ],
      "ko": [
        "컨테이너 레지스트리가 필요 없어지기 때문에",
        "보안 패치를 수동으로 적용하게 하기 때문에",
        "스크립트 없는 배포 방식을 제공하기 때문에",
        "보안 모범 사례에 맞는 반복 가능하고 감사 가능한 배포를 보장하기 때문에",
        "스캔 없이 취약점을 자동 탐지하기 때문에"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Infrastructure as Code (IaC) tools like Terraform, Ansible, or CloudFormation enable automated, repeatable, and auditable provisioning of infrastructure and Kubernetes resources. This consistency helps enforce security best practices, reduces human error, and supports compliance requirements by maintaining version-controlled infrastructure definitions. IaC does not replace container registries, nor does it provide script-free deployment or automatic vulnerability detection without scanning.",
      "ko": "Terraform·Ansible·CloudFormation 같은 IaC는 인프라와 Kubernetes 리소스를 자동·반복·감사 가능하게 프로비저닝한다. 버전 관리된 정의로 일관성을 유지해 보안 모범 사례와 준수를 지원하고 사람의 오류를 줄인다. 레지스트리를 대체하거나 스크립트 없는 배포·스캔 없는 취약점 탐지를 제공하지 않는다."
    },
    "ref": "https://www.terraform.io/intro"
  },
  {
    "id": "kcsa-mock-320",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which compliance standard is specifically relevant for organizations handling Protected Health Information (PHI) in the healthcare sector?",
      "ko": "PHI(Protected Health Information)를 처리하는 의료 조직에 특히 관련된 준수 표준은 무엇인가?"
    },
    "choices": {
      "en": [
        "HIPAA",
        "SOX",
        "ISO 9001",
        "GDPR",
        "MITRE ATT&CK"
      ],
      "ko": [
        "HIPAA",
        "SOX",
        "ISO 9001",
        "GDPR",
        "MITRE ATT&CK"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "HIPAA is crucial for healthcare organizations as it contains security and privacy rules that protect PHI. It is particularly relevant when deploying healthcare solutions on cloud platforms like Kubernetes, ensuring compliance with PHI handling regulations.",
      "ko": "HIPAA는 PHI를 보호하는 보안·개인정보 규칙을 포함하므로 의료 조직에 필수적이다. Kubernetes 같은 클라우드에 의료 솔루션을 배포할 때 PHI 처리 규정 준수를 보장한다."
    },
    "ref": "https://www.hhs.gov/hipaa/index.html"
  },
  {
    "id": "kcsa-mock-321",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat Modelling Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which methodology involves visualizing application components and interactions to identify potential security threats?",
      "ko": "잠재적 보안 위협을 식별하기 위해 애플리케이션 구성 요소와 상호작용을 시각화하는 방법론은 무엇인가?"
    },
    "choices": {
      "en": [
        "Scrum methodology",
        "Data Flow Diagram (DFD) approach",
        "Waterfall model",
        "Incident Response Cycle",
        "Serverless microservices design"
      ],
      "ko": [
        "Scrum 방법론",
        "Data Flow Diagram (DFD) 접근법",
        "Waterfall 모델",
        "인시던트 대응 주기",
        "서버리스 마이크로서비스 설계"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The Data Flow Diagram (DFD) approach is a visual representation technique used to map out data paths and interactions within systems, facilitating the identification and mitigation of security threats.",
      "ko": "DFD 접근법은 시스템 내부의 데이터 경로와 상호작용을 도식화하는 시각적 표현 기법이다. 이를 통해 잠재적 보안 위협을 식별하고 완화할 수 있다."
    },
    "ref": "https://en.wikipedia.org/wiki/Data_flow_diagram"
  },
  {
    "id": "kcsa-mock-322",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which tool is commonly used for real-time compliance monitoring and alerting in Kubernetes environments?",
      "ko": "Kubernetes 환경에서 실시간 준수 모니터링과 알림에 흔히 쓰이는 도구는 무엇인가?"
    },
    "choices": {
      "en": [
        "Sysdig Secure",
        "NTP daemon",
        "CoreDNS",
        "Kubernetes Dashboard",
        "etcd"
      ],
      "ko": [
        "Sysdig Secure",
        "NTP 데몬",
        "CoreDNS",
        "Kubernetes Dashboard",
        "etcd"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Sysdig Secure is a tool designed for real-time compliance monitoring, anomaly detection, and security enforcement in Kubernetes environments. It helps ensure that clusters adhere to security standards and best practices.",
      "ko": "Sysdig Secure는 Kubernetes에서 실시간 준수 모니터링, 이상 탐지, 보안 강제를 수행한다. 클러스터가 보안 표준과 모범 사례를 따르는지 보장하는 데 도움을 준다."
    },
    "ref": "https://sysdig.com/docs/"
  },
  {
    "id": "kcsa-mock-324",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "How does Kube-bench contribute to enhancing Kubernetes security?",
      "ko": "Kube-bench는 Kubernetes 보안 향상에 어떻게 기여하는가?"
    },
    "choices": {
      "en": [
        "By automating cluster scaling during high load",
        "By auditing cluster configurations against CIS Kubernetes Benchmark recommendations",
        "By providing a continuous integration pipeline for containers",
        "By replacing default CNI plugins with a secure version",
        "By encrypting container images at runtime"
      ],
      "ko": [
        "높은 부하에서 클러스터 스케일링 자동화",
        "클러스터 구성을 CIS Kubernetes Benchmark 권고와 대조해 감사",
        "컨테이너용 지속적 통합 파이프라인 제공",
        "기본 CNI 플러그인을 보안 버전으로 교체",
        "런타임에 컨테이너 이미지 암호화"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kube-bench is a tool that automates the evaluation of Kubernetes cluster configurations to ensure they align with the CIS Kubernetes Benchmark recommendations. This helps identify and address potential security vulnerabilities.",
      "ko": "Kube-bench는 클러스터 구성을 CIS Kubernetes Benchmark 권고와 대조해 평가를 자동화한다. 이를 통해 잠재적 보안 취약점을 식별하고 수정할 수 있다."
    },
    "ref": "https://github.com/aquasecurity/kube-bench"
  },
  {
    "id": "kcsa-mock-325",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which compliance framework is mandatory for U.S. federal agencies or their contractors when hosting government data in cloud environments?",
      "ko": "클라우드 환경에서 정부 데이터를 호스팅할 때 미국 연방 기관이나 계약자에게 의무인 준수 프레임워크는 무엇인가?"
    },
    "choices": {
      "en": [
        "FedRAMP",
        "COSO",
        "ISO 20000",
        "DMARC",
        "SAML"
      ],
      "ko": [
        "FedRAMP",
        "COSO",
        "ISO 20000",
        "DMARC",
        "SAML"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "FedRAMP is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services used by U.S. federal agencies. It ensures that cloud services meet specific security requirements.",
      "ko": "FedRAMP는 미국 연방 기관이 사용하는 클라우드 제품·서비스의 보안 평가, 승인, 지속 모니터링을 표준화하는 정부 전체 프로그램이다. 클라우드 서비스가 특정 보안 요구를 충족하게 한다."
    },
    "ref": "https://www.fedramp.gov/"
  },
  {
    "id": "kcsa-mock-326",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Supply Chain Compliance",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is a primary objective of supply chain compliance in Kubernetes environments?",
      "ko": "Kubernetes 환경에서 공급망 준수의 주요 목표는 무엇인가?"
    },
    "choices": {
      "en": [
        "To reduce container start-up times",
        "To ensure all software components, including third-party container images, comply with security and integrity standards",
        "To provide a universal logging format for microservices",
        "To automatically scale nodes based on environmental sensor data",
        "To monitor CPU resource usage for cost optimization"
      ],
      "ko": [
        "컨테이너 시작 시간을 줄인다",
        "서드파티 컨테이너 이미지를 포함한 모든 소프트웨어 구성 요소가 보안·무결성 표준을 준수하게 한다",
        "마이크로서비스용 보편적 로그 형식을 제공한다",
        "환경 센서 데이터에 따라 노드를 자동 스케일링한다",
        "비용 최적화를 위해 CPU 사용량을 모니터링한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Supply chain compliance in Kubernetes focuses on verifying the integrity, provenance, and security of all software components used throughout the application lifecycle, including third-party container images. This ensures that only trusted and compliant components are deployed, mitigating risks from vulnerabilities or malicious code. Other options, such as reducing container start-up times or scaling nodes based on sensor data, are unrelated to supply chain compliance objectives.",
      "ko": "Kubernetes의 공급망 준수는 애플리케이션 수명주기 전반에서 사용되는 모든 소프트웨어 구성 요소의 무결성, 출처, 보안을 검증하는 데 초점을 둔다. 여기에는 서드파티 컨테이너 이미지가 포함되며, 신뢰할 수 있고 준수하는 구성 요소만 배포하게 해 취약점이나 악성 코드 위험을 줄인다. 컨테이너 시작 시간 단축이나 센서 데이터에 따른 노드 스케일링 같은 선택지는 공급망 준수의 목표와 무관하다."
    },
    "ref": "https://www.cncf.io/blog/2021/05/10/supply-chain-security-in-kubernetes/"
  },
  {
    "id": "kcsa-mock-327",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which statement best describes the purpose of the CIS Controls in the context of enterprise cybersecurity?",
      "ko": "엔터프라이즈 사이버보안에서 CIS Controls의 목적을 가장 잘 설명한 것은 무엇인가?"
    },
    "choices": {
      "en": [
        "They define licensing restrictions for enterprise software",
        "They specify hardware requirements for data center appliances",
        "They provide a prioritized set of cybersecurity best practices to defend against common cyber attacks",
        "They offer guidelines for AI-based container scheduling",
        "They focus exclusively on physical security measures"
      ],
      "ko": [
        "기업 소프트웨어 라이선스 제한 정의",
        "데이터센터 장비의 하드웨어 요구 사항 지정",
        "일반적인 사이버 공격 방어를 위한 우선순위화된 보안 모범 사례 제공",
        "AI 기반 컨테이너 스케줄링 지침 제공",
        "물리적 보안 조치만 중점적으로 다룸"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The CIS Controls are a set of prioritized cybersecurity best practices designed to help organizations defend against the most common and pervasive cyber threats. They provide actionable guidance for improving security posture. The other options are incorrect because CIS Controls do not deal with software licensing, hardware specifications, AI scheduling, or solely physical security.",
      "ko": "CIS Controls는 조직이 가장 흔하고 만연한 사이버 위협을 방어하도록 돕는 우선순위화된 사이버보안 모범 사례 집합이다. 보안 상태를 개선하기 위한 실행 가능한 지침을 제공한다. 소프트웨어 라이선스, 하드웨어 사양, AI 기반 스케줄링 또는 물리적 보안만을 다루는 것은 아니다."
    },
    "ref": "https://www.cisecurity.org/controls/"
  },
  {
    "id": "kcsa-mock-328",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and Tooling",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes tool uses a webhook-based admission controller to enforce compliance policies?",
      "ko": "웹훅 기반 admission 컨트롤러로 준수 정책을 강제하는 Kubernetes 도구는 무엇인가?"
    },
    "choices": {
      "en": [
        "Kube-proxy",
        "Prometheus",
        "Open Policy Agent (OPA) Gatekeeper",
        "kubectl",
        "MetalLB"
      ],
      "ko": [
        "Kube-proxy",
        "Prometheus",
        "Open Policy Agent (OPA) Gatekeeper",
        "kubectl",
        "MetalLB"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Open Policy Agent (OPA) Gatekeeper integrates with Kubernetes as a webhook admission controller, allowing administrators to enforce custom policies on Kubernetes resources during creation or update. This enables automated compliance enforcement. Kube-proxy manages network proxying, Prometheus is for monitoring, kubectl is a CLI tool, and MetalLB provides load balancing; none of these enforce policies via admission webhooks.",
      "ko": "OPA Gatekeeper는 웹훅 admission 컨트롤러로 Kubernetes에 통합되어 생성·수정 시 리소스에 사용자 정의 정책을 강제한다. Kube-proxy는 네트워크 프록시, Prometheus는 모니터링, kubectl은 CLI, MetalLB는 로드 밸런싱용이다."
    },
    "ref": "https://www.openpolicyagent.org/docs/latest/kubernetes-admission-control/"
  },
  {
    "id": "kcsa-mock-329",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary focus of the NSA/CISA Kubernetes Hardening Guidance?",
      "ko": "NSA/CISA Kubernetes Hardening Guidance의 주된 초점은 무엇인가?"
    },
    "choices": {
      "en": [
        "Using insecure container registries for testing purposes",
        "Skipping vulnerability scanning to reduce operational overhead",
        "Securing supply chain components and minimizing container privileges",
        "Disabling TLS to accelerate deployment processes",
        "Automatically approving all configuration changes to enhance agility"
      ],
      "ko": [
        "테스트 목적으로 안전하지 않은 레지스트리 사용",
        "운영 부담을 줄이려고 취약점 스캔 생략",
        "공급망 구성 요소를 보호하고 컨테이너 권한을 최소화",
        "배포를 빠르게 하려고 TLS 비활성화",
        "민첩성을 위해 모든 구성 변경을 자동 승인"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The NSA/CISA Kubernetes Hardening Guidance emphasizes securing the software supply chain and minimizing container privileges to reduce attack surfaces. This includes practices like signing container images, scanning for vulnerabilities, and implementing least privilege access controls.",
      "ko": "NSA/CISA Kubernetes Hardening Guidance는 공격 표면을 줄이기 위해 소프트웨어 공급망을 보호하고 컨테이너 권한을 최소화하는 것을 강조한다. 여기에는 컨테이너 이미지 서명, 취약점 스캔, 최소 권한 접근 제어 구현 같은 관행이 포함된다."
    },
    "ref": "https://media.defense.gov/2021/Aug/03/2002820346/-1/-1/0/ESF_KUBERNETES_HARDENING_GUIDANCE.PDF"
  },
  {
    "id": "kcsa-mock-330",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance Frameworks",
    "difficulty": "unrated",
    "style": "exam",
    "q": {
      "en": "What is the primary benefit of applying the CIS Kubernetes Benchmark to production clusters?",
      "ko": "프로덕션 클러스터에 CIS Kubernetes Benchmark를 적용하는 주요 이점은 무엇인가?"
    },
    "choices": {
      "en": [
        "It guarantees zero downtime for all microservices",
        "It provides prescriptive security hardening recommendations to enhance cluster security and compliance",
        "It enforces a rolling-update deployment strategy by default",
        "It automatically encrypts data for stateful workloads",
        "It replaces manual container orchestration with serverless functions"
      ],
      "ko": [
        "모든 마이크로서비스의 무중단을 보장한다",
        "클러스터 보안과 준수를 높이는 처방적 보안 강화 권고를 제공한다",
        "기본적으로 rolling-update 배포 전략을 강제한다",
        "stateful 워크로드 데이터를 자동 암호화한다",
        "수동 컨테이너 오케스트레이션을 서버리스 함수로 대체한다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The CIS Kubernetes Benchmark offers detailed, prescriptive guidelines and best practices for securing Kubernetes clusters. Applying these recommendations helps organizations harden their production environments against security threats and meet compliance requirements. The benchmark does not guarantee zero downtime, enforce deployment strategies, provide automatic encryption, or replace orchestration with serverless functions.",
      "ko": "CIS Kubernetes Benchmark는 Kubernetes 클러스터 보안을 위한 상세하고 처방적인 지침과 모범 사례를 제공한다. 적용하면 프로덕션 환경을 위협에 맞게 강화하고 준수 요구를 충족할 수 있다. 무중단, 배포 전략, 자동 암호화, 서버리스 대체를 보장하지 않는다."
    },
    "ref": "https://www.cisecurity.org/benchmark/kubernetes/"
  }
];
