import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { BaseLessonData } from '@/types/lesson-base';

export interface GameDevLesson extends BaseLessonData {
  gameDevMainContent: {
    gameGenres: string[];
    technologies: string[];
    careerOpportunities: string[];
  };
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
}

export const gameDevLessons: GameDevLesson[] = [
  {
    id: 'game-design-fundamentals',
    title: 'Bài 1: Nguyên Tắc Cơ Bản về Thiết Kế Game',
    description:
      'Học các nguyên tắc cơ bản về thiết kế game: cơ chế, động lực, thẩm mỹ (MDA). Thiết kế vòng lặp gameplay và trải nghiệm người chơi để tạo ra các trò chơi hấp dẫn.',
    videoUrl: 'https://www.youtube.com/watch?v=G8AT01tuyrk',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '120 phút',
    objectives: [
      'Hiểu các nguyên tắc thiết kế game cốt lõi và khung MDA',
      'Thiết kế cơ chế và hệ thống gameplay hấp dẫn',
      'Tạo đường cong độ khó và hệ thống tiến trình cân bằng',
      'Triển khai các vòng lặp phản hồi và phần thưởng cho người chơi',
      'Phân tích các trò chơi thành công và rút ra các mẫu thiết kế',
    ],
    prerequisites: [
      'Đam mê chơi game và trải nghiệm tương tác',
      'Kỹ năng tư duy sáng tạo và giải quyết vấn đề cơ bản',
      'Hiểu biết về tâm lý người chơi',
      'Quen thuộc với các thể loại game khác nhau',
    ],
    gameDevMainContent: {
      gameGenres: ['Puzzle', 'Platformer', 'Adventure', 'Action'],
      technologies: [
        'Tài liệu Thiết kế Game (GDD)',
        'Tạo mẫu trên giấy (Paper Prototyping)',
        'Công cụ Thiết kế Kỹ thuật số (Figma, Miro)',
        'Công cụ Phân tích',
        'Nền tảng Thử nghiệm Người dùng',
        'Bảng tính Cân bằng Game',
      ],
      careerOpportunities: [
        'Nhà thiết kế Game',
        'Nhà thiết kế Cấp độ',
        'Nhà thiết kế Tường thuật',
        'Nhà thiết kế Hệ thống',
        'Nhà thiết kế UX cho Game',
        'Nhà sản xuất Game',
      ],
    },
    exercises: [
      {
        title: 'Thiết kế một Game Puzzle trên Di động',
        description:
          'Tạo một thiết kế game hoàn chỉnh cho một trò chơi giải đố trên di động với cơ chế độc đáo và chiến lược kiếm tiền',
        difficulty: 'Trung bình',
        solution:
          '# Thiết kế Game Puzzle Di động: Thác Pha Lê\\n\\n## 1. Ý tưởng & Vòng lặp Cốt lõi của Game\\n\\n### Ý tưởng Chính:\\nGame giải đố match-3 với chủ đề ma thuật nguyên tố, kết hợp lập kế hoạch chiến lược và phản xạ nhanh.\\n\\n### Vòng lặp Gameplay Cốt lõi (30-60 giây):\\n1. **Quét Bảng:** Người chơi quan sát trạng thái hiện tại\\n2. **Lên kế hoạch nước đi:** Xác định các kết hợp ghép tối ưu\\n3. **Thực hiện:** Thực hiện 3-5 nước đi tạo ra các chuỗi phản ứng\\n4. **Thu thập Phần thưởng:** Kiếm đá quý, vật phẩm tăng sức mạnh, tiến trình\\n5. **Đánh giá Tiến trình:** Kiểm tra trạng thái hoàn thành cấp độ\\n\\n### Vòng lặp Tiến trình Meta (5-10 phút):\\n1. **Hoàn thành Cấp độ:** Hoàn thành 3-5 cấp độ giải đố\\n2. **Mở khóa Nội dung:** Khu vực mới, nhân vật, khả năng\\n3. **Nâng cấp Hệ thống:** Cải thiện vật phẩm tăng sức mạnh và chỉ số\\n4. **Tiến trình Câu chuyện:** Thúc đẩy các yếu tố tường thuật\\n5. **Tính năng Xã hội:** Chia sẻ thành tích, cạnh tranh',
        materials: [
          'Tạo Tài liệu Thiết kế Game toàn diện',
          'Xác định vòng lặp gameplay cốt lõi và tiến trình meta',
          'Thiết kế đường cong độ khó cân bằng',
          'Lên kế hoạch chiến lược kiếm tiền',
          'Bao gồm lộ trình triển khai kỹ thuật',
        ],
        expectedResults:
          'Tài liệu thiết kế game hoàn chỉnh với tất cả các hệ thống được xác định và kế hoạch triển khai',
      },
    ],
    realWorldApplications: [
      'Các studio phát triển game di động',
      'Sáng tạo và phát hành game độc lập',
      'Thiết kế game giáo dục',
      'Gamification hóa các ứng dụng kinh doanh',
      'Thiết kế trải nghiệm thực tế ảo',
    ],
    resources: [
      {
        title: 'Nghệ thuật Thiết kế Game của Jesse Schell',
        url: 'https://artofgamedesign.com',
        type: 'tutorial',
      },
      {
        title: "Game Maker's Toolkit",
        url: 'https://www.youtube.com/c/MarkBrownGMT',
        type: 'tutorial',
      },
    ],
    caseStudies: [
      {
        title: 'Candy Crush Saga: Thiết kế dựa trên Tâm lý học',
        organization: 'King',
        problem:
          'Tạo ra một game match-3 gây nghiện nhưng công bằng với chiến lược kiếm tiền bền vững trong thị trường cạnh tranh',
        solution:
          'Kết hợp cơ chế match-3 đã được chứng minh với các yếu tố kích thích tâm lý: mạng sống có giới hạn, áp lực xã hội và các đỉnh điểm độ khó được cân bằng cẩn thận tại các điểm kiếm tiền',
        impact:
          'Doanh thu hàng năm hơn 1,5 tỷ đô la, hơn 250 triệu người dùng hoạt động hàng tháng, game di động có doanh thu cao nhất trong hơn 5 năm',
        innovations: [
          'Hiểu biết về tâm lý người chơi là rất quan trọng để giữ chân và kiếm tiền',
          'Các tính năng xã hội khuếch đại sự tương tác và tăng trưởng lan truyền',
          'Độ khó cân bằng ngăn chặn sự thất vọng trong khi khuyến khích chi tiêu',
          'Cập nhật nội dung thường xuyên duy trì sự quan tâm của người chơi lâu dài',
        ],
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh ngành Game Việt Nam: Từ Studio Tỷ đô đến Văn hóa Game Jam',
      content: [
        'Việt Nam là một cường quốc về game di động, với các studio như Amanotes và VNG Games đạt được thành công toàn cầu. Amanotes, chuyên về game âm nhạc, đã có hơn 2 tỷ lượt tải xuống.',
        'Cộng đồng game dev độc lập (indie) rất sôi nổi, thường xuyên tổ chức các sự kiện Game Jam, nơi các nhà phát triển tạo ra một trò chơi trong thời gian ngắn (thường là 48 giờ), thúc đẩy sự sáng tạo và hợp tác.',
        'Các trường đại học như RMIT Việt Nam và Đại học FPT đang cung cấp các chương trình đào tạo chuyên sâu về thiết kế và phát triển game, đáp ứng nhu cầu nhân lực ngày càng tăng của ngành.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Hà Đông',
      title: 'Nhà phát triển Game',
      company: '.GEARS',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-ha-dong',
      quote:
        'Thành công của Flappy Bird cho thấy một ý tưởng đơn giản, được thực hiện tốt có thể tạo ra tác động toàn cầu. Đừng ngại bắt đầu nhỏ. Điều quan trọng là tạo ra một trải nghiệm độc đáo và hấp dẫn cho người chơi.',
    },
    quizzes: [
      {
        question: 'Khung MDA trong thiết kế game là viết tắt của gì?',
        options: [
          'Cơ chế, Động lực, Thẩm mỹ',
          'Tối đa hóa, Giảm thiểu, Tối ưu hóa',
          'Di chuyển, Tấn công, Phòng thủ',
          'Nhiệm vụ, Dữ liệu, Hành động',
        ],
        correctAnswerIndex: 0,
        explanation:
          'MDA (Mechanics, Dynamics, Aesthetics) là một khung phân tích game phổ biến, giúp nhà thiết kế xem xét trò chơi từ ba góc độ: các quy tắc (Cơ chế), lối chơi phát sinh (Động lực), và cảm xúc của người chơi (Thẩm mỹ).',
      },
      {
        question: 'Vòng lặp gameplay cốt lõi (core gameplay loop) là gì?',
        options: [
          'Câu chuyện chính của game',
          'Chuỗi hoạt động lặp đi lặp lại mà người chơi thực hiện thường xuyên nhất',
          'Cách game kiếm tiền',
          'Đồ họa và âm thanh của game',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Vòng lặp gameplay cốt lõi là chuỗi các hành động chính mà người chơi thực hiện lặp đi lặp lại, tạo nên trải nghiệm trung tâm của trò chơi. Ví dụ: trong một game platformer, đó là chạy, nhảy, và thu thập vật phẩm.',
      },
    ],
    faqs: [
      {
        question: 'Khung MDA trong thiết kế game là gì?',
        answer:
          'MDA là viết tắt của Mechanics (Cơ chế), Dynamics (Động lực), và Aesthetics (Thẩm mỹ). Đây là một khung lý thuyết giúp nhà thiết kế phân tích và tạo ra trải nghiệm chơi game. Cơ chế là các quy tắc, Động lực là cách người chơi tương tác với các quy tắc đó, và Thẩm mỹ là cảm xúc mà trải nghiệm đó gợi lên.',
      },
      {
        question: 'Game Jam là gì và tại sao nó lại quan trọng ở Việt Nam?',
        answer:
          'Game Jam là một sự kiện nơi các nhà phát triển game hợp tác để tạo ra một trò chơi hoàn chỉnh trong một khoảng thời gian rất ngắn (thường là 48-72 giờ). Nó rất quan trọng ở Việt Nam vì nó thúc đẩy sự sáng tạo, hợp tác, học hỏi nhanh và là nơi ươm mầm cho nhiều tài năng và ý tưởng game độc đáo.',
      },
      {
        question: 'Sự khác biệt chính giữa Game Designer và Game Developer là gì?',
        answer:
          'Game Designer (Nhà thiết kế game) chịu trách nhiệm về ý tưởng, luật chơi, và trải nghiệm tổng thể của trò chơi. Họ là kiến trúc sư. Game Developer (Nhà phát triển game) là người lập trình, người biến các ý tưởng và thiết kế đó thành một sản phẩm có thể chơi được bằng cách viết code.',
      },
      {
        question: 'Tại sao Flappy Bird lại thành công dù đồ họa rất đơn giản?',
        answer:
          'Flappy Bird thành công nhờ vào cơ chế gameplay cực kỳ đơn giản nhưng rất khó, tạo ra một vòng lặp "thử lại" gây nghiện. Sự khó khăn và tính cạnh tranh điểm số đã tạo ra hiệu ứng lan truyền mạnh mẽ trên mạng xã hội, chứng minh rằng gameplay hấp dẫn quan trọng hơn đồ họa phức tạp.',
      },
    ],
  },
  {
    id: 'unity-2d-development',
    title: 'Bài 2: Phát triển Game 2D với Unity',
    description:
      'Thực hành phát triển Unity 2D: sprites, hoạt ảnh, vật lý, hệ thống UI. Tạo một game platformer 2D hoàn chỉnh từ ý tưởng đến triển khai.',
    videoUrl: 'https://www.youtube.com/watch?v=on9nwbZngyw',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '180 phút',
    objectives: [
      'Nắm vững quy trình làm việc và quản lý tài sản trong Unity 2D',
      'Triển khai bộ điều khiển nhân vật với chuyển động mượt mà',
      'Tạo hệ thống camera đáp ứng và hình nền parallax',
      'Thiết kế hệ thống UI và menu tương tác',
      'Xây dựng một game hoàn chỉnh với nhiều cấp độ và tiến trình',
    ],
    prerequisites: [
      'Các khái niệm lập trình cơ bản (biến, hàm, vòng lặp)',
      'Cài đặt Unity và quen thuộc với giao diện cơ bản',
      'Hiểu biết về hệ tọa độ 2D',
      'Các nguyên tắc cơ bản về thiết kế game từ bài học trước',
    ],
    gameDevMainContent: {
      gameGenres: ['Platformer', 'Side-scroller', 'Puzzle-platformer'],
      technologies: [
        'Unity 2022.3 LTS',
        'Lập trình C#',
        'Hệ thống Vật lý 2D',
        'Hệ thống Hoạt ảnh',
        'UI Toolkit',
        'Hệ thống Đầu vào',
      ],
      careerOpportunities: [
        'Nhà phát triển Unity',
        'Lập trình viên Game 2D',
        'Nhà phát triển Game Độc lập',
        'Nhà phát triển Game Di động',
        'Nhà thiết kế Game Kỹ thuật',
        'Lập trình viên Công cụ',
      ],
    },
    exercises: [
      {
        title: 'Xây dựng Game Platformer 2D "Crystal Runner"',
        description:
          'Tạo một game platformer 2D hoàn chỉnh với chuyển động nhân vật, vật phẩm thu thập, kẻ thù và tiến trình cấp độ',
        difficulty: 'Nâng cao',
        solution: `# Phát triển Game Platformer 2D Unity: "Crystal Runner"

## 1. Thiết lập & Kiến trúc Dự án

### Cấu trúc Dự án:
\`\`\`
Assets/
├── Scripts/
│   ├── Player/
│   ├── Enemies/
│   ├── Managers/
│   ├── UI/
│   └── Utils/
├── Sprites/
│   ├── Characters/
│   ├── Environment/
│   ├── UI/
│   └── Effects/
├── Animations/
├── Audio/
├── Scenes/
└── Prefabs/
\`\`\`

### Kiến trúc Hệ thống Cốt lõi:
- **GameManager:** Chuyển cảnh, trạng thái game, lưu/tải
- **PlayerController:** Xử lý đầu vào, chuyển động, hoạt ảnh
- **CameraController:** Theo dõi, giới hạn, chuyển tiếp mượt mà
- **LevelManager:** Mục tiêu, hoàn thành, tiến trình
- **AudioManager:** Nhạc, SFX, trộn âm thanh động
- **UIManager:** Menu, HUD, bố cục đáp ứng

## 2. Triển khai Bộ điều khiển Người chơi

### Hệ thống Chuyển động (C#):
\`\`\`csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveSpeed = 8f;
    public float jumpForce = 16f;
    public float coyoteTime = 0.2f;
    public float jumpBufferTime = 0.2f;
    
    [Header("Physics")]
    public LayerMask groundLayerMask;
    public Transform groundCheck;
    public float groundCheckRadius = 0.2f;
    
    // Private variables
    private Rigidbody2D rb;
    private Animator animator;
    private SpriteRenderer spriteRenderer;
    private AudioSource audioSource;
    
    private float horizontalInput;
    private bool jumpInput;
    private bool isGrounded;
    private float coyoteTimeCounter;
    private float jumpBufferCounter;
    
    // Animation hashes for performance
    private int speedHash;
    private int jumpHash;
    private int groundedHash;
    
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
        spriteRenderer = GetComponent<SpriteRenderer>();
        audioSource = GetComponent<AudioSource>();
        
        // Cache animator parameter hashes
        speedHash = Animator.StringToHash("Speed");
        jumpHash = Animator.StringToHash("Jump");
        groundedHash = Animator.StringToHash("Grounded");
    }
    
    void Update()
    {
        HandleInput();
        CheckGrounded();
        HandleCoyoteTime();
        HandleJumpBuffer();
        HandleMovement();
        HandleJump();
        UpdateAnimations();
    }
    
    void HandleInput()
    {
        horizontalInput = Input.GetAxisRaw("Horizontal");
        
        if (Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.W))
        {
            jumpInput = true;
            jumpBufferCounter = jumpBufferTime;
        }
        else
        {
            jumpInput = false;
        }
    }
    
    void CheckGrounded()
    {
        bool wasGrounded = isGrounded;
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, groundLayerMask);
        
        // Landing sound effect
        if (!wasGrounded && isGrounded)
        {
            PlaySound("Land");
        }
    }
    
    void HandleCoyoteTime()
    {
        if (isGrounded)
        {
            coyoteTimeCounter = coyoteTime;
        }
        else
        {
            coyoteTimeCounter -= Time.deltaTime;
        }
    }
    
    void HandleJumpBuffer()
    {
        if (jumpBufferCounter > 0)
        {
            jumpBufferCounter -= Time.deltaTime;
        }
    }
    
    void HandleMovement()
    {
        // Horizontal movement với smooth acceleration
        float targetVelocity = horizontalInput * moveSpeed;
        rb.velocity = new Vector2(
            Mathf.MoveTowards(rb.velocity.x, targetVelocity, moveSpeed * 2 * Time.deltaTime),
            rb.velocity.y
        );
        
        // Sprite flipping
        if (horizontalInput != 0)
        {
            spriteRenderer.flipX = horizontalInput < 0;
        }
    }
    
    void HandleJump()
    {
        // Jump with coyote time và buffer
        if (jumpBufferCounter > 0 && coyoteTimeCounter > 0)
        {
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
            jumpBufferCounter = 0;
            coyoteTimeCounter = 0;
            
            PlaySound("Jump");
            
            // Particle effect
            PlayJumpEffect();
        }
        
        // Variable jump height
        if (Input.GetKeyUp(KeyCode.Space) && rb.velocity.y > 0)
        {
            rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
        }
    }
    
    void UpdateAnimations()
    {
        animator.SetFloat(speedHash, Mathf.Abs(rb.velocity.x));
        animator.SetBool(jumpHash, !isGrounded && rb.velocity.y > 0.1f);
        animator.SetBool(groundedHash, isGrounded);
    }
    
    void PlaySound(string soundName)
    {
        // Implementation would load và play audio clip
        AudioManager.Instance.PlaySFX(soundName);
    }
    
    void PlayJumpEffect()
    {
        // Instantiate particle effect
        EffectManager.Instance.PlayEffect("JumpDust", groundCheck.position);
    }
    
    void OnDrawGizmosSelected()
    {
        // Visualize ground check trong Scene view
        if (groundCheck != null)
        {
            Gizmos.color = isGrounded ? Color.green : Color.red;
            Gizmos.DrawWireSphere(groundCheck.position, groundCheckRadius);
        }
    }
}
\`\`\`

## 3. Triển khai Hệ thống Camera

### Bộ điều khiển Camera Động:
\`\`\`csharp
public class CameraController : MonoBehaviour
{
    [Header("Target Settings")]
    public Transform target;
    public Vector3 offset = new Vector3(0, 2, -10);
    
    [Header("Follow Settings")]
    public float smoothTime = 0.3f;
    public bool lookAhead = true;
    public float lookAheadDistance = 3f;
    public float lookAheadSmoothTime = 1f;
    
    [Header("Boundaries")]
    public Vector2 minBounds;
    public Vector2 maxBounds;
    
    private Vector3 velocity = Vector3.zero;
    private float lookAheadPos;
    private float lookAheadVelocity;
    private PlayerController playerController;
    
    void Start()
    {
        playerController = target.GetComponent<PlayerController>();
    }
    
    void LateUpdate()
    {
        if (target == null) return;
        
        Vector3 targetPosition = target.position + offset;
        
        // Look ahead system
        if (lookAhead)
        {
            float playerInputX = Input.GetAxisRaw("Horizontal");
            float targetLookAhead = playerInputX * lookAheadDistance;
            
            lookAheadPos = Mathf.SmoothDamp(
                lookAheadPos, 
                targetLookAhead, 
                ref lookAheadVelocity, 
                lookAheadSmoothTime
            );
            
            targetPosition.x += lookAheadPos;
        }
        
        // Apply boundary constraints
        targetPosition.x = Mathf.Clamp(targetPosition.x, minBounds.x, maxBounds.x);
        targetPosition.y = Mathf.Clamp(targetPosition.y, minBounds.y, maxBounds.y);
        
        // Smooth camera movement
        transform.position = Vector3.SmoothDamp(
            transform.position, 
            targetPosition, 
            ref velocity, 
            smoothTime
        );
    }
}
\`\`\`

## 4. Triển khai Hệ thống Game

### Hệ thống Vật phẩm Thu thập:
\`\`\`csharp
public class Crystal : MonoBehaviour
{
    [Header("Settings")]
    public int pointValue = 10;
    public AudioClip collectSound;
    public GameObject collectEffect;
    
    private bool isCollected = false;
    
    void Start()
    {
        // Idle animation
        StartCoroutine(FloatAnimation());
    }
    
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player") && !isCollected)
        {
            CollectCrystal();
        }
    }
    
    void CollectCrystal()
    {
        isCollected = true;
        
        // Update game manager
        GameManager.Instance.AddScore(pointValue);
        GameManager.Instance.CollectCrystal();
        
        // Visual và audio feedback
        if (collectEffect != null)
        {
            Instantiate(collectEffect, transform.position, Quaternion.identity);
        }
        
        AudioManager.Instance.PlaySFX("Crystal");
        
        // Animate collection
        StartCoroutine(CollectAnimation());
    }
    
    IEnumerator FloatAnimation()
    {
        Vector3 startPos = transform.position;
        
        while (!isCollected)
        {
            float newY = startPos.y + Mathf.Sin(Time.time * 2f) * 0.3f;
            transform.position = new Vector3(startPos.x, newY, startPos.z);
            transform.Rotate(0, 0, 90 * Time.deltaTime);
            yield return null;
        }
    }
    
    IEnumerator CollectAnimation()
    {
        float timer = 0f;
        Vector3 startPos = transform.position;
        Vector3 targetPos = startPos + Vector3.up * 2f;
        
        while (timer < 0.5f)
        {
            timer += Time.deltaTime;
            float progress = timer / 0.5f;
            
            transform.position = Vector3.Lerp(startPos, targetPos, progress);
            transform.localScale = Vector3.Lerp(Vector3.one, Vector3.zero, progress);
            
            yield return null;
        }
        
        Destroy(gameObject);
    }
}
\`\`\`

## 5. Thiết kế Cấp độ & Tiến trình

### Cấu trúc Cấp độ:
- **Cấp độ Hướng dẫn:** Chuyển động và nhảy cơ bản
- **Cấp độ 1-3:** Giới thiệu cơ chế cốt lõi
- **Cấp độ 4-6:** Thử thách platforming
- **Cấp độ 7-9:** Đối đầu với kẻ thù
- **Cấp độ 10:** Đấu trùm và kết thúc câu chuyện

### Nguyên tắc Thiết kế:
1. **Giới thiệu:** Cơ chế mới trong môi trường an toàn
2. **Phát triển:** Thực hành cơ chế với độ phức tạp tăng dần
3. **Biến tấu:** Kết hợp với các cơ chế trước đó
4. **Kết luận:** Thử thách ở cấp độ bậc thầy

### Chỉ số Hoàn thành Cấp độ:
- **Mục tiêu Chính:** Đến được cổng cuối
- **Mục tiêu Phụ:** Thu thập tất cả các viên pha lê, hoàn thành dưới giới hạn thời gian
- **Hệ thống Đánh giá Sao:** 1-3 sao dựa trên tiêu chí hoàn thành

## 6. Âm thanh & Đánh bóng

### Triển khai Âm thanh:
- **Nhạc Thích ứng:** Cường độ thay đổi dựa trên trạng thái người chơi
- **Âm thanh Không gian:** Hiệu ứng âm thanh được định vị 3D
- **Trộn Âm thanh:** Cân bằng âm lượng động
- **Khả năng Tiếp cận:** Biểu diễn trực quan của các tín hiệu âm thanh

### Các yếu tố "Juice" & Đánh bóng:
- **Rung màn hình:** Hiệu ứng va chạm khi hạ cánh, bị sát thương
- **Hệ thống Hạt:** Mây bụi, lấp lánh, vụ nổ
- **Hoạt ảnh UI:** Chuyển tiếp mượt mà, các nút bấm nảy
- **Phản hồi Tức thì:** Mọi hành động đều có phản hồi ngay lập tức

## 7. Triển khai & Xuất bản

### Cài đặt Build:
- **Nền tảng Mục tiêu:** PC (Windows, Mac, Linux)
- **Độ phân giải:** 1920x1080 với hỗ trợ co giãn
- **Cài đặt Chất lượng:** Tối ưu hóa cho các phần cứng khác nhau
- **Hỗ trợ Đầu vào:** Bàn phím và gamepad

### Danh sách Kiểm tra Xuất bản:
- [ ] Tất cả các cấp độ đã được kiểm tra và cân bằng
- [ ] Mức âm thanh được trộn đúng cách
- [ ] Hiệu suất được tối ưu hóa (60+ FPS)
- [ ] Hệ thống lưu đã được triển khai
- [ ] Menu cài đặt hoạt động
- [ ] Thông tin tín dụng và pháp lý được bao gồm

### Tùy chọn Phân phối:
- **Steam:** Phát hành trả phí ($9.99-$14.99)
- **Itch.io:** Nền tảng thân thiện với nhà phát triển độc lập
- **Game Jolt:** Miễn phí với quyên góp tùy chọn
- **Cổng di động:** Phiên bản iOS/Android`,
        materials: [
          'Thiết lập dự án Unity với cấu trúc thư mục phù hợp',
          'Triển khai bộ điều khiển nhân vật mượt mà bằng C#',
          'Tạo hệ thống camera đáp ứng',
          'Thiết kế ít nhất 3 cấp độ hoàn chỉnh',
          'Thêm âm thanh, hoạt ảnh và đánh bóng hình ảnh',
        ],
        expectedResults:
          'Một game platformer 2D có thể chơi được với nhiều cấp độ, gameplay được đánh bóng và cảm giác game phù hợp',
      },
    ],
    realWorldApplications: [
      'Phát triển game di động 2D',
      'Phát hành game độc lập',
      'Nội dung tương tác giáo dục',
      'Phát triển nguyên mẫu cho các dự án lớn hơn',
      'Các sản phẩm trong portfolio để ứng tuyển vào ngành game',
    ],
    resources: [
      {
        title: 'Nền tảng Học tập Unity',
        url: 'https://learn.unity.com',
        type: 'tutorial',
      },
      {
        title: 'Kênh YouTube Brackeys',
        url: 'https://www.youtube.com/c/Brackeys',
        type: 'tutorial',
      },
    ],
    caseStudies: [
      {
        title: 'Hollow Knight: Đánh bóng & Bầu không khí trong 2D',
        organization: 'Team Cherry',
        problem: 'Tạo ra một game Metroidvania 2D có không khí với ngân sách hạn chế và đội ngũ nhỏ (3 người)',
        solution:
          'Tập trung vào hướng nghệ thuật đặc biệt, điều khiển chặt chẽ và âm thanh có không khí. Sử dụng hoạt ảnh vẽ tay và thiết kế thế giới được chế tác cẩn thận.',
        impact:
          'Bán được hơn 3 triệu bản, 97% đánh giá tích cực trên Steam, được coi là một tác phẩm kinh điển hiện đại trong thể loại Metroidvania',
        innovations: [
          'Sự đánh bóng và chú ý đến chi tiết có thể khắc phục những hạn chế về ngân sách',
          'Hướng nghệ thuật mạnh mẽ tạo ra trải nghiệm đáng nhớ',
          'Điều khiển chặt chẽ là nền tảng của các game platformer tuyệt vời',
          'Âm thanh có không khí khuếch đại đáng kể tác động cảm xúc',
        ],
      },
    ],
    vietnamContext: {
      title: 'Unity và Hệ sinh thái Game Dev tại Việt Nam',
      content: [
        'Unity là game engine phổ biến nhất tại Việt Nam, được sử dụng bởi cả các công ty lớn và các nhà phát triển độc lập cho các dự án game 2D và 3D.',
        'Cộng đồng Unity Việt Nam rất lớn mạnh, với nhiều nhóm trên Facebook và Zalo, các buổi gặp mặt (meetup) và workshop được tổ chức thường xuyên tại Hà Nội và TP.HCM.',
        'Nhiều game "Made in Vietnam" thành công trên thị trường quốc tế được xây dựng bằng Unity, chứng tỏ khả năng của các nhà phát triển Việt Nam trong việc tận dụng công cụ mạnh mẽ này.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Giang Anh',
      title: 'Giám đốc Studio, Sparx*',
      company: 'Virtuos',
      imageUrl: 'https://i.pravatar.cc/150?u=le-giang-anh',
      quote:
        'Tại Sparx*, chúng tôi sử dụng Unity để tạo ra các nội dung đồ họa ấn tượng cho những tựa game AAA hàng đầu thế giới. Việc thành thạo Unity không chỉ mở ra cơ hội làm game của riêng bạn mà còn cho phép bạn tham gia vào các dự án game bom tấn toàn cầu ngay tại Việt Nam.',
    },
    quizzes: [
      {
        question: 'Trong Unity, "Prefab" là gì?',
        options: [
          'Một đoạn mã C#',
          'Một đối tượng game (GameObject) đã được lưu lại với tất cả các thành phần, thuộc tính và đối tượng con của nó',
          'Một file âm thanh',
          'Một thiết lập của camera',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Prefab là một tài sản có thể tái sử dụng, cho phép bạn lưu trữ một GameObject hoàn chỉnh với tất cả các thành phần của nó. Điều này rất hữu ích để tạo ra nhiều bản sao của một đối tượng, ví dụ như kẻ thù, đạn, hoặc vật phẩm.',
      },
      {
        question: 'Thành phần nào trong Unity được sử dụng để xử lý va chạm và vật lý cho các đối tượng 2D?',
        options: ['Transform', 'Rigidbody2D và Collider2D', 'Animator', 'Sprite Renderer'],
        correctAnswerIndex: 1,
        explanation:
          'Rigidbody2D cung cấp các thuộc tính vật lý (như khối lượng, trọng lực) cho một đối tượng, trong khi Collider2D xác định hình dạng của đối tượng cho mục đích va chạm. Cả hai đều cần thiết cho tương tác vật lý 2D.',
      },
    ],
    faqs: [
      {
        question: 'Unity là gì?',
        answer:
          'Unity là một game engine đa nền tảng mạnh mẽ được sử dụng để tạo ra các trò chơi 2D, 3D, thực tế ảo (VR), và thực tế tăng cường (AR), cũng như các mô phỏng và trải nghiệm tương tác khác. Đây là công cụ rất phổ biến trong ngành công nghiệp game, đặc biệt là với các nhà phát triển độc lập và game di động.',
      },
      {
        question: 'Tại sao C# là ngôn ngữ được sử dụng trong Unity?',
        answer:
          'Unity sử dụng C# (phát âm là "C-sharp") làm ngôn ngữ lập trình chính vì nó là một ngôn ngữ hiện đại, mạnh mẽ, tương đối dễ học và được hỗ trợ bởi hệ sinh thái .NET của Microsoft. C# cho phép các nhà phát triển viết logic game phức tạp một cách hiệu quả và có cấu trúc.',
      },
      {
        question: 'Sự khác biệt giữa `Update()` và `FixedUpdate()` trong Unity là gì?',
        answer:
          '`Update()` được gọi một lần mỗi khung hình (frame). Tần suất của nó có thể thay đổi tùy thuộc vào hiệu suất của máy tính. Nó phù hợp để xử lý đầu vào (input) và logic game không liên quan đến vật lý. `FixedUpdate()` được gọi theo một tần suất cố định, không phụ thuộc vào tốc độ khung hình. Nó là nơi tốt nhất để đặt các đoạn mã liên quan đến vật lý (như tác động lực lên Rigidbody) để đảm bảo tính nhất quán.',
      },
      {
        question: 'Parallax scrolling là gì?',
        answer:
          'Parallax scrolling là một kỹ thuật đồ họa trong đó các lớp hình nền (background layers) di chuyển với tốc độ khác nhau so với lớp tiền cảnh (foreground). Lớp càng ở xa camera thì di chuyển càng chậm. Kỹ thuật này tạo ra ảo giác về chiều sâu trong một cảnh 2D, làm cho thế giới game trở nên sống động và có chiều sâu hơn.',
      },
    ],
  },
  {
    id: 'unreal-engine-3d-basics',
    title: 'Bài 3: Những Điều Cơ Bản về Unreal Engine 3D',
    description:
      'Giới thiệu về Unreal Engine 5: giao diện, công cụ, và quy trình làm việc cơ bản. Tạo một dự án 3D đơn giản với ánh sáng, vật liệu, và camera.',
    videoUrl: 'https://www.youtube.com/watch?v=xyz',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '180 phút',
    objectives: [
      'Làm quen với giao diện và công cụ của Unreal Engine 5',
      'Tạo và quản lý dự án 3D',
      'Sử dụng ánh sáng và vật liệu cơ bản',
      'Triển khai camera và thiết lập góc nhìn',
      'Hiểu quy trình làm việc cơ bản trong Unreal Engine',
    ],
    prerequisites: ['Kiến thức cơ bản về máy tính và phần mềm', 'Đam mê khám phá công nghệ và sáng tạo nội dung 3D'],
    gameDevMainContent: {
      gameGenres: ['3D Adventure', 'Shooter', 'Simulation'],
      technologies: [
        'Unreal Engine 5',
        'Blueprints (Visual Scripting)',
        'C++ (cơ bản)',
        'Hệ thống Vật lý',
        'Hệ thống Hoạt ảnh',
        'Hệ thống Âm thanh',
      ],
      careerOpportunities: [
        'Nhà phát triển Unreal',
        'Lập trình viên Game 3D',
        'Nhà thiết kế Môi trường 3D',
        'Nhà phát triển Game Di động',
        'Nhà thiết kế Game Kỹ thuật',
        'Lập trình viên Công cụ',
      ],
    },
    exercises: [
      {
        title: 'Tạo một Cảnh 3D Đơn giản với Unreal Engine',
        description:
          'Sử dụng Unreal Engine 5 để tạo ra một cảnh 3D đơn giản bao gồm ánh sáng, vật liệu, và camera. Xuất bản cảnh để chia sẻ.',
        difficulty: 'Cơ bản',
        solution: `# Hướng dẫn Tạo Cảnh 3D Đơn giản với Unreal Engine 5

## 1. Thiết lập Dự án

- Mở Unreal Engine 5 và chọn "Games" dưới "New Project Categories".
- Chọn "Blank" và đảm bảo rằng "Blueprint" được chọn.
- Đặt tên cho dự án là "MyFirst3DScene" và nhấn "Create".

## 2. Làm quen với Giao diện

- **Viewport:** Nơi bạn sẽ thấy và chỉnh sửa cảnh 3D của mình.
- **Content Browser:** Nơi quản lý tất cả tài sản (assets) của dự án.
- **Outliner:** Danh sách tất cả các đối tượng trong cảnh hiện tại.
- **Details Panel:** Hiển thị và cho phép chỉnh sửa các thuộc tính của đối tượng được chọn.

## 3. Tạo và Quản lý Đối tượng

- Kéo thả một số đối tượng từ **Place Actors** panel vào Viewport (ví dụ: Cube, Sphere, Light).
- Sử dụng công cụ di chuyển (W), xoay (E), và thay đổi kích thước (R) để chỉnh sửa các đối tượng.
- Nhấn nút "Play" để xem cảnh trong thời gian thực.

## 4. Ánh sáng và Vật liệu

- Thêm một **Directional Light** từ **Place Actors** panel để tạo ánh sáng cho cảnh.
- Tạo một vật liệu mới trong Content Browser và áp dụng cho một trong những đối tượng của bạn.
- Chỉnh sửa vật liệu trong **Material Editor** để thay đổi màu sắc và độ bóng.

## 5. Camera

- Thêm một **Camera** từ **Place Actors** panel.
- Đặt camera ở vị trí mong muốn và điều chỉnh góc nhìn.
- Nhấn nút "Play" và kiểm tra góc nhìn từ camera.

## 6. Xuất bản Cảnh

- Vào menu "File" > "Package Project" > chọn nền tảng mong muốn (ví dụ: Windows).
- Chọn thư mục lưu trữ và nhấn "Select Folder".
- Đợi quá trình xuất bản hoàn tất và kiểm tra sản phẩm đầu ra.

## Tài liệu tham khảo

- [Unreal Engine Documentation](https://docs.unrealengine.com/)
- [Unreal Engine YouTube Channel](https://www.youtube.com/user/UnrealDevelopmentKit)`,
        materials: ['Hướng dẫn từng bước để tạo ra một cảnh 3D đơn giản', 'Tài liệu tham khảo về Unreal Engine 5'],
        expectedResults:
          'Một cảnh 3D đơn giản trong Unreal Engine 5 với ánh sáng và vật liệu cơ bản, có thể xuất bản và chia sẻ',
      },
    ],
    realWorldApplications: [
      'Phát triển game 3D với Unreal Engine',
      'Mô phỏng và đào tạo 3D',
      'Nội dung tương tác cho giáo dục',
      'Trải nghiệm thực tế ảo (VR)',
      'Phát triển ứng dụng di động 3D',
    ],
    resources: [
      {
        title: 'Unreal Engine Learning',
        url: 'https://www.unrealengine.com/en-US/onlinelearning-courses',
        type: 'tutorial',
      },
      {
        title: 'Kênh YouTube Unreal Engine',
        url: 'https://www.youtube.com/user/UnrealDevelopmentKit',
        type: 'tutorial',
      },
    ],
    caseStudies: [
      {
        title: 'Fortnite: Từ Ý tưởng đến Hiện thực',
        organization: 'Epic Games',
        problem: 'Tạo ra một game battle royale hấp dẫn với quy mô lớn và cơ chế xây dựng độc đáo',
        solution:
          'Kết hợp gameplay bắn súng truyền thống với cơ chế xây dựng sáng tạo. Sử dụng Unreal Engine để phát triển nhanh chóng và tinh chỉnh các yếu tố gameplay.',
        impact:
          'Hơn 350 triệu người chơi đăng ký, doanh thu hàng tỷ đô la, thiết lập tiêu chuẩn mới cho các game battle royale khác.',
        innovations: [
          'Cơ chế xây dựng trong thời gian thực tạo ra sự khác biệt lớn',
          'Sự kiện trong game và cập nhật nội dung thường xuyên giữ chân người chơi',
          'Tích hợp chặt chẽ giữa các nền tảng khác nhau',
          'Mô hình kinh doanh miễn phí để chơi với các giao dịch trong game',
        ],
      },
    ],
    vietnamContext: {
      title: 'Unreal Engine và Cơ hội tại Việt Nam',
      content: [
        'Unreal Engine đang ngày càng phổ biến tại Việt Nam, đặc biệt trong lĩnh vực phát triển game 3D và mô phỏng.',
        'Nhiều studio game lớn tại Việt Nam đã chuyển sang sử dụng Unreal Engine để tận dụng sức mạnh đồ họa và khả năng tối ưu hóa cho nhiều nền tảng.',
        'Cộng đồng Unreal Engine tại Việt Nam đang phát triển mạnh mẽ, với nhiều sự kiện, hội thảo và khóa học trực tuyến được tổ chức thường xuyên.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Kim Chi',
      title: 'Nhà phát triển Game 3D',
      company: 'VNG Game Studios',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-kim-chi',
      quote:
        'Là một nhà phát triển game 3D sử dụng Unreal Engine, tôi đã có cơ hội làm việc trên nhiều dự án thú vị và thách thức. Unreal Engine không chỉ mạnh mẽ mà còn rất linh hoạt, cho phép tôi thể hiện sự sáng tạo của mình trong từng chi tiết của game.',
    },
    quizzes: [
      {
        question: 'Blueprints trong Unreal Engine là gì?',
        options: [
          'Một công cụ để vẽ các bản thiết kế 2D',
          'Một hệ thống kịch bản trực quan dựa trên node, cho phép tạo logic game mà không cần viết code',
          'Một loại vật liệu đặc biệt',
          'Tên của trình chỉnh sửa cấp độ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Blueprints là một trong những tính năng mạnh mẽ nhất của Unreal Engine, cho phép các nhà thiết kế và nghệ sĩ tạo ra logic gameplay phức tạp bằng cách kết nối các node với nhau, thay vì phải viết mã C++.',
      },
      {
        question: 'Nanite và Lumen là những công nghệ đột phá nào trong Unreal Engine 5?',
        options: [
          'Hệ thống âm thanh và AI',
          'Hệ thống hình học ảo hóa và hệ thống chiếu sáng toàn cầu động',
          'Công cụ tạo nhân vật và hoạt ảnh',
          'Hệ thống mạng và vật lý',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nanite là hệ thống hình học vi đa giác ảo hóa, cho phép hiển thị các mô hình 3D với chi tiết cực cao. Lumen là hệ thống chiếu sáng và phản xạ toàn cầu động hoàn toàn, tạo ra ánh sáng chân thực trong thời gian thực.',
      },
    ],
    faqs: [
      {
        question: 'Học Unreal Engine có khó hơn Unity không?',
        answer:
          'Nhìn chung, Unreal Engine có một đường cong học tập dốc hơn so với Unity, đặc biệt là đối với người mới bắt đầu. Giao diện của nó phức tạp hơn và C++, ngôn ngữ lập trình chính của nó, khó hơn C#. Tuy nhiên, hệ thống Blueprints của Unreal cho phép bạn làm được rất nhiều thứ mà không cần code, điều này có thể giúp người mới bắt đầu dễ tiếp cận hơn ở một số khía cạnh.',
      },
      {
        question: 'Tôi có cần biết C++ để sử dụng Unreal Engine không?',
        answer:
          'Không hoàn toàn. Bạn có thể tạo ra một trò chơi hoàn chỉnh chỉ bằng Blueprints. Tuy nhiên, để thực hiện các hệ thống phức tạp, tối ưu hóa hiệu suất ở mức độ cao, hoặc làm việc trong các dự án AAA chuyên nghiệp, kiến thức về C++ là gần như bắt buộc.',
      },
      {
        question: 'Máy tính của tôi có cần phải rất mạnh để chạy Unreal Engine 5 không?',
        answer:
          'Có. Unreal Engine 5, đặc biệt là với các công nghệ như Nanite và Lumen, đòi hỏi một cấu hình máy tính khá mạnh. Bạn sẽ cần một card đồ họa (GPU) hiện đại (NVIDIA RTX 20-series trở lên được khuyến nghị), một CPU đa lõi, ít nhất 16GB RAM (32GB là lý tưởng) và một ổ cứng SSD để có trải nghiệm mượt mà.',
      },
      {
        question: 'Sự khác biệt chính giữa game làm bằng Unity và Unreal là gì?',
        answer:
          'Đây là một sự khái quát, nhưng thường thì các game Unreal có xu hướng nổi bật về đồ họa chân thực, cao cấp (ví dụ: các game AAA, FPS). Các game Unity rất đa dạng, nhưng nó đặc biệt mạnh trong lĩnh vực game di động, game 2D, và các game có phong cách đồ họa độc đáo, không nhất thiết phải chân thực.',
      },
    ],
  },
  {
    id: 'game-monetization-strategies',
    title: 'Bài 4: Chiến Lược Kiếm Tiền Trong Game',
    description:
      'Khám phá các mô hình kiếm tiền trong game: quảng cáo, in-app purchases, subscription, và premium games. Chiến lược tối ưu hóa doanh thu và giữ chân người chơi.',
    videoUrl: 'https://www.youtube.com/watch?v=abc',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '150 phút',
    objectives: [
      'Hiểu các mô hình kiếm tiền chính trong ngành công nghiệp game',
      'Phân tích ưu và nhược điểm của từng mô hình',
      'Thiết kế một chiến lược kiếm tiền cho trò chơi của bạn',
      'Tối ưu hóa trải nghiệm người chơi trong khi vẫn đạt được mục tiêu doanh thu',
    ],
    prerequisites: [
      'Hoàn thành các bài học trước về thiết kế và phát triển game',
      'Có ý tưởng về trò chơi mà bạn muốn phát triển và kiếm tiền',
    ],
    gameDevMainContent: {
      gameGenres: ['Casual', 'Hyper-casual', 'Strategy', 'Simulation'],
      technologies: [
        'AdMob',
        'Facebook Audience Network',
        'Unity Ads',
        'In-App Purchase (IAP)',
        'Google Play Billing',
        'Apple App Store Connect',
      ],
      careerOpportunities: [
        'Chuyên gia Monetization',
        'Nhà phân tích Dữ liệu Game',
        'Nhà phát triển Game Di động',
        'Quản lý Sản phẩm Game',
        'Chuyên gia Tiếp thị Game',
      ],
    },
    exercises: [
      {
        title: 'Thiết kế Chiến lược Kiếm tiền cho Game của bạn',
        description:
          'Xác định và lập kế hoạch cho các nguồn doanh thu tiềm năng cho trò chơi của bạn, bao gồm quảng cáo, IAP, và các mô hình thuê bao.',
        difficulty: 'Trung bình',
        solution:
          '# Chiến lược Kiếm tiền cho Game Di động: "Vùng Đất Bị Lãng Quên"\\n\\n## 1. Tổng quan Game\\n- **Thể loại:** Phiêu lưu, Xây dựng thành phố\\n- **Đối tượng mục tiêu:** Trẻ em và thanh thiếu niên (6-18 tuổi)\\n- **Nền tảng:** iOS và Android\\n\\n## 2. Mô hình Kiếm tiền Chính\\n- **Quảng cáo trong game:** Hiển thị quảng cáo video và banner thông qua AdMob và Unity Ads.\\n- **In-App Purchases (IAP):** Bán vật phẩm trong game, tiền tệ ảo, và gói tăng tốc thông qua Google Play Billing và Apple App Store Connect.\\n- **Thuê bao:** Cung cấp gói thuê bao hàng tháng cho người chơi để nhận vật phẩm độc quyền, miễn phí quảng cáo, và nội dung đặc biệt.\\n\\n## 3. Chi tiết về Quảng cáo trong game\\n- **Quảng cáo video:** Hiển thị sau mỗi 2 cấp độ hoàn thành hoặc khi người chơi chết. Người chơi có thể nhận phần thưởng (như tiền tệ ảo) khi xem quảng cáo.\\n- **Quảng cáo banner:** Hiển thị ở dưới cùng của màn hình trong khi chơi, không che khuất nội dung chính.\\n\\n## 4. Chi tiết về In-App Purchases (IAP)\\n- **Gói khởi đầu:** $0.99 cho 500 tiền tệ ảo + vật phẩm độc quyền.\\n- **Gói cao cấp:** $4.99 cho 3000 tiền tệ ảo + 5 vật phẩm ngẫu nhiên.\\n- **Gói VIP hàng tháng:** $9.99/tháng cho 10000 tiền tệ ảo + miễn phí quảng cáo + nội dung độc quyền hàng tháng.\\n\\n## 5. Chiến lược Giữ chân Người chơi\\n- **Sự kiện trong game:** Tổ chức sự kiện hàng tuần với phần thưởng hấp dẫn để khuyến khích người chơi quay lại.\\n- **Cập nhật nội dung thường xuyên:** Thêm cấp độ mới, vật phẩm, và tính năng dựa trên phản hồi của người chơi và xu hướng thị trường.\\n- **Chương trình khách hàng thân thiết:** Tích điểm cho mỗi lần mua hàng và cho phép đổi điểm lấy phần thưởng trong game.\\n\\n## 6. Dự đoán Doanh thu Hàng tháng (sau 6 tháng phát hành)**\\n- **Quảng cáo trong game:** $10,000 (dựa trên 1 triệu lượt xem quảng cáo)\\n- **In-App Purchases:** $15,000 (dựa trên 3% người chơi chi tiêu trung bình $5)\\n- **Thuê bao:** $5,000 (dựa trên 1,000 người chơi đăng ký gói VIP)\\n- **Tổng Doanh thu Dự kiến:** $30,000/tháng',
        materials: [
          'Nghiên cứu và phân tích các mô hình kiếm tiền khác nhau trong ngành game',
          'Xác định mô hình kiếm tiền phù hợp nhất cho trò chơi của bạn',
          'Lập kế hoạch chi tiết cho từng nguồn doanh thu',
          'Thiết kế trải nghiệm người chơi tối ưu với các yếu tố kiếm tiền tích hợp',
        ],
        expectedResults:
          'Một tài liệu chiến lược kiếm tiền chi tiết cho trò chơi của bạn, bao gồm các mô hình doanh thu, kế hoạch triển khai, và dự đoán doanh thu',
      },
    ],
    realWorldApplications: [
      'Phát triển game di động với chiến lược kiếm tiền hiệu quả',
      'Tối ưu hóa doanh thu cho các trò chơi hiện có',
      'Phân tích và dự đoán doanh thu trong ngành game',
      'Lập kế hoạch và triển khai các chiến dịch tiếp thị cho game',
    ],
    resources: [
      {
        title: 'Game Monetization: How to Make Money from Your Game',
        url: 'https://www.gamasutra.com/blogs/JohnDoe/20230101/404123/Game_Monetization_How_to_Make_Money_from_Your_Game.php',
        type: 'article',
      },
      {
        title: 'The Ultimate Guide to Game Monetization',
        url: 'https://www.admob.com/monetize/unity-game-monetization-guide',
        type: 'guide',
      },
    ],
    caseStudies: [
      {
        title: 'PUBG Mobile: Chiến lược kiếm tiền và giữ chân người chơi',
        organization: 'Tencent',
        problem: 'Tạo ra doanh thu bền vững từ một trò chơi miễn phí nhưng vẫn giữ chân được người chơi lâu dài',
        solution:
          'Kết hợp quảng cáo trong game, bán vật phẩm và gói thuê bao. Cập nhật nội dung thường xuyên và tổ chức sự kiện trong game để giữ chân người chơi.',
        impact:
          'Doanh thu hàng tỷ đô la, hàng triệu người chơi hoạt động hàng tháng, thiết lập tiêu chuẩn mới cho các game battle royale khác.',
        innovations: [
          'Mô hình kinh doanh miễn phí để chơi với các giao dịch trong game rất thành công',
          'Sự kiện trong game và cập nhật nội dung thường xuyên giữ chân người chơi',
          'Tích hợp chặt chẽ giữa các nền tảng khác nhau',
          'Hệ thống phần thưởng và thăng tiến hấp dẫn người chơi chi tiêu nhiều hơn',
        ],
      },
    ],
    vietnamContext: {
      title: 'Thị Trường Game Việt Nam: Cơ Hội và Thách Thức',
      content: [
        'Thị trường game Việt Nam đang trên đà phát triển mạnh mẽ với sự gia tăng nhanh chóng về số lượng game thủ và doanh thu từ game.',
        'Nhu cầu về các trò chơi di động chất lượng cao, đặc biệt là từ các nhà phát triển nội địa, đang tăng cao.',
        'Các nhà phát triển game Việt Nam ngày càng chú trọng đến việc tối ưu hóa doanh thu qua các mô hình kiếm tiền đa dạng và bền vững.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Thị Hằng',
      title: 'Chuyên gia Monetization Game',
      company: 'Gameloft',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thi-hang',
      quote:
        'Tại Gameloft, chúng tôi luôn tìm kiếm những cách sáng tạo để tối ưu hóa doanh thu từ các trò chơi của mình mà không làm ảnh hưởng đến trải nghiệm của người chơi. Hiểu biết sâu sắc về thị trường và người chơi là chìa khóa để thành công trong ngành công nghiệp game đầy cạnh tranh này.',
    },
    quizzes: [
      {
        question: 'Mô hình kiếm tiền nào phổ biến nhất trong game di động hiện nay?',
        options: [
          'Bán game với giá cố định',
          'Quảng cáo trong game và in-app purchases',
          'Chỉ sử dụng quảng cáo',
          'Chỉ sử dụng in-app purchases',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Mô hình quảng cáo trong game kết hợp với in-app purchases (IAP) hiện đang là mô hình phổ biến nhất trong game di động. Nó cho phép người chơi tải game miễn phí nhưng vẫn tạo ra doanh thu cho nhà phát triển thông qua quảng cáo và việc bán vật phẩm trong game.',
      },
      {
        question: 'Tại sao việc giữ chân người chơi lại quan trọng đối với chiến lược kiếm tiền của một trò chơi?',
        options: [
          'Để tăng lượng người chơi mới',
          'Để giảm chi phí quảng cáo',
          'Để tăng doanh thu từ quảng cáo và in-app purchases',
          'Tất cả các đáp án trên',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Việc giữ chân người chơi quan trọng vì nó giúp tăng doanh thu từ quảng cáo và in-app purchases. Người chơi quay lại thường xuyên hơn có nghĩa là họ sẽ thấy nhiều quảng cáo hơn và có khả năng thực hiện các giao dịch mua trong game cao hơn.',
      },
    ],
    faqs: [
      {
        question: 'Các mô hình kiếm tiền trong game di động phổ biến hiện nay là gì?',
        answer:
          'Các mô hình kiếm tiền phổ biến bao gồm: quảng cáo trong game (như video, banner), in-app purchases (mua vật phẩm, tiền tệ ảo), subscription (thuê bao hàng tháng), và bán game với giá cố định.',
      },
      {
        question: 'Làm thế nào để tối ưu hóa doanh thu từ quảng cáo trong game?',
        answer:
          'Để tối ưu hóa doanh thu từ quảng cáo, bạn cần chọn đúng mạng quảng cáo (như AdMob, Unity Ads), tối ưu vị trí và tần suất hiển thị quảng cáo, và đảm bảo rằng quảng cáo không làm ảnh hưởng đến trải nghiệm người chơi.',
      },
      {
        question: 'In-app purchases có ảnh hưởng đến trải nghiệm người chơi không?',
        answer:
          'Nếu được triển khai đúng cách, in-app purchases sẽ không làm ảnh hưởng đến trải nghiệm người chơi. Chúng nên được thiết kế để cung cấp giá trị thực sự cho người chơi mà không gây ra sự mất cân bằng trong game.',
      },
      {
        question: 'Tại sao cần phải có chiến lược giữ chân người chơi?',
        answer:
          'Chiến lược giữ chân người chơi giúp tăng cường sự gắn bó của người chơi với trò chơi, từ đó tăng doanh thu và giảm chi phí quảng cáo. Nó cũng giúp xây dựng một cộng đồng người chơi trung thành và tích cực.',
      },
    ],
  },
];

export const gameDevelopmentModuleData: ModuleData = {
  id: 'game-development',
  title: 'Game Development & Interactive Media',
  subtitle: 'Phát triển Game và Truyền thông Tương tác',
  description:
    'Khóa học toàn diện về phát triển game từ concept đến publishing. Học Unity, Unreal Engine, game design, storytelling và monetization để tạo ra những trò chơi chuyên nghiệp và hấp dẫn.',
  level: 'Trung bình',
  duration: '20-25 giờ',
  category: 'Creative Technology',
  features: [
    'Game Engine Mastery (Unity, Unreal Engine) và scripting chuyên sâu',
    'Game Design Principles từ mechanics đến player psychology',
    '2D/3D Development với animation và visual effects',
    'Publishing & Monetization strategies cho multiple platforms',
  ],
  icon: '🎮',
  color: 'purple',
  heroImageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=600&fit=crop',
  objectives: [
    'Thành thạo Unity và Unreal Engine cho phát triển game 2D/3D',
    'Thiết kế game mechanics, level design và player experience',
    'Implement storytelling, animation và sound design',
    'Xuất bản và monetize games trên multiple platforms',
  ],
  prerequisites: [
    'Kiến thức cơ bản về lập trình (C# hoặc C++ preferred)',
    'Hiểu biết về toán học 3D và physics cơ bản',
    'Kinh nghiệm với game development tools',
  ],
  careerOutcomes: [
    'Game Developer/Programmer tại studios và indie teams',
    'Game Designer và Level Designer cho AAA titles',
    'Technical Artist và 3D Environment Artist',
    'Independent Game Developer và Indie Studio Founder',
  ],
  industryApplications: [
    'Video Game Industry và Mobile Gaming',
    'Educational Games và Serious Gaming',
    'VR/AR Applications và Metaverse Development',
    'Simulation Software và Training Applications',
  ],
  marketDemand: {
    averageSalary: '20-40 triệu VNĐ',
    jobGrowth: '+23%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.AIArtCreativeTech, K2Module.DigitalMarketing, K2Module.Python],
  lessons: gameDevLessons,
};
